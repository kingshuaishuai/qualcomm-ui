import type {ESLint} from "eslint"
import {describe, expect, test} from "vitest"

import {configs, dedent, lintText, ruleIds} from "./shared"

type CoverageStatus = "diagnostic" | "fix" | "ignored" | "off"
type ConfigName =
  | "jsdoc"
  | "namingConventions"
  | "performance"
  | "sortKeys"
  | "strictExports"
  | "styleGuide"
  | "typeChecks"

interface CoverageEntry {
  code?: string
  config: ConfigName
  filePath?: string
  fixedText?: string
  reason?: string
  ruleId: string
  status: CoverageStatus
  typeAware?: boolean
}

const styleGuideRules: CoverageEntry[] = [
  {
    code: "// This comment is intentionally long enough to exceed the configured maximum comment length and produce a warning.\n",
    config: "styleGuide",
    ruleId: "comment-length/limit-single-line-comments",
    status: "diagnostic",
  },
  {
    code: dedent`
      /**
       * This comment line is intentionally long enough to exceed the configured maximum comment length and produce a warning.
       */
      const value = 1
    `,
    config: "styleGuide",
    ruleId: "comment-length/limit-multi-line-comments",
    status: "diagnostic",
  },
  {
    code: "//comment\nconst value = 1\n",
    config: "styleGuide",
    fixedText: "// comment\nconst value = 1\n",
    ruleId: "@stylistic/spaced-comment",
    status: "fix",
  },
  {
    code: "// @ts-ignore\nconst value = 1\n",
    config: "styleGuide",
    ruleId: "@typescript-eslint/ban-ts-comment",
    status: "off",
  },
  {
    code: "class Example {\n  public value = 1\n}\nconsole.log(Example)\n",
    config: "styleGuide",
    ruleId: "@typescript-eslint/explicit-member-accessibility",
    status: "diagnostic",
  },
  {
    code: "interface Empty {}\n",
    config: "styleGuide",
    ruleId: "@typescript-eslint/no-empty-interface",
    status: "off",
  },
  {
    code: "const value = 1;;\n",
    config: "styleGuide",
    ruleId: "@typescript-eslint/no-extra-semi",
    status: "off",
  },
  {
    code: "const unused = 1\n",
    config: "styleGuide",
    ruleId: "@typescript-eslint/no-unused-vars",
    status: "off",
  },
  {
    code: 'const fs = require("node:fs")\nconsole.log(fs)\n',
    config: "styleGuide",
    ruleId: "@typescript-eslint/no-var-requires",
    status: "off",
  },
  {
    code: "if (value) console.log(value)\n",
    config: "styleGuide",
    fixedText: "if (value) {console.log(value)}\n",
    ruleId: "curly",
    status: "fix",
  },
  {
    code: "const value = a == b\n",
    config: "styleGuide",
    ruleId: "eqeqeq",
    status: "diagnostic",
  },
  {
    code: 'import {value} from "./value"\nconsole.log(value)\n',
    config: "styleGuide",
    fixedText: 'import {value} from "./value"\n\nconsole.log(value)\n',
    ruleId: "import/newline-after-import",
    status: "fix",
  },
  {
    code: 'import {value} from "./a"\nimport {other} from "./a"\nconsole.log(value, other)\n',
    config: "styleGuide",
    ruleId: "import/no-duplicates",
    status: "diagnostic",
  },
  {
    config: "styleGuide",
    reason: "Import sorting is intentionally excluded from this suite.",
    ruleId: "import/order",
    status: "ignored",
  },
  {
    code: 'import {value} from "./a"\nconsole.log(value)\n',
    config: "styleGuide",
    ruleId: "import/no-cycle",
    status: "off",
  },
  {
    code: "/* value */\nconst value = 1\n",
    config: "styleGuide",
    ruleId: "multiline-comment-style",
    status: "off",
  },
  {
    code: "const value = new Array(1, 2)\nconsole.log(value)\n",
    config: "styleGuide",
    ruleId: "no-array-constructor",
    status: "diagnostic",
  },
  {
    code: "switch (value) {\n  case 1:\n    const other = 1\n    console.log(other)\n}\n",
    config: "styleGuide",
    ruleId: "no-case-declarations",
    status: "off",
  },
  {
    code: "const value = 1\nvalue = 2\n",
    config: "styleGuide",
    ruleId: "no-const-assign",
    status: "diagnostic",
  },
  {
    code: 'import {value} from "./a"\nimport {other} from "./a"\nconsole.log(value, other)\n',
    config: "styleGuide",
    ruleId: "no-duplicate-imports",
    status: "off",
  },
  {
    code: "if (value) {\n  function run() {}\n  run()\n}\n",
    config: "styleGuide",
    ruleId: "no-inner-declarations",
    status: "off",
  },
  {
    code: "function run() {\n  return this\n}\nconsole.log(run())\n",
    config: "styleGuide",
    ruleId: "no-invalid-this",
    status: "off",
  },
  {
    code: 'const value = {}\nconsole.log(value.hasOwnProperty("name"))\n',
    config: "styleGuide",
    ruleId: "no-prototype-builtins",
    status: "off",
  },
  {
    code: 'import {value} from "@qualcomm-ui/core/src"\nconsole.log(value)\n',
    config: "styleGuide",
    ruleId: "no-restricted-imports",
    status: "diagnostic",
  },
  {
    code: "class Example {\n  #value = 1\n}\nconsole.log(new Example())\n",
    config: "styleGuide",
    ruleId: "no-restricted-syntax",
    status: "diagnostic",
  },
  {
    code: "console.log(missingValue)\n",
    config: "styleGuide",
    ruleId: "no-undef",
    status: "off",
  },
  {
    code: "const unused = 1\n",
    config: "styleGuide",
    ruleId: "no-unused-vars",
    status: "off",
  },
  {
    code: 'const value = "a" + "b"\nconsole.log(value)\n',
    config: "styleGuide",
    ruleId: "no-useless-concat",
    status: "diagnostic",
  },
  {
    code: 'const value = "\\#"\nconsole.log(value)\n',
    config: "styleGuide",
    ruleId: "no-useless-escape",
    status: "diagnostic",
  },
  {
    code: "var value = 1\nconsole.log(value)\n",
    config: "styleGuide",
    fixedText: "let value = 1\nconsole.log(value)\n",
    ruleId: "no-var",
    status: "fix",
  },
  {
    code: "const value = {name: name}\nconsole.log(value)\n",
    config: "styleGuide",
    fixedText: "const value = {name}\nconsole.log(value)\n",
    ruleId: "object-shorthand",
    status: "fix",
  },
  {
    code: "let value = 1\nconsole.log(value)\n",
    config: "styleGuide",
    fixedText: "const value = 1\nconsole.log(value)\n",
    ruleId: "prefer-const",
    status: "fix",
  },
  {
    code: 'const value = "hello " + name\nconsole.log(value)\n',
    config: "styleGuide",
    ruleId: "prefer-template",
    status: "diagnostic",
  },
  {
    code: 'const value={name:"Ada"}\nconsole.log(value)\n',
    config: "styleGuide",
    fixedText: 'const value = {name: "Ada"}\nconsole.log(value)\n',
    ruleId: "prettier/prettier",
    status: "fix",
  },
  {
    config: "styleGuide",
    reason: "Import sorting is intentionally excluded from this suite.",
    ruleId: "sort-imports",
    status: "ignored",
  },
  {
    code: 'import {value} from "./value"\nconsole.log(1)\n',
    config: "styleGuide",
    fixedText: "console.log(1)\n",
    ruleId: "unused-imports/no-unused-imports",
    status: "fix",
  },
  {
    code: "const unused = 1\n",
    config: "styleGuide",
    ruleId: "unused-imports/no-unused-vars",
    status: "diagnostic",
  },
]

const sortKeysRules: CoverageEntry[] = [
  {
    code: "interface User {\n  name: string\n  id: string\n}\n",
    config: "sortKeys",
    fixedText: "interface User {\n  id: string\n  name: string\n}\n",
    ruleId: "perfectionist/sort-interfaces",
    status: "fix",
  },
  {
    code: "type User = {\n  name: string\n  id: string\n}\n",
    config: "sortKeys",
    fixedText: "type User = {\n  id: string\n  name: string\n}\n",
    ruleId: "perfectionist/sort-object-types",
    status: "fix",
  },
  {
    code: "const value = {z: 1, a: 2}\nconsole.log(value)\n",
    config: "sortKeys",
    fixedText: "const value = {a: 2, z: 1}\nconsole.log(value)\n",
    ruleId: "perfectionist/sort-objects",
    status: "fix",
  },
]

const performanceRules: CoverageEntry[] = [
  {
    code: 'import {User} from "./types"\nconst user: User = {} as User\n',
    config: "performance",
    fixedText:
      'import {type User} from "./types"\nconst user: User = {} as User\n',
    ruleId: "@typescript-eslint/consistent-type-imports",
    status: "fix",
  },
  {
    code: 'import {type User} from "./types"\nexport type {User}\n',
    config: "performance",
    fixedText: 'import type {User} from "./types"\nexport type {User}\n',
    ruleId: "@typescript-eslint/no-import-type-side-effects",
    status: "fix",
  },
]

