
<template>
  <form-group
    :name="name"
    :label="label"
    class="input" >
    <label>
      <span>{{label}}</span>
      <input
        v-bind="$attrs"
        v-model="model"
        :type="type" />
    </label>
  </form-group>
</template>

<script>
export default {
  props: {
    type: { type: String, default: 'text' },
    value: { type: String, default: '' },
    name: { type: String, required: true },
    label: { type: String, required: true },
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/app.scss";

.input {
  margin-bottom: 15px;

  label span {
    display: block;
    font-size: 0.9em;
    margin-bottom: 5px;
    color: $base-color;
  }

  input {
    width: 100%;
    padding: 5px;
    box-sizing: border-box;
    border-radius: 3px;
    border: 1px solid #ccc;
  }

  &.invalid input {
    border-color: $error-color;
  }
}
</style>
