<template>
  <section :class="$style.container">
    <transition
      name="top-slide-fade"
      mode="out-in">
      <router-view />
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AuthLayout',
};
</script>

<style lang="scss" module>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
