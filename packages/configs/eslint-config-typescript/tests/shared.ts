import {ESLint} from "eslint"
import {createHash} from "node:crypto"
import {mkdir, writeFile} from "node:fs/promises"
import {dirname, join} from "node:path"

import typescriptConfig from "../index"

import type {ConfigObject} from "@eslint/core"

type ConfigInput = ConfigObject | ConfigInput[]

interface LintOptions {
  filePath?: string
  fix?: boolean
  typeAware?: boolean
}

interface IsolatedRuleConfig {
  config: ConfigInput
  ruleId: string
}

const packageRoot = join(import.meta.dirname, "..")

export const fixtureRoot = join(packageRoot, ".tmp/eslint-config-typescript-tests")

export const dedent = (strings: TemplateStringsArray, ...values: unknown[]) => {
  const raw = String.raw({raw: strings.raw}, ...values)
  const text = raw.replace(/^\n/, "").replace(/\n\s*$/, "\n")
  const lines = text.split("\n")
  const indents = lines
    .filter((line) => line.trim().length > 0)
    .map((line) => line.match(/^\s*/)?.[0].length ?? 0)
  const indent = Math.min(...indents)

  return lines.map((line) => line.slice(indent)).join("\n")
}

export function ruleIds(result: ESLint.LintResult) {
  return result.messages.map((message) => message.ruleId)
}

export async function lintText(code: string, config: ConfigInput, options: LintOptions = {}) {
  await ensureTypeAwareFixtureConfig()
  const filePath = join(
    fixtureRoot,
    options.filePath ?? `${createHash("sha256").update(code).digest("hex")}.ts`,
  )

  if (options.typeAware) {
    await mkdir(dirname(filePath), {recursive: true})
    await writeFile(filePath, code)
  }

  const eslint = new ESLint({
    cwd: packageRoot,
    fix: options.fix ?? false,
    overrideConfig: normalizeConfig(config, options.typeAware ?? false),
    overrideConfigFile: true,
  })

  const [result] = await eslint.lintText(code, {
    filePath,
  })

  return result
}

export const configs = typescriptConfig.configs

export function isolateRule(config: ConfigInput, ruleId: string): ConfigInput {
  return flattenConfig(config).map((entry) => ({
    ...entry,
    rules: entry.rules?.[ruleId] === undefined ? {} : {[ruleId]: entry.rules[ruleId]},
  }))
}

export function withBase(config: ConfigInput) {
  return [configs.base, config]
}

export function isolatedRuleConfig({config, ruleId}: IsolatedRuleConfig) {
  return withBase(isolateRule(config, ruleId))
}

function normalizeConfig(config: ConfigInput, typeAware: boolean) {
  const files = ["**/*.ts", "**/*.tsx"]
  const configs = flattenConfig(config).map((entry) => ({...entry, files}))

  if (typeAware) {
    configs.unshift({
      files,
      languageOptions: {
        parserOptions: {
          project: "./tsconfig.json",
          tsconfigRootDir: fixtureRoot,
        },
      },
    })
  }

  return configs
}

function flattenConfig(config: ConfigInput): ConfigObject[] {
  if (!Array.isArray(config)) {
    return [config]
  }

  return config.flatMap((entry) => flattenConfig(entry))
}

let fixtureConfigPromise: Promise<void> | undefined

function ensureTypeAwareFixtureConfig() {
  fixtureConfigPromise ??= writeTypeAwareFixtureConfig()

  return fixtureConfigPromise
}

async function writeTypeAwareFixtureConfig() {
  await mkdir(fixtureRoot, {recursive: true})
  await writeFile(
    join(fixtureRoot, "tsconfig.json"),
    JSON.stringify(
      {
        compilerOptions: {
          jsx: "react-jsx",
          module: "ESNext",
          moduleResolution: "Bundler",
          noEmit: true,
          skipLibCheck: true,
          strict: true,
          target: "ES2022",
        },
        include: ["**/*.ts", "**/*.tsx"],
      },
      null,
      2,
    ),
  )
}
