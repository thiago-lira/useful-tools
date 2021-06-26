<template>
  <div class="form-input">
    <label>
      {{ label }}
      <input
        type="text"
        :value="value"
        @input="$emit('input', $event.target.value)"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: 'InputForm',
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
