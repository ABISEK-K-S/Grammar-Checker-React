describe("Grammar check", () => {
  it("Visit home page", function () {
    cy.visit("localhost:3000");
  });
  it("Enter text", function () {
    cy.get("textarea")
      .click()
      .type(
        "If you do find this paddragraph tool useful, please do us a favorr ansd lete us know howq you arere using it."
      );
  });
  it("Click Check Button", function () {
    cy.get(".button").click();
  });
  it("Correcting mistakes", function () {
    cy.get(".container").click();
    cy.get('[style="cursor: pointer;"] > :nth-child(2)').click();
    cy.get(".cursor").click();
    cy.get('[style="cursor: pointer;"] > :nth-child(2)').click();
    cy.get("ul > :nth-child(1)").click();
    cy.get('[style="cursor: pointer;"] > :nth-child(2)').click();
    cy.get("ul > :nth-child(1)").click();
    cy.get('[style="cursor: pointer;"] > :nth-child(2)').click();
    cy.get("ul > :nth-child(1)").click();
    cy.get('[style="cursor: pointer;"] > :nth-child(2)').click();
    cy.get("ul > :nth-child(1)").click();
    cy.get('[style="cursor: pointer;"] > .btn-danger').click();
    cy.get("ul > :nth-child(1)").click();
  });
  it("Verifying corrected words", function () {
    cy.get(".button").click();
    cy.get(".text-success").click();
    // cy.get(".btn-success").click(); //copy to clipboard
  });
});
