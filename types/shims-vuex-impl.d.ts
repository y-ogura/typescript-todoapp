import 'vuex'

import * as Todo from '@/store/todo/type.ts'
import * as User from '@/store/todo/type.ts'

declare module 'vuex' {
  type RootState = {
    todo: Todo.S
    user: User.S
  }

  type RootGetters = Todo.RG & User.RG
  type RootMutations = Todo.RM
  type RootActions = Todo.RA & User.RA
}
