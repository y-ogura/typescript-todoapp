<template>
  <div>
    <div class="container">
      <div>
        <h1 class="title">
          typescript-todoapp
        </h1>
        <TodoForm />
      </div>
    </div>
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
