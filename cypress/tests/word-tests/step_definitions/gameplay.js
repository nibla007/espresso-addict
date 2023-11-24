import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that I am on the game page', () => {
  cy.visit('/game');
});

Given('that I am playing the game', () => {
  // Intercept requests
  cy.intercept('GET', '/workers/dictionaries/svenska-ord.txt', { fixture: 'combinations.txt' });
  cy.intercept('GET', '/workers/dictionaries/svenska-pronomen.txt', { fixture: 'empty.txt' });
  cy.get('.splash').should('not.exist', { timeout: 20000 });
  cy.get('.game').should('exist');
});


When('I spell a word', () => {
  function spellAWord() {
    cy.get('.top.right').should('not.be.disabled').click({ force: true });
    cy.get('.top.right').should('be.visible');
    cy.get('.top.right').first().then(initialLetter => {

      let valid = Cypress.$(initialLetter).hasClass('valid');

      
      if (valid) {
        cy.get('.top.right').should('have.class', 'valid');
      } else {
        spellAWord();
      }
    });
  }
  spellAWord();
});


When('I click Klar button', () => {
  // TODO: implement step
});

Then('I get points', () => {
  // TODO: implement step
});

When('I click Lås upp & få hjälp button', () => {
  // TODO: implement step
});

Then('the red corner is unlocked', () => {
  // TODO: implement step
});

Then('I get help', () => {
  // TODO: implement step
});

When('I lose', () => {
  // TODO: implement step
});

When('I see gameover text', () => {
  // TODO: implement step
});

When('I click Spela igen button', () => {
  // TODO: implement step
});

Then('the game resets', () => {
  // TODO: implement step
});