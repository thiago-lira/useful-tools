<template>
  <Modal :visible.sync="isVisible">
    <div class="modal-delete">
      <div class="modal-delete__body">
        Confirma a exclusão desta ferramenta?
      </div>
      <p>
      </p>
      <div class="modal-delete__footer">
        <button
          @click="handleConfirmClick"
          data-jest="btn-confirm"
        >
          Confirmar
        </button>

        <button @click="handleCancelClick">
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
