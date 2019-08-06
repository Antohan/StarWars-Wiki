<template>
  <div
    :class="['plate', {'active': active}]"
    @click="$emit('click')">
    <div>{{ title }}</div>
    <div>{{ director }}</div>
    <div>{{ releaseDate }}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    director: { type: String, required: true },
    releaseDate: { type: String, required: true },
    active: { type: Boolean, default: null },
  },
};
</script>

<style lang="scss" module>

</style>
