<template>
  <aside :class="$style.host">
    <a
      :class="$style.close"
      @click="$emit('close')">x</a>
    <slot />
  </aside>
</template>

<script>
export default {};
</script>

<style lang="scss" module>
@import "@/assets/scss/_variables.scss";

.host {
  position: absolute;
  top: 0;
  right: 0;
  width: 490px;
  height: 100%;
  box-sizing: border-box;
  padding: 30px;
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