const jsdocRules: CoverageEntry[] = [
  {
    config: "jsdoc",
    reason: "JSDoc formatting is changing with oxfmt.",
    ruleId: "jsdoc/check-alignment",
    status: "ignored",
  },
  {
    config: "jsdoc",
    reason: "JSDoc formatting is changing with oxfmt.",
    ruleId: "jsdoc/check-indentation",
    status: "ignored",
  },
  {
    config: "jsdoc",
    reason: "JSDoc validation is changing with oxfmt.",
    ruleId: "jsdoc/check-tag-names",
    status: "ignored",
  },
  {
    config: "jsdoc",
    reason: "JSDoc validation is changing with oxfmt.",
    ruleId: "jsdoc/no-blank-block-descriptions",
    status: "ignored",
  },
  {
    config: "jsdoc",
    reason: "JSDoc formatting is changing with oxfmt.",
    ruleId: "jsdoc/no-multi-asterisks",
    status: "ignored",
  },
  {
    config: "jsdoc",
    reason: "JSDoc formatting is changing with oxfmt.",
    ruleId: "jsdoc/require-asterisk-prefix",
    status: "ignored",
  },
  {
    config: "jsdoc",
    reason: "JSDoc requirements are changing with oxfmt.",
    ruleId: "jsdoc/require-jsdoc",
    status: "ignored",
  },
  {
    config: "jsdoc",
    reason: "JSDoc formatting is changing with oxfmt.",
    ruleId: "jsdoc/tag-lines",
    status: "ignored",
  },
]

const namingRules: CoverageEntry[] = [
  {
    code: "interface IUser {}\n",
    config: "namingConventions",
    ruleId: "@typescript-eslint/naming-convention",
    status: "diagnostic",
  },
]

