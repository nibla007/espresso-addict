const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("that I am on the {string} page", (endpoint) => {
  cy.visit(endpoint);
});

When('I click the {string} button in the navbar', (buttonName) => {
  cy.get('.menu').contains(buttonName).click();
});

When('I click the {string} button', (buttonClass) => {
  cy.get(`${buttonClass}`).click();
});

Then('I should be on the {string} page', (buttonText) => {
  cy.url().should('eq', buttonText);
});