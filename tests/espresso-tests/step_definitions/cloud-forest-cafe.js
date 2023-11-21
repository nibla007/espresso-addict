import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
let baseUrl = 'http://127.0.0.1:5500/index.html'
When('I click wait 2 times', () => {
  cy.visit(baseUrl)
  cy.get('ul>li').eq(1).click()
  cy.get('ul>li').eq(1).click()
});

Then('I have lost fifteen health', () => {
  cy.get('.health > .progress > .bad > .val').should('have.text', 35);
});