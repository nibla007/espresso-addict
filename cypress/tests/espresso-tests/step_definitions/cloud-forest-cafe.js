import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
let baseUrl = 'http://127.0.0.1:5500/index.html'
Given('I am on the start page', () => {
  cy.visit(baseUrl)
});

When('I have waited enough times to die', () => {
  
  function recursion() {
    cy.get('ul>li').eq(1).click();
    cy.get('.description').should('not.be.empty');
    cy.get('.description').then(elements => {
      let descriptionText = elements.els[0].text();
      cy.log(descriptionText);
      if (descriptionText !== "You health has deteriorated too much - you feel almost dead.Find a caffeine-detox clinic?") {
        recursion();
      }
    });
  };
  recursion();
});

Then('I should see description {string}', (description) => {
  cy.contains(description).should('be.visible');
});

When('I click Go north button', () => {
  cy.get('ul>li').eq(2).click();
});

Then('I should see empty street {string} text', (text) => {
  cy.get('.description').should('have.text', text);
});

When('I click Go south', () => {
  cy.get('ul>li').eq(3).click();
});

Then('I should see country-side {string} text', (text) => {
  cy.get('.description').should('have.text', text);
});