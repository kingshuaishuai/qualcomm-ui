// Copyright (c) Qualcomm Technologies, Inc. and/or its subsidiaries.
// SPDX-License-Identifier: BSD-3-Clause-Clear

import {
  defineConfig,
  type DummyRuleMap,
  type ExternalPluginEntry,
  type OxlintConfig,
  type OxlintOverride,
} from "oxlint"

export const baseFiles: string[] = ["**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}"]

export const basePlugins: NonNullable<OxlintConfig["plugins"]> = ["import"]

export const baseJsPlugins: ExternalPluginEntry[] = ["oxlint-plugin-oxfmt"]

export const baseRules: DummyRuleMap = {
  "import/newline-after-import": ["error", {count: 1}],
  "import/no-cycle": [0],
  "import/no-duplicates": ["error", {"prefer-inline": true}],
}

export const baseOverrides: OxlintOverride[] = [
  {
    files: baseFiles,
    plugins: basePlugins,
    rules: baseRules,
  },
]

export const baseConfig: OxlintConfig = defineConfig({
  categories: {
    correctness: "warn",
  },
  jsPlugins: baseJsPlugins,
  overrides: baseOverrides,
  plugins: basePlugins,
})
