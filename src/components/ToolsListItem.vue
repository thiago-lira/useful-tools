<template>
  <div class="tools-list__item">
    <div class="flex">
      <div class="tools-list__item-title">
        <a :href="tool.link">
          {{ tool.name }}
        </a>
      </div>

      <div class="tools-list__item-delete text-right">
        <button class="link">
          &times;
          remover
        </button>
      </div>
    </div>

    <div class="tools-list__item-description">
      <p>
        {{ tool.description }}
      </p>
    </div>

    <div class="tools-list__item-tags">
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
};
</script>
