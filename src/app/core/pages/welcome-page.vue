<template>
  <section :class="$style.container">
    <section class="intro">
      A long time ago, in a galaxy far,<br> far away....
    </section>
  </section>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => this.$router.push({ name: 'home' }), 3000);
  },
};
</script>

<style lang="scss" module>
.container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
