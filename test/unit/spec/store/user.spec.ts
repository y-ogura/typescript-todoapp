import Vuex from 'vuex'
import * as index from '@/store/user'
import { createLocalVue } from '@vue/test-utils'
import cloneDeep from 'lodash.cloneDeep'
import { User } from '@/types/models'

jest.mock('@/assets/ts/firebase')

const localVue = createLocalVue()
localVue.use(Vuex)

let action
const testedAction = (context = {}, payload = {}) => {
  return index.actions[action].bind()(context, payload)
}

describe('store/user/index.ts', () => {
  let store
  beforeEach(() => {
    store = new Vuex.Store(cloneDeep(index))
  })

  describe('actions', () => {
    let commit
    beforeEach(() => {
      commit = store.commit
    })

    test('signIn', async done => {
      action = 'signIn'
      const email: string = 'test@example.com'
      const password: string = 'asdf0987'
      const expected: User = { id: '1', email: email}
      await testedAction({ commit }, { email, password })
      expect(store.getters['self']).toMatchObject(expected)
      done()
    })
  })
})
