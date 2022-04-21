import { enableAutoDestroy, shallowMount } from "@vue/test-utils";

import CommonInformationBox from "~/components/common/information-box.vue";
import { testEnvironment } from "~/jest.config";

enableAutoDestroy(afterEach);

describe("CommonInformationBox", () => {
  test("is a Vue instance", () => {
    const wrapper = shallowMount(CommonInformationBox);

    expect(wrapper.vm).toBeTruthy();

    const titleComponent = wrapper.findComponent("div > div");
    expect(titleComponent.exists()).toBe(false);
  });

  test("can display title from props", () => {
    const wrapper = shallowMount(CommonInformationBox, {
      propsData: {
        title: "testing",
      },
    });

    const titleComponent = wrapper.findComponent("div > div");
    expect(titleComponent.exists()).toBe(true);
    expect(titleComponent.text()).toBe("testing");
  });
});
