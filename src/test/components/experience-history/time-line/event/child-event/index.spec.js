import { enableAutoDestroy, shallowMount } from "@vue/test-utils";

import ExperienceHistoryTimeLineEventChildEvent from "~/components/experience-history/time-line/event/child-event/index.vue";

enableAutoDestroy(afterEach);

describe("ExperienceHistoryTimeLineEventChildEvent", () => {
  const selectedBackgroundClass = ["bg-ghost-200", "dark:bg-black"];
  const selectedTimeClass = ["!font-medium"];

  test("is a Vue instance", () => {
    const wrapper = shallowMount(ExperienceHistoryTimeLineEventChildEvent);

    expect(wrapper.vm).toBeTruthy();
  });

  test("render data correctly", () => {
    const wrapper = shallowMount(ExperienceHistoryTimeLineEventChildEvent, {
      propsData: {
        childEvent: {
          time: "test time",
          title: "test title",
          descriptions: [],
          details: [
            {
              title: "detail 1",
            },
            {
              title: "detail 2",
            },
          ],
        },
      },
    });

    const contents = wrapper.findAll(".group > div");
    expect(contents.at(1).text()).toBe("test time");
    expect(contents.at(2).text()).toBe("test title");

    const details = contents.at(3).findAll(".whitespace-normal");
    expect(details.at(0).text()).toBe("detail 1");
    expect(details.at(1).text()).toBe("detail 2");
  });

  test("is not selected", () => {
    const wrapper = shallowMount(ExperienceHistoryTimeLineEventChildEvent, {
      propsData: {
        selected: false,
      },
    });

    const contents = wrapper.findAll(".group > div");
    expect(contents.at(0).classes()).not.toEqual(
      expect.arrayContaining(selectedBackgroundClass)
    );
    expect(contents.at(1).classes()).not.toEqual(
      expect.arrayContaining(selectedTimeClass)
    );
  });
  test("is selected", () => {
    const wrapper = shallowMount(ExperienceHistoryTimeLineEventChildEvent, {
      propsData: {
        selected: true,
      },
    });

    const contents = wrapper.findAll(".group > div");
    expect(contents.at(0).classes()).toEqual(
      expect.arrayContaining(selectedBackgroundClass)
    );
    expect(contents.at(1).classes()).toEqual(
      expect.arrayContaining(selectedTimeClass)
    );
  });
});
