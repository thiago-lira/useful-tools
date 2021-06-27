import Tool from '../support/page-objects/Tool';
import ToolElements from '../support/elements/Tool';

describe('Tool item', () => {
  it('should have a button to delete it', () => {
    cy.visit('/');

    Tool.createTool({
      name: 'Cypress',
      link: 'https://cypress.io/',
      description: 'A famous E2E testing tool',
      tags: 'test',
    });

    Tool.deleteNthTool(1);

    ToolElements
      .getToolItem()
      .should('not.exist');
  });
});
