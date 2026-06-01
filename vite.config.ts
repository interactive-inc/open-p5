import { defineConfig } from "vite-plus"

export default defineConfig({
  staged: {
    "*": "vp check --fix",
  },
  fmt: {
    semi: false,
    ignorePatterns: ["node_modules", "bun.lock"],
  },
  lint: {
    ignorePatterns: ["node_modules"],
    overrides: [
      {
        files: ["works/**/*.ts"],
        rules: {
          "no-unused-vars": "off",
        },
      },
    ],
  },
})
