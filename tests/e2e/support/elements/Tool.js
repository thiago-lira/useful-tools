class Tool {
  static getNthModalEditInput(nth) {
    return cy
      .get('[data-cy=modal-edit] input')
      .eq(nth - 1);
  }

  static getAddToolButton() {
    return cy.get('[data-cy=btn-add-tool]');
  }

  static getOkButton() {
    return cy.get('[data-cy=modal-edit] button');
  }

  static getModalEdit() {
    return cy.get('[data-cy=modal-edit]');
  }

  static getToolsList() {
    return cy.get('[data-cy=tool-item');
  }

  static getNthToolItemName(nth) {
    return cy
      .get('[data-cy=tool-name] a')
      .eq(nth - 1);
  }

  static getNthToolItemDescription(nth) {
    return cy
      .get('[data-cy=tool-description]')
      .eq(nth - 1);
  }

  static getNthToolItemTag(nth) {
    return cy
      .get('[data-cy=tool-tags]')
      .eq(nth - 1);
  }

  static getNtnModalEditTextarea(nth) {
    return cy
      .get('[data-cy=modal-edit] textarea')
      .eq(nth - 1);
  }
}

export default Tool;
