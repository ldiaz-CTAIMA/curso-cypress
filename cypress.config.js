const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'b36osx',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
