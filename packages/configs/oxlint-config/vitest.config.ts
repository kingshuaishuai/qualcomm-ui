import {defineConfig} from "vitest/config"

export default defineConfig({
  test: {
    css: false,
    include: ["tests/*.spec.ts"],
    testTimeout: 30000,
  },
})
