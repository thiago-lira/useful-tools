import Tag from '@/models/Tag';

class Tool {
  constructor({
    name, link, description, tags,
  }) {
    const hasInvalidTag = tags.some((tag) => !(tag instanceof Tag));

    if (hasInvalidTag) {
      throw new Error('All tags must to be a Tag object');
    }

    Object.assign(this, {
      name, link, description, tags,
    });
  }
}

export default Tool;
