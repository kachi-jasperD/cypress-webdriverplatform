/// <reference types="Cypress"/>

describe("Test mouse Actions", () => {
  it("Scroll element into view", () => {
    cy.visit("https://webdriveruniversity.com/");
    // cy.get("#actions").invoke("removeAttr", "target").click();
    cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click();
  });
  it("I should be able to drag and drop a dragable item", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click();

    cy.get("#draggable").trigger("mousedown", { which: 1 });
    cy.get("#droppable")
      .trigger("mousemove")
      .trigger("mouseup", { force: true });
  });
  it("I should be able to perform a double mouse click", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click();

    cy.get("#double-click").trigger("dblclick");
  });
  it.only("I should be able to hold down the left mouse click button on a given element", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click();

    cy.get("#click-box")
      .trigger("mousedown")
      .then(($element) => {
        expect($element.text()).to.equal(
          "Well done! keep holding that click now....."
        );
        expect($element).to.have.css("background-color", "rgb(0, 255, 0)");
      })
      .then(($element) => {
        //1st WAY
        $element.trigger("mouseup");
        expect($element.text()).to.equal("Dont release me!!!");
        //2nd WAY
        // cy.get("#click-box")
        //   .trigger("mouseup")
        //   .should("have.text", "Dont release me!!!");
      });
  });
});
