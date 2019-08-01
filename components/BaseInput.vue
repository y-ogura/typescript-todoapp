<template>
  <div>
    <span v-if="$slots.label">
      <slot name="label" />
    </span>
    <input
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      :type="type"
      :value="value"
      :placeholder="placeholder"
      @input="updateValue"
      @focus="$emit('focus', $event)"
      @blur="$emit('blur', $event)"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class BaseInput extends Vue {
  @Prop({ type: String, default: 'text' }) type?: string
  @Prop({ type: String, default: '' }) value!: string
  @Prop({ type: String, default: 'input form' }) placeholder?: string
  @Prop({ type: String, required: true }) name!: string
  updateValue = (e: any): void => {
    this.$emit('input', e.target.value)
    this.$emit('change', e.target.value)
  }
}
</script>
