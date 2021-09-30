describe("testing add contact logic", function () {
  beforeEach(() => {});
});

describe("create a contact with valid data", function () {
  it("add contact and check it in the contact list", function () {
    cy.server()
    cy.route("GET", "http://localhost:3003/contacts", [
        {
            id: "b60fb2da-a783-4d37-86c5-e619b3503d61",
            name: "test",
            email: "test@test.com"
          },
      ])
    cy.visit("http://localhost:3000/");
    cy.get("a > .ui").click();
    cy.get("[data-testid=name]").type("test");
    cy.get("[data-testid=email]").type("test@test.com");
    cy.get('[data-testid="submit button"]').click();
    cy.get('.header').contains("test");
    cy.get('a > :nth-child(2)').contains("test@test.com");
  });
});
