beforeEach(() => {
    cy.log(
      "This will run before every scenario of GoogleSearch.feature test, but NEVER for other feature files"
    );
  });
  