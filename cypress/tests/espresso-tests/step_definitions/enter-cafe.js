import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let baseUrl = 'http://127.0.0.1:5500/index.html';

Given('that I am on start page', () => {
  cy.visit(baseUrl);
  cy.get('ul li:first').should('be.visible');
});

When('I click the Enter the cafe button', () => {
  cy.get('ul li:first').click();
});

Then('I should see the exit the cafe button', () => {
  cy.get('ul li:first').should('be.visible');
});

When('I click the buy an espresso button', () => {
  cy.visit(baseUrl);
  cy.get('ul li:first').click();
  cy.get('ul>li').eq(1).click();
});

Then('I should have five dollars', () => {
  cy.get('.money > .progress > .bad > .val').should('have.text', '5');
});

Then('I should have one espresso', () => {
  cy.get('.espressocups > .progress > .bad > .val').should('have.text', '1');
});

Given('that I am in the cafe', () => {
  cy.visit(baseUrl);
  cy.get('ul li:first').click();
});

When('I click the wait button until I lose health', () => {
  // Change until the barista looks at you
  function recursion() {
    cy.get('ul>li').eq(2).click();
    cy.get('.description').should('not.be.empty');
    cy.get('.description').then(elements => {
      let descriptionText = elements.els[0].text();
      if (descriptionText != "You wait. The barista looks at you.") {
        recursion();
      }
    });
  };
  recursion();
});

Then('I should have lost three health', () => {
  cy.get('.health > .progress > .bad > .val').should('have.text', '47');
});

When('I click the help button', () => {
  cy.get('ul li:first').click();
});

Then('I should see the {string}', (description) => {
  cy.get('ul>li').eq(3).click();
  cy.contains(description).should('be.visible');
  cy.get('p.description').should('be.visible');
});

When('I click the Wait button enough times', () => {
  // Since we are looping we actually click in the then part
});

Then('all sub scenarios should show eventually', () => {

  let subScenes = [
    {
      description: "You wait. The barista looks at you.",
      shown: false
    },
    {
      description: "You wait. The barista says: You look like you could use some Java...",
      shown: false
    },
    {
      description: "The barista is in a dark corner phoning a friend. You overhear parts of the conversion: \"I'm tired of pushing coffee. I just want a beer, but I'm stuck here for like 5 more hours... Man, I tell you if someone would just bring me a beer...\"",
      shown: false
    }
  ];
  let waitCounter = 0;

  function recursion() {
    cy.get('ul>li').eq(2).click();
    cy.get('.description').should('not.be.empty');
    cy.get('.description').then(elements => {
      let descriptionText = elements.els[0].text();
      subScenes.find(x => x.description === descriptionText).shown = true;
      if (subScenes.filter(x => x.shown).length < 3) {
        waitCounter++;
        expect(waitCounter).to.be.lessThan(10);
        recursion();
      }
    });
  }
  recursion();
});