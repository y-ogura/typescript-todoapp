import { mount, createLocalVue, Wrapper } from '@vue/test-utils'
import BaseInput from '@/components/BaseInput.vue'
import Vue from 'vue'

const localVue = createLocalVue()

describe('components/BaseInput.vue', () => {
  let wrapper:Wrapper<Vue>
  beforeEach(() => {
    wrapper = mount(BaseInput, {
      localVue,
      propsData: {
        name: 'input'
      }
    })
  })

  describe('template', () => {
    test('入力フォームが存在すること', () => {
      expect(wrapper.contains('input[type="text')).toBe(true)
    })
  })
})
