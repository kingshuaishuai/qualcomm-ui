import type {DummyRuleMap, OxlintConfig} from "oxlint"
import {createHash} from "node:crypto"
import {mkdir, readFile, writeFile} from "node:fs/promises"
import {dirname, join, resolve} from "node:path"
import {execa} from "execa"

import {angularRules} from "../src/angular"
import {baseRules} from "../src/base"
import {reactRules} from "../src/react"
import {typescriptRules} from "../src/typescript"

export interface LintOptions {
  filePath?: string
  fix?: boolean
  rules?: DummyRuleMap
  typeAware?: boolean
}

interface OxlintDiagnostic {
  code: string
  message?: string
  severity: "error" | "warning"
}

interface OxlintResult {
  diagnostics: OxlintDiagnostic[]
}

const packageRoot = join(import.meta.dirname, "..")
const workspaceRoot = resolve(packageRoot, "../../..")

export const fixtureRoot = join(packageRoot, ".tmp/oxlint-config-tests")
export const ruleListPath = join(workspaceRoot, "tmp/oxlint-rules.md")

export const ruleMaps = {
  angular: angularRules,
  base: baseRules,
  react: reactRules,
  typescript: typescriptRules,
} satisfies Record<string, DummyRuleMap>

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

export function configuredRuleIds(rules: DummyRuleMap) {
  return Object.keys(rules)
}

export async function lintText(code: string, options: LintOptions = {}) {
  const filePath = await writeFixture(code, options.filePath ?? "fixture.ts")
  const configPath = await writeConfig(filePath, options.rules ?? typescriptRules)
  const args = ["-c", configPath, "--format", "json"]

  if (options.fix) {
    args.push("--fix")
  }

  if (options.typeAware) {
    args.push("--type-aware")
  }

  args.push(filePath)

  const result = await runOxlint(args)
  const output = options.fix ? await readFile(filePath, "utf8") : undefined

  return {
    ...parseOxlintOutput(result.stdout),
    output,
  }
}

export function ruleIds(result: OxlintResult) {
  return result.diagnostics.map((diagnostic) =>
    normalizeRuleId(diagnostic.code, diagnostic.message),
  )
}

export async function readOxlintRuleList() {
  const markdown = await readFile(ruleListPath, "utf8")

  return new Set(
    markdown
      .split("\n")
      .filter((line) => line.startsWith("| ["))
      .map((line) => {
        const cells = line
          .split("|")
          .slice(1, -1)
          .map((cell) => cell.trim())
        const ruleName = cells[0].match(/\[([^\]]+)/)?.[1]?.replace("💭", "")
        const source = cells[1]

        if (!ruleName || !source) {
          return undefined
        }

        return source === "eslint"
          ? ruleName
          : `${source.replaceAll("-", "_")}/${ruleName}`
      })
      .filter((ruleId): ruleId is string => ruleId !== undefined),
  )
}

export async function findRuleAlternatives(ruleId: string) {
  const ruleName = ruleId.split("/").at(-1)

  if (!ruleName) {
    return []
  }

  const rules = await readOxlintRuleList()

  return [...rules].filter((candidate) => candidate.split("/").at(-1) === ruleName)
}

async function runOxlint(args: string[]) {
  try {
    return await execa("pnpm", ["exec", "oxlint", ...args], {
      cwd: packageRoot,
      reject: false,
    })
  } catch (error) {
    throw error
  }
}

async function writeFixture(code: string, fileName: string) {
  const fixtureHash = createHash("sha256")
    .update(`${fileName}\n${code}`)
    .digest("hex")
  const filePath = join(fixtureRoot, fixtureHash, fileName)

  await mkdir(dirname(filePath), {recursive: true})
  await writeFile(filePath, code)
  await writeTypeAwareFixtureConfig(dirname(filePath))

  return filePath
}

async function writeConfig(filePath: string, rules: DummyRuleMap) {
  const configPath = join(dirname(filePath), ".oxlintrc.json")

  await writeFile(
    configPath,
    JSON.stringify(
      {
        plugins: [
          "typescript",
          "import",
          "promise",
          "node",
          "react",
          "jsx-a11y",
          "react-perf",
        ],
        rules,
      } satisfies OxlintConfig,
      null,
      2,
    ),
  )

  return configPath
}

async function writeTypeAwareFixtureConfig(typeAwareRoot: string) {
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

function parseOxlintOutput(stdout: string): OxlintResult {
  if (!stdout.trim()) {
    return {diagnostics: []}
  }

  try {
    return JSON.parse(stdout) as OxlintResult
  } catch (error) {
    throw new Error(stdout, {cause: error})
  }
}

function normalizeRuleId(code: string | undefined, message: string | undefined) {
  if (!code) {
    return code
  }

  if (
    code === "react-hooks/rules-of-hooks" ||
    code === "react-hooks(rules-of-hooks)" ||
    code === "react-hooks/rules-of-hooks(rules-of-hooks)" ||
    message === "rules-of-hooks"
  ) {
    return "react/rules-of-hooks"
  }

  const match = code.match(/^([^()]+)\(([^()]+)\)$/)

  if (!match) {
    return code
  }

  const [, source, ruleName] = match

  return source === "eslint" ? ruleName : `${source}/${ruleName}`
}
