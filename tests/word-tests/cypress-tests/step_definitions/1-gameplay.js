import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I am on the main page', () => {
  cy.visit('/dictionary');
});