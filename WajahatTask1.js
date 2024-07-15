describe("Registration Form - Positive Scenario 1", () => {
  beforeEach(() => {
    cy.visit("https://websitename.com/register");
  });

  it("should submit the form with all valid inputs", () => {
    cy.get('input[name="fullName"]').type("John Doe");
    cy.get('input[name="email"]').type("johndoe@example.com");
    cy.get('input[name="password"]').type("password123");
    cy.get('input[name="confirmPassword"]').type("password123");
    cy.get('input[name="dob"]').type("1990-01-01");
    cy.get('input[value="Male"]').check();
    cy.get('input[name="newsletter"]').check();

    cy.get('button[type="submit"]').click();

    cy.contains("Registration successful").should("be.visible");
  });
});
