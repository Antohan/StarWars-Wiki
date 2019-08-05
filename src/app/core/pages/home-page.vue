<template>
  <section :class="$style.host">
    <aside
      ref="sidebar"
      :class="$style.sidebar" />

    <div :class="$style.content">
      <films-section
        title="Films"
        description="Movies"
        @show-info="handleShowInfo($event)" />
    </div>
  </section>
</template>

<script>
import Vue from 'vue';
import { FilmsSection, FilmInfo } from '@/app/films/components';

export default {
  components: {
    FilmsSection,
  },
  data: () => ({
    showSidebar: false,
  }),
  mounted() {
    // TODO: fetch data
  },
  methods: {
    handleShowInfo(filmId) {
      const { sidebar } = this.$refs;

      if (sidebar.children.length > 0) {
        sidebar.removeChild(sidebar.children[0]);
      }

      const Component = Vue.extend(FilmInfo);
      const sidebarInfo = new Component({
        propsData: { filmId },
        destroyed() {
          sidebar.removeChild(this.$el);
        },
      });
      sidebarInfo.$mount();

      sidebar.appendChild(sidebarInfo.$el);
    },
  },
};
</script>

<style lang="scss" module>
@import "@/assets/scss/app.scss";

.host {
  position: relative;
  height: 100%;
  width: 100%;
}

.sidebar {
  position: absolute;
  top: 0;
  right: 0;
  width: 490px;
  height: 100%;
  box-sizing: border-box;
  padding: 30px;
}

.content {
  height: 100%;
  width: 950px;
  padding: 30px 30px 60px;
  box-sizing: border-box;
  border-right: 1px solid $base-border-color;
}
</style>
