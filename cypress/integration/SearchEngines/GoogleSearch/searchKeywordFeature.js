import { Given, Then } from "cypress-cucumber-preprocessor/steps";

const url = "https://www.google.com/search?q=cypress+cucumber+example";

Given(`I look for a specific keyword in google search engine`, () => {
  cy.visit(url);
});

// here we check if the page contains as title the keywords we included previously
Then(`I see the results of my search on the engine`, () => {
  cy.get("head > title").contains("cypress cucumber example");
});
