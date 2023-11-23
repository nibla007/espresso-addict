import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
let baseUrl = 'http://127.0.0.1:5500/index.html'
When('I have waited enough times to see {string}', (description) => {
  cy.visit(baseUrl)
  cy.get('ul>li').eq(2).click();
  function recursion() {
    cy.get('ul>li').eq(0).click();
    cy.get('.description').should('not.be.empty');
    cy.get('.description').then(elements => {
      let descriptionText = elements.els[0].text();
      cy.log(descriptionText);
      if (descriptionText !== description) {
        recursion()
        cy.contains(description).should('be.visible');
      }
    });
  };
  recursion();
});


Then('my health should be 45', () => {
  // TODO: implement step
});