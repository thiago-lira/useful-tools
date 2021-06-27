import Tool from '../support/page-objects/Tool';
import ToolElements from '../support/elements/Tool';

describe('Task bar', () => {
  it('permits to add a tool', () => {
    cy.visit('/');

    const name = 'Cypress';
    const link = 'https://cypress.io/';
    const description = 'A famous E2E testing tool';
    const tags = 'test';
    Tool.createTask({
      name,
      link,
      description,
      tags,
    });

    ToolElements
      .getModalEdit()
      .should('to.not.exist');

    ToolElements
      .getToolsList()
      .should('have.length', 1);

    ToolElements
      .getNthToolItemName(1)
      .should('to.contain', name)
      .should('have.attr', 'href', link);

    ToolElements
      .getNthToolItemDescription(1)
      .should('to.contain', description);

    ToolElements
      .getNthToolItemTag(1)
      .contains('span', tags);
  });
});
