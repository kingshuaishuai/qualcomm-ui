import {describe, expect, test} from "vitest"

import {configs, dedent, lintText, ruleIds} from "./shared"

describe("recommended", () => {
  test("combines style, sorting, type-aware, and naming behavior", async () => {
    const result = await lintText(
      dedent`
        var name = "Ada"
        const value = {z: 1, a: 2}
        interface IUser {}
        async function load() {
          return name
        }
        load()
        console.log(value)
      `,
      configs.recommended,
      {fix: true, typeAware: true},
    )

    expect(ruleIds(result)).toEqual([
      "@typescript-eslint/naming-convention",
      "unused-imports/no-unused-vars",
      "@typescript-eslint/require-await",
      "@typescript-eslint/no-floating-promises",
    ])
    expect(result.output).toBe(dedent`
      const name = "Ada"
      const value = {a: 2, z: 1}
      interface IUser {}
      async function load() {
        return name
      }
      load()
      console.log(value)
    `)
  })
})
