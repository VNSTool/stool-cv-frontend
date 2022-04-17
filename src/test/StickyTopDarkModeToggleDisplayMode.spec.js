import { mount } from '@vue/test-utils'
import StickyTopDarkModeToggleDisplayMode from '@/components/sticky-top/dark-mode-toggle/display-mode.vue'

describe('StickyTopDarkModeToggleDisplayMode', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(StickyTopDarkModeToggleDisplayMode)
    expect(wrapper.vm).toBeTruthy()
  })
})
