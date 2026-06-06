// Copyright (c) Qualcomm Technologies, Inc. and/or its subsidiaries.
// SPDX-License-Identifier: BSD-3-Clause-Clear

import {
  defineConfig,
  type DummyRuleMap,
  type OxlintConfig,
  type OxlintOverride,
} from "oxlint"

import {typescriptOverrides, typescriptPlugins} from "./typescript.js"

export const reactFiles = ["**/*.{jsx,tsx}"]

export const reactPlugins: NonNullable<OxlintConfig["plugins"]> = [
  "react",
  "jsx-a11y",
  "react-perf",
]

export const reactRules: DummyRuleMap = {
  "react/jsx-key": "error",
  "react/rules-of-hooks": "error",
}

export const reactOverrides: OxlintOverride[] = [
  {
    files: reactFiles,
    plugins: reactPlugins,
    rules: reactRules,
  },
]

export const reactConfig: OxlintConfig = defineConfig({
  categories: {
    correctness: "warn",
  },
  options: {
    typeAware: true,
  },
  overrides: [...typescriptOverrides, ...reactOverrides],
  plugins: [...new Set([...typescriptPlugins, ...reactPlugins])],
  settings: {
    react: {
      version: "detect",
    },
  },
})
