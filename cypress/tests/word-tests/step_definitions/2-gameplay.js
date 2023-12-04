const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

let corners = { 'top left': [], 'top right': [], 'bottom left': [], 'bottom right': [] };
let cornerClasses = ['.top.left', '.bottom.left', '.top.right', '.bottom.right'];

// Replace the original dictionary with a custom dictionary
Given('that the original dictionary is replaced by the custom dictionary', () => {
  cy.intercept('GET', '/workers/dictionaries/svenska-ord.txt', { fixture: 'custom-dictionary.txt' });
  cy.intercept('GET', '/workers/dictionaries/svenska-pronomen.txt', { fixture: 'empty.txt' });
});

Given('I am on the game page past the loading screen', () => {
  cy.visit('/game');
  cy.wait(1000);
  cy.get('.splash').should('not.exist', { timeout: 20000 });
});

When('I place {int} letters in the {string} corner', (numLetters, corner) => {
  const classOfCorner = corner.split(' ');

  for (let i = 0; i < numLetters; i++) {
    cy.get('.middle').children().should('have.length', 3);
    cy.get('.middle').children().eq(1).then((el) => {
      corners[corner].push(el.text());
    });
    cy.get(`.${classOfCorner.join('.')}`).click();
  }
});

When('I place {int} letters in each corner', (count) => {
  for (let classOfCorner of cornerClasses) {
    for (let i = 0; i < count; i++) {
      cy.get(`.middle`).children().should('have.length', 3);
      cy.get(classOfCorner).click();
    }
  }
});

Then('all corners should be open', () => {
  cy.get(`${cornerClasses}`).should('not.have.class', 'valid');
  cy.get(`${cornerClasses}`).should('not.have.class', 'invalid');
  cy.get(`${cornerClasses}`).should('not.have.class', 'invalid-by-timeout');
});

Then('the letters should be in the correct order', () => {
  Object.entries(corners).forEach(([corner, letters]) => {
    const cornerClasses = corner.toLowerCase().replace(' ', '-').split('-');
    const expectedOrder = corner.includes('right') ? letters.slice().reverse() : letters;

    cy.get(`.${cornerClasses.join('.')}`)
      .invoke('text')
      .then((actualText) => {
        // Extract only the first two letters (remove additional characters after)
        const actualLetters = actualText.match(/[A-Ö]{1,2}/g).join('').slice(0, 2); // Limit to two characters
        const expectedLetters = expectedOrder.join('');

        expect(actualLetters).to.equal(expectedLetters);
      });
  });
});

Then('I should have {int} points', (points) => {
  cy.get('.score').should('contain', points);
});

When('I wait until a corner is invalid by timeout', () => {
  cy.get('.invalid-by-timeout', { timeout: 20000 }).should('exist');
});

Then('the game should be reset', () => {
  cy.get('.middle').should('not.have.text', 'GAME OVER');
  cy.get('.score').should('contain', 'POÄNG: 0');
  cy.get('.invalid').should('not.exist');
  cy.get('.restart-buttons').should('not.exist');
  cy.get('invalid-by-timeout').should('not.exist');
});