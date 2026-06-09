// Copyright (c) Qualcomm Technologies, Inc. and/or its subsidiaries.
// SPDX-License-Identifier: BSD-3-Clause-Clear

import type {DummyRuleMap} from "oxlint"

const correctness: DummyRuleMap = {
  // TODO: decide whether to enable. default=error; fixable=none; version=v0.0.3
  "eslint/constructor-super": "off",
  // TODO: decide whether to enable. default=error; fixable=⚠️ 🛠️; version=v0.0.3
  "eslint/for-direction": "off",
  // TODO: decide whether to enable. default=error; fixable=none; version=v0.0.3
  "eslint/getter-return": "off",
  // TODO: decide whether to enable. default=error; fixable=none; version=v0.0.3
  "eslint/no-async-promise-executor": "off",
  // TODO: decide whether to enable. default=error; fixable=none; version=v0.0.3
  "eslint/no-caller": "off",
  // TODO: decide whether to enable. default=error; fixable=none; version=v0.0.3
  "eslint/no-class-assign": "off",
  // TODO: decide whether to enable. default=error; fixable=🛠️ 💡; version=v0.0.3
  "eslint/no-compare-neg-zero": "off",
  // TODO: decide whether to enable. default=error; fixable=none; version=v0.0.5
  "eslint/no-cond-assign": "off",
  // TODO: decide whether to enable. default=error; fixable=none; version=v0.0.3
  "eslint/no-const-assign": "off",
  // TODO: decide whether to enable. default=error; fixable=none; version=v0.0.3
  "eslint/no-constant-binary-expression": "off",
  // TODO: decide whether to enable. default=error; fixable=none; version=v0.0.3
  "eslint/no-constant-condition": "off",
  // TODO: decide whether to enable. default=error; fixable=none; version=v0.0.7
  "eslint/no-control-regex": "off",
  // TODO: decide whether to enable. default=error; fixable=💡; version=v0.0.3
  "eslint/no-debugger": "off",
  // TODO: decide whether to enable. default=error; fixable=none; version=v0.0.4
  "eslint/no-delete-var": "off",
  // TODO: decide whether to enable. default=error; fixable=none; version=v0.0.3
  "eslint/no-dupe-class-members": "off",
  // TODO: decide whether to enable. default=error; fixable=none; version=v0.0.5
  "eslint/no-dupe-else-if": "off",
  // TODO: decide whether to enable. default=error; fixable=none; version=v0.0.3
  "eslint/no-dupe-keys": "off",
  // TODO: decide whether to enable. default=error; fixable=none; version=v0.0.3
  "eslint/no-duplicate-case": "off",
  // TODO: decide whether to enable. default=error; fixable=none; version=v0.0.7
  "eslint/no-empty-character-class": "off",
  // TODO: decide whether to enable. default=error; fixable=none; version=v0.0.3
  "eslint/no-empty-pattern": "off",
  // TODO: decide whether to enable. default=error; fixable=💡; version=v0.0.19
  "eslint/no-empty-static-block": "off",
  // TODO: decide whether to enable. default=error; fixable=none; version=v0.0.3
  "eslint/no-eval": "off",
  // TODO: decide whether to enable. default=error; fixable=none; version=v0.0.4
  "eslint/no-ex-assign": "off",
  // TODO: decide whether to enable. default=error; fixable=🛠️ 💡; version=v0.0.8
  "eslint/no-extra-boolean-cast": "off",
  // TODO: decide whether to enable. default=error; fixable=none; version=v0.0.3
  "eslint/no-func-assign": "off",
  // TODO: decide whether to enable. default=error; fixable=none; version=v0.0.7
  "eslint/no-global-assign": "off",
  // TODO: decide whether to enable. default=error; fixable=none; version=v0.0.5
  "eslint/no-import-assign": "off",
  // TODO: decide whether to enable. default=error; fixable=none; version=v0.9.4
  "eslint/no-invalid-regexp": "off",
  // TODO: decide whether to enable. default=error; fixable=none; version=v0.1.1
  "eslint/no-irregular-whitespace": "off",
  // TODO: decide whether to enable. default=error; fixable=💡; version=v0.2.15
  "eslint/no-iterator": "off",
  // TODO: decide whether to enable. default=error; fixable=none; version=v0.0.7
  "eslint/no-loss-of-precision": "off",
  // TODO: decide whether to enable. default=error; fixable=💡; version=v1.17.0
  "eslint/no-misleading-character-class": "off",
  // TODO: decide whether to enable. default=error; fixable=none; version=v0.3.3
  "eslint/no-new-native-nonconstructor": "off",
  // TODO: decide whether to enable. default=error; fixable=💡; version=v0.2.10
  "eslint/no-nonoctal-decimal-escape": "off",
  // TODO: decide whether to enable. default=error; fixable=none; version=v0.0.7
  "eslint/no-obj-calls": "off",
  // TODO: decide whether to enable. default=error; fixable=none; version=v0.0.5
  "eslint/no-self-assign": "off",
  // TODO: decide whether to enable. default=error; fixable=none; version=v0.0.3
  "eslint/no-setter-return": "off",
  // TODO: decide whether to enable. default=error; fixable=none; version=v0.0.3
  "eslint/no-shadow-restricted-names": "off",
  // TODO: decide whether to enable. default=error; fixable=none; version=v0.0.4
  "eslint/no-sparse-arrays": "off",
  // TODO: decide whether to enable. default=error; fixable=none; version=v0.2.6
  "eslint/no-this-before-super": "off",
  // TODO: decide whether to enable. default=error; fixable=none; version=v1.10.0
  "eslint/no-unassigned-vars": "off",
  // TODO: decide whether to enable. default=error; fixable=none; version=v0.4.4
  "eslint/no-unreachable": "off",
  // TODO: decide whether to enable. default=error; fixable=none; version=v0.0.5
  "eslint/no-unsafe-finally": "off",
  // TODO: decide whether to enable. default=error; fixable=🛠️; version=v0.0.3
  "eslint/no-unsafe-negation": "off",
  // TODO: decide whether to enable. default=error; fixable=none; version=v0.0.5
  "eslint/no-unsafe-optional-chaining": "off",
  // TODO: decide whether to enable. default=error; fixable=none; version=v0.14.0
  "eslint/no-unused-expressions": "off",
  // TODO: decide whether to enable. default=error; fixable=🛠️; version=v0.0.3
  "eslint/no-unused-labels": "off",
  // TODO: decide whether to enable. default=error; fixable=none; version=v0.1.1
  "eslint/no-unused-private-class-members": "off",
  // TODO: decide whether to enable. default=error; fixable=⚠️ 🛠 💡; version=v0.7.0
  "eslint/no-unused-vars": "off",
  // TODO: decide whether to enable. default=error; fixable=none; version=v0.16.10
  "eslint/no-useless-backreference": "off",
  // TODO: decide whether to enable. default=error; fixable=none; version=v0.0.5
  "eslint/no-useless-catch": "off",
  // TODO: decide whether to enable. default=error; fixable=🛠️; version=v0.0.5
  "eslint/no-useless-escape": "off",
  // TODO: decide whether to enable. default=error; fixable=🛠️; version=v0.2.14
  "eslint/no-useless-rename": "off",
  // TODO: decide whether to enable. default=error; fixable=none; version=v0.2.14
  "eslint/no-with": "off",
  // TODO: decide whether to enable. default=error; fixable=none; version=v0.0.4
  "eslint/require-yield": "off",
  // TODO: decide whether to enable. default=error; fixable=🛠️; version=v0.0.3
  "eslint/use-isnan": "off",
  // TODO: decide whether to enable. default=error; fixable=🛠️; version=v0.0.3
  "eslint/valid-typeof": "off",
}

