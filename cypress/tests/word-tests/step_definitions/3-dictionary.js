const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

When('I enter {string} in the searchbar', (letter) => {
  cy.get('[name="searchWord"]').type(letter);
});

Then('there should be {int} results', (numResults) => {
  cy.get('.hits').should('have.text', `${numResults} träffar`);
});

Then('the first result should be {string}', (result) => {
  cy.get('.result>div>span').first().should('have.text', result);
});

Then('the last result should be {string}', (result) => {
  cy.get('.result>div>span').last().should('have.text', result);
});