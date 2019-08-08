import { Getters, Mutations, Actions, Action } from 'vuex'
import { S, G, M, A } from '@/store/todo/type'

export const state = (): S => ({
  Todos: []
})

export const mutations: Mutations<S, M> = {
  set(state, { payload }) {
    state.Todos.push(payload)
  }
}

export const getters: Getters<S, G> = {
  index: (state) => {
    return state.Todos
  },
  id: (state) => (todoId) => {
    const todos = state.Todos.filter((e) => e.id === todoId)
    return todos[0]
  }
}

export const actions: Actions<S, A, G, M> = {
  async init({ commit }, { todo }) {
    commit('set', { payload: todo })
  }
}
