describe('Budget App', () => {
  it('sollte die Budget-Eingabe speichern', () => {
    cy.visit('https://quaquazzzzzz.github.io/budget_tracker/'); // URL deiner Anwendung
    cy.get('#budget-input').type('2000'); // Eingabefeld für Budget, ID anpassen
    cy.contains('button', 'Save').click(); // Speichern-Button klicken
    // Der nachfolgende Selector muss an das Element angepasst werden, das den gespeicherten Wert anzeigt
    cy.get('#saved-budget').should('contain', '2000'); // Überprüfe, ob "2000" im Element mit der ID "saved-budget" erscheint
  });
});
