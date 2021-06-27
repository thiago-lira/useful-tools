import Tool from '@/models/Tool';

describe('Tool', () => {
  it('throw exception when tags list has non Tag class instance', () => {
    const tags = [1];
    const params = {
      name: 'Tool name',
      link: 'http://tool.link',
      description: 'Tool description',
      tags,
    };

    expect(() => new Tool(params)).toThrow();
  });
});
