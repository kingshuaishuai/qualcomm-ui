// Copyright (c) Qualcomm Technologies, Inc. and/or its subsidiaries.
// SPDX-License-Identifier: BSD-3-Clause-Clear

import type {DummyRuleMap} from "oxlint"

const correctness: DummyRuleMap = {
  // default=error; category=correctness; fixable=none; version=v0.0.3
  "oxc/bad-array-method-on-arguments": "error",
  // default=error; category=correctness; fixable=none; version=v0.0.22
  "oxc/bad-char-at-comparison": "error",
  // default=error; category=correctness; fixable=none; version=v0.0.3
  "oxc/bad-comparison-sequence": "error",
  // default=error; category=correctness; fixable=none; version=v0.0.3
  "oxc/bad-min-max-func": "error",
  // default=error; category=correctness; fixable=none; version=v0.1.1
  "oxc/bad-object-literal-comparison": "error",
  // default=error; category=correctness; fixable=none; version=v0.0.22
  "oxc/bad-replace-all-arg": "error",
  // default=error; category=correctness; fixable=none; version=v0.0.22
  "oxc/const-comparisons": "error",
  // default=error; category=correctness; fixable=💡; version=v0.0.22
  "oxc/double-comparisons": "error",
  // default=error; category=correctness; fixable=⚠️ 🛠️; version=v0.1.1
  "oxc/erasing-op": "error",
  // default=error; category=correctness; fixable=💡; version=v0.0.3
  "oxc/missing-throw": "error",
  // default=error; category=correctness; fixable=none; version=v0.0.3
  "oxc/number-arg-out-of-range": "error",
  // default=error; category=correctness; fixable=⚠️ 🛠️; version=v0.1.1
  "oxc/only-used-in-recursion": "error",
  // default=error; category=correctness; fixable=none; version=v0.0.3
  "oxc/uninvoked-array-callback": "error",
}

const pedantic: DummyRuleMap = {
  // TODO: decide whether to enable. default=off; fixable=💡; version=v1.22.0
  "oxc/branches-sharing-code": "off",
}

const perf: DummyRuleMap = {
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.0.19
  "oxc/no-accumulating-spread": "off",
  // TODO: decide whether to enable. default=off; fixable=💡; version=v0.11.0
  "oxc/no-map-spread": "off",
}

const restriction: DummyRuleMap = {
  // TODO: decide whether to enable. default=off; fixable=💡; version=v0.0.3
  "oxc/bad-bitwise-operator": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.4.2
  "oxc/no-async-await": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.3.0
  "oxc/no-barrel-file": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v0.4.2
  "oxc/no-const-enum": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.5.0
  "oxc/no-optional-chaining": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.4.2
  "oxc/no-rest-spread-properties": "off",
}

const suspicious: DummyRuleMap = {
  // TODO: decide whether to enable. default=off; fixable=💡; version=v0.1.1
  "oxc/approx-constant": "off",
  // TODO: decide whether to enable. default=off; fixable=💡; version=v0.1.1
  "oxc/misrefactored-assign-op": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.9.2
  "oxc/no-async-endpoint-handlers": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v1.33.0
  "oxc/no-this-in-exported-function": "off",
}

export const oxcRules: DummyRuleMap = {
  ...correctness,
  ...pedantic,
  ...perf,
  ...restriction,
  ...suspicious,
}
