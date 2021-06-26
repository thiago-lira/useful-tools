<template>
  <div class="tools-list__item">
    <div class="flex">
      <div class="tools-list__item-title">
        <a href="#">
          Webpack
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
        Elit quam nemo praesentium nisi cumque. Officia fuga corporis rem odio officia
        quaerat saepe. Quod deleniti quam quas odio assumenda Esse deserunt nisi fuga esse
        odio laboriosam accusantium, tempora quisquam?
      </p>
    </div>

    <div class="tools-list__item-tags">
      <span>
        javascript
      </span>

      <span>
        bundler
      </span>

      <span>
        tooling
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToolsListItem',
};
</script>
