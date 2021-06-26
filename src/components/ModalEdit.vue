<template>
  <Modal :visible.sync="isModalVisible">
    <InputForm label="Name" v-model="inputs.name" />

    <InputForm label="Link" v-model="inputs.link" />

    <TextForm label="Descrição" v-model="inputs.description" />

    <InputForm label="Tags" v-model="inputs.tags" />

    <div class="text-right">
      <button
        @click="handleClick"
        :disabled="!isValid"
      >
        Ok
      </button>
    </div>
  </Modal>
</template>

<script>
import Modal from '@/components/Modal.vue';
import InputForm from '@/components/InputForm.vue';
import TextForm from '@/components/TextForm.vue';

export default {
  name: 'ModalEdit',
  components: {
    Modal,
    InputForm,
    TextForm,
  },
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      isModalVisible: this.visible,
      inputs: {
        name: '',
        link: '',
        description: '',
        tags: '',
      },
    };
  },
  computed: {
    isValid() {
      return Object
        .values(this.inputs)
        .every((value) => value.trim() !== '');
    },
  },
  watch: {
    visible(value) {
      this.isModalVisible = value;
    },
    isModalVisible(value) {
      this.$emit('update:visible', value);
    },
  },
  methods: {
    handleClick() {
      this.$emit('submit', this.inputs);
    },
  },
};
</script>

<style lang="scss" scoped>
.form-input {
  margin: 15px 0;
}
</style>
