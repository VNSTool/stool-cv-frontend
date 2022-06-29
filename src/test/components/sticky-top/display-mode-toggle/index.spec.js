import {
  enableAutoDestroy,
  shallowMount,
  mount,
  createLocalVue,
} from "@vue/test-utils";
import Vuex from "vuex";

import StickyTopDisplayModeToggle from "~/components/sticky-top/display-mode-toggle/index.vue";
import StickyTopDisplayModeToggleItem from "~/components/sticky-top/display-mode-toggle/item.vue";
import { DISPLAY_MODE_LIGHT } from "~/constants/display-mode";

enableAutoDestroy(afterEach);
const localVue = createLocalVue();
localVue.use(Vuex);

describe("StickyTopDisplayModeToggle", () => {
  let state;
  let mutations;
  let store;

  beforeEach(() => {
    state = {
      displayMode: DISPLAY_MODE_LIGHT,
    };

    mutations = {
      changeDisplayMode: jest.fn(),
    };

    store = new Vuex.Store({
      state,
      mutations,
    });
  });

  test("is a Vue instance", () => {
    const wrapper = shallowMount(StickyTopDisplayModeToggle, {
      store,
      localVue,
    });
    expect(wrapper.vm).toBeTruthy();
  });

  test("there are 2 display modes", () => {
    const wrapper = shallowMount(StickyTopDisplayModeToggle, {
      store,
      localVue,
    });
    const displayModes = wrapper.findAllComponents(
      StickyTopDisplayModeToggleItem
    );

    expect(displayModes.length).toBe(2);
    expect(displayModes.at(0).vm.selected).toBe(true);
  });

  test("computed selected mode is light", () => {
    const wrapper = shallowMount(StickyTopDisplayModeToggle, {
      store,
      localVue,
    });

    expect(wrapper.vm.selectedMode).toEqual(DISPLAY_MODE_LIGHT);
  });

  test("mutation called on changing mode", async () => {
    const gtmEvents = [];

    const wrapper = mount(StickyTopDisplayModeToggle, {
      store,
      localVue,
      mocks: {
        $gtm: {
          push: function (event) {
            gtmEvents.push(event);
          },
        },
      },
    });

    const displayModes = wrapper.findAllComponents(
      StickyTopDisplayModeToggleItem
    );
    await displayModes.at(1).trigger("mouseup");
    expect(mutations.changeDisplayMode).toHaveBeenCalled();
    expect(gtmEvents).toEqual([
      { event: "select_display_mode", value: "DISPLAY_MODE_DARK" },
    ]);
  });
});
