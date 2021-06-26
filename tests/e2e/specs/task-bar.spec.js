describe('Task bar', () => {
  it('permits to add a tool', () => {
    cy.visit('/');

    cy.get('[data-cy=btn-add-tool]')
      .click();

    cy.get('[data-cy=modal-edit]')
      .should('to.exist');

    cy.get('[data-cy=modal-edit] input')
      .as('inputs');

    cy.get('@inputs')
      .first()
      .type('Cypress');

    cy.get('@inputs')
      .eq(1)
      .type('http://cypress.io');

    cy.get('[data-cy=modal-edit] textarea')
      .type('A famous E2E testing tool');

    cy.get('@inputs')
      .eq(2)
      .type('test');

    cy.get('[data-cy=modal-edit] button')
      .click();

    cy.get('[data-cy=modal-edit]')
      .should('to.not.exist');

    cy.get('[data-cy=tool-item')
      .should('have.length', 1);

    cy.get('[data-cy=tool-name] a')
      .should('to.contain', 'Cypress')
      .should('have.attr', 'href', 'http://cypress.io');

    cy.get('[data-cy=tool-description]')
      .should('to.contain', 'A famous E2E testing tool');

    cy.get('[data-cy=tool-tags]')
      .contains('span', 'test');
  });
});
