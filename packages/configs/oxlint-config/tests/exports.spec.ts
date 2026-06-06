import {describe, expect, test} from "vitest"

import {angularConfig, angularOverrides, angularRules} from "../src/angular"
import {baseConfig, baseOverrides, baseRules} from "../src/base"
import {reactConfig, reactOverrides, reactRules} from "../src/react"
import {
  typescriptConfig,
  typescriptOverrides,
  typescriptRules,
} from "../src/typescript"

describe("exports", () => {
  test("exposes config objects with expected override composition", () => {
    expect(baseConfig.overrides).toEqual(baseOverrides)
    expect(typescriptConfig.overrides).toEqual([
      ...baseOverrides,
      ...typescriptOverrides,
    ])
    expect(reactConfig.overrides).toEqual([
      ...typescriptOverrides,
      ...reactOverrides,
    ])
    expect(angularConfig.overrides).toEqual([
      ...typescriptOverrides,
      ...angularOverrides,
    ])
  })

  test("keeps Angular-specific rules empty until Oxlint has supported Angular rules", () => {
    expect(angularRules).toEqual({})
  })

  test("exports configured rule maps", () => {
    expect(baseRules).toHaveProperty("import/newline-after-import")
    expect(typescriptRules).toHaveProperty("typescript/no-floating-promises")
    expect(reactRules).toHaveProperty("react/rules-of-hooks")
  })
})