const typeCheckRules: CoverageEntry[] = [
  {
    code: "const value = await 1\nconsole.log(value)\n",
    config: "typeChecks",
    ruleId: "@typescript-eslint/await-thenable",
    status: "diagnostic",
    typeAware: true,
  },
  {
    code: "// @ts-ignore\nconst value = 1\n",
    config: "typeChecks",
    ruleId: "@typescript-eslint/ban-ts-comment",
    status: "diagnostic",
  },
  {
    code: "const value = new Array(1, 2)\nconsole.log(value)\n",
    config: "typeChecks",
    ruleId: "@typescript-eslint/no-array-constructor",
    status: "diagnostic",
  },
  {
    code: "const value = [1, 2]\ndelete value[0]\n",
    config: "typeChecks",
    ruleId: "@typescript-eslint/no-array-delete",
    status: "diagnostic",
    typeAware: true,
  },
  {
    code: "const value = {}\nconsole.log(`${value}`)\n",
    config: "typeChecks",
    ruleId: "@typescript-eslint/no-base-to-string",
    status: "diagnostic",
    typeAware: true,
  },
  {
    code: "enum Value {\n  A = 1,\n  B = 1,\n}\nconsole.log(Value)\n",
    config: "typeChecks",
    ruleId: "@typescript-eslint/no-duplicate-enum-values",
    status: "diagnostic",
  },
  {
    code: 'type Value = string | string\nconst value: Value = "x"\nconsole.log(value)\n',
    config: "typeChecks",
    ruleId: "@typescript-eslint/no-duplicate-type-constituents",
    status: "diagnostic",
    typeAware: true,
  },
  {
    code: "type Value = {}\nconst value: Value = 1\nconsole.log(value)\n",
    config: "typeChecks",
    ruleId: "@typescript-eslint/no-empty-object-type",
    status: "off",
  },
  {
    code: "const value: any = 1\nconsole.log(value)\n",
    config: "typeChecks",
    ruleId: "@typescript-eslint/no-explicit-any",
    status: "diagnostic",
  },
  {
    code: "const value: string | undefined = undefined\nconsole.log(value!!!)\n",
    config: "typeChecks",
    ruleId: "@typescript-eslint/no-extra-non-null-assertion",
    status: "diagnostic",
  },
  {
    code: "async function run() {}\nrun()\n",
    config: "typeChecks",
    ruleId: "@typescript-eslint/no-floating-promises",
    status: "diagnostic",
    typeAware: true,
  },
  {
    code: "const values = [1, 2]\nfor (const key in values) {\n  console.log(key)\n}\n",
    config: "typeChecks",
    ruleId: "@typescript-eslint/no-for-in-array",
    status: "diagnostic",
    typeAware: true,
  },
  {
    code: 'setTimeout("console.log(1)")\n',
    config: "typeChecks",
    ruleId: "@typescript-eslint/no-implied-eval",
    status: "diagnostic",
    typeAware: true,
  },
  {
    code: "interface Example {\n  constructor(): void\n}\nconst value: Example | undefined = undefined\nconsole.log(value)\n",
    config: "typeChecks",
    ruleId: "@typescript-eslint/no-misused-new",
    status: "diagnostic",
  },
  {
    code: "[1].forEach(async (value) => value)\n",
    config: "typeChecks",
    ruleId: "@typescript-eslint/no-misused-promises",
    status: "diagnostic",
    typeAware: true,
  },
  {
    code: "module Example {\n  export const value = 1\n}\nconsole.log(Example.value)\n",
    config: "typeChecks",
    ruleId: "@typescript-eslint/no-namespace",
    status: "diagnostic",
  },
  {
    code: "const value: {name?: string} | undefined = undefined\nconsole.log(value?.name!)\n",
    config: "typeChecks",
    ruleId: "@typescript-eslint/no-non-null-asserted-optional-chain",
    status: "diagnostic",
  },
  {
    code: 'type Value = string | "a"\nconst value: Value = "a"\nconsole.log(value)\n',
    config: "typeChecks",
    ruleId: "@typescript-eslint/no-redundant-type-constituents",
    status: "off",
  },
  {
    code: 'const fs = require("node:fs")\nconsole.log(fs)\n',
    config: "typeChecks",
    ruleId: "@typescript-eslint/no-require-imports",
    status: "diagnostic",
  },
  {
    code: "class Example {\n  method() {\n    const self = this\n    return self\n  }\n}\nconsole.log(new Example().method())\n",
    config: "typeChecks",
    ruleId: "@typescript-eslint/no-this-alias",
    status: "diagnostic",
  },
  {
    code: "let value: number = 1\nvalue = value as number\nconsole.log(value)\n",
    config: "typeChecks",
    ruleId: "@typescript-eslint/no-unnecessary-type-assertion",
    status: "diagnostic",
    typeAware: true,
  },
  {
    code: "function identity<T extends unknown>(value: T) {\n  return value\n}\nconsole.log(identity(1))\n",
    config: "typeChecks",
    ruleId: "@typescript-eslint/no-unnecessary-type-constraint",
    status: "diagnostic",
  },
  {
    code: "function run(value: string) {}\nconst value: any = 1\nrun(value)\n",
    config: "typeChecks",
    ruleId: "@typescript-eslint/no-unsafe-argument",
    status: "diagnostic",
    typeAware: true,
  },
  {
    code: "const value: any = 1\nconst other: string = value\nconsole.log(other)\n",
    config: "typeChecks",
    ruleId: "@typescript-eslint/no-unsafe-assignment",
    status: "off",
    typeAware: true,
  },
  {
    code: "const value: any = () => 1\nvalue()\n",
    config: "typeChecks",
    ruleId: "@typescript-eslint/no-unsafe-call",
    status: "diagnostic",
    typeAware: true,
  },
  {
    code: 'interface Example {value: string}\nclass Example {value = "x"}\nconsole.log(Example)\n',
    config: "typeChecks",
    ruleId: "@typescript-eslint/no-unsafe-declaration-merging",
    status: "diagnostic",
  },
  {
    code: "enum Value {A = 1}\nconst value = 1\nconsole.log(value === Value.A)\n",
    config: "typeChecks",
    ruleId: "@typescript-eslint/no-unsafe-enum-comparison",
    status: "diagnostic",
    typeAware: true,
  },
  {
    code: "type Value = Function\nconst value: Value = () => 1\nconsole.log(value)\n",
    config: "typeChecks",
    ruleId: "@typescript-eslint/no-unsafe-function-type",
    status: "diagnostic",
  },
  {
    code: 'const value: any = {name: "Ada"}\nconsole.log(value.name)\n',
    config: "typeChecks",
    ruleId: "@typescript-eslint/no-unsafe-member-access",
    status: "diagnostic",
    typeAware: true,
  },
  {
    code: "function run(): string {\n  const value: any = 1\n  return value\n}\nconsole.log(run())\n",
    config: "typeChecks",
    ruleId: "@typescript-eslint/no-unsafe-return",
    status: "diagnostic",
    typeAware: true,
  },
  {
    code: "const value: {} = {}\nconsole.log(-value)\n",
    config: "typeChecks",
    ruleId: "@typescript-eslint/no-unsafe-unary-minus",
    status: "diagnostic",
    typeAware: true,
  },
  {
    code: "const value = 1\nvalue && console.log(value)\n",
    config: "typeChecks",
    ruleId: "@typescript-eslint/no-unused-expressions",
    status: "diagnostic",
  },
  {
    code: "const unused = 1\n",
    config: "typeChecks",
    ruleId: "@typescript-eslint/no-unused-vars",
    status: "off",
  },
  {
    code: 'const value: String = "x"\nconsole.log(value)\n',
    config: "typeChecks",
    ruleId: "@typescript-eslint/no-wrapper-object-types",
    status: "diagnostic",
  },
  {
    code: 'throw "bad"\n',
    config: "typeChecks",
    ruleId: "@typescript-eslint/only-throw-error",
    status: "diagnostic",
    typeAware: true,
  },
  {
    code: 'const value = "x" as "x"\nconsole.log(value)\n',
    config: "typeChecks",
    fixedText: 'const value = "x" as const\nconsole.log(value)\n',
    ruleId: "@typescript-eslint/prefer-as-const",
    status: "fix",
  },
  {
    code: "module Example {\n  export const value = 1\n}\nconsole.log(Example.value)\n",
    config: "typeChecks",
    fixedText:
      "namespace Example {\n  export const value = 1\n}\nconsole.log(Example.value)\n",
    ruleId: "@typescript-eslint/prefer-namespace-keyword",
    status: "fix",
  },
  {
    code: 'Promise.reject("bad")\n',
    config: "typeChecks",
    ruleId: "@typescript-eslint/prefer-promise-reject-errors",
    status: "diagnostic",
    typeAware: true,
  },
  {
    code: "async function run() {\n  return 1\n}\nconsole.log(run)\n",
    config: "typeChecks",
    ruleId: "@typescript-eslint/require-await",
    status: "diagnostic",
    typeAware: true,
  },
  {
    code: "const value = {} + 1\nconsole.log(value)\n",
    config: "typeChecks",
    ruleId: "@typescript-eslint/restrict-plus-operands",
    status: "diagnostic",
    typeAware: true,
  },
  {
    code: "const value = {}\nconsole.log(`${value}`)\n",
    config: "typeChecks",
    ruleId: "@typescript-eslint/restrict-template-expressions",
    status: "diagnostic",
    typeAware: true,
  },
  {
    code: '/// <reference path="./types.d.ts" />\nconst value = 1\nconsole.log(value)\n',
    config: "typeChecks",
    ruleId: "@typescript-eslint/triple-slash-reference",
    status: "diagnostic",
  },
  {
    code: "class Example {\n  method() {}\n}\nconst method = new Example().method\nconsole.log(method)\n",
    config: "typeChecks",
    ruleId: "@typescript-eslint/unbound-method",
    status: "off",
    typeAware: true,
  },
  {
    code: "const value = new Array(1, 2)\nconsole.log(value)\n",
    config: "typeChecks",
    ruleId: "no-array-constructor",
    status: "off",
  },
  {
    code: 'setTimeout("console.log(1)")\n',
    config: "typeChecks",
    ruleId: "no-implied-eval",
    status: "off",
  },
  {
    code: 'throw "bad"\n',
    config: "typeChecks",
    ruleId: "no-throw-literal",
    status: "off",
  },
  {
    code: "const value = 1\nvalue && console.log(value)\n",
    config: "typeChecks",
    ruleId: "no-unused-expressions",
    status: "off",
  },
  {
    code: "const unused = 1\n",
    config: "typeChecks",
    ruleId: "no-unused-vars",
    status: "off",
  },
  {
    code: 'Promise.reject("bad")\n',
    config: "typeChecks",
    ruleId: "prefer-promise-reject-errors",
    status: "off",
  },
  {
    code: "async function run() {\n  return 1\n}\nconsole.log(run)\n",
    config: "typeChecks",
    ruleId: "require-await",
    status: "off",
  },
]

