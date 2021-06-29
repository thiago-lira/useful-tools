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

      <ModalDelete
        @confirm="handleConfirm"
        :visible.sync="modals.isDeleteVisible"
      />

      <div class="container">
        <TaskBar
          @addClick="handleAddClick"
          v-model="search.term"
        />

        <ToolsList @delete="handleDeleteTool" :items="toolsList" />
      </div>
    </main>
  </div>
</template>

<script>
import '@/assets/scss/global.scss';
import Tool from '@/models/Tool';
import Tag from '@/models/Tag';
import ModalEdit from '@/components/ModalEdit.vue';
import ModalDelete from '@/components/ModalDelete.vue';
import TaskBar from '@/components/TaskBar.vue';
import ToolsList from '@/components/ToolsList.vue';

export default {
  name: 'App',
  components: {
    TaskBar,
    ToolsList,
    ModalEdit,
    ModalDelete,
  },
  data() {
    return {
      search: {
        term: '',
        list: [],
      },
      toolToDelete: null,
      modals: {
        isEditVisible: false,
        isDeleteVisible: false,
      },
      tools: [
      ],
    };
  },
  computed: {
    toolsList() {
      const { search } = this;
      const term = search.term.trim().toLowerCase();

      if (term !== '') {
        return this.tools.filter(({ name }) => name.toLowerCase().search(term) !== -1);
      }

      return this.tools;
    },
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
      this.toolToDelete = tool;
      this.modals.isDeleteVisible = true;
    },
    handleConfirm() {
      const tool = this.toolToDelete;
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
