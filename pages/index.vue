<template>
  <div>
    <TodoForm />
    <todo-list />
  </div>
</template>

<script>
import TodoForm from '@/components/TodoForm'
import TodoList from '@/components/TodoList'
export default {
  components: {
    TodoForm,
    TodoList
  },
  data () {
    return {
      value: ''
    }
  }
}
</script>
