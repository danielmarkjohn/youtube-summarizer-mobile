import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://youtube-summarizer-rahuls360.vercel.app",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});