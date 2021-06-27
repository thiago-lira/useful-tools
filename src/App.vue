<template>
  <div id="app">
    <header>
      <h1>
        Useful Tool
      </h1>
    </header>

    <main>
      <ModalEdit
        :visible.sync="modals.isEditVisible"
        @submit="handleSubmitEdit"
      />

      <div class="container">
        <TaskBar @addClick="handleAddClick" />

        <ToolsList @delete="handleDeleteTool" :items="tools" />
      </div>
    </main>
  </div>
</template>

<script>
import '@/assets/scss/global.scss';
import Tool from '@/models/Tool';
import Tag from '@/models/Tag';
import ModalEdit from '@/components/ModalEdit.vue';
import TaskBar from '@/components/TaskBar.vue';
import ToolsList from '@/components/ToolsList.vue';

export default {
  name: 'App',
  components: {
    TaskBar,
    ToolsList,
    ModalEdit,
  },
  data() {
    return {
      modals: {
        isEditVisible: false,
      },
      tools: [
      ],
    };
  },
  methods: {
    createTool({
      name, link, description, tags,
    }) {
      const tagsModel = tags.split(',').map((tagName) => new Tag(tagName));
      const tool = new Tool({
        name, link, description, tags: tagsModel,
      });

      this.tools.push(tool);
    },
    handleSubmitEdit(inputs) {
      this.createTool(inputs);
    },
    handleAddClick() {
      this.modals.isEditVisible = true;
    },
    handleDeleteTool(tool) {
      const toolIndex = this.tools.findIndex((toolItem) => toolItem === tool);

      if (toolIndex === -1) {
        return;
      }

      this.tools.splice(toolIndex, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  padding: 15px 0;
  text-align: center;
}

.container {
  margin: 0 15px;

  @media (max-width: 375px) {
    width: 375px;
  }

  @media (min-width: 540px) {
    margin: auto;
    width: 540px;
  }
}
</style>
