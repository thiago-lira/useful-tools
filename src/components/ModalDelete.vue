<template>
  <Modal :visible.sync="isVisible">
    <div class="modal-delete">
      <div class="modal-delete__body">
        Confirma a exclusão desta ferramenta?
      </div>
      <p>
      </p>
      <div class="modal-delete__footer text-right">
        <button
          @click="handleConfirmClick"
          data-jest="btn-confirm"
          class="btn-success"
        >
          Confirmar
        </button>

        <button @click="handleCancelClick" class="btn-danger">
          Cancelar
        </button>
      </div>
    </div>
  </Modal>
</template>

<script>
import Modal from '@/components/Modal.vue';

export default {
  name: 'ModalDelete',
  components: {
    Modal,
  },
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      isVisible: this.visible,
    };
  },
  watch: {
    visible(value) {
      this.isVisible = value;
    },
    isVisible(value) {
      this.$emit('update:visible', value);
    },
  },
  methods: {
    handleConfirmClick() {
      this.isVisible = false;
      this.$emit('confirm');
    },
    handleCancelClick() {
      this.isVisible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-delete {
  button {
    margin-left: 15px;
  }

  &__body {
    margin: 15px 0;
    border-bottom: 1px solid #999;
    padding: 15px 0;
  }
}
</style>
