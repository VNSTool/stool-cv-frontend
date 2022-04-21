import { enableAutoDestroy, shallowMount, mount } from "@vue/test-utils";

import ExperienceHistory from "~/components/experience-history/index.vue";
import ExperienceHistoryTimeLine from "~/components/experience-history/time-line/index.vue";

enableAutoDestroy(afterEach);

describe("ExperienceHistory", () => {
  test("is a Vue instance", () => {
    const wrapper = shallowMount(ExperienceHistory);

    expect(wrapper.vm).toBeTruthy();
  });

  test("render title correctly", () => {
    const wrapper = mount(ExperienceHistory, {
      data: function () {
        return {
          title: "testing title",
        };
      },
    });

    expect(wrapper.find("div > div").text()).toBe("testing title");
  });

  test("render time lines correctly", async () => {
    const wrapper = mount(ExperienceHistory, {
      data: function () {
        return {
          timeLines: [
            {
              id: "1",
              events: [
                {
                  id: "11",
                  childEvents: [
                    {
                      id: "111",
                    },
                  ],
                },
              ],
            },
            {
              id: "2",
              events: [
                {
                  id: "21",
                  childEvents: [
                    {
                      id: "211",
                    },
                  ],
                },
              ],
            },
          ],
        };
      },
    });

    const timeLines = wrapper.findAllComponents(ExperienceHistoryTimeLine);
    expect(timeLines.length).toBe(2);

    const childEvent = wrapper.find(".group");
    await childEvent.trigger("click");
    expect(wrapper.vm.selectedChildEvent).toBe("111");
  });
});
