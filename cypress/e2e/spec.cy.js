describe('Budget Tracker Einfach', () => {
  it('sollte den Haupttitel anzeigen', () => {
    cy.visit('https://quaquazzzzzz.github.io/budget_tracker/'); // URL deiner Anwendung
    cy.contains('Mein Budget Tracker').should('be.visible'); // Überprüft, ob der Titel sichtbar ist
  });
});
