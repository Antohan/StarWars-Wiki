<template>
  <div :class="[$style.host, { invalid: hasErrors }]">
    <slot/>
    <div v-if="hasErrors">
      <div
        v-for="(error, index) in activeErrorMessages"
        :key="index"
        :class="$style.error">
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script>
import { singleErrorExtractorMixin } from 'vuelidate-error-extractor';

export default {
  mixins: [singleErrorExtractorMixin],
};
</script>

<style lang="scss" module>
@import "@/assets/scss/app.scss";

.host {
  position: relative;
}

.invalid label span {
  color: $error-color !important;
}

.error {
  position: absolute;
  font-size: 0.8em;
  color: $error-color;
  transition: all .3s;
}
</style>
