<template>
  <div :class="['input', { invalid: hasAnyErrors }]">
    <slot />
    <transition
      name="top-slide-fade"
      mode="out-in">
      <div v-if="hasAnyErrors">
        <div
          v-for="(error, index) in activeErrorMessages"
          :key="index"
          class="error">
          {{ error }}
        </div>
        <div
          v-for="(error, index) in serverErrors"
          :key="index"
          class="error">
          {{ error }}
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { singleErrorExtractorMixin } from 'vuelidate-error-extractor';

export default {
  mixins: [singleErrorExtractorMixin],
  props: {
    serverErrors: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    hasAnyErrors() {
      return this.hasErrors || this.serverErrors.length;
    },
    isFullyValid() {
      return this.isValid && !this.serverErrors.length;
    },
  },
};
</script>

<style lang="scss" module>
@import "@/assets/scss/app.scss";

</style>
