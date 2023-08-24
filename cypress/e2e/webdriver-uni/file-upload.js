/// <reference types="cypress" />

describe("Test File Upload via webdriveruni", () => {
  beforeEach(() => {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#file-upload").invoke("removeAttr", "target").click();
  });
  it.only("Upload a file", () => {
    cy.get("#myFile").selectFile("cypress/fixtures/laptop.png");
    cy.get("#submit-button").click();
    cy.on("window:alert", (str) => {
      expect(str).to.eq("Your file has now been uploaded!");
    });
  });
  it("Upload no file", () => {
    cy.get("#submit-button").click();
    cy.on("window:alert", (str) => {
      expect(str).to.eq("You need to select a file to upload!");
    });
  });
});
