import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that I am on the first page', () => {
  cy.visit('/');
});

Then('wait for the splash screen to disappear', () => {
  // TODO: implement step
  cy.get('.splash').should('not.exist', { timeout: 20000 });
});

Then('{string} to show', (text) => {
  cy.get('body').contains(text);
});

Then('I press on the button', () => {
  cy.get('.start-btn').click();
});

Then('the game should start', () => {
  cy.get('.middle').should('be.visible');
  let initialLetter;
  cy.get('.middle > :nth-child(2)').invoke('text').then((text) => {
    let initialLetter = text.trim();

    cy.get('.top.right').click();
    
    // Use a new 'cy.get' here to wait for the text to change after the click
    cy.get('.top.right').should('contain', initialLetter + "Klar");
  });
  

});
