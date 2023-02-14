describe('UseRefDemo', () => {
  it('increments count without re-rendering', () => {
    cy.visit('/');
    cy.get('p').eq(0).should('have.text', 'Count: 0');
    cy.get('p').eq(1).should('have.text', 'Count Ref: 0');
    cy.get('button').click();
    cy.get('p').eq(0).should('have.text', 'Count: 1');
    cy.get('p').eq(1).should('have.text', 'Count Ref: 1');
    cy.get('button').click();
    cy.get('p').eq(0).should('have.text', 'Count: 2');
    cy.get('p').eq(1).should('have.text', 'Count Ref: 2');
  });
});
