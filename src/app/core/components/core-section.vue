<template>
  <section :class="$style.host">
    <router-link
      :to="{ name: routeName }"
      :class="$style.link">
      <div :class="$style.subtitle">
        <span>{{ title }}</span>
      </div>
      <div :class="$style.description">
        {{ description }}
      </div>
    </router-link>
    <div :class="$style.row">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    routeName: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
};
</script>

<style lang="scss" module>
@import "@/assets/scss/app.scss";

.host {
  margin-bottom: 80px;
}

.row {
  max-height: 350px;
  overflow: hidden;
}

.link {
  display: block;
  padding: 0 5px;

  &:hover > .subtitle {
    color: #ffe81f;
  }
}

.subtitle {
  font-size: 20px;
  font-weight: bold;
  line-height: 25px;
  color: #f4f4f4;
}

.description {
  color: $default-color;
}
</style>
