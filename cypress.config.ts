import { defineConfig } from "cypress";

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {

        },
        baseUrl: "http://localhost:3000",
    },
    projectId: "Margiring",
});