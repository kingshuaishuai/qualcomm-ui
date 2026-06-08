import {defineConfig} from "oxlint"

import {
  coreJsPlugins,
  corePlugins,
  oxfmtRules,
  sortRules,
  styleGuideRules,
} from "@qualcomm-ui/oxlint-config/core"
import {nodePlugins, nodeRules} from "@qualcomm-ui/oxlint-config/node"
import {
  typescriptPlugins,
  typescriptRules,
} from "@qualcomm-ui/oxlint-config/typescript"
import {uniq} from "@qualcomm-ui/utils/array"

export default defineConfig({
  ignorePatterns: [
    "**/vite.config.ts.timestamp*",
    "**/frameworks/react-internal/files/component-list.md",
    "**/generated/**",
    "packages/**/qui-env.d.ts",
  ],
  options: {
    typeAware: true,
  },
  overrides: [
    {
      files: ["{packages,scripts}/**/*.{js,mjs,cjs}", "*.{js,mjs,cjs}"],
      jsPlugins: [...coreJsPlugins],
      plugins: uniq([...corePlugins, ...nodePlugins]),
      rules: {
        ...sortRules,
        ...styleGuideRules,
        ...nodeRules,
        ...oxfmtRules,
      },
    },
    {
      files: ["{packages,scripts}/**/*.{ts,tsx}", "*.{ts,tsx}"],
      jsPlugins: [...coreJsPlugins],
      plugins: uniq([...corePlugins, ...typescriptPlugins, ...nodePlugins]),
      rules: {
        ...sortRules,
        ...styleGuideRules,
        ...nodeRules,
        ...typescriptRules,
        ...oxfmtRules,
      },
    },
  ],
})
