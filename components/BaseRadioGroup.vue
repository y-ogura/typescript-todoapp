<template>
  <ul>
    <slot v-bind="slotProps" />
  </ul>
</template>
<script>
export default {
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    radioItems: {
      type: Array,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    slotProps () {
      return {
        name: this.$props.name,
        radioItems: this.$props.radioItems,
        value: this.$props.value,
        onchange: this.onchange
      }
    }
  },
  methods: {
    onchange (val) {
      this.$emit('change', val)
    }
  }
}
</script>
