/// <reference types="Cypress" />

describe("Validate webdriveruni homepage links", () => {
  it("Confirm links redirect to the correct pages", () => {
    // cypress code
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#contact-us").invoke("removeAttr", "target").click();
    cy.url().should("includes", "contactus");

    cy.go("back");
    cy.url().should("not.include", "contactus");
    // cy.reload(true)reload with out a cache
    cy.reload();
    cy.go("forward");
    cy.url().should("includes", "contactus");

    cy.go("back");
    cy.get("#login-portal").invoke("removeAttr", "target").click();
    cy.url().should("include", "Login-Portal");
    cy.go("back");

    cy.url().should("not.include", "Login-Portal");
    cy.get("#to-do-list").invoke("removeAttr", "target").click();
    cy.url().should("include", "To-Do-List");
    cy.go("back");
    cy.url().should("not.include", "To-Do-List");
    cy.go("forward");
    cy.url().should("include", "To-Do-List");
    cy.go("back");
  });
});
