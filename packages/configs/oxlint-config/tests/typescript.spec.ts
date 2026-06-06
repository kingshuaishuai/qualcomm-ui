import {describe, expect, test} from "vitest"

import {typescriptRules} from "../src/typescript"

import {dedent, lintText, ruleIds} from "./shared"

const rule = (ruleId: string) => ({[ruleId]: typescriptRules[ruleId]})

describe("typescript style and correctness rules", () => {
  test.each([
    {
      code: "// @ts-ignore\nconst value = 1\nconsole.log(value)\n",
      ruleId: "typescript/ban-ts-comment",
    },
    {
      code: "const value: any = 1\nconsole.log(value)\n",
      ruleId: "typescript/no-explicit-any",
    },
    {
      code: "let value: 'value' = 'value'\nconsole.log(value)\n",
      ruleId: "typescript/prefer-as-const",
    },
    {
      code: "const value = require('node:path')\nconsole.log(value)\n",
      ruleId: "typescript/no-require-imports",
    },
    {
      code: "if (enabled) console.log(enabled)\n",
      ruleId: "curly",
    },
    {
      code: "const same = value == other\nconsole.log(same)\n",
      ruleId: "eqeqeq",
    },
    {
      code: "const value = Array()\nconsole.log(value)\n",
      ruleId: "no-array-constructor",
    },
    {
      code: "const value = 'hello ' + 'world'\nconsole.log(value)\n",
      ruleId: "no-useless-concat",
    },
    {
      code: "const value = '\\#'\nconsole.log(value)\n",
      ruleId: "no-useless-escape",
    },
    {
      code: "var value = 1\nconsole.log(value)\n",
      ruleId: "no-var",
    },
    {
      code: "const value = {name: name}\nconsole.log(value)\n",
      ruleId: "object-shorthand",
    },
    {
      code: "let value = 1\nconsole.log(value)\n",
      ruleId: "prefer-const",
    },
    {
      code: "const value = 'hello ' + name\nconsole.log(value)\n",
      ruleId: "prefer-template",
    },
    {
      code: "const value = {z: 1, a: 2}\nconsole.log(value)\n",
      ruleId: "sort-keys",
    },
  ])("reports $ruleId", async ({code, ruleId}) => {
    const result = await lintText(code, {rules: rule(ruleId)})

    expect(ruleIds(result)).toEqual([ruleId])
  })

  test("accepts configured inline type import style", async () => {
    const result = await lintText(
      dedent`
        import {type User} from "./user"

        const user: User = {name: "Ada"}
        console.log(user)
      `,
      {fix: true, rules: rule("typescript/consistent-type-imports")},
    )

    expect(ruleIds(result)).toEqual([])
    expect(result.output).toBe(dedent`
      import {type User} from "./user"

      const user: User = {name: "Ada"}
      console.log(user)
    `)
  })

  test("reports import type side effects", async () => {
    const result = await lintText(
      dedent`
        import {type value} from "./side-effect"
      `,
      {rules: rule("typescript/no-import-type-side-effects")},
    )

    expect(ruleIds(result)).toContain("typescript/no-import-type-side-effects")
  })

  test("reports restricted package src imports", async () => {
    const result = await lintText(
      dedent`
        import {value} from "@qualcomm-ui/core/src"

        console.log(value)
      `,
      {rules: rule("no-restricted-imports")},
    )

    expect(ruleIds(result)).toEqual(["no-restricted-imports"])
  })

  test("uses singular no-unused-vars rule instead of ESLint plugin overlap", async () => {
    const result = await lintText("const unused = 1\n", {
      rules: {"no-unused-vars": "error"},
    })

    expect(ruleIds(result)).toEqual(["no-unused-vars"])
  })
})

describe("type-aware typescript rules", () => {
  test.each([
    {
      code: "await 1\n",
      ruleId: "typescript/await-thenable",
    },
    {
      code: "async function load() { return 1 }\nload()\n",
      ruleId: "typescript/no-floating-promises",
    },
    {
      code: "async function load() { return 1 }\nconsole.log(load)\n",
      ruleId: "typescript/require-await",
    },
  ])("reports $ruleId", async ({code, ruleId}) => {
    const result = await lintText(code, {
      rules: rule(ruleId),
      typeAware: true,
    })

    expect(ruleIds(result)).toEqual([ruleId])
  })
})
