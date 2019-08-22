<template>
  <transition name="right-slide">
    <div
      v-show="isShow"
      :class="$style.host">
      <a
        :class="$style.close"
        @click="close()">x</a>
      <div :class="$style.container">
        <div>{{ film.title }}</div>
        <div>Director: {{ film.director }}</div>
        <div>Release date: {{ film.releaseDate }}</div>
        <div :class="$style.description">
          {{ film.description }}
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'FilmInfo',
  props: {
    film: { type: Object, required: true },
  },
  data: () => ({
    isShow: false,
  }),
  mounted() {
    this.isShow = true;
  },
  methods: {
    close() {
      this.$destroy();
    },
  },
};
</script>

<style lang="scss" module>
@import "@/assets/scss/_variables.scss";

.host {
  position: relative;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-weight: 700;
  color: $default-color;

  &:hover {
    color: #fff;
  }
}

.container {
  display: block;
}

.description {
  white-space: pre-wrap;
  text-align: center;
}
</style>
