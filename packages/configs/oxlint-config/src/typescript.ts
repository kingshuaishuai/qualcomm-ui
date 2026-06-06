// Copyright (c) Qualcomm Technologies, Inc. and/or its subsidiaries.
// SPDX-License-Identifier: BSD-3-Clause-Clear

import {
  defineConfig,
  type DummyRuleMap,
  type OxlintConfig,
  type OxlintOverride,
} from "oxlint"

import {baseOverrides, basePlugins} from "./base.js"

export const typescriptFiles = ["**/*.{ts,tsx,mts,cts}"]

export const typescriptPlugins: NonNullable<OxlintConfig["plugins"]> = [
  "typescript",
  "import",
  "promise",
  "node",
]

export const typescriptRules: DummyRuleMap = {
  curly: "error",
  eqeqeq: ["error", "always", {null: "ignore"}],
  "no-array-constructor": "error",
  "no-case-declarations": "off",
  "no-const-assign": "error",
  "no-duplicate-imports": "off",
  "no-implied-eval": "error",
  "no-inner-declarations": "off",
  "no-prototype-builtins": "off",
  "no-restricted-imports": [
    "error",
    {
      patterns: [
        {
          group: ["@qualcomm-ui/*/src/**/*"],
          message:
            "Relative imports from src directories are not allowed. Please ensure that the targeted dependency is exported properly from its module",
        },
        {
          group: ["@qualcomm-ui/*/src"],
          message: 'Remove "src" (import directly)',
        },
      ],
    },
  ],
  "no-throw-literal": "off",
  "no-undef": "off",
  "no-unused-expressions": "off",
  "no-unused-vars": "off",
  "no-useless-concat": "error",
  "no-useless-escape": "warn",
  "no-var": "error",
  "object-shorthand": "error",
  "prefer-const": "error",
  "prefer-promise-reject-errors": "off",
  "prefer-template": "error",
  "require-await": "off",
  "sort-imports": [
    "error",
    {
      ignoreCase: true,
      ignoreDeclarationSort: true,
    },
  ],
  "sort-keys": [
    "error",
    "asc",
    {
      natural: true,
    },
  ],
  "typescript/await-thenable": "error",
  "typescript/ban-ts-comment": "warn",
  "typescript/consistent-type-exports": [
    "error",
    {fixMixedExportsWithInlineTypeSpecifier: true},
  ],
  "typescript/consistent-type-imports": [
    "error",
    {fixStyle: "inline-type-imports"},
  ],
  "typescript/explicit-member-accessibility": [
    "error",
    {
      accessibility: "explicit",
      overrides: {
        accessors: "no-public",
        constructors: "off",
        methods: "no-public",
        parameterProperties: "off",
        properties: "no-public",
      },
    },
  ],
  "typescript/no-array-delete": "error",
  "typescript/no-base-to-string": "error",
  "typescript/no-duplicate-enum-values": "error",
  "typescript/no-duplicate-type-constituents": "error",
  "typescript/no-empty-interface": "off",
  "typescript/no-empty-object-type": "off",
  "typescript/no-explicit-any": "warn",
  "typescript/no-extra-non-null-assertion": "error",
  "typescript/no-floating-promises": "warn",
  "typescript/no-for-in-array": "error",
  "typescript/no-implied-eval": "off",
  "typescript/no-import-type-side-effects": "error",
  "typescript/no-misused-new": "error",
  "typescript/no-misused-promises": "error",
  "typescript/no-namespace": "error",
  "typescript/no-non-null-asserted-optional-chain": "error",
  "typescript/no-redundant-type-constituents": "off",
  "typescript/no-require-imports": "error",
  "typescript/no-this-alias": "error",
  "typescript/no-unnecessary-type-assertion": "error",
  "typescript/no-unnecessary-type-constraint": "error",
  "typescript/no-unsafe-argument": "warn",
  "typescript/no-unsafe-assignment": "off",
  "typescript/no-unsafe-call": "warn",
  "typescript/no-unsafe-declaration-merging": "error",
  "typescript/no-unsafe-enum-comparison": "error",
  "typescript/no-unsafe-function-type": "error",
  "typescript/no-unsafe-member-access": "warn",
  "typescript/no-unsafe-return": "warn",
  "typescript/no-unsafe-unary-minus": "error",
  "typescript/no-var-requires": "off",
  "typescript/no-wrapper-object-types": "error",
  "typescript/only-throw-error": [
    "error",
    {
      allow: [
        {from: "lib", name: "Response"},
        {from: "package", name: "redirect", package: "react-router"},
      ],
    },
  ],
  "typescript/prefer-as-const": "error",
  "typescript/prefer-namespace-keyword": "error",
  "typescript/prefer-promise-reject-errors": [
    "error",
    {
      allowThrowingUnknown: true,
    },
  ],
  "typescript/require-await": "error",
  "typescript/restrict-plus-operands": "error",
  "typescript/restrict-template-expressions": "error",
  "typescript/triple-slash-reference": "error",
  "typescript/unbound-method": "off",
}

export const typescriptOverrides: OxlintOverride[] = [
  {
    files: typescriptFiles,
    plugins: typescriptPlugins,
    rules: typescriptRules,
  },
]

export const typescriptConfig: OxlintConfig = defineConfig({
  categories: {
    correctness: "warn",
  },
  overrides: [...baseOverrides, ...typescriptOverrides],
  plugins: [...new Set([...basePlugins, ...typescriptPlugins])],
})
