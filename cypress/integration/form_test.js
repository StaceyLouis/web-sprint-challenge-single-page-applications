describe('test inputs and submit form', function(){
    beforeEach(function() {
        cy.visit('http://localhost:3000/')  
    })
   it('Add test to inputs and submitm form',function(){
    cy.get('button')
    .click()
    cy.get("input[name='name']")
    .type('Stacey')
    .should('have.value','Stacey')
    cy.get('select[name="size"]').select('small')
    .should('have.value',"small")
    cy.get('[type="checkbox"]')
    .check()
    .should('be.checked')
    cy.get("button")
    .click()
   })
});