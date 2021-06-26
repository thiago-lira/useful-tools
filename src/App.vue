<template>
  <div id="app">
    <header>
      <h1>
        Useful Tool
      </h1>
    </header>

    <main>
      <section class="task-bar">
        <div class="task-bar__search">
          <input type="text">
          <label>
            <input type="checkbox">
            buscar apenas por tags
          </label>
        </div>
        <div class="task-bar__add-tool">
          <button>
            Adicionar
          </button>
        </div>
      </section>

      <section class="tools-list">
        <ul>
          <li class="tools-list__item">
            <a href="#">
              Webpack
            </a>

            <p>
              Elit quam nemo praesentium nisi cumque. Officia fuga corporis rem odio officia quaerat
              saepe. Quod deleniti quam quas odio assumenda Esse deserunt nisi fuga esse odio
              laboriosam accusantium, tempora quisquam?
            </p>

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
            <a href="#">
              Webpack
            </a>

            <p>
              Elit quam nemo praesentium nisi cumque. Officia fuga corporis rem odio officia quaerat
              saepe. Quod deleniti quam quas odio assumenda Esse deserunt nisi fuga esse odio
              laboriosam accusantium, tempora quisquam?
            </p>

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
    </main>
  </div>
</template>

<script>
import '@/assets/scss/global.scss';

export default {
  name: 'App',
};
</script>
