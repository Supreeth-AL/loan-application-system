describe("Loan Application Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("loads homepage successfully", () => {
    cy.contains(
      "Loan Application System"
    ).should("exist");
  });

  it("navigates to loan form", () => {
    cy.contains(
      "Start Application"
    ).click();

    cy.url().should(
      "include",
      "/loan-form"
    );
  });

  it("shows validation errors on empty form", () => {
    cy.contains("Start Application")
      .click();

    cy.contains(
      "Save Loan Details"
    ).click();

    cy.contains(
      "Loan amount is required"
    ).should("exist");
  });

  it("fills loan details form", () => {
    cy.contains("Start Application")
      .click();

    cy.get(
      'select[name="loanType"]'
    ).select("home");

    cy.get(
      'input[name="loanAmount"]'
    ).type("500000");

    cy.get(
      'input[name="loanTenure"]'
    ).type("5");

    cy.get(
      'input[name="interestRate"]'
    ).type("10");

    cy.contains(
      "Save Loan Details"
    ).click();
  });

  it("moves to next step", () => {
    cy.contains("Start Application")
      .click();

    cy.contains("Next").click();

    cy.contains(
      "Personal Information"
    ).should("exist");
  });
});