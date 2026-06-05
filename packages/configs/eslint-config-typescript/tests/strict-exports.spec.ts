import {describe, expect, test} from "vitest"

import {configs, dedent, lintText, ruleIds} from "./shared"

describe("strictExports", () => {
  test("fixes mixed value and type exports with inline type specifiers", async () => {
    const result = await lintText(
      dedent`
        const value = 1
        type User = {name: string}
        export {User, value}
      `,
      [configs.base, configs.strictExports],
      {fix: true, typeAware: true},
    )

    expect(result.messages).toEqual([])
    expect(result.output).toBe(dedent`
      const value = 1
      type User = {name: string}
      export {type User, value}
    `)
  })

  test("reports type exports when fixes are disabled", async () => {
    const result = await lintText(
      dedent`
        const value = 1
        type User = {name: string}
        export {User, value}
      `,
      [configs.base, configs.strictExports],
      {typeAware: true},
    )

    expect(ruleIds(result)).toEqual([
      "@typescript-eslint/consistent-type-exports",
    ])
  })
})
