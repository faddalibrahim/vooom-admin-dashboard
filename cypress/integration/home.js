describe("Home Page Tests", () => {
  it("visits home page", () => {
    // testing all man routes
    cy.visit("http://localhost:3000/home");
    cy.contains("Voom Dashboard");
    cy.contains("Manage Data");
    cy.contains("Draw Insights");
    cy.contains("Manage Personnel");

    cy.visit("http://localhost:3000/transactions");
    cy.contains("No. of tickets sold");
    cy.contains("Expected Amount (cedis)");
    cy.contains("Total Credit (cedis)");

    cy.visit("http://localhost:3000/buses");
    cy.contains("Buses");
    cy.contains("Summary");
    cy.contains("Bus number");
    cy.contains("Bus capacity");

    cy.visit("http://localhost:3000/drivers");
    cy.contains("Drivers");
    cy.contains("Summary");
    cy.contains("Name");
    cy.contains("Age");
    cy.contains("Gender");
    cy.contains("Telephone");

    cy.contains("Edit").click();
  });
});
