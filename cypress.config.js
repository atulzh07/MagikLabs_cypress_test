const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    setupNodeEvents(on, config) {

      require('cypress-mochawesome-reporter/plugin')(on);

    },
    specPattern: 'cypress/e2e/*.js',
    watchForFileChanges: false,
        
  },
  viewportHeight: 1000,
  viewportWidth: 2000
});