const nursery: DummyRuleMap = {
  // TODO: decide whether to enable. default=off; fixable=none; version=v1.59.0
  "eslint/no-restricted-exports": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.0.8
  "eslint/no-undef": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v1.59.0
  "eslint/no-useless-assignment": "off",
}

const pedantic: DummyRuleMap = {
  // TODO: decide whether to enable. default=off; fixable=none; version=v1.33.0
  "eslint/accessor-pairs": "off",
  // TODO: decide whether to enable. default=off; fixable=🚧; version=v0.0.3
  "eslint/array-callback-return": "off",
  // TODO: decide whether to enable. default=off; fixable=⚠️ 🛠️; version=v0.0.3
  "eslint/eqeqeq": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.3.4
  "eslint/max-classes-per-file": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.15.12
  "eslint/max-depth": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.2.14
  "eslint/max-lines": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.15.12
  "eslint/max-lines-per-function": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.15.12
  "eslint/max-nested-callbacks": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v0.0.3
  "eslint/no-array-constructor": "off",
  // TODO: decide whether to enable. default=off; fixable=💡; version=v0.0.4
  "eslint/no-case-declarations": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.4.3
  "eslint/no-constructor-return": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v0.9.10
  "eslint/no-else-return": "off",
  // TODO: decide whether to enable. default=off; fixable=🚧; version=v0.0.14
  "eslint/no-fallthrough": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v1.34.0
  "eslint/no-inline-comments": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.0.5
  "eslint/no-inner-declarations": "off",
  // TODO: decide whether to enable. default=off; fixable=🚧; version=v0.16.0
  "eslint/no-lonely-if": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v1.33.0
  "eslint/no-loop-func": "off",
  // TODO: decide whether to enable. default=off; fixable=🚧; version=v0.0.18
  "eslint/no-negated-condition": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v0.2.10
  "eslint/no-new-wrappers": "off",
  // TODO: decide whether to enable. default=off; fixable=🚧; version=v0.13.2
  "eslint/no-object-constructor": "off",
  // TODO: decide whether to enable. default=off; fixable=🚧; version=v1.33.0
  "eslint/no-promise-executor-return": "off",
  // TODO: decide whether to enable. default=off; fixable=🚧; version=v0.0.5
  "eslint/no-prototype-builtins": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.0.13
  "eslint/no-redeclare": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.0.3
  "eslint/no-self-compare": "off",
  // TODO: decide whether to enable. default=off; fixable=💡; version=v0.9.10
  "eslint/no-throw-literal": "off",
  // TODO: decide whether to enable. default=off; fixable=🚧; version=v1.32.0
  "eslint/no-useless-return": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v1.24.0
  "eslint/no-warning-comments": "off",
  // TODO: decide whether to enable. default=off; fixable=⚠️ 🛠️; version=v0.3.3
  "eslint/radix": "off",
  // TODO: decide whether to enable. default=off; fixable=⚠️ 🛠️; version=v0.4.2
  "eslint/require-await": "off",
  // TODO: decide whether to enable. default=off; fixable=🚧; version=v1.63.0
  "eslint/require-unicode-regexp": "off",
  // TODO: decide whether to enable. default=off; fixable=🚧; version=v0.9.3
  "eslint/sort-vars": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.4.0
  "eslint/symbol-description": "off",
}

