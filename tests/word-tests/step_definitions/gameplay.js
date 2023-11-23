import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that I am on the game page', () => {
  cy.visit('/game');
});

Given('that I am playing the game', () => {
  // Retry fetch until it succeeds
  cy.intercept('GET', '/workers/dictionaries/svenska-ord.txt'), (req) => {
    req.headers['status'] = '200';
  };
  cy.get('.splash').should('not.exist', { timeout: 2000 });
  cy.get('.game').should('exist');
});

When('I spell a word', () => {
  function spellAWord() {
    cy.wait(3000);
    cy.get('.top.right').click();
    cy.get('.top.right').should('not.be.empty');
    cy.get('.description').then(elements => {
      let initialLetter = text.trim();
      cy.get('.top.right').click();
      cy.log(initialLetter);
      if ('.top.right' != ".top.right.invalid-by-timeout") {
        spellAWord();
      }
    });
  };
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