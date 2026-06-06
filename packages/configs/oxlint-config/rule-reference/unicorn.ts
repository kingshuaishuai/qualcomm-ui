// Copyright (c) Qualcomm Technologies, Inc. and/or its subsidiaries.
// SPDX-License-Identifier: BSD-3-Clause-Clear

import type {DummyRuleMap} from "oxlint"

const correctness: DummyRuleMap = {
  // TODO: decide whether to enable. default=error; fixable=💡; version=v0.2.18
  "unicorn/no-await-in-promise-methods": "off",
  // TODO: decide whether to enable. default=error; fixable=none; version=v0.0.15
  "unicorn/no-empty-file": "off",
  // TODO: decide whether to enable. default=error; fixable=none; version=v0.15.12
  "unicorn/no-invalid-fetch-options": "off",
  // TODO: decide whether to enable. default=error; fixable=none; version=v0.0.16
  "unicorn/no-invalid-remove-event-listener": "off",
  // TODO: decide whether to enable. default=error; fixable=⚠️ 💡; version=v0.0.16
  "unicorn/no-new-array": "off",
  // TODO: decide whether to enable. default=error; fixable=🛠️; version=v0.2.18
  "unicorn/no-single-promise-in-promise-methods": "off",
  // TODO: decide whether to enable. default=error; fixable=none; version=v0.0.13
  "unicorn/no-thenable": "off",
  // TODO: decide whether to enable. default=error; fixable=🛠️; version=v0.0.12
  "unicorn/no-unnecessary-await": "off",
  // TODO: decide whether to enable. default=error; fixable=🛠️; version=v0.0.16
  "unicorn/no-useless-fallback-in-spread": "off",
  // TODO: decide whether to enable. default=error; fixable=🚧; version=v0.0.19
  "unicorn/no-useless-length-check": "off",
  // TODO: decide whether to enable. default=error; fixable=⚠️ 🛠️; version=v0.0.19
  "unicorn/no-useless-spread": "off",
  // TODO: decide whether to enable. default=error; fixable=🛠️; version=v0.0.19
  "unicorn/prefer-set-size": "off",
  // TODO: decide whether to enable. default=error; fixable=🛠️; version=v0.0.18
  "unicorn/prefer-string-starts-ends-with": "off",
}

const nursery: DummyRuleMap = {
  // TODO: decide whether to enable. default=off; fixable=🛠️ 💡; version=v1.59.0
  "unicorn/no-useless-iterator-to-array": "off",
}

const pedantic: DummyRuleMap = {
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v0.16.9
  "unicorn/consistent-assert": "off",
  // TODO: decide whether to enable. default=off; fixable=💡; version=v0.10.1
  "unicorn/consistent-empty-array-spread": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v0.0.19
  "unicorn/escape-case": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v0.0.19
  "unicorn/explicit-length-check": "off",
  // TODO: decide whether to enable. default=off; fixable=🚧; version=v0.0.16
  "unicorn/new-for-builtins": "off",
  // TODO: decide whether to enable. default=off; fixable=🚧; version=v1.19.0
  "unicorn/no-array-callback-reference": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v0.0.18
  "unicorn/no-hex-escape": "off",
  // TODO: decide whether to enable. default=off; fixable=🚧; version=v1.35.0
  "unicorn/no-immediate-mutation": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v0.0.8
  "unicorn/no-instanceof-array": "off",
  // TODO: decide whether to enable. default=off; fixable=🚧; version=v0.0.18
  "unicorn/no-lonely-if": "off",
  // TODO: decide whether to enable. default=off; fixable=🚧; version=v0.0.18
  "unicorn/no-negated-condition": "off",
  // TODO: decide whether to enable. default=off; fixable=💡; version=v0.5.3
  "unicorn/no-negation-in-equality-check": "off",
  // TODO: decide whether to enable. default=off; fixable=💡; version=v0.0.16
  "unicorn/no-new-buffer": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.0.16
  "unicorn/no-object-as-default-parameter": "off",
  // TODO: decide whether to enable. default=off; fixable=⚠️ 🛠️; version=v0.0.16
  "unicorn/no-static-only-class": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.0.18
  "unicorn/no-this-assignment": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️ 💡; version=v0.0.18
  "unicorn/no-typeof-undefined": "off",
  // TODO: decide whether to enable. default=off; fixable=💡; version=v0.16.12
  "unicorn/no-unnecessary-array-flat-depth": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v1.20.0
  "unicorn/no-unnecessary-array-splice-count": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v0.16.10
  "unicorn/no-unnecessary-slice-end": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.0.19
  "unicorn/no-unreadable-iife": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v0.0.18
  "unicorn/no-useless-promise-resolve-reject": "off",
  // TODO: decide whether to enable. default=off; fixable=🚧; version=v0.0.18
  "unicorn/no-useless-switch-case": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v0.6.1
  "unicorn/no-useless-undefined": "off",
  // TODO: decide whether to enable. default=off; fixable=⚠️ 🛠️; version=v0.0.20
  "unicorn/prefer-array-flat": "off",
  // TODO: decide whether to enable. default=off; fixable=💡; version=v0.0.18
  "unicorn/prefer-array-some": "off",
  // TODO: decide whether to enable. default=off; fixable=⚠️ 🛠️; version=v1.20.0
  "unicorn/prefer-at": "off",
  // TODO: decide whether to enable. default=off; fixable=🚧; version=v0.0.16
  "unicorn/prefer-blob-reading-methods": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v0.0.16
  "unicorn/prefer-code-point": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v0.0.16
  "unicorn/prefer-date-now": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v0.0.18
  "unicorn/prefer-dom-node-append": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v0.0.18
  "unicorn/prefer-dom-node-dataset": "off",
  // TODO: decide whether to enable. default=off; fixable=🚧; version=v0.0.18
  "unicorn/prefer-dom-node-remove": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.0.18
  "unicorn/prefer-event-target": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v1.59.0
  "unicorn/prefer-import-meta-properties": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v0.10.1
  "unicorn/prefer-math-min-max": "off",
  // TODO: decide whether to enable. default=off; fixable=💡; version=v0.0.18
  "unicorn/prefer-math-trunc": "off",
  // TODO: decide whether to enable. default=off; fixable=🚧; version=v0.0.19
  "unicorn/prefer-native-coercion-functions": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v0.0.21
  "unicorn/prefer-prototype-methods": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v0.0.15
  "unicorn/prefer-query-selector": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v0.0.16
  "unicorn/prefer-regexp-test": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v0.0.18
  "unicorn/prefer-string-replace-all": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v0.0.18
  "unicorn/prefer-string-slice": "off",
  // TODO: decide whether to enable. default=off; fixable=🚧; version=v1.20.0
  "unicorn/prefer-top-level-await": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v0.0.16
  "unicorn/prefer-type-error": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v0.0.15
  "unicorn/require-number-to-fixed-digits-argument": "off",
}

