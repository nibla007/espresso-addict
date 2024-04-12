import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { recursion, recursionWait, recursionTwo, subRecursion } from './testFunctions';

let baseUrl = 'http://127.0.0.1:5500/index.html'

Given('I am on the start page', () => {
  cy.visit(baseUrl)
});

Given('that I have successfully lost the game', () => {
  recursion(1, "You health has deteriorated too much - you feel almost dead.Find a caffeine-detox clinic?")
});

Given('that I have successfully won the game', () => {
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
  recursion(0, "You sharpen your ears. You hear people laughing and buzzing to the east? Could it be a cafe?")

  // Go to the east for cafe
  cy.get('ul>li').eq(2).click();

  // Wait until you get a beer
  recursionTwo(0, 'The bartender offers you a can of beer for free... "Come on... Get in to the groove... You can pay me for the next one!"', 1);

  // Expect to have a beer
  cy.get('.bag-content > span').should('have.text', 'a can of beer');

  // Go north
  cy.get('ul>li').eq(1).click();

  // Go south
  cy.get('ul>li').eq(3).click();

  // Wait for certain text to appear then click Go west
  recursionTwo(0, "You wait. You here music coming from the west. Some kind of festival? Out here?", 1);

  // Make sure we entered the band scene
  cy.contains("A guitarist and sax player makes som funky noise.The guitarist doesn't sing too well though.").should('be.visible');

  // click wait button until we see correct text and press Jam with the Band
  recursionTwo(0, 'The guitarist shouts out to you: "You look like a hipp kid, why don\'t come on up and jam with us?"', 0);

  // Expect to get five dollars for jamming with the band
  cy.get(".money > .progress .bad .val").should('have.text', 5);

  // Go east
  cy.get('ul>li').eq(1).click();

  // Go north
  cy.get('ul>li').eq(2).click();

  //Enter cafe again
  cy.get('ul>li').eq(0).click();

  // Buy one espresso
  cy.get('ul>li').eq(1).click();

  // Wait until correct text appears
  recursionTwo(1, 'The barista is in a dark corner phoning a friend. You overhear parts of the conversion: "I\'m tired of pushing coffee. I just want a beer, but I\'m stuck here for like 5 more hours... Man, I tell you if someone would just bring me a beer..."', 1);
});

When('I click the {string} button until I see {string}', (button, description) => {
  recursionWait(button, description);
});

When('I click on the {string} button', (buttonText) => {
  cy.contains(buttonText).click();
});

Then('I should have {int} {string}', (value, stats) => {
  cy.get(`.${stats} .val`).should('have.text', `${value}`);
});

Then('I wait until all sub scenarios are shown', () => {
  subRecursion(2);
});

Then('I should see the exit the cafe button', () => {
  cy.get('ul li:first').should('be.visible');
});

Then('I should see the text {string}', (gameOver) => {
  // Expect to win because 5 espressos was collected.
  // Check if game over text appears
  cy.contains(gameOver).should('be.visible');
  cy.get('.description').should('have.text', gameOver);

  //Check if Play again button appears
  cy.get('.choices ul li').should('be.visible');
});

Then('the player should see the description {string}', (description) => {
  cy.get('.description').should('have.text', description)
});