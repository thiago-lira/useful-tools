import Tool from '../support/page-objects/Tool';
import ToolElements from '../support/elements/Tool';

describe('Task bar', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('permits to add a tool', () => {
    const name = 'Cypress';
    const link = 'https://cypress.io/';
    const description = 'A famous E2E testing tool';
    const tags = 'test';
    Tool.createTool({
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

  it.only('has search for tools', () => {
    Tool.createTool({
      name: 'Node.js',
      link: 'https://nodejs.org',
      description: 'A js runtime based on V8 engine',
      tags: 'js, node',
    });

    Tool.createTool({
      name: 'Vue.js',
      link: 'https://vuejs.org',
      description: 'Pure love',
      tags: 'js, vue',
    });

    Tool.search('vue.js');

    ToolElements
      .getNthToolItemName(1)
      .should('to.contain', 'Vue.js');
  });
});
