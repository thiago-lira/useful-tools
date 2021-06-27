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

  static saveTool() {
    return ToolElements
      .getOkButton()
      .click();
  }
}

export default Tool;
