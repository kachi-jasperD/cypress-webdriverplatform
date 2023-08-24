/// <reference types="cypress"/>

describe("Verify radio-buttons via webdriver uni", () => {
  beforeEach(() => {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click();
  });
  it("Check and validate radio", () => {
    //prone to failure selector is not so unique
    // cy.get('[value="blue"]').check();

    cy.get("#radio-buttons").find("[type='radio']").first().check();
    cy.get("#radio-buttons").find("[type='radio']").eq(4).check();
    cy.get("#radio-buttons [type='radio']").eq(3).check();
  });
  it("Validate the state of specific radio button", () => {
    // cy.get("#radio-buttons-selected-disabled")
    //   .find("[value='lettuce']")
    //   .check();

    cy.get("[value='lettuce']").should("not.be.checked");
    cy.get("[value='pumpkin']").should("be.checked");
    cy.get("[value='lettuce']").check();
    cy.get("[value='pumpkin']").should("not.be.checked");
    cy.get("[value='cabbage']").should("have.attr", "disabled");
    cy.get("[value='cabbage']").should("be.disabled");
  });
});
