import {defineConfig} from "oxlint"

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
})
