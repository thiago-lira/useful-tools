<template>
  <section class="tools-list">
    <div v-for="tool in items" :key="tool.name">
      <ToolsListItem :tool="tool" />
    </div>
  </section>
</template>

<script>
import ToolsListItem from '@/components/ToolsListItem.vue';

export default {
  name: 'ToolsList',
  components: {
    ToolsListItem,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.tools-list {
  margin-top: 15px;

  &__item {
    border: 1px solid #999;
    border-radius: 5px;
    display: inline-block;
    margin: 10px 0;
    padding: 10px;

    a {
      font-size: 1.2rem
    }

    &-description {
      padding: 10px 0;
    }

    &-tags {
      padding: 5px 0px;
    }
  }
}
</style>
