import {describe, expect, test} from "vitest"

import {typescriptRules} from "../src/typescript"

import {dedent, lintText, ruleIds} from "./shared"

describe("sort key migration", () => {
  test("ports supported object key sorting to eslint/sort-keys", async () => {
    const result = await lintText(
      dedent`
        const value = {
          z: 1,
          a: 2,
        }

        console.log(value)
      `,
      {rules: {"sort-keys": typescriptRules["sort-keys"]}},
    )

    expect(ruleIds(result)).toEqual(["sort-keys"])
  })

  test("does not claim Perfectionist interface or object type sorting support", async () => {
    const result = await lintText(
      dedent`
        type User = {
          z: string
          a: string
        }

        interface Example {
          z: string
          a: string
        }

        const user: User = {z: "", a: ""}
        const example: Example = user
        console.log(example)
      `,
      {rules: {"sort-keys": typescriptRules["sort-keys"]}},
    )

    expect(ruleIds(result)).toEqual(["sort-keys"])
  })
})
