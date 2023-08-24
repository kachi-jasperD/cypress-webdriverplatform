/// <reference types="Cypress" />

describe("Test Contact Us Form via Automation Test Store", () => {
  beforeEach(() => {
    cy.fixture("userDetails").as("user");
  });
  it.only("Should be able to submit a successful submission via contact us form", () => {
    // cypress code
    cy.visit("https://automationteststore.com/");
    // cy.get(".info_links_footer > :nth-child(5) > a").click();
    // cy.xpath("//a[contains(@href,'contact')]").click();
    cy.get("a[href$='contact'")
      .click()
      .then((linkText) => {
        // console.log("This is the Name of the button is: " + linkText.text());
        cy.log("Clicked on link using text: " + linkText.text());
      });
    cy.get("@user").then((user) => {
      cy.get("#ContactUsFrm_first_name").type(user.first_name);
      cy.get("#ContactUsFrm_email").type(user.email);
    });

    cy.get("#ContactUsFrm_email").should("have.attr", "name", "email");
    cy.get("#ContactUsFrm_enquiry").type(
      "Do you provide additional discount on bulk orders?"
    );
    cy.get("button[title='Submit']").click();
    cy.get(".mb40 > :nth-child(3)").should(
      "have.text",
      "Your enquiry has been successfully sent to the store owner!"
    );
  });
  it("Validating the properties of the contact us page", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href$='contact'").click();

    //Using cypress command and chaining
    cy.contains("#ContactUsFrm", "Contact Us Form")
      .find("#field_11")
      .should("contain", "First name:");

    // jQuery Approach
    cy.contains("#ContactUsFrm", "Contact Us Form").then((text) => {
      const firstNameText = text.find("#field_11").text();
      expect(firstNameText).to.contain("First name");
    });

    // Embedded commands (Closure)
  });
  it.only("redoing assignment", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href$='contact'")
      .click()
      .then(($linkText) => {
        cy.log("this is the link's text: " + $linkText.text());
      });
  });
});
