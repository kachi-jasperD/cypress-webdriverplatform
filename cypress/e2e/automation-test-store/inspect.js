/// <reference types="Cypress" />

describe("Inspect Automation Test Store Items using Chain of Commands", () => {
  it("Click on the first item using item header", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(
      "#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname"
    ).click();
  });
  it("Click on the first item using item text", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".prdocutname").contains("Skinsheen Bronzer Stick").click();
  });
  it("Click on the first item using item text and regular expression", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".prdocutname")
      .contains(/SKINSHEEN BRONZER STICK/i)
      .click()
      .then((itemHeaderText) => {
        console.log("Selected the following item: " + itemHeaderText.text());
      });
  });
  it("Click on the first item using item text and regular expression", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".fixed_wrapper").find(".prdocutname").eq(0).click();
  });
  it.only("Click on the first item using selector and eq only", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".prdocutname").eq(0).click();
  });
});
