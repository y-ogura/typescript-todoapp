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
    <BaseInputDate
      class="flex flex-col justify-start items-start"
      placeholder="タスクを入力してください"
      :min="today.format('YYYY-MM-DD')"
      :value="limit"
    >
      <label slot="label" class="text-white px-1">期限</label>
    </BaseInputDate>
  </div>
</template>

<script lang="ts">
import moment from 'moment'
import { Vue, Component } from 'nuxt-property-decorator'
import BaseInput from '@/components/BaseInput.vue'
import BaseInputDate from '@/components/BaseInputDate.vue'
import BaseRadioGroup from '@/components/BaseRadioGroup.vue'
import BaseRadio from '@/components/BaseRadio.vue'

@Component({
  components: {
    BaseInput,
    BaseInputDate,
    BaseRadioGroup,
    BaseRadio
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
  today: moment.Moment = moment()
  limit: string = this.today.format('YYYY-MM-DD')
}
</script>

<style lang="postcss" scoped>
</style>
