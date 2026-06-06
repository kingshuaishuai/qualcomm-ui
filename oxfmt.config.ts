import type {OxfmtConfig} from "oxfmt"

import config from "@qualcomm-ui/oxfmt-config"

export default {
  ...config,
  ignorePatterns: [
    ...(config.ignorePatterns ?? []),
    "**/vite.config.ts.timestamp*",
    "**/frameworks/react-internal/files/component-list.md",
    "**/generated/**",
    "packages/**/qui-env.d.ts",
  ],
} satisfies OxfmtConfig
