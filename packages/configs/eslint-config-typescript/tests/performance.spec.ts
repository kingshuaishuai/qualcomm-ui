import {describe, expect, test} from "vitest"

import {configs, dedent, lintText} from "./shared"

describe("performance", () => {
  test("fixes type-only imports", async () => {
    const result = await lintText(
      dedent`
        import {User} from "./types"
        const user: User = {name: "Ada"} as User
      `,
      [configs.base, configs.performance],
      {fix: true},
    )

    expect(result.messages).toEqual([])
    expect(result.output).toBe(dedent`
      import type {User} from "./types"
      const user: User = {name: "Ada"} as User
    `)
  })

  test("fixes import type side effects", async () => {
    const result = await lintText(
      dedent`
        import {type User} from "./types"
        export type {User}
      `,
      [configs.base, configs.performance],
      {fix: true},
    )

    expect(result.messages).toEqual([])
    expect(result.output).toBe(dedent`
      import type {User} from "./types"
      export type {User}
    `)
  })
})
