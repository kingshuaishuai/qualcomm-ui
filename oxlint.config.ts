import {defineConfig} from "oxlint"

export default defineConfig({
  categories: {
    correctness: "warn",
  },
  jsPlugins: ["oxlint-plugin-oxfmt"],
  plugins: ["import"],
  rules: {
    "eslint/no-unused-vars": "error",
    "import/newline-after-import": ["error", {count: 1}],
    "import/no-cycle": [0],
    "import/no-duplicates": ["error", {"prefer-inline": true}],
    "oxfmt/format": "warn",
  },
})