const strictExportRules: CoverageEntry[] = [
  {
    code: "const value = 1\ntype User = {name: string}\nexport {User, value}\n",
    config: "strictExports",
    fixedText:
      "const value = 1\ntype User = {name: string}\nexport {type User, value}\n",
    ruleId: "@typescript-eslint/consistent-type-exports",
    status: "fix",
    typeAware: true,
  },
]

const coverageEntries = [
  ...styleGuideRules,
  ...sortKeysRules,
  ...performanceRules,
  ...jsdocRules,
  ...namingRules,
  ...typeCheckRules,
  ...strictExportRules,
]

const ignoredRules = new Set([
  "styleGuide:import/order",
  "styleGuide:sort-imports",
  "jsdoc:jsdoc/check-alignment",
  "jsdoc:jsdoc/check-indentation",
  "jsdoc:jsdoc/check-tag-names",
  "jsdoc:jsdoc/no-blank-block-descriptions",
  "jsdoc:jsdoc/no-multi-asterisks",
  "jsdoc:jsdoc/require-asterisk-prefix",
  "jsdoc:jsdoc/require-jsdoc",
  "jsdoc:jsdoc/tag-lines",
])

describe("rule coverage manifest", () => {
  test("tracks every configured rule except import sorting", () => {
    const configuredRules = getConfiguredRules()
    const coverageKeys = coverageEntries.map(
      (entry) => `${entry.config}:${entry.ruleId}`,
    )
    const uniqueCoverageKeys = new Set(coverageKeys)

    expect(coverageKeys).toHaveLength(uniqueCoverageKeys.size)

    const missingRules = configuredRules.filter(
      (rule) =>
        !uniqueCoverageKeys.has(rule.key) && !ignoredRules.has(rule.key),
    )
    const staleRules = coverageEntries.filter(
      (entry) =>
        !configuredRules.some(
          (rule) => rule.key === `${entry.config}:${entry.ruleId}`,
        ),
    )
    const invalidIgnoredRules = coverageEntries.filter(
      (entry) =>
        entry.status === "ignored" &&
        !ignoredRules.has(`${entry.config}:${entry.ruleId}`),
    )

    expect(missingRules).toEqual([])
    expect(staleRules).toEqual([])
    expect(invalidIgnoredRules).toEqual([])
    expect(configuredRules).toHaveLength(102)
    expect(
      coverageEntries.filter((entry) => entry.status === "ignored"),
    ).toHaveLength(10)
  })
})

