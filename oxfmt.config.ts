import type {OxfmtConfig} from "oxfmt"

import config from "@qualcomm-ui/oxfmt-config"

export default {
  ...config,
  ignorePatterns: [
    ...(config.ignorePatterns ?? []),
    "**/vite.config.ts.timestamp*",
    "**/frameworks/react-internal/files/component-list.md",
    "**/generated/**",
    "**/*/dist",
    "packages/**/qui-env.d.ts",
    "**/*.{md,mdx,yml,yaml,json,css}",
    "**/*.{webmanifest}",
  ],
} satisfies OxfmtConfig
