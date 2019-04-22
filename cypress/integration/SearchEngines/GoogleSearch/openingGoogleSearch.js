import { Given } from "cypress-cucumber-preprocessor/steps";

const url = "https://www.google.com/";

Given(`I open Google Search page`, () => {
  cy.visit(url);  
});
