/// <reference types="cypress" />

describe("Handling data via  webdriveruni", () => {
  beforeEach(() => {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#data-table").invoke("removeAttr", "target").click();
  });
  it("Calculate and assert the total age of all users", () => {
    var userDetails = [];
    var sum = 0;
    cy.get("#thumbnail-1 td")
      .each(($el, index, $list) => {
        userDetails.push($el.text());
        //   userDetails[index] = $el.text(); //this will also work
      })
      .then(() => {
        for (var i = 0; i < userDetails.length; i++) {
          //   cy.log(userDetails[i]);
          if (Number(userDetails[i])) {
            // cy.log(userDetails[i]);
            sum += Number(userDetails[i]);
          }
        }
        cy.log("Found total age" + sum);
        expect(sum).to.eq(322);
      });
  });
  it("Calculate and assert the age of a given user based on last name", () => {
    var userLastName = [];
    var userAge = [];
    cy.get("#thumbnail-1 tr td:nth-child(2)")
      .each(($el, index, $list) => {
        userLastName.push($el.text());
      })
      .then(() => {
        cy.get("#thumbnail-1 tr td:nth-child(3)").each(($el, index, $list) => {
          userAge.push($el.text());
        });
      })
      .then(() => {
        for (var i = 0; i < userLastName.length; i++) {
          if (userLastName[i] === "Woods") {
            cy.log(userAge[i]);
          }
        }
      });
  });
  it.only("another solution to this - Calculate and assert the age of a given user based on last name", () => {
    cy.get("#thumbnail-1 tr td:nth-child(2)").each(($el, index, $list) => {
      const text = $el.text();
      if (text.includes("Woods")) {
        cy.get("#thumbnail-1 tr td:nth-child(2)")
          .eq(index)
          .next()
          .then((age) => {
            const userAge = age.text();
            expect(userAge).to.equal("80");
          });
      }
    });
  });
});
