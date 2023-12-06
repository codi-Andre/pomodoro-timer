/// <reference types="vitest" />

import { defineConfig } from "vite"
import solid from "vite-plugin-solid"

export default defineConfig({
  plugins: [solid()],
  base: "/pomodoro-timer",
  test: {
    environment: "jsdom",
    globals: true,
    // prettier-ignore
    testTransformMode: { web: ["/\.[jt]sx?$/"] }, // eslint-disable-line no-useless-escape
    coverage: {
      provider: "v8",
      enabled: true,
      reporter: ["html"]
    }
  }
})
