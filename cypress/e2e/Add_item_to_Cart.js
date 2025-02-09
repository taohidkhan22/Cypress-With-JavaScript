describe("Homepage of sauceDemo", () => {
  it("LogIN: ", () => {
    cy.visit("/");
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();

    cy.get(
      'button[class="btn btn_primary btn_small btn_inventory "][name="add-to-cart-sauce-labs-backpack"]'
    ).click();
    cy.get(
      'button[class="btn btn_primary btn_small btn_inventory "][data-test="add-to-cart-test.allthethings()-t-shirt-(red)"'
    ).click();

    cy.get('a[class="shopping_cart_link"]').click();
    cy.get(
      'button[class="btn btn_action btn_medium checkout_button "]'
    ).click();
    cy.get('input[class="input_error form_input"][id="first-name"]').type(
      "Taohid Khan"
    );
    cy.get('input[class="input_error form_input"][id="last-name"]').type(
      "Arnob"
    );
    cy.get('input[class="input_error form_input"][id="postal-code"]').type(123);
    cy.get(
      'input[class="submit-button btn btn_primary cart_button btn_action"]'
    ).click();
    cy.get('button[class="btn btn_action btn_medium cart_button"]').click();
    cy.get('button[class="btn btn_primary btn_small"]').click()
  });
});
