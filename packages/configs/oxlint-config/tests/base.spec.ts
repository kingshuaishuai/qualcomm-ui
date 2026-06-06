import {describe, expect, test} from "vitest"

import {baseRules} from "../src/base"

import {dedent, lintText, ruleIds} from "./shared"

describe("base rules", () => {
  test("reports missing newline after imports", async () => {
    const result = await lintText(
      dedent`
        import {value} from "./value"
        const next = value
        console.log(next)
      `,
      {rules: baseRules},
    )

    expect(ruleIds(result)).toEqual(["import/newline-after-import"])
  })

  test("reports duplicate imports", async () => {
    const result = await lintText(
      dedent`
        import {a} from "./value"
        import {b} from "./value"

        console.log(a, b)
      `,
      {rules: baseRules},
    )

    expect(ruleIds(result)).toEqual(["import/no-duplicates"])
  })
})
