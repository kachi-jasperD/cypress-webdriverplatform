/// <reference types="cypress"/>

describe("Chrome users are unable to print two factor auth recovery codes", () => {
  it("10981-bug Fix", () => {
    // Login Page
    cy.visit("https://fly-standalone.customer.io/");
    // cy.wait(5000);
    cy.get("[data-test-login-form-input='email']").type(
      "kachi-test@customer.io"
    );
    cy.get("[data-test-login-form-submit]")
      .contains("Log in to Customer.io")
      .click();

    // cy.get("[data-test-fly-input-input]").type("abc123");
    cy.get("[data-test-login-form-input='password']").type("ASDFghjkl123!@#");
    cy.get("[data-test-login-form-submit]").click();

    //base or common page
    cy.get(".hydra-top-nav__icon-control")
      .contains("Settings")
      .click({ force: true });
    cy.get(".fly-dropdown-item").contains("Personal settings").click();

    //personal setting page
    cy.wait(5000);
    cy.get("[data-test-2fa-manage]").click();
    cy.get("[data-test-settings-security-enable]").click();

    //clicking the print button
    //2FA page
    //uncaught:exception
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });

    // handles newTabs that don't have target or href
    cy.window().then(($win) => {
      cy.stub($win, "open").as("newTabs");
    });

    cy.get("[data-test-2fa-backup-codes-print]").click();

    cy.get("@newTabs").should("be.called");
  });
});
