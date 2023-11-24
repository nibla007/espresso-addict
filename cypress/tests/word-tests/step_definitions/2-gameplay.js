const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

let corners = { 'top left': [], 'top right': [], 'bottom left': [], 'bottom right': [] };

Given('that the original dictionary is replaced by the custom dictionary', () => {
  cy.intercept('GET', '/workers/dictionaries/svenska-ord.txt', { fixture: 'custom-dictionary.txt' });
  cy.intercept('GET', '/workers/dictionaries/svenska-pronomen.txt', { fixture: 'empty.txt' });
});

Given('I am on the game page past the loading screen', () => {
  corners = { 'top left': [], 'top right': [], 'bottom left': [], 'bottom right': [] };
  cy.visit('/game');
  cy.wait(1000);
  cy.get('.splash').should('not.exist', { timeout: 20000 });
});

When('I claim points in one corner', () => {
  cy.get('.valid > .take-points').click();
});

When('I click on unlock', () => {
  cy.get('.unlock').click();
});

When('I place {int} letters in the {string} corner', (num, cornerClasses) => {
  const classOfCorner = cornerClasses.split(' ');
  for (let i = 0; i < num; i++) {
    cy.get('.middle').children().should('have.length', 3);
    cy.get('.middle').children().eq(1).then((el) => {
      corners[cornerClasses].push(el.text());
    });
    cy.get(`.${classOfCorner.join('.')}`).click();
  }
});

Then('the {string} corner should be empty', (cornerClasses) => {
  cy.get(`.${cornerClasses.split(' ').join('.')}`).should('not.have.class', 'valid');
  cy.get(`.${cornerClasses.split(' ').join('.')}`).should('not.have.class', 'invalid');
  cy.get(`.${cornerClasses.split(' ').join('.')}`).should('not.have.class', 'invalid-by-timeout');
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

Then('there should be no invalid corners', () => {
  cy.get('.invalid-by-timeout').should('not.exist');
});