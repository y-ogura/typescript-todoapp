import Vuex from 'vuex'
import * as index from '@/store/todo'
import { createLocalVue } from '@vue/test-utils'
import _ from 'lodash'
import { Todo } from '@/types/models'

const localVue = createLocalVue()
localVue.use(Vuex)

let action
const testedAction = (context = {}, payload = {}) => {
  return index.actions[action].bind()(context, payload)
}

describe('store/todo/index.ts', () => {
  let store
  let todo1: Todo, todo2: Todo
  beforeEach(() => {
    store = new Vuex.Store(_.cloneDeep(index))
    todo1 = { id: '1', title: 'title1' }
    todo2 = { id: '2', title: 'title2' }
  })

  describe('getters', () => {
    let todos: Todo[] = []
    beforeEach(() => {
      todos = [todo1, todo2]
      store.replaceState({
        Todos: todos
      })
    })

    describe('index', () => {
      test('todo一覧が取得できること', () => {
        expect(store.getters['index']).toEqual(
          expect.arrayContaining(todos)
        )
      })
      test('idでtodoの絞り込みができること', () => {
        expect(store.getters['id']('1')).toMatchObject(todo1)
        expect(store.getters['id']('1')).not.toMatchObject(todo2)
      })
    })
  })

  describe('actions', () => {
    let commit
    beforeEach(() => {
      commit = store.commit
    })

    describe('set', () => {
      test('todoが追加できること', async done => {
        action = 'init'
        const todo: Todo = { id: '3', title: 'title3' }
        await testedAction({ commit }, { todo })
        expect(store.getters['index']).toContainEqual(todo)
        done()
      })
    })
  })
})
