<template>
  <div :class="$style.host">
    <a
      :class="$style.close"
      @click="close">x</a>
    Film ID: {{ filmId }}
  </div>
</template>

<script>
export default {
  name: 'FilmInfo',
  props: {
    filmId: { type: Number, required: true },
  },
  methods: {
    close() {
      this.close = true;
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
</style>
