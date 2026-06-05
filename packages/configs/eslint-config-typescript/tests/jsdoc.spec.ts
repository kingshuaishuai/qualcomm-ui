import {describe, expect, test} from "vitest"

import {configs, dedent, lintText, ruleIds} from "./shared"

describe("jsdoc", () => {
  test("fixes asterisk prefixes and tag spacing", async () => {
    const result = await lintText(
      dedent`
        /**
          Missing star prefix
         * @returns {string}
         */
        export function value() {
          return "x"
        }
      `,
      [configs.base, configs.jsdoc],
      {fix: true},
    )

    expect(result.messages).toEqual([])
    expect(result.output).toBe(dedent`
      /**
       * Missing star prefix
       *
       * @returns {string}
       */
      export function value() {
        return "x"
      }
    `)
  })

  test("reports tag names and blank descriptions", async () => {
    const result = await lintText(
      dedent`
        /**
         *
         * @badTag value
         * @param name a ***bold*** name
         */
        export function greet(name: string) {
          return name
        }
      `,
      [configs.base, configs.jsdoc],
    )

    expect(ruleIds(result)).toEqual([
      "jsdoc/no-blank-block-descriptions",
      "jsdoc/check-tag-names",
    ])
  })

})
