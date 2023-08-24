/// <reference types="cypress"/>

describe("Verify checkboxes via webdriver uni", () => {
  beforeEach(() => {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click();
  });
  it("Check and validate checkboxes", () => {
    // cy.get("#checkboxes > :nth-child(1) > input").should("not.be.checked");
    // cy.get("#checkboxes > :nth-child(1) > input").check();
    // cy.get("#checkboxes > :nth-child(1) > input").should("be.checked");

    // improved versioin
    cy.get("#checkboxes > :nth-child(1) > input").as("option-1");
    cy.get("@option-1").should("not.be.checked");
    cy.get("@option-1").check();
    cy.get("@option-1").should("be.checked");
  });
  it("Uncheck and validate checkboxes", () => {
    // cy.get(":nth-child(5) > input").as("option-3");
    // cy.get("@option-3").should("be.checked");
    // cy.get("@option-3").uncheck();
    // cy.get("@option-3").should("not.be.checked");

    // short
    cy.get(":nth-child(5) > input").as("option-3");
    cy.get("@option-3").should("be.checked").uncheck().should("not.be.checked");
  });
  it("Check and validate multiple checkbox", () => {
    cy.get("input[type='checkbox']")
      .check(["option-1", "option-2", "option-3", "option-4"])
      .should("be.checked");
  });
});
