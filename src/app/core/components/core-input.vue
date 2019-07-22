<template>
  <form-group
    v-bind="$attrs"
    :validator="v"
    :name="name"
    :label="label">
    <label>
      <span>{{ label }}</span>
      <input
        v-model="model"
        :type="type">
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
    v: { type: Object, required: true },
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
