<template>
  <section :class="$style.host">
    <router-link
      :to="{ name: 'welcome' }"
      :class="$style.link">
      <div :class="$style.subtitle">
        <span>{{ title }}</span>
      </div>
      <div :class="$style.description">
        {{ description }}
      </div>
    </router-link>
    <div :class="$style.row">
      <div :class="$style.card">
        1
      </div>
      <div :class="$style.card">
        2
      </div>
      <div :class="$style.card">
        3
      </div>
      <div :class="$style.card">
        4
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
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

.card {
  cursor: pointer;
  position: relative;
  display: inline-block;
  width: 200px;
  height: 270px;
  position: relative;
  padding: 10px;
  margin: 5px;
  vertical-align: top;
  border: 1px solid $base-border-color;

  &:hover {
    border: 1px solid #ffe81f;
  }
}
</style>
