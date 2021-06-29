<template>
  <section class="task-bar">
    <SearchTools
      v-model="searchValue"
      @input="$emit('input', searchValue)"
    />

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
import SearchTools from '@/components/SearchTools.vue';

export default {
  name: 'TaskBar',
  components: {
    SearchTools,
  },
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      searchValue: this.value,
    };
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
