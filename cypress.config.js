// cypress.config.js
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3001', // Setze hier deine Anwendungs-URL ein
    // Weitere E2E-Konfigurationen können hier vorgenommen werden
  },
});
