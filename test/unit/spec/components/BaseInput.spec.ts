import { mount, createLocalVue, Wrapper } from '@vue/test-utils'
import BaseInput from '@/components/BaseInput.vue'
import Vue from 'vue'

const localVue = createLocalVue()

describe('components/BaseInput.vue', () => {
  let wrapper:Wrapper<Vue>
  let value: string = ''
  beforeEach(() => {
    wrapper = mount(BaseInput, {
      localVue,
      propsData: {
        name: 'input',
        value: value,
        placeholder: '入力してください',
        type: 'text',
        input: () => {},
        change: () => {},
        focus: () => {},
        blur: () => {}
      },
      slots: {
        label: '<label class="text-white">備考</label>'
      }
    })
  })

  describe('template', () => {
    test('入力フォームが存在すること', () => {
      expect(wrapper.contains('input[type="text"]')).toBe(true)
    })
    test('文字入力のテスト', () => {
      const textInput = wrapper.find('input[type="text"]')
      textInput.setValue('set value')
      expect(wrapper.emitted().input).toBeTruthy()
      expect(wrapper.emitted().change).toBeTruthy()
    })
    test('focus時のテスト', () => {
      const textInput = wrapper.find('input[type="text"]')
      textInput.trigger('focus')
      expect(wrapper.emitted().focus).toBeTruthy()
    })
    test('blur時のテスト', () => {
      const textInput = wrapper.find('input[type="text"]')
      textInput.trigger('blur')
      expect(wrapper.emitted().blur).toBeTruthy()
    })
    test('placeholder表示のテスト', () => {
      const textInput = wrapper.find('input[type="text"]')
      expect(textInput.attributes().placeholder).toBe('入力してください')
    })
    test('slotの表示テスト', () => {
      expect(wrapper.contains('label')).toBe(true)
    })
  })
})
