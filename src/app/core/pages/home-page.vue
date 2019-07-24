<template>
  <section :class="$style.host">
    <transition name="right-slide">
      <aside
        v-show="showInfo"
        :class="$style.aside">
        <div>
          film data
        </div>
      </aside>
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
import { FilmsSection } from '@/app/films/components';

export default {
  components: {
    FilmsSection,
  },
  data: () => ({
    showInfo: false,
  }),
  mounted() {
    // TODO: fetch data
  },
  methods: {
    handleShowInfo() {
      this.showInfo = !this.showInfo;
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

.aside {
  position: absolute;
  top: 0;
  right: 0;
  width: 490px;
  height: 100%;
  border-left: 1px solid $base-border-color;
  box-sizing: border-box;
}

.content {
  height: 100%;
  width: 900px;
  padding: 30px 30px 60px;
  box-sizing: border-box;
}
</style>
