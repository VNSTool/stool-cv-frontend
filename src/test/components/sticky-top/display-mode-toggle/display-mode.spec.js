import { enableAutoDestroy, mount } from "@vue/test-utils";

import StickyTopDisplayModeToggleItem from "~/components/sticky-top/display-mode-toggle/item.vue";
import {
  DISPLAY_MODE_LIGHT,
  DISPLAY_MODE_DARK,
} from "~/constants/display-mode";
import { ICON_MOON, ICON_SUN } from "~/constants/icons";

enableAutoDestroy(afterEach);

describe("StickyTopDisplayModeToggleItem", () => {
  const selectedClasses = ["bg-ghost-200", "dark:bg-black"];
  const mouseDownClasses = ["!bg-ghost-300", "dark:!bg-black-800"];

  test("is a Vue instance", () => {
    const wrapper = mount(StickyTopDisplayModeToggleItem);
    expect(wrapper.vm).toBeTruthy();
  });

  test("display sun icon without selected", () => {
    const wrapper = mount(StickyTopDisplayModeToggleItem, {
      propsData: {
        mode: DISPLAY_MODE_LIGHT,
        selected: false,
      },
    });

    expect(wrapper.classes()).not.toEqual(
      expect.arrayContaining(selectedClasses)
    );

    const innerDiv = wrapper.getComponent("div > div");
    expect(innerDiv.classes()).toContain(ICON_SUN);
  });

  test("display moon icon without selected", () => {
    const wrapper = mount(StickyTopDisplayModeToggleItem, {
      propsData: {
        mode: DISPLAY_MODE_DARK,
        selected: false,
      },
    });

    expect(wrapper.classes()).not.toEqual(
      expect.arrayContaining(selectedClasses)
    );

    const innerDiv = wrapper.getComponent("div > div");
    expect(innerDiv.classes()).toContain(ICON_MOON);
  });

  test("display sun icon with selected", () => {
    const wrapper = mount(StickyTopDisplayModeToggleItem, {
      propsData: {
        mode: DISPLAY_MODE_LIGHT,
        selected: true,
      },
    });

    expect(wrapper.classes()).toEqual(expect.arrayContaining(selectedClasses));

    const innerDiv = wrapper.getComponent("div > div");
    expect(innerDiv.classes()).toContain(ICON_SUN);
  });

  test("mouse down and mouse up event trigger select mode and update the style", async () => {
    const gtmEvents = [];

    const wrapper = mount(StickyTopDisplayModeToggleItem, {
      propsData: {
        mode: DISPLAY_MODE_LIGHT,
        selected: true,
      },
      mocks: {
        $gtm: {
          push: function (event) {
            gtmEvents.push(event);
          },
        },
      },
    });

    await wrapper.trigger("mousedown");
    expect(wrapper.classes()).toEqual(expect.arrayContaining(mouseDownClasses));

    await wrapper.trigger("mouseup");
    expect(wrapper.emitted().selectMode[0]).toEqual([]);
    expect(wrapper.classes()).not.toEqual(
      expect.arrayContaining(mouseDownClasses)
    );
    expect(gtmEvents).toEqual([
      { event: "select_display_mode", value: "DISPLAY_MODE_LIGHT" },
    ]);
  });
});
