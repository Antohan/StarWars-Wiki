<template>
  <div id="filmInfo">
    {{ film }}
  </div>
</template>

<script>
export default {
  name: 'FilmInfo',
  props: {
    film: { type: Object, required: true },
  },
};
</script>

<style>

</style>
