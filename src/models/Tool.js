class Tool {
  constructor({
    name, link, description, tags,
  }) {
    Object.assign(this, {
      name, link, description, tags,
    });
  }
}

export default Tool;
