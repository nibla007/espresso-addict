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
      if (descriptionText !== "You sharpen your ears. You hear people laughing and buzzing to the east? Could it be a cafe?") {
        recursion();
      }
    });
  };
  recursion();

  // Go to the east for cafe
  cy.get('ul>li').eq(2).click();

  // Wait until you get a beer
   function beer() {
    cy.get('ul>li').eq(0).click();
    cy.get('.description').should('not.be.empty');
    cy.get('.description').then(elements => {
      let descriptionText = elements.els[0].text();
      if (descriptionText === 'The bartender offers you a can of beer for free... "Come on... Get in to the groove... You can pay me for the next one!"') {
        cy.get('ul>li').eq(1).click();
      } else {
        beer();
      }
    });
  };
  beer();

  // Expect to have a beer
  cy.get('.bag-content > span').should('have.text', 'a can of beer');

  // Go north
  cy.get('ul>li').eq(1).click();

  // Go south
  cy.get('ul>li').eq(3).click();

  // Wait for certain text to appear then click Go west
  function festival() {
    cy.get('ul>li').eq(0).click();
    cy.get('.description').should('not.be.empty');
    cy.get('.description').then(elements => {
      let descriptionText = elements.els[0].text();
      if (descriptionText === "You wait. You here music coming from the west. Some kind of festival? Out here?") {
        cy.get('ul>li').eq(1).click();
      } else {
        festival();
      }
    });
  };
  festival();

  // Make sure we entered the band scene
  cy.contains("A guitarist and sax player makes som funky noise.The guitarist doesn't sing too well though.").should('be.visible');

  // click wait button until we see correct text and press Jam with the Band
  function jam() {
    cy.get('ul>li').eq(0).click();
    cy.get('.description').should('not.be.empty');
    cy.get('.description').then(elements => {
      let descriptionText = elements.els[0].text();
      if (descriptionText === 'The guitarist shouts out to you: "You look like a hipp kid, why don\'t come on up and jam with us?"') {
        cy.get('ul>li').eq(0).click();
      } else {
        jam();
      }
    });
  };
  jam();

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
  function giveBeer() {
    cy.get('ul>li').eq(1).click();
    cy.get('.description').should('not.be.empty');
    cy.get('.description').then(elements => {
      let descriptionText = elements.els[0].text();
      if (descriptionText === 'The barista is in a dark corner phoning a friend. You overhear parts of the conversion: "I\'m tired of pushing coffee. I just want a beer, but I\'m stuck here for like 5 more hours... Man, I tell you if someone would just bring me a beer..."') {
        // click on the give beer button
        cy.get('ul>li').eq(1).click();
      } else {
        giveBeer();
      }
    });
  };
  giveBeer();
});

Then('I should see the text {string}', (gameOver) => {
  // Expect to win because 5 espressos was collected.
  // Check if game over text appears
  cy.contains(gameOver).should('be.visible');
  cy.get('.description').should('have.text', gameOver);

  //Check if Play again button appears
  cy.get('.choices ul li').should('be.visible');
});