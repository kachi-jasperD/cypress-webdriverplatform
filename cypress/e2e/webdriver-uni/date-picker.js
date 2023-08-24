/// <reference types="cypress" />

describe("Test Datepicker via webdriveruni", () => {
  it("Select date from the datepicker", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#datepicker").invoke("removeAttr", "target").click();
    cy.get("#datepicker").click();

    // let date = new Date();
    // date.setDate(date.getDate());
    // cy.log(date.getDate()); //get current day '13'

    // let date1 = new Date();
    // date1.setDate(date.getDate() + 5);
    // cy.log(date1.getDate()); //get current day '18'

    var date = new Date();
    date.setDate(date.getDate() + 200); //gets current DD

    var futureYear = date.getFullYear(); // get current YYYY
    var futureMonth = date.toLocaleDateString("default", { month: "long" });
    var futureDay = date.getDate();

    cy.log("Future year to select: " + futureYear);
    cy.log("Future month to select: " + futureMonth);
    cy.log("Future day to select: " + futureDay);

    function selectMonthAndYear() {
      cy.get(".datepicker-dropdown")
        .find(".datepicker-switch")
        .first()
        .then((currentYear) => {
          if (!currentYear.text().includes(futureYear)) {
            cy.get(".next").first().click();
            selectMonthAndYear();
          }
        })
        .then((currentMonth) => {
          if (!currentMonth.text().includes(futureMonth)) {
            cy.get(".next").first().click();
            selectMonthAndYear();
          }
        });
    }
    function selectFutureDay() {
      cy.get("[class='day']").contains(futureDay).click();
    }
    selectMonthAndYear();
    selectFutureDay();
  });
});
