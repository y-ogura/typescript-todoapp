<template>
  <div class="border rounded">
    <div class="border-b font-bold p-1">
      {{ item.name }}
    </div>
    <div class="flex justify-between bg-gray-100 p-1">
      <div class="w-1/2 text-sm">
        <span class="font-bold">優先度</span>
        <span class="mr-3">{{ item.priority }}</span>
        <span class="font-bold">期限</span>
        <span class="mr-2">{{ item.due }}</span>
        <span>{{ item.message }}</span>
      </div>
      <div class="w-1/2 flex justify-end items-center">
        <input type="checkbox" class="mr-2" />
        <span class="mr-2 text-sm">完了</span>
        <!-- basebutton使う -->
        <button class="mr-2">
          編集
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'nuxt-property-decorator'
interface Task {
  id: string,
  name: string,
  priority: string,
  due: string,
  message: string,
  isDone: boolean
}
@Component
export default class TodoListItem extends Vue {
  @Prop({ type: Object, default: {} })
  item!: Task
}
</script>
