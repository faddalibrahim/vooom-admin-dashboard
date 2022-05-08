describe("Transactions Page Tests", () => {
  it("visits home page", () => {
    // testing all man routes
    cy.visit("http://localhost:3000/transactions");
    cy.contains("No. of tickets sold");
    cy.contains("Expected Amount (cedis)");
    cy.contains("Total Credit (cedis)");

    // cy.visit("http://localhost:3000/buses");
    // cy.visit("http://localhost:3000/drivers");

    // testing components with routes [HOME]
  });
});
