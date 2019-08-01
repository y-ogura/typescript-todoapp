<template>
  <div>
    <TodoForm />
  </div>
</template>

<script>
import TodoForm from '@/components/TodoForm'
export default {
  components: {
    TodoForm
  },
  data () {
    return {
      value: ''
    }
  }
}
</script>
