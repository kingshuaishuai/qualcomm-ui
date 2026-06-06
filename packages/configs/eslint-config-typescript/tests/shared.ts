import type {ConfigObject} from "@eslint/core"
import {ESLint} from "eslint"
import {createHash} from "node:crypto"
import {mkdir, writeFile} from "node:fs/promises"
import {dirname, join} from "node:path"

import typescriptConfig from "../index"

type ConfigInput = ConfigObject | ConfigInput[]

interface LintOptions {
  filePath?: string
  fix?: boolean
  typeAware?: boolean
}

const packageRoot = join(import.meta.dirname, "..")

export const fixtureRoot = join(
  packageRoot,
  ".tmp/eslint-config-typescript-tests",
)

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

export async function lintText(
  code: string,
  config: ConfigInput,
  options: LintOptions = {},
) {
  const fixtureHash = createHash("sha256")
    .update(`${options.filePath ?? "fixture.ts"}\n${code}`)
    .digest("hex")
  const typeAwareRoot = join(fixtureRoot, fixtureHash)
  const filePath = options.typeAware
    ? join(typeAwareRoot, options.filePath ?? "fixture.ts")
    : join(fixtureRoot, options.filePath ?? `${fixtureHash}.ts`)

  if (options.typeAware) {
    await mkdir(dirname(filePath), {recursive: true})
    await writeFile(filePath, code)
    await writeTypeAwareFixtureConfig(typeAwareRoot)
  }

  const eslint = new ESLint({
    cwd: packageRoot,
    fix: options.fix ?? false,
    overrideConfig: normalizeConfig(
      config,
      options.typeAware ?? false,
      typeAwareRoot,
    ),
    overrideConfigFile: true,
  })

  const [result] = await eslint.lintText(code, {
    filePath,
  })

  return result
}

export const configs = typescriptConfig.configs as any

function normalizeConfig(
  config: ConfigInput,
  typeAware: boolean,
  typeAwareRoot: string,
) {
  const files = ["**/*.ts", "**/*.tsx"]
  const configs = flattenConfig(config).map((entry) => ({...entry, files}))

  if (typeAware) {
    configs.unshift({
      files,
      languageOptions: {
        parserOptions: {
          project: "./tsconfig.json",
          tsconfigRootDir: typeAwareRoot,
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

async function writeTypeAwareFixtureConfig(typeAwareRoot: string) {
  await mkdir(typeAwareRoot, {recursive: true})
  await writeFile(
    join(typeAwareRoot, "tsconfig.json"),
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
