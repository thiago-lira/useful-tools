<template>
  <div id="app">
    <header>
      <h1>
        Useful Tool
      </h1>
    </header>

    <main>
      <div class="container">
        <TaskBar />

        <ToolsList />
      </div>
    </main>
  </div>
</template>

<script>
import '@/assets/scss/global.scss';
import TaskBar from '@/components/TaskBar.vue';
import ToolsList from '@/components/ToolsList.vue';

export default {
  name: 'App',
  components: {
    TaskBar,
    ToolsList,
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
