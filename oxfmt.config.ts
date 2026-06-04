import config from "@qualcomm-ui/oxfmt-config"

export default {
  ...config,
  ignorePatterns: [
    ...(config.ignorePatterns ?? []),
    "**/.angular/",
    "**/.nx/",
    "**/.nyc-output/",
    "**/.react-router/",
    "**/.turbo/",
    "**/.sst/",
    "**/build/",
    "**/coverage/",
    "**/dist/",
    "**/node_modules/",
    "**/out/",
    "**/out-tsc/",
    "**/vite.config.ts.timestamp*",
    "./packages/docs/**/src/routes/changelogs.*",
    "./packages/docs/angular*/public/*.js",
    "**/temp/",
    "**/public/exports/**",
    "**/frameworks/react-internal/files/component-list.md",
    "packages/docs/*/knowledge/**",
    "**/generated/**",
    "packages/**/qui-env.d.ts",
  ],
}
