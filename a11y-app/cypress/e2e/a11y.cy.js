beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.injectAxe()
  })

describe('Todo app', () => {
    it('Should be accessible', () => {
        cy.checkA11y()
    })
  })