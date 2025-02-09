describe('Documentation: ', ()=>{
    it('Gets, types and assert', ()=>{
        cy.visit('https://example.cypress.io')
        cy.contains('type').click()
        cy.get('#email1').type('fake@email.com')
        cy.get('#email1').should('have.value','fake@email.com')

 
    })
})