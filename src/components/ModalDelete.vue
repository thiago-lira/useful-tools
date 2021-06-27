<template>
  <Modal :visible.sync="isVisible">
    <div class="modal-delete">
      <div class="modal-delete__footer">
        <button
          @click="handleConfirmClick"
          data-jest="btn-confirm"
        >
          Confirmar
        </button>

        <button>
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
  },
  methods: {
    handleConfirmClick() {
      this.$emit('confirm');
    },
  },
};
</script>
