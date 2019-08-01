<template>
  <div class="fixed z-50 w-full h-full modal-mask inset-0 bg-color-gray" @click="onClickMask">
    <div class="flex justify-center items-center h-full">
      <div class="bg-white rounded mx-4 break-words modal-container" @click.stop>
        <div class="flex justify-between px-6 py-2 text-2xl border-b">
          <div>
            {{ modalTitle }}
          </div>
          <button class="close-button" @click="$emit('closeModal')">
            ×
          </button>
        </div>
        <slot />
        <!-- Todo: ボタンをBaseButtonに変更 -->
        <div class="px-6 py-2 flex justify-end border-t">
          <button class="mr-4">
            完了
          </button>
          <button>クリア</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
@Component
export default class BaseModal extends Vue {
  @Prop({ type: String, default: '' })
  modalTitle!: String

  onClickMask () {
    this.$emit('closeModal')
  }
}
</script>

<style>
.bg-color-gray {
  background-color: rgba(155, 147, 147, 0.5)
}
.close-button:focus {
  outline:0;
}
</style>
