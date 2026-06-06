import {describe, expect, test} from "vitest"

import {reactRules} from "../src/react"

import {dedent, lintText, ruleIds} from "./shared"

describe("react rules", () => {
  test("reports missing JSX keys", async () => {
    const result = await lintText(
      dedent`
        export function Items() {
          return <>{["a"].map((value) => <span>{value}</span>)}</>
        }
      `,
      {filePath: "fixture.tsx", rules: reactRules},
    )

    expect(ruleIds(result)).toEqual(["react/jsx-key"])
  })

  test("reports hooks inside conditionals", async () => {
    const result = await lintText(
      dedent`
        import {useState} from "react"

        export function Example({enabled}: {enabled: boolean}) {
          if (enabled) {
            useState(0)
          }
          return null
        }
      `,
      {filePath: "fixture.tsx", rules: reactRules},
    )

    expect(ruleIds(result)).toEqual(["react/rules-of-hooks"])
  })
})
