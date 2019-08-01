<template>
  <div class="flex justify-between border rounded border-gray-900 border-solid bg-gray-900 p-2">
    <BaseInput
      class="flex flex-col justify-start items-start"
      type="text"
      name="内容"
      placeholder="タスクを入力してください"
      :value="value"
    >
      <label slot="label" class="text-white px-1">内容</label>
    </BaseInput>
    <div class="flex flex-col justify-start items-start">
      <label class="text-white">内容</label>
      <BaseRadioGroup
        v-model="selectValue"
        :radio-items="items"
        name="radio"
        class="flex justify-center"
      >
        <template v-slot="{ radioItems, name, onchange, value }">
          <div
            v-for="(radioItem, index) in radioItems"
            :key="index"
            class="px-1"
          >
            <BaseRadio
              :id="`${name}${index}`"
              :name="name"
              :radio-item="radioItem"
              :checked="radioItem.value === value"
              class="mt-2"
              @change="onchange"
            />
          </div>
        </template>
      </BaseRadioGroup>
    </div>
    <BaseInput
      class="flex flex-col justify-start items-start"
      type="date"
      name="内容"
      placeholder="タスクを入力してください"
      :value="limit"
    >
      <label slot="label" class="text-white px-1">期限</label>
    </BaseInput>
    <div class="flex flex-col justify-start items-start">
      <BaseButton
        class="h-8 w-12 bg-blue-600 flex p-1 items-stretch"
      >
        追加
      </BaseButton>
      <BaseButton
        class="h-8 w-14 bg-gray-500 flex p-1 items-stretch"
      >
        クリア
      </BaseButton>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import BaseInput from '@/components/BaseInput.vue'
import BaseRadioGroup from '@/components/BaseRadioGroup.vue'
import BaseRadio from '@/components/BaseRadio.vue'
import BaseButton from '@/components/BaseButton.vue'

@Component({
  components: {
    BaseInput,
    BaseRadioGroup,
    BaseRadio,
    BaseButton
  },
  computed: {
    items (): object[] {
      return [
        { value: '1', label: '高' },
        { value: '2', label: '中' },
        { value: '3', label: '低' }
      ]
    }
  }
})
export default class TodoForm extends Vue {
  value: string = ''
  selectValue: string = '1'
  limit: Date = new Date()
}
</script>

<style lang="postcss" scoped>
</style>
