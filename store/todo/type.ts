import { Todo } from '@/types/models'

export interface S {
  Todos: Todo[]
}

export interface G {
  index: Todo[]
  id: (todoId: Todo['id']) => Todo
}

export interface RG {
  'todo/index': G['index']
}

export interface M {
  set: { payload: Todo[] }
}

export interface A {
  init: { todo:Todo[] }
}
export interface RA {
  'todo/init': A['init']
}

export interface RM {
}