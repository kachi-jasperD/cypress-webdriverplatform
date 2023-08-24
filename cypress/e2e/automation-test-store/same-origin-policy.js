/// <reference types="Cypress" />

describe("Cypress web security", () => {
  it("Validating visiting two different domains", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.visit("https://google.com/");
  });
  it("Validating visiting two different domains via user actions", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#automation-test-store").invoke("removeAttr", "target").click();
  });
  it.only("Origin command", () => {
    cy.origin("webdriveruniversity.com", () => {
      cy.visit("/");
    });
    cy.origin("automationteststore.com", () => {
      cy.visit("/");
    });
    // cy.visit("https://www.webdriveruniversity.com/");
    // cy.visit("https://selectors.webdriveruniversity.com/");
  });
});
