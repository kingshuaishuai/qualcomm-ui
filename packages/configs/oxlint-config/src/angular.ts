// Copyright (c) Qualcomm Technologies, Inc. and/or its subsidiaries.
// SPDX-License-Identifier: BSD-3-Clause-Clear

import {
  defineConfig,
  type DummyRuleMap,
  type OxlintConfig,
  type OxlintOverride,
} from "oxlint"

import {typescriptOverrides, typescriptPlugins} from "./typescript.js"

export const angularFiles = [
  "**/*.component.ts",
  "**/*.directive.ts",
  "**/*.pipe.ts",
  "**/*.service.ts",
  "**/*.guard.ts",
  "**/*.resolver.ts",
  "**/*.interceptor.ts",
]

export const angularPlugins: NonNullable<OxlintConfig["plugins"]> = []

export const angularRules: DummyRuleMap = {}

export const angularOverrides: OxlintOverride[] = [
  {
    files: angularFiles,
    plugins: angularPlugins,
    rules: angularRules,
  },
]

export const angularConfig: OxlintConfig = defineConfig({
  categories: {
    correctness: "warn",
  },
  overrides: [...typescriptOverrides, ...angularOverrides],
  plugins: [...new Set([...typescriptPlugins, ...angularPlugins])],
})
