import { shallowMount } from '@vue/test-utils';
import ModalDelete from '@/components/ModalDelete.vue';

describe('ModalDelete.vue', () => {
  it('should emit confirm event when click on confirm button', async () => {
    const wrapper = shallowMount(ModalDelete, { propsData: { visible: true } });

    wrapper.find('[data-jest=btn-confirm]').trigger('click');

    await wrapper.vm.$nextTick();

    expect(wrapper.emitted().confirm).toBeTruthy();
  });
});
