<template>
  <div class="tools-list__item" data-cy="tool-item">
    <div class="flex">
      <div class="tools-list__item-title" data-cy="tool-name">
        <a :href="tool.link">
          {{ tool.name }}
        </a>
      </div>

      <div class="tools-list__item-delete text-right">
        <button @click="handleDelete" class="link">
          &times;
          remover
        </button>
      </div>
    </div>

    <div class="tools-list__item-description" data-cy="tool-description">
      <p>
        {{ tool.description }}
      </p>
    </div>

    <div class="tools-list__item-tags" data-cy="tool-tags">
      <span v-for="{ name } in tool.tags" :key="name">
        {{ name }}
      </span>
    </div>
  </div>
</template>

<script>
import Tool from '@/models/Tool';

export default {
  name: 'ToolsListItem',
  props: {
    tool: {
      type: Tool,
      required: true,
    },
  },
  methods: {
    handleDelete() {
      this.$emit('delete', this.tool);
    },
  },
};
</script>

<style scoped>
.tools-list__item {
  width: 100%;
}
</style>
