const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'vbcq8h',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    excludeSpecPattern: "cypress/e2e/office work/*.{js,jsx,ts,tsx,feature}",
    chromeWebSecurity: false,
    baseUrl: "https://webdriveruniversity.com/",
    // defaultCommandTimeout: 10000,
    // pageLoadTimeout: 120000,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    viewportHeight: 1920,
    viewportWidth: 1920,
    env: {
      first_name: "Sarah",
    },
  },
});
