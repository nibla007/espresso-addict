import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let baseUrl = 'http://127.0.0.1:5500/index.html'
When('I have waited enough times to die', () => {
  cy.visit(baseUrl)
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
  // TODO: implement step
});

Then('I should see the {string} text', (a) => {
  // TODO: implement step
});

When('I click Go south', () => {
  // TODO: implement step
});