import { enableAutoDestroy, shallowMount, mount } from "@vue/test-utils";

import ExperienceHistoryTimeLineEventChildEventDescriptions from "~/components/experience-history/time-line/event/child-event/descriptions.vue";

enableAutoDestroy(afterEach);

describe("ExperienceHistoryTimeLineEventChildEventDescriptions", () => {
  test("is a Vue instance", () => {
    const wrapper = shallowMount(
      ExperienceHistoryTimeLineEventChildEventDescriptions
    );

    expect(wrapper.vm).toBeTruthy();

    const descriptions = wrapper.findAll("div > div");
    expect(descriptions.length).toBe(0);
  });

  test("can display descriptions", () => {
    const wrapper = mount(
      ExperienceHistoryTimeLineEventChildEventDescriptions,
      {
        propsData: {
          descriptions: ["<span>Testing</span> 1", "Testing 2"],
        },
      }
    );

    const descriptions = wrapper.findAll(".whitespace-normal");
    expect(descriptions.at(0).find("span").text()).toBe("Testing");
    expect(descriptions.at(0).text()).toBe("Testing 1");
    expect(descriptions.at(1).text()).toBe("Testing 2");
  });
});
