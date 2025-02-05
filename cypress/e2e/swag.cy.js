describe('checking the login functionlaity of swag: ', ()=>{
    beforeEach('LogIn to the swag lab: ', ()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        
    })
    it('Product List: ', ()=>{
        
        cy.get(cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')).click()
 
        
    })
    
})