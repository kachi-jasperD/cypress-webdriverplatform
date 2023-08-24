/// <reference types="Cypress" />

describe("Add multiple items to basket", () => {
  before(() => {
    cy.fixture("product").then((data) => {
      globalThis.data = data;
    });
  });
  beforeEach(() => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='=product/category&path=']").contains("Hair Care").click();
  });
  it("Add specific items to basket", () => {
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      cy.log("Index: " + index + " : " + $el.text());
    });
  });
  it("Add specific product to basket", () => {
    cy.selectProduct("Eau Parfumee au The Vert Shampoo");
  });
  it.only("Add specific product to basket-1", () => {
    globalThis.data.productName.forEach((element) => {
      cy.addProductToBasket(element);
    });
    cy.get(".dropdown-toggle > .fa").click();
  });
});
