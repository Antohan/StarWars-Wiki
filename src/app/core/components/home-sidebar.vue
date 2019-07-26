<template>
  <transition name="right-slide">
    <aside
      v-show="show"
      :class="$style.host" />
  </transition>
</template>

<script>
export default {
  props: {
    show: { type: Boolean, default: false },
  },
};
</script>

<style lang="scss" module>
.host {
  position: absolute;
  top: 0;
  right: 0;
  width: 490px;
  height: 100%;
  box-sizing: border-box;
  padding: 30px;
}
</style>
