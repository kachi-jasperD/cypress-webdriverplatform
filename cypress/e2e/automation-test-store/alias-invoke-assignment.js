/// <reference types='cypress' />

describe("Alias and invoke", () => {
  it("Count number of product thumbnails (the length)", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".thumbnails .thumbnail").as("productthumbnail");
    cy.get("@productthumbnail").should("have.length", 16);
    cy.get("@productthumbnail")
      .find(".productcart")
      .invoke("attr", "title")
      .should("have.attr", "Add to Cart");
  });

  it.only("Calculate the total of normal and sale products)", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".thumbnails .thumbnail").as("productthumbnail");
    // cy.get("@productthumbnail")
    //   .find(".oneprice")
    //   .each(($el, index, $list) => {
    //     cy.log($el.text());
    //   });

    cy.get("@productthumbnail")
      .find(".oneprice")
      .invoke("text")
      .as("itemPrice");

    cy.get("@productthumbnail")
      .find(".pricenew")
      .invoke("text")
      .as("salePrice");

    var itemsTotal = 0;

    cy.get("@salePrice").then(($linkText) => {
      var salePriceArray = $linkText.split("$");
      var salePriceTotal = 0;
      for (var i = 0; i < salePriceArray.length; i++) {
        salePriceTotal += Number(salePriceArray[i]);
      }
      itemsTotal += salePriceTotal;
      cy.log("Sales Price Total: " + salePriceTotal);
    });

    cy.get("@itemPrice")
      .then(($linkText) => {
        var itemPriceArray = $linkText.split("$");
        var i;
        var itemPriceTotal = 0;
        for (i = 0; i < itemPriceArray.length; i++) {
          itemPriceTotal += Number(itemPriceArray[i]);
        }
        itemsTotal += itemPriceTotal;
        cy.log("Non-sales item Price Total: " + itemPriceTotal);
      })
      .then(() => {
        cy.log("Total Price of all products is : " + itemsTotal);
        expect(itemsTotal).to.equal(660.5);
      });
  });
});
