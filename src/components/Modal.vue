<template>
  <div
    v-if="visible"
    @click="handleBgClick"
    class="modal"
  >
    <div @click="handleContentClick" class="modal__content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    handleBgClick() {
      this.$emit('update:visible', false);
    },
    handleContentClick(event) {
      event.stopPropagation();
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  background: rgba(0, 0, 0, .5);
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;

  &__content {
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 3px 5px #666;
    min-width: 375px;
    max-width: 540px;
    margin: auto;
    padding: 15px;
  }
}
</style>
