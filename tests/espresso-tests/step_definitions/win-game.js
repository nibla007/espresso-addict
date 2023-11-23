import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
let baseUrl = 'http://127.0.0.1:5500/index.html';
When('I have successfully won the game', () => {
  cy.visit(baseUrl);
  // Enter cafe
  cy.get('ul>li').eq(0).click();
  // Buy two espressos
  cy.get('ul>li').eq(1).click();
  cy.get('ul>li').eq(1).click();
  // Leave cafe
  cy.get('ul>li').eq(0).click();
  // Go north
  cy.get('ul>li').eq(2).click();
  // Wait until see text "You sharpen your ears. You hear people laughing and buzzing to the east? Could it be a cafe?"
  function recursion() {
    cy.get('ul>li').eq(0).click();
    cy.get('.description').should('not.be.empty');
    cy.get('.description').then(elements => {
      let descriptionText = elements.els[0].text();
      cy.log(descriptionText);
      if (descriptionText !== "You sharpen your ears. You hear people laughing and buzzing to the east? Could it be a cafe?") {
        recursion();
      }
    });
  };
  recursion();
  cy.get('ul>li').eq(2).click();
});


Then('I should see the text {string}', (gameOver) => {
  cy.contains(gameOver).should('be.visible');
});