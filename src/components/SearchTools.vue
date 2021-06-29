<template>
  <div class="task-bar__search">
    <input
      type="text"
      placeholder="Buscar ferramenta"
      :value="value"
      @input="$emit('input', $event.target.value)"
      data-cy="search-input"
    />

    <label>
      <input type="checkbox" />
      apenas tags
    </label>
  </div>
</template>

<script>
export default {
  name: 'SearchTools',
  props: {
    value: {
      type: String,
      default: '',
    },
  },
};
</script>
