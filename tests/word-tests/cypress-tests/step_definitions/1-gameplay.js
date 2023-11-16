import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that I am on the first page', () => {
  cy.visit('/');
});

Then('wait for the splash screen to disappear', () => {
  // TODO: implement step
  cy.get('.splash').should('not.exist', { timeout: 20000 });
});

Then('{string} to show', (text) => {
  cy.get('body').contains(text);
});