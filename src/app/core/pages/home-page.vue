<template>
  <section :class="$style.host">
    <home-sidebar
      id="sidebar"
      ref="sidebar"
      :show="showSidebar" />

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
import HomeSidebar from '../components/home-sidebar';

export default {
  components: {
    FilmsSection,
    HomeSidebar,
  },
  data: () => ({
    sidebarInfo: null,
    showSidebar: false,
  }),
  mounted() {
    // TODO: fetch data
  },
  methods: {
    handleShowInfo(filmId) {
      if (this.sidebarInfo) {
        this.sidebarInfo.$destroy();
        this.showSidebar = false;
      }

      const sidebar = this.$refs.sidebar.$el;
      const Component = Vue.extend(FilmInfo);
      this.sidebarInfo = new Component({
        propsData: { filmId },
        destroyed() {
          sidebar.removeChild(this.$el);
        },
      });
      this.sidebarInfo.$mount();

      sidebar.appendChild(this.sidebarInfo.$el);

      this.showSidebar = true;
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

.content {
  height: 100%;
  width: 950px;
  padding: 30px 30px 60px;
  box-sizing: border-box;
  border-right: 1px solid $base-border-color;
}
</style>
