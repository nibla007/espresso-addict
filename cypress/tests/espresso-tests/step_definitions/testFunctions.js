function recursion(button, description) {
    cy.get('ul>li').eq(button).click();
    cy.get('.description').should('not.be.empty');
    cy.get('.description').then(elements => {
      let descriptionText = elements.els[0].text();
      cy.log(descriptionText);
      if (descriptionText !== description) {
        recursion(button, description);
      }
    });
};

function recursionTwo(button, description, buttonTwo) {
    cy.get('ul>li').eq(button).click();
    cy.get('.description').should('not.be.empty');
    cy.get('.description').then(elements => {
      let descriptionText = elements.els[0].text();
      if (descriptionText === description) {
        cy.get('ul>li').eq(buttonTwo).click();
      } else {
        recursionTwo(button, description, buttonTwo);
      }
    });
};

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

  
function subRecursion(button) {
    cy.get('ul>li').eq(button).click();
    cy.get('.description').should('not.be.empty');
    cy.get('.description').then(elements => {
      let descriptionText = elements.els[0].text();
      subScenes.find(x => x.description === descriptionText).shown = true;
      if (subScenes.filter(x => x.shown).length < 3) {
        waitCounter++;
        expect(waitCounter).to.be.lessThan(10);
        subRecursion(button);
      }
    });
  }
  
module.exports = { recursion, recursionTwo, subRecursion }