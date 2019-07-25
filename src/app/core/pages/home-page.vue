<template>
  <section :class="$style.host">
    <transition name="right-slide">
      <home-sidebar
        v-show="showInfo"
        id="sidebar"
        ref="sidebar"
        @close="closeSidebar" />
    </transition>

    <div :class="$style.content">
      <films-section
        title="Films"
        description="Movies"
        @show-info="handleShowInfo" />
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
    showInfo: true,
    about: null,
  }),
  mounted() {
    // TODO: fetch data
  },
  methods: {
    handleShowInfo() {
      this.showInfo = true;

      const Film = Vue.extend(FilmInfo);
      const instance = new Film({
        propsData: { film: { kek: 'kek' } },
      });
      instance.$mount();

      this.$refs.sidebar.$el.appendChild(instance.$el);
    },
    closeSidebar() {
      debugger;
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