const perf: DummyRuleMap = {
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.3.2
  "eslint/no-await-in-loop": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.15.9
  "eslint/no-useless-call": "off",
}

const restriction: DummyRuleMap = {
  // TODO: decide whether to enable. default=off; fixable=none; version=v1.16.0
  "eslint/class-methods-use-this": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v1.37.0
  "eslint/complexity": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.4.0
  "eslint/default-case": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.9.3
  "eslint/no-alert": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.0.3
  "eslint/no-bitwise": "off",
  // TODO: decide whether to enable. default=off; fixable=💡; version=v0.0.13
  "eslint/no-console": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v0.4.2
  "eslint/no-div-regex": "off",
  // TODO: decide whether to enable. default=off; fixable=💡; version=v0.0.3
  "eslint/no-empty": "off",
  // TODO: decide whether to enable. default=off; fixable=💡; version=v0.3.3
  "eslint/no-empty-function": "off",
  // TODO: decide whether to enable. default=off; fixable=⚠️ 🛠️; version=v0.2.14
  "eslint/no-eq-null": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v1.65.0
  "eslint/no-implicit-globals": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v1.20.0
  "eslint/no-param-reassign": "off",
  // TODO: decide whether to enable. default=off; fixable=💡; version=v0.9.5
  "eslint/no-plusplus": "off",
  // TODO: decide whether to enable. default=off; fixable=🚧; version=v0.2.14
  "eslint/no-proto": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v0.0.18
  "eslint/no-regex-spaces": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.4.0
  "eslint/no-restricted-globals": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.15.0
  "eslint/no-restricted-imports": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v1.63.0
  "eslint/no-restricted-properties": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v1.33.0
  "eslint/no-sequences": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.5.3
  "eslint/no-undefined": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v1.49.0
  "eslint/no-use-before-define": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v0.1.1
  "eslint/no-var": "off",
  // TODO: decide whether to enable. default=off; fixable=💡; version=v0.2.5
  "eslint/no-void": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v0.3.3
  "eslint/unicode-bom": "off",
}

