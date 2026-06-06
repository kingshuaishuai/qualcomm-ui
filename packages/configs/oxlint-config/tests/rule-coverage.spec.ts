import {describe, expect, test} from "vitest"

import {
  configuredRuleIds,
  findRuleAlternatives,
  readOxlintRuleList,
  ruleMaps,
} from "./shared"

const forbiddenRulePrefixes = [
  "@typescript-eslint/",
  "eslint/",
  "react-hooks/",
]

const overlappedRules = [
  ["no-implied-eval", "typescript/no-implied-eval"],
  ["require-await", "typescript/require-await"],
]

describe("rule coverage", () => {
  test("configures only rules present in the Oxlint rule list", async () => {
    const rules = await readOxlintRuleList()
    const failures = []

    for (const [configName, ruleMap] of Object.entries(ruleMaps)) {
      for (const ruleId of configuredRuleIds(ruleMap)) {
        if (rules.has(ruleId)) {
          continue
        }

        const alternatives = await findRuleAlternatives(ruleId)
        failures.push(
          alternatives.length > 0
            ? `${configName}: ${ruleId} is unsupported; use ${alternatives.join(", ")}`
            : `${configName}: ${ruleId} is unsupported`,
        )
      }
    }

    expect(failures).toEqual([])
  })

  test("does not keep copied ESLint plugin namespaces", () => {
    const configuredRules = Object.values(ruleMaps).flatMap(configuredRuleIds)
    const copiedRules = configuredRules.filter((ruleId) =>
      forbiddenRulePrefixes.some((prefix) => ruleId.startsWith(prefix)),
    )

    expect(copiedRules).toEqual([])
  })

  test("uses singular TypeScript-aware rules for overlapping checks", () => {
    const configuredRules = new Set(Object.values(ruleMaps).flatMap(configuredRuleIds))
    const duplicatedRules = overlappedRules.filter(([baseRule, typedRule]) =>
      isEnabled(baseRule) && isEnabled(typedRule),
    )

    expect(duplicatedRules).toEqual([])
  })
})

function isEnabled(ruleId: string) {
  for (const ruleMap of Object.values(ruleMaps)) {
    const rule = ruleMap[ruleId]

    if (rule === undefined) {
      continue
    }

    if (rule === "off" || rule === 0) {
      return false
    }

    if (Array.isArray(rule) && (rule[0] === "off" || rule[0] === 0)) {
      return false
    }

    return true
  }

  return false
}
