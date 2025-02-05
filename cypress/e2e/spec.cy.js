describe('My first Test: ', ()=>{
  it('visit the swaglab website: ', ()=>{
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()
    cy.get('.action-email').type('fake@email.com')
    
    cy.get('.action-email').should('have.value', 'fake@email.com')
  })
})