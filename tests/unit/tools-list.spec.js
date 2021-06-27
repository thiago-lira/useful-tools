import { mount } from '@vue/test-utils';
import ToolsList from '@/components/ToolsList.vue';
import Tool from '@/models/Tool';
import Tag from '@/models/Tag';

describe('ToolsListItem.vue', () => {
  it('emits delete event passing tool object', async () => {
    const tool = new Tool({
      name: 'Jest',
      link: 'https://jest.io',
      description: 'Testing tool',
      tags: [
        new Tag('js'),
      ],
    });
    const wrapper = mount(ToolsList, {
      propsData: { items: [tool] },
    });

    wrapper.find('button.link').trigger('click');

    await wrapper.vm.$nextTick();

    expect(wrapper.emitted().delete[0][0]).toEqual(tool);
  });
});
