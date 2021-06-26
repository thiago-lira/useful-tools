<template>
  <div id="app">
    <header>
      <h1>
        Useful Tool
      </h1>
    </header>

    <main>
      <div class="container">
        <section class="task-bar">
          <div class="task-bar__search">
            <input type="text" placeholder="Buscar ferramenta">

            <label>
              <input type="checkbox">
              apenas tags
            </label>
          </div>

          <div class="task-bar__add-tool">
            <button>
              <span class="task-bar--add-icon">
                +
              </span>

              <span class="task-bar--add-text">
                Adicionar
              </span>
            </button>
          </div>
        </section>

        <section class="tools-list">
          <ul>
            <li class="tools-list__item">
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
            </li>
            <li class="tools-list__item">
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
            </li>
          </ul>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import '@/assets/scss/global.scss';

export default {
  name: 'App',
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
