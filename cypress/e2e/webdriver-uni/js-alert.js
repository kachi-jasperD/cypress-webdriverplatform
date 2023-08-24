/// <reference types="cypress"/>

describe("Handle js aerts", () => {
  it("confirm js alert contains the correct test", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#popup-alerts").invoke("removeAttr", "target").click();
    cy.get("#button1").click();

    cy.on("window:alert", (str) => {
      expect(str).to.equal("I am an alert box!");
    });
  });
  it("validate js confirm alert box works correctly when clicking Ok", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#popup-alerts").invoke("removeAttr", "target").click();
    cy.get("#button4").click();

    cy.on("window:confirm", (str) => {
      return true;
    });
    cy.get("#confirm-alert-text").should("have.text", "You pressed OK!");
  });
  it("validate js confirm alert box works correctly when clicking Cancel", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#popup-alerts").invoke("removeAttr", "target").click();
    cy.get("#button4").click();

    cy.on("window:confirm", (str) => {
      return false;
    });
    cy.get("#confirm-alert-text").should("have.text", "You pressed Cancel!");
  });
  it.only("validate js confirm alert box using a stub", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#popup-alerts").invoke("removeAttr", "target").click();

    const stub = cy.stub();
    cy.on("window:confirm", stub);

    cy.get("#button4")
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith("Press a button!");
      })
      .then(() => {
        return true;
      })
      .then(() => {
        cy.get("#confirm-alert-text").should("have.text", "You pressed OK!");
      });
  });
});
