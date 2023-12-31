const { defineConfig } = require("cypress");
const fs = require("fs-extra");
const path = require("path");

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve("cypress/config", `${file}.json`);

  if (!fs.existsSync(pathToConfigFile)) {
    console.log("no custom config file found.");
    return {};
  }

  return fs.readJson(pathToConfigFile);
}

module.exports = defineConfig({
  projectId: "vbcq8h",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const file = config.env.configFile || "";

      return getConfigurationByFile(file);
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    excludeSpecPattern: "cypress/e2e/office-work/*.{js,jsx,ts,tsx,feature}",
    chromeWebSecurity: false,
    baseUrl: "https://webdriveruniversity.com/",
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    viewportHeight: 1920,
    viewportWidth: 1920,
    video: false,
    videoUploadOnPasses: false,
    reporter: "cypress-multi-reporters",
    reporterOptions: {
      configFile: "reporter-config.json",
    },
    retries: {
      runMode: 0,
      openMode: 1,
    },
    env: {
      webdriveruni_homepage: "http://www.webdriveruniversity.com",
      first_name: "Sarah",
    },
  },
});
