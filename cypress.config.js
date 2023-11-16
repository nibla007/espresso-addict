const { defineConfig } = require("cypress");
const webpack = require("@cypress/webpack-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");

const baseUrl = 'http://localhost:5500';

module.exports = defineConfig(
  {
    e2e:
    {
      defaultCommandTimeout: 60000,
      specPattern: '**/*.feature',
      baseUrl,
      setupNodeEvents(on, config) {
        // implement node event listeners here

        // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
        addCucumberPreprocessorPlugin(on, config);

        on(
          "file:preprocessor",
          webpack(
            {
              webpackOptions:
              {
                resolve: {
                  extensions: [".js"],
                },
                module: {
                  rules:
                    [
                      {
                        test: /\.feature$/,
                        use:
                          [
                            {
                              loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                              options: config,
                            },
                          ],
                      },
                    ],
                },
              },
            }
          )
        );

        // Make sure to return the config object as it might have been modified by the plugin.
        return config;
      }
    }
  }
);