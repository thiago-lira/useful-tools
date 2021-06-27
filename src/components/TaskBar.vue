<template>
  <section class="task-bar">
    <div class="task-bar__search">
      <input
        type="text"
        placeholder="Buscar ferramenta"
        :value="value"
        @input="$emit('input', $event.target.value)"
      >

      <label>
        <input type="checkbox">
        apenas tags
      </label>
    </div>

    <div class="task-bar__add-tool">
      <button @click="handleAddClick" data-cy="btn-add-tool">
        <span class="task-bar--add-icon">
          +
        </span>

        <span class="task-bar--add-text">
          Adicionar
        </span>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TaskBar',
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleAddClick() {
      this.$emit('addClick');
    },
    handleInput({ target: { value } }) {
      this.$emit('input', value);
    },
  },
};
</script>

<style lang="scss" scoped>
.task-bar {
  align-items: center;
  display: flex;

  &__search {
    input[type=checkbox] {
      margin-left: 5px;
    }
  }

  &--add {
    &-text {
      display: none;
    }

    &-icon {
      padding: 0 5px;
      display: block;
    }
  }

    &__search {
      flex-grow: 1;
    }

  @media (min-width: 415px) {
    &--add {
      &-text {
        display: block;
      }

      &-icon {
        display: none;
      }
    }

  }

  &__add-tool {
    margin-left: 15px;
    text-align: right;
  }
}
</style>
