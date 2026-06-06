// Copyright (c) Qualcomm Technologies, Inc. and/or its subsidiaries.
// SPDX-License-Identifier: BSD-3-Clause-Clear

import type {DummyRuleMap} from "oxlint"

const correctness: DummyRuleMap = {
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.0.16
  "jsx-a11y/alt-text": "off",
  // TODO: decide whether to enable. default=off; fixable=💡; version=v0.0.18
  "jsx-a11y/anchor-has-content": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.0.19
  "jsx-a11y/anchor-is-valid": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.2.1
  "jsx-a11y/aria-activedescendant-has-tabindex": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v0.0.22
  "jsx-a11y/aria-props": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v1.36.0
  "jsx-a11y/aria-proptypes": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.1.1
  "jsx-a11y/aria-role": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v0.1.1
  "jsx-a11y/aria-unsupported-elements": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.2.0
  "jsx-a11y/autocomplete-valid": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.2.1
  "jsx-a11y/click-events-have-key-events": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v1.65.0
  "jsx-a11y/control-has-associated-label": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.0.19
  "jsx-a11y/heading-has-content": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.0.18
  "jsx-a11y/html-has-lang": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.0.19
  "jsx-a11y/iframe-has-title": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.0.19
  "jsx-a11y/img-redundant-alt": "off",
  // TODO: decide whether to enable. default=off; fixable=💡; version=v1.63.0
  "jsx-a11y/interactive-supports-focus": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.9.1
  "jsx-a11y/label-has-associated-control": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.1.1
  "jsx-a11y/lang": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.1.1
  "jsx-a11y/media-has-caption": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.1.1
  "jsx-a11y/mouse-events-have-key-events": "off",
  // TODO: decide whether to enable. default=off; fixable=💡; version=v0.0.21
  "jsx-a11y/no-access-key": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v0.0.22
  "jsx-a11y/no-aria-hidden-on-focusable": "off",
  // TODO: decide whether to enable. default=off; fixable=💡; version=v0.0.19
  "jsx-a11y/no-autofocus": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.0.22
  "jsx-a11y/no-distracting-elements": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v1.65.0
  "jsx-a11y/no-interactive-element-to-noninteractive-role": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v1.65.0
  "jsx-a11y/no-noninteractive-element-interactions": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v1.64.0
  "jsx-a11y/no-noninteractive-element-to-interactive-role": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.15.4
  "jsx-a11y/no-noninteractive-tabindex": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v0.2.1
  "jsx-a11y/no-redundant-roles": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v1.37.0
  "jsx-a11y/no-static-element-interactions": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.1.1
  "jsx-a11y/prefer-tag-over-role": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.2.0
  "jsx-a11y/role-has-required-aria-props": "off",
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.2.0
  "jsx-a11y/role-supports-aria-props": "off",
  // TODO: decide whether to enable. default=off; fixable=🛠️; version=v0.0.19
  "jsx-a11y/scope": "off",
  // TODO: decide whether to enable. default=off; fixable=⚠️ 💡; version=v0.0.21
  "jsx-a11y/tabindex-no-positive": "off",
}

const restriction: DummyRuleMap = {
  // TODO: decide whether to enable. default=off; fixable=none; version=v0.13.2
  "jsx-a11y/anchor-ambiguous-text": "off",
}

export const jsxA11yRules: DummyRuleMap = {
  ...correctness,
  ...restriction,
}
