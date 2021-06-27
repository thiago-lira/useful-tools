import ToolElements from '../elements/Tool';

class Tool {
  static openModalEdit() {
    ToolElements
      .getAddToolButton()
      .click();
  }

  static setEditData({
    name, link, description, tags,
  }) {
    ToolElements
      .getNthModalEditInput(1)
      .type(name);

    ToolElements
      .getNthModalEditInput(2)
      .type(link);

    ToolElements
      .getNtnModalEditTextarea(1)
      .type(description);

    ToolElements
      .getNthModalEditInput(3)
      .type(tags);
  }

  static createTask({
    name, link, description, tags,
  }) {
    Tool.openModalEdit();

    ToolElements
      .getModalEdit()
      .should('to.exist');

    Tool.setEditData({
      name,
      link,
      description,
      tags,
    });

    Tool.saveTool();

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
  }

  static deleteNthTool(nth) {
    ToolElements
      .getNthToolItemRemove(nth)
      .click();

    ToolElements
      .getModalDeleteConfirmButton()
      .click();
  }

  static saveTool() {
    return ToolElements
      .getOkButton()
      .click();
  }
}

export default Tool;
