import prettier from "eslint-plugin-prettier/recommended"
import {defineConfig} from "eslint/config"

export default defineConfig({
  extends: [prettier],
  rules: {
    "prettier/prettier": [
      "error",
      {htmlWhitespaceSensitivity: "ignore", parser: "angular"},
    ],
  },
})
