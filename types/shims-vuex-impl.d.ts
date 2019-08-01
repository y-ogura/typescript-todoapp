import 'vuex'

import * as Todo from '@/store/todo/type.ts'

declare module 'vuex' {
  type RootState = {
    todo: Todo.S
  }

  type RootGetters = Todo.RG
  type RootMutations = Todo.RM
  type RootActions = Todo.RA
}