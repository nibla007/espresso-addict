import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
let url = 'http://127.0.0.1:5500/index.html'
Given('I am at the {string} place', (name) => {
  cy.visit(url);
  // intercept the start scene and replace it with scenario outline
  cy.intercept('GET', '/data/location-details/cafe.json', { fixture: name });
  cy.get('.description').should('be.visible');
});

Then('I should see a {string}', (description) => {
  // checks all the descriptions of the locations
  cy.get('.description').should('have.text', description);
});

Then('I should see the correct {string}', (image) => {
  // checks all the images of the locations
  cy.get('.big-image').should('have.attr', 'src', image);
});
