<template>
  <div class="form-input">
    <label>
      {{ label }}
      <textarea
        type="text"
        :value="value"
        @input="$emit('input', $event.target.value)"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: 'TextForm',
  props: {
    label: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      required: true,
    },
  },
};
</script>
