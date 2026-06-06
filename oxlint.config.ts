import {defineConfig} from "oxlint"

import {
  angularOverrides,
  angularPlugins,
} from "@qualcomm-ui/oxlint-config/angular"
import {baseJsPlugins} from "@qualcomm-ui/oxlint-config/base"
import {reactOverrides, reactPlugins} from "@qualcomm-ui/oxlint-config/react"
import {
  typescriptOverrides,
  typescriptPlugins,
} from "@qualcomm-ui/oxlint-config/typescript"

export default defineConfig({
  jsPlugins: baseJsPlugins,
  overrides: [
    ...typescriptOverrides,
    ...reactOverrides.map((override) => ({
      ...override,
      files: ["packages/react/**/*.{jsx,tsx}"],
    })),
    ...angularOverrides.map((override) => ({
      ...override,
      files: ["packages/angular/**/*.ts"],
    })),
  ],
  plugins: [
    ...new Set([...typescriptPlugins, ...reactPlugins, ...angularPlugins]),
  ],
  rules: {
    "oxfmt/format": "error",
  },
})
