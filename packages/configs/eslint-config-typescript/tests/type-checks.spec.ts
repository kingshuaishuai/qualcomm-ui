import {describe, expect, test} from "vitest"

import {configs, dedent, lintText, ruleIds} from "./shared"

describe("typeChecks", () => {
  test("reports representative type-aware errors and warnings", async () => {
    const result = await lintText(
      dedent`
        async function load() {
          return 1
        }

        load()
        throw "bad"
      `,
      [configs.base, configs.typeChecks],
      {typeAware: true},
    )

    expect(
      result.messages.map((message) => [message.ruleId, message.severity]),
    ).toEqual([
      ["@typescript-eslint/require-await", 2],
      ["@typescript-eslint/no-floating-promises", 1],
      ["@typescript-eslint/only-throw-error", 2],
    ])
  })

  test("reports unsafe any operations as warnings", async () => {
    const result = await lintText(
      dedent`
        function getValue(): any {
          return {}
        }

        const value = getValue()
        value.run()
        const name = value.name
        console.log(name)
      `,
      [configs.base, configs.typeChecks],
      {typeAware: true},
    )

    expect(
      result.messages.map((message) => [message.ruleId, message.severity]),
    ).toEqual([
      ["@typescript-eslint/no-explicit-any", 1],
      ["@typescript-eslint/no-unsafe-call", 1],
      ["@typescript-eslint/no-unsafe-member-access", 1],
      ["@typescript-eslint/no-unsafe-member-access", 1],
    ])
  })

  test("allows configured Response throws", async () => {
    const result = await lintText(
      dedent`
        throw new Response("not found", {status: 404})
      `,
      [configs.base, configs.typeChecks],
      {typeAware: true},
    )

    expect(ruleIds(result)).not.toContain("@typescript-eslint/only-throw-error")
  })
})

describe("namingConventions", () => {
  test("reports configured naming convention violations", async () => {
    const result = await lintText(
      dedent`
        interface IUser {}
        type bad_name = string
        class userService {
          public BadMethod() {}
          protected readonly Url = "https://example.com"
          public static ngAcceptInputType_disabled: boolean | string
        }
      `,
      [configs.base, configs.namingConventions],
    )

    expect(ruleIds(result)).toEqual([
      "@typescript-eslint/naming-convention",
      "@typescript-eslint/naming-convention",
      "@typescript-eslint/naming-convention",
      "@typescript-eslint/naming-convention",
    ])
  })
})
