/// <reference types="Cypress" />

describe("Test Contact Us Form via WebdriverUni", () => {
  Cypress.config("defaultCommandTimeout", 20000);
  beforeEach(() => {
    cy.fixture("example.json").then((data) => {
      // this.data = data; //you can use either this or the 1st, but this doesnt work for me
      globalThis.data = data;
      cy.navigateTo_WebdriverUni_Homepage();

      cy.document().should("have.property", "charset").and("eq", "UTF-8");
      cy.title().should("include", "WebDriverUniversity.com");
      cy.get("#contact-us").invoke("removeAttr", "target").click();
    });
  });
  it("Should be able to submit a successful submission via contact us form", () => {
    // cypress code
    cy.title().should("include", "WebDriver | Contact Us");
    cy.url().should("include", "contactus");
    cy.get('[name="first_name"]').type(data.first_name);
    cy.get('[name="last_name"]').type(data.last_name);
    cy.get('[name="email"]').type(data.email);
    cy.get("textarea.feedback-input").type("always learning");
    cy.get('[type="submit"]').click();
    cy.get("h1").should("have.text", "Thank You for your Message!");
  });
  it("updating successful submission to use commands-add", () => {
    // cypress code
    cy.visit("https://webdriveruniversity.com/");
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.title().should("include", "WebDriverUniversity.com");
    cy.get("#contact-us").invoke("removeAttr", "target").click();
    cy.title().should("include", "WebDriver | Contact Us");
    cy.url().should("include", "contactus");
    cy.webdriveruni_ContactForm_Submission(
      data.first_name,
      data.last_name,
      data.email,
      "always learning",
      "h1",
      "Thank You for your Message!"
    );
  });
  it("using environment variables", () => {
    // cypress code
    cy.title().should("include", "WebDriver | Contact Us");
    cy.url().should("include", "contactus");
    cy.webdriveruni_ContactForm_Submission(
      Cypress.env("first_name"),
      data.last_name,
      data.email,
      "always learning",
      "h1",
      "Thank You for your Message!"
    );
  });
  it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
    cy.get('[name="first_name"]').type(data.first_name);
    cy.get('[name="last_name"]').type(data.last_name);
    cy.get("textarea.feedback-input").type("always learning");
    cy.get('[type="submit"]').click();
    cy.get("body").should("contain.text", "Error: all fields are required");
    cy.get("body").should("contain.text", "Error: Invalid email address");
    cy.get("body").contains("Error: all fields are required");
    cy.get("body").contains("Error: Invalid email address");
  });
  it("Should not be able to submit a successful submission via contact us form as all fields are required-using commands.add", () => {
    cy.webdriveruni_ContactForm_Submission(
      data.first_name,
      data.last_name,
      data.email,
      "always learning",
      "h1",
      "Error: all fields are required"
    );
    cy.get("body").should("contain.text", "Error: all fields are required");
    cy.get("body").should("contain.text", "Error: Invalid email address");
    cy.get("body").contains("Error: all fields are required");
    cy.get("body").contains("Error: Invalid email address");
  });
  it("Negative viewport test", () => {
    // cypress code
    cy.negativeViewportTest();
    cy.title().should("include", "WebDriver | Contact Us");
    cy.url().should("include", "contactus");
    cy.webdriveruni_ContactForm_Submission(
      Cypress.env("first_name"),
      data.last_name,
      data.email,
      "always learning",
      "h1",
      "Thank You for your Message!"
    );
  });
});
