<template>
  <section :class="$style.host">
    <sw-section
      title="Films"
      description="Movies" />
    <sw-section
      title="People"
      description="People" />
    <sw-section
      title="Planets"
      description="Planets" />
    <sw-section
      title="Species"
      description="Species" />
    <sw-section
      title="Starships"
      description="Starships" />
    <sw-section
      title="Transport"
      description="Transport" />
    <sw-section
      title="Vehicles"
      description="Vehicles" />
  </section>
</template>

<script>
import { SwSection } from '../components';

export default {
  components: {
    SwSection,
  },
  mounted() {

  },
};
</script>

<style lang="scss" module>
.host {
  height: 100%;
  width: 950px;
  padding: 30px 30px 60px;
  display: grid;
}
</style>
