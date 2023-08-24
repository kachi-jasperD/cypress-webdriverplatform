/// <reference types="Cypress" />

describe("Verifying variables, cypress commands and jquery commands", () => {
  it("Navigating to specific product pages", () => {
    cy.visit("https://automationteststore.com/");
    const makeupLink = cy
      .get("a[href*='=product/category&path=']")
      .contains("Makeup");
    const skincareLink = cy
      .get("a[href*='=product/category&path=']")
      .contains("Skincare");
    makeupLink.click();
    skincareLink.click();

    // This Fails
    // makeupLink.click().then((elementName) => {
    //   console.log(elementName);
    // });
  });
  it("Validate page header", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='=product/category&path=']").contains("Makeup").click();

    // wrong implementation
    // const header = cy.get("h1 .maintext");
    // cy.log(header);

    // header.then((headerName) => {
    //   cy.log(headerName);
    // });

    cy.get("h1 .maintext").then(($headerText) => {
      const headerText = $headerText.text();
      cy.log("Found header Text: " + headerText);
      expect(headerText).is.eq("Makeup");
    });
  });
});