const perf: DummyRuleMap = {
  // TODO: decide whether to enable. default=off; fixable=🚧; version=v0.16.12
  "unicorn/prefer-array-find": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v0.0.14
  "unicorn/prefer-array-flat-map": "off",
  // TODO: decide whether to enable. default=off; fixable=⚠️ 🛠️; version=v0.13.2
  "unicorn/prefer-set-has": "off",
}

const restriction: DummyRuleMap = {
  // TODO: decide whether to enable. default=off; fixable=none; version=v1.67.0
  "unicorn/import-style": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.0.18
  "unicorn/no-abusive-eslint-disable": "off",
  // TODO: decide whether to enable. default=off; fixable=🚧; version=v0.3.3
  "unicorn/no-anonymous-default-export": "off",
  // TODO: decide whether to enable. default=off; fixable=🚧; version=v0.0.19
  "unicorn/no-array-for-each": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.0.19
  "unicorn/no-array-reduce": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.0.18
  "unicorn/no-document-cookie": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v0.7.0
  "unicorn/no-length-as-slice-end": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.4.2
  "unicorn/no-magic-array-flat-depth": "off",
  // TODO: decide whether to enable. default=off; fixable=🚧; version=v0.2.9
  "unicorn/no-process-exit": "off",
  // TODO: decide whether to enable. default=off; fixable=💡; version=v1.20.0
  "unicorn/no-useless-error-capture-stack-trace": "off",
  // TODO: decide whether to enable. default=off; fixable=🚧; version=v0.1.1
  "unicorn/prefer-modern-math-apis": "off",
  // TODO: decide whether to enable. default=off; fixable=🚧; version=v1.50.0
  "unicorn/prefer-module": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v0.0.19
  "unicorn/prefer-node-protocol": "off",
  // TODO: decide whether to enable. default=off; fixable=⚠️ 🛠️; version=v0.0.19
  "unicorn/prefer-number-properties": "off",
}

