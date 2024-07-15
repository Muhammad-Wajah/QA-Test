describe("Registration Form - Positive Scenario 2", () => {
  beforeEach(() => {
    cy.visit("https://yourwebsite.com/register");
  });

  it("should submit the form without selecting newsletter", () => {
    cy.get('input[name="fullName"]').type("Jane Doe");
    cy.get('input[name="email"]').type("janedoe@example.com");
    cy.get('input[name="password"]').type("password123");
    cy.get('input[name="confirmPassword"]').type("password123");
    cy.get('input[name="dob"]').type("1990-01-01");
    cy.get('input[value="Female"]').check();

    cy.get('button[type="submit"]').click();

    cy.contains("Registration successful").should("be.visible");
  });
});
