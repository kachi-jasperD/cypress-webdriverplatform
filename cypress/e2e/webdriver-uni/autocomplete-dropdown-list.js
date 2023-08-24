/// <reference types="cypress"/>

describe("Verify Autocomplete list via webdriveruni", () => {
  it("Select specific product via Autocomplete list", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#autocomplete-textfield").invoke("removeAttr", "target").click();
    cy.get("#myInput").type("a");
    cy.get("#myInputautocomplete-list > *")
      .each(($el, index, $list) => {
        const product = $el.text();
        const productToSelect = "Asparagus";

        if (product === productToSelect) {
          //   $el.click();
          $el.trigger("click");
          cy.get("#submit-button").click();
          cy.url().should("include", productToSelect);
        }
      })
      .then(() => {
        cy.get("#myInput").type("g");
        cy.get("#myInputautocomplete-list > *").each(($el, index, $list) => {
          const product = $el.text();
          const productToSelect = "Grapes";

          if (product === productToSelect) {
            // $el.click();//deprecated
            $el.trigger("click");
            cy.get("#submit-button").click();
            cy.url().should("include", productToSelect);
          }
        });
      });
  });
});
