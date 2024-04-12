import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let url = "https://app-test.zignsec.com/login";
Given('that I am logged in', () => {
    cy.visit(url);
    cy.get('#input-16').click().type('linus.zakrisson@zignsec.com');
    cy.get('#input-19').click().type('r2D{Es~p811jzQ?N');
    cy.get('.v-btn__content').click();
    cy.contains('Welcome to the ZignSec Portal!').should('be.visible');
});

Given('I have entered the Online ID Scan product', () => {
    cy.get('[href="/app/products/"] > .tw-capitalize').click();
    cy.contains('All Products').should('be.visible');
    cy.get('tr > :nth-child(1) > a').click();
    cy.wait(1500);
});

Given('that I click the {string} button', (newSession) => {
    cy.get(newSession).click();
});

When('I click the {string} button', (cancelButton) => {
    cy.get(cancelButton).click();
});

Then('I should see the {string} text', (idText) => {
    cy.contains(idText).should('be.visible');
});

When('I have clicked the {string} button and typed {string}', (button, type) => {
    cy.get(button).click().type(type);
});

When('I have clicked the {string} button', (button) => {
    cy.get(button).click();
});

When('I have selected analysis type {string}', (analysisType) => {
    cy.contains(analysisType).click();
});