const style: DummyRuleMap = {
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v0.0.14
  "unicorn/catch-error-name": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v0.15.13
  "unicorn/consistent-date-clone": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v0.12.0
  "unicorn/consistent-existence-index-check": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v1.60.0
  "unicorn/consistent-template-literal-escape": "off",
  // TODO: decide whether to enable. default=off; fixable=🚧; version=v1.57.0
  "unicorn/custom-error-definition": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v0.0.18
  "unicorn/empty-brace-spaces": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.0.14
  "unicorn/error-message": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.0.14
  "unicorn/filename-case": "off",
  // TODO: decide whether to enable. default=off; fixable=🚧; version=v0.16.12
  "unicorn/no-array-method-this-argument": "off",
  // TODO: decide whether to enable. default=off; fixable=⚠️ 🛠️; version=v0.0.19
  "unicorn/no-await-expression-member": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v0.0.14
  "unicorn/no-console-spaces": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v0.0.18
  "unicorn/no-nested-ternary": "off",
  // TODO: decide whether to enable. default=off; fixable=⚠️ 🛠️; version=v0.0.21
  "unicorn/no-null": "off",
  // TODO: decide whether to enable. default=off; fixable=🚧; version=v0.0.19
  "unicorn/no-unreadable-array-destructuring": "off",
  // TODO: decide whether to enable. default=off; fixable=💡; version=v1.28.0
  "unicorn/no-useless-collection-argument": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v0.0.18
  "unicorn/no-zero-fractions": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v0.0.18
  "unicorn/number-literal-case": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v0.0.19
  "unicorn/numeric-separators-style": "off",
  // TODO: decide whether to enable. default=off; fixable=🚧; version=v0.16.12
  "unicorn/prefer-array-index-of": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v1.30.0
  "unicorn/prefer-bigint-literals": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️ 💡; version=v1.20.0
  "unicorn/prefer-class-fields": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v1.20.0
  "unicorn/prefer-classlist-toggle": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v1.33.0
  "unicorn/prefer-default-parameters": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v0.0.21
  "unicorn/prefer-dom-node-text-content": "off",
  // TODO: decide whether to enable. default=off; fixable=💡; version=v0.16.12
  "unicorn/prefer-global-this": "off",
  // TODO: decide whether to enable. default=off; fixable=💡; version=v0.0.18
  "unicorn/prefer-includes": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v1.33.0
  "unicorn/prefer-keyboard-event-key": "off",
  // TODO: decide whether to enable. default=off; fixable=💡; version=v0.0.15
  "unicorn/prefer-logical-operator-over-ternary": "off",
  // TODO: decide whether to enable. default=off; fixable=💡; version=v0.0.20
  "unicorn/prefer-modern-dom-apis": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v0.13.2
  "unicorn/prefer-negative-index": "off",
  // TODO: decide whether to enable. default=off; fixable=🚧; version=v0.16.12
  "unicorn/prefer-object-from-entries": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v0.0.17
  "unicorn/prefer-optional-catch-binding": "off",
  // TODO: decide whether to enable. default=off; fixable=💡; version=v0.0.19
  "unicorn/prefer-reflect-apply": "off",
  // TODO: decide whether to enable. default=off; fixable=💡; version=v1.29.0
  "unicorn/prefer-response-static-json": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v0.0.17
  "unicorn/prefer-spread": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v0.12.0
  "unicorn/prefer-string-raw": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v0.0.16
  "unicorn/prefer-string-trim-start-end": "off",
  // TODO: decide whether to enable. default=off; fixable=💡; version=v0.9.0
  "unicorn/prefer-structured-clone": "off",
  // TODO: decide whether to enable. default=off; fixable=🚧; version=v1.50.0
  "unicorn/prefer-ternary": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️ 💡; version=v1.44.0
  "unicorn/relative-url-style": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v0.0.19
  "unicorn/require-array-join-separator": "off",
  // TODO: decide whether to enable. default=off; fixable=💡; version=v1.35.0
  "unicorn/require-module-attributes": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v0.0.15
  "unicorn/switch-case-braces": "off",
  // TODO: decide whether to enable. default=off; fixable=🚧; version=v1.59.0
  "unicorn/switch-case-break-position": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v0.0.15
  "unicorn/text-encoding-identifier-case": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v0.0.14
  "unicorn/throw-new-error": "off",
}

const suspicious: DummyRuleMap = {
  // TODO: decide whether to enable. default=off; fixable=🚧; version=v0.8.0
  "unicorn/consistent-function-scoping": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.16.5
  "unicorn/no-accessor-recursion": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v1.15.0
  "unicorn/no-array-reverse": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v1.15.0
  "unicorn/no-array-sort": "off",
  // TODO: decide whether to enable. default=off; fixable=💡; version=v0.16.12
  "unicorn/no-instanceof-builtins": "off",
  // TODO: decide whether to enable. default=off; fixable=🚧; version=v0.0.16
  "unicorn/prefer-add-event-listener": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v1.20.0
  "unicorn/require-module-specifiers": "off",
  // TODO: decide whether to enable. default=off; fixable=💡; version=v0.15.15
  "unicorn/require-post-message-target-origin": "off",
}

export const unicornRules: DummyRuleMap = {
  ...correctness,
  ...nursery,
  ...pedantic,
  ...perf,
  ...restriction,
  ...style,
  ...suspicious,
}
