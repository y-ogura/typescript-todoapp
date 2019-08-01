<template>
  <div>
    <div v-for="item in todoList" :key="item.id">
      <todo-list-item :item="item" class="mt-2" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import TodoListItem from '@/components/TodoListItem.vue'
interface Task {
  id: string,
  name: string,
  priority: string,
  due: string,
  message: string,
  isDone: boolean
}
@Component({
  components: {
    TodoListItem
  }
})
export default class TodoList extends Vue {
  todoList: Task[] = [
    {
      id: '1',
      name: 'taskName1',
      priority: '高',
      due: '2019-08-01',
      message: '【今日が期限です】',
      isDone: false
    },
    {
      id: '2',
      name: 'taskName2',
      priority: '中',
      due: '2019-08-01',
      message: '【今日が期限です】',
      isDone: false
    }
  ]
}
</script>