describe("rule coverage cases", () => {
  test.each(coverageEntries.filter((entry) => entry.status !== "ignored"))(
    "$config $ruleId $status",
    async (entry) => {
      const result = await lintText(entry.code ?? "", coverageConfig(entry), {
        filePath: entry.filePath,
        fix: entry.status === "fix",
        typeAware: entry.typeAware,
      })

      if (entry.status === "off") {
        expect(ruleIds(result)).not.toContain(entry.ruleId)
        return
      }

      if (entry.status === "fix") {
        expect(result.output).toBe(entry.fixedText)
        return
      }

      expect(ruleIds(result)).toContain(entry.ruleId)
    },
  )
})

function coverageConfig(entry: CoverageEntry) {
  return [configs.base, isolateRuleConfig(configs[entry.config], entry.ruleId)]
}

function isolateRuleConfig(
  config: ESLint.ConfigData | ESLint.ConfigData[],
  ruleId: string,
) {
  return flattenConfig(config).map((entry) => ({
    ...entry,
    rules:
      entry.rules?.[ruleId] === undefined
        ? {}
        : {[ruleId]: entry.rules[ruleId]},
  }))
}

function flattenConfig(
  config: ESLint.ConfigData | ESLint.ConfigData[],
): ESLint.ConfigData[] {
  if (!Array.isArray(config)) {
    return [config]
  }

  return config.flatMap((entry) => flattenConfig(entry))
}

function getConfiguredRules() {
  return (
    [
      "styleGuide",
      "sortKeys",
      "performance",
      "jsdoc",
      "namingConventions",
      "typeChecks",
      "strictExports",
    ] as const
  ).flatMap((config) =>
    flattenConfig(configs[config]).flatMap((entry) =>
      Object.keys(entry.rules ?? {}).map((ruleId) => ({
        config,
        key: `${config}:${ruleId}`,
        ruleId,
      })),
    ),
  )
}
