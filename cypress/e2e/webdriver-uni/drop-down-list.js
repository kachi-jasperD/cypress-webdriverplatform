/// <reference types="cypress"/>

describe("Interact with dropdown lists via webdriveruni", () => {
  it("Select specific values select dropdown lists", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click();
    cy.get("#dropdowm-menu-1").select(3);
    cy.get("#dropdowm-menu-1").select("C#");
    cy.get("#dropdowm-menu-2").select("TestNG");
    cy.get("#dropdowm-menu-3").select("JQuery"); //you can select by value or the test
  });
  it.only("Select Maven based on value and Testng based on text", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click();
    cy.get("#dropdowm-menu-2").select("maven").should("have.value", "maven");
    cy.get("#dropdowm-menu-2").select("TestNG").should("contain", "TestNG");
  });
});