const style: DummyRuleMap = {
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v1.4.0
  "eslint/arrow-body-style": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v1.34.0
  "eslint/capitalized-comments": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v0.15.13
  "eslint/curly": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.0.16
  "eslint/default-case-last": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.2.15
  "eslint/default-param-last": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v1.62.0
  "eslint/func-name-matching": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️ 💡; version=v0.7.0
  "eslint/func-names": "off",
  // TODO: decide whether to enable. default=off; fixable=🚧; version=v0.15.11
  "eslint/func-style": "off",
  // TODO: decide whether to enable. default=off; fixable=🚧; version=v0.15.12
  "eslint/grouped-accessor-pairs": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.2.14
  "eslint/guard-for-in": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v1.4.0
  "eslint/id-length": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v1.66.0
  "eslint/id-match": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.15.11
  "eslint/init-declarations": "off",
  // TODO: decide whether to enable. default=off; fixable=🚧; version=v1.63.0
  "eslint/logical-assignment-operators": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.2.14
  "eslint/max-params": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v1.35.0
  "eslint/max-statements": "off",
  // TODO: decide whether to enable. default=off; fixable=🚧; version=v0.15.5
  "eslint/new-cap": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.2.14
  "eslint/no-continue": "off",
  // TODO: decide whether to enable. default=off; fixable=🚧; version=v0.13.2
  "eslint/no-duplicate-imports": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v0.15.4
  "eslint/no-extra-label": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v1.33.0
  "eslint/no-implicit-coercion": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.6.0
  "eslint/no-label-var": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.15.4
  "eslint/no-labels": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.15.6
  "eslint/no-lone-blocks": "off",
  // TODO: decide whether to enable. default=off; fixable=🚧; version=v0.9.3
  "eslint/no-magic-numbers": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.15.4
  "eslint/no-multi-assign": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.5.3
  "eslint/no-multi-str": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.15.4
  "eslint/no-nested-ternary": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.9.2
  "eslint/no-new-func": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.9.10
  "eslint/no-return-assign": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.2.15
  "eslint/no-script-url": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.2.14
  "eslint/no-template-curly-in-string": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.2.14
  "eslint/no-ternary": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v1.16.0
  "eslint/no-useless-computed-key": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v1.59.0
  "eslint/object-shorthand": "off",
  // TODO: decide whether to enable. default=off; fixable=⚠️ 🛠️; version=v0.15.13
  "eslint/operator-assignment": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v1.65.0
  "eslint/prefer-arrow-callback": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v1.43.0
  "eslint/prefer-const": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v1.10.0
  "eslint/prefer-destructuring": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v0.4.0
  "eslint/prefer-exponentiation-operator": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v1.68.0
  "eslint/prefer-named-capture-group": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v0.7.0
  "eslint/prefer-numeric-literals": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v0.11.0
  "eslint/prefer-object-has-own": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v0.15.9
  "eslint/prefer-object-spread": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.15.7
  "eslint/prefer-promise-reject-errors": "off",
  // TODO: decide whether to enable. default=off; fixable=🚧; version=v1.64.0
  "eslint/prefer-regex-literals": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.15.4
  "eslint/prefer-rest-params": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.0.17
  "eslint/prefer-spread": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v1.12.0
  "eslint/prefer-template": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v0.4.4
  "eslint/sort-imports": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v0.9.4
  "eslint/sort-keys": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.15.4
  "eslint/vars-on-top": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v0.14.1
  "eslint/yoda": "off",
}

const suspicious: DummyRuleMap = {
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.16.9
  "eslint/block-scoped-var": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.9.7
  "eslint/no-extend-native": "off",
  // TODO: decide whether to enable. default=off; fixable=🚧; version=v1.1.0
  "eslint/no-extra-bind": "off",
  // TODO: decide whether to enable. default=error; fixable=none; version=v1.66.0
  "eslint/no-implied-eval": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.4.0
  "eslint/no-new": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v1.48.0
  "eslint/no-shadow": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v1.62.0
  "eslint/no-underscore-dangle": "off",
  // TODO: decide whether to enable. default=off; fixable=⚠️ 🛠️; version=v0.9.7
  "eslint/no-unexpected-multiline": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v1.48.0
  "eslint/no-unmodified-loop-condition": "off",
  // TODO: decide whether to enable. default=off; fixable=⚠️ 🛠️; version=v0.15.12
  "eslint/no-unneeded-ternary": "off",
  // TODO: decide whether to enable. default=off; fixable=🚧; version=v0.4.2
  "eslint/no-useless-concat": "off",
  // TODO: decide whether to enable. default=off; fixable=💡; version=v0.4.4
  "eslint/no-useless-constructor": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v1.16.0
  "eslint/preserve-caught-error": "off",
}

export const eslintRules: DummyRuleMap = {
  ...correctness,
  ...nursery,
  ...pedantic,
  ...perf,
  ...restriction,
  ...style,
  ...suspicious,
}
