import { Getters, Mutations, Actions, Action } from 'vuex'
import { User } from '@/types/models'
import { S, A, G, M } from '@/store/user/type'
import firebase from '@/plugins/firebase'

export const state = (): S => ({
  user: {} as User
})

export const actions: Actions<S, A, G, M> = {
  async signIn({ commit }, { email, password }) {
    firebase.signIn(email, password)
      .then(res => {
        if (res.user) {
          const user: User = {
            id: res.user.uid,
            email: res.user.email || ''
          }
          console.log(res)
          commit('setUser', { user })
        }
      })
  }
}

export const mutations: Mutations<S, M> = {
  setUser(state, { user }) {
    state.user = user
  }
}

export const getters: Getters<S, G> = {
  self(state) {
    return state.user
  }
}
