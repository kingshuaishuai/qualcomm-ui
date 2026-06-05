import {describe, expect, test} from "vitest"

import typescriptConfig from "../index"

function configName(config: unknown) {
  return Array.isArray(config) ? config[0]?.name : undefined
}

describe("package exports", () => {
  test("exports each public config", () => {
    expect(Object.keys(typescriptConfig.configs).sort()).toEqual([
      "base",
      "jsdoc",
      "namingConventions",
      "performance",
      "recommended",
      "sortKeys",
      "strictExports",
      "styleGuide",
      "typeChecks",
    ])
  })

  test("keeps recommended config order stable", () => {
    expect(typescriptConfig.configs.recommended.map(configName)).toEqual([
      "qui-typescript-base",
      "qui-style-guide",
      "qui-sort-keys",
      "qui-typechecked-recommended",
      "qui-typechecked-naming-convention",
    ])
  })
})
