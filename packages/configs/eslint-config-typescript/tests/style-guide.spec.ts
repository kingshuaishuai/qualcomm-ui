import {describe, expect, test} from "vitest"

import {configs, dedent, lintText, ruleIds} from "./shared"

const styleGuideConfig = [configs.base, configs.styleGuide]

describe("styleGuide autofixes", () => {
  test("fixes core style and formatter rules", async () => {
    const result = await lintText(
      dedent`
        var name = 'Ada'
        var user = {name: name}
        if (user.name == null) console.log('missing')
        console.log('done')
      `,
      styleGuideConfig,
      {fix: true},
    )

    expect(result.messages).toEqual([])
    expect(result.output).toBe(dedent`
      const name = "Ada"
      const user = {name}
      if (user.name == null) {
        console.log("missing")
      }
      console.log("done")
    `)
  })

  test("fixes import spacing, duplicates, ordering, and unused imports", async () => {
    const result = await lintText(
      dedent`
        import {z} from "./z"
        import {a} from "./a"
        import {a as duplicate} from "./a"
        import {Button} from "@qualcomm-ui/react"
        import React from "react"
        const unused = 1
        console.log(React, Button, z)
      `,
      styleGuideConfig,
      {fix: true},
    )

    expect(ruleIds(result)).toEqual(["unused-imports/no-unused-vars"])
    expect(result.output).toBe(dedent`
      import React from "react"

      import {Button} from "@qualcomm-ui/react"

      import {z} from "./z"

      const unused = 1
      console.log(React, Button, z)
    `)
  })

  test("fixes comment spacing", async () => {
    const result = await lintText(
      dedent`
        //comment
        /* block */
        const value = 1
      `,
      styleGuideConfig,
      {fix: true},
    )

    expect(result.output).toBe(dedent`
      // comment
      /* block */
      const value = 1
    `)
  })
})

describe("styleGuide diagnostics", () => {
  test("reports restricted imports and private field syntax", async () => {
    const result = await lintText(
      dedent`
        import {value} from "@qualcomm-ui/core/src"

        class Example {
          #value = value
        }
        console.log(new Example())
      `,
      styleGuideConfig,
    )

    expect(ruleIds(result)).toEqual([
      "no-restricted-imports",
      "no-restricted-syntax",
    ])
  })

  test("reports long comments and useless escapes", async () => {
    const result = await lintText(
      dedent`
        // This comment is intentionally long enough to exceed the configured maximum comment length and produce a warning.
        console.log("\#")
      `,
      styleGuideConfig,
    )

    expect(result.messages.map((message) => [message.ruleId, message.severity])).toEqual([
      ["comment-length/limit-single-line-comments", 1],
      ["no-useless-escape", 1],
    ])
  })
})
