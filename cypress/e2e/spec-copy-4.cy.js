describe('Budget Tracker Tests', () => {
  it('sollte eine neue Kostenstelle hinzufügen', () => {
    cy.visit('https://quaquazzzzzz.github.io/budget_tracker/');
    cy.get('#name').type('Neue Kostenstelle');
    cy.get('#cost').type('100');
    cy.get('form').submit(); // löst das Hinzufügen der Kostenstelle aus
    cy.contains('Neue Kostenstelle').should('be.visible');
    cy.contains('Neue Kostenstelle').should('be.visible');
    cy.contains('100').should('be.visible');

     
  });
});
