<template>
  <li>
    <input
      :id="id"
      type="radio"
      :name="name"
      :value="radioItem.value"
      :checked="checked"
      class="hidden radio"
      @change="$emit('change', radioItem.value)"
    />
    <label
      :for="id"
      class="label"
    >
      {{ radioItem.label }}
    </label>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    radioItem: {
      type: Object,
      required: true
    },
    checked: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style lang="postcss" scoped>
.radio + .label {
  @apply flex items-center text-white;
}

.radio + .label::before {
  content: '';
  @apply bg-gray-400 block w-4 h-4 mr-4 rounded-full;
}

.radio:checked + .label::before {
  @apply bg-primary;
}

.radio:checked + .label {
  @apply text-primary;
}
</style>
