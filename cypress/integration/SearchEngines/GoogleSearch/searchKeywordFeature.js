import { Given, Then } from "cypress-cucumber-preprocessor/steps";

const url = "https://www.google.com/search?q=cypress+cucumber+example";

Given(`I look for a specific keyword in google search engine`, () => {
  cy.visit(url);
});

// This is the same step that we have in socialNetworks/Facebook/different.js, but you don't have to worry about collisions!
Then(`I see the results of my search on the engine`, () => {
  cy.log(`cy tytle contains ${JSON.stringify(cy.title())}`);
  cy.title().should("include", "cypress-cucumber-example");
});
