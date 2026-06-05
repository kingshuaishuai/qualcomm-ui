import {describe, expect, test} from "vitest"

import {configs, dedent, lintText} from "./shared"

describe("sortKeys", () => {
  test("fixes object literals, interfaces, and object types", async () => {
    const result = await lintText(
      dedent`
        const value = {z: 1, a: 2, b10: 3, b2: 4}
        interface User {
          name: string
          id: string
        }
        type Options = {
          zebra: string
          alpha: string
        }
      `,
      [configs.base, configs.sortKeys],
      {fix: true},
    )

    expect(result.messages).toEqual([])
    expect(result.output).toBe(dedent`
      const value = {a: 2, b2: 4, b10: 3, z: 1}
      interface User {
        id: string
        name: string
      }
      type Options = {
        alpha: string
        zebra: string
      }
    `)
  })

  test("preserves configured comment partitions", async () => {
    const result = await lintText(
      dedent`
        const value = {
          zebra: 1,
          // group: lifecycle
          mounted: 2,
          created: 3,
        }
      `,
      [configs.base, configs.sortKeys],
      {fix: true},
    )

    expect(result.output).toBe(dedent`
      const value = {
        zebra: 1,
        // group: lifecycle
        created: 3,
        mounted: 2,
      }
    `)
  })
})
