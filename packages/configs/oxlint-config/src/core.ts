// Copyright (c) Qualcomm Technologies, Inc. and/or its subsidiaries.
// SPDX-License-Identifier: BSD-3-Clause-Clear

/**
 * Rules in this file apply to all JS/TS Since TypeScript is essentially an
 * industry standard at this point, rules that would otherwise overlap with
 * their TypeScript equivalent are disabled.
 */

import type {DummyRuleMap, ExternalPluginEntry, OxlintConfig} from "oxlint"

import {importRules} from "./internal/import.js"
import {oxcRules} from "./internal/oxc.js"
import {promiseRules} from "./internal/promise.js"

export const corePlugins: NonNullable<OxlintConfig["plugins"]> = [
  "import",
  "promise",
]

export const oxfmtPlugin: ExternalPluginEntry = "oxlint-plugin-oxfmt"

export const coreJsPlugins: ExternalPluginEntry[] = [
  oxfmtPlugin,
  "eslint-plugin-perfectionist",
]

export const oxfmtRules: DummyRuleMap = {
  "oxfmt/format": "error",
}

export const sortRules: DummyRuleMap = {
  "perfectionist/sort-interfaces": [
    "error",
    {
      partitionByComment: ["^group:"],
      type: "natural",
    },
  ],
  "perfectionist/sort-object-types": ["error", {type: "natural"}],
  "perfectionist/sort-objects": [
    "error",
    {
      partitionByComment: ["^group:"],
      type: "natural",
    },
  ],
}

export const styleGuideRules: DummyRuleMap = {
  ...promiseRules,
  ...importRules,
  ...oxcRules,
}
