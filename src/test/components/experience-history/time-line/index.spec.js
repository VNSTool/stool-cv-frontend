import { enableAutoDestroy, shallowMount, mount } from "@vue/test-utils";

import ExperienceHistoryTimeLine from "~/components/experience-history/time-line/index.vue";
import ExperienceHistoryTimeLineEvent from "~/components/experience-history/time-line/event/index.vue";
import ExperienceHistoryTimeLineEventChildEvent from "~/components/experience-history/time-line/event/child-event/index.vue";

enableAutoDestroy(afterEach);

describe("ExperienceHistoryTimeLine", () => {
  test("is a Vue instance", () => {
    const wrapper = shallowMount(ExperienceHistoryTimeLine);

    expect(wrapper.vm).toBeTruthy();
  });

  test("render start time line", () => {
    const wrapper = shallowMount(ExperienceHistoryTimeLine, {
      propsData: {
        start: true,
        stop: false,
      },
    });

    const time = wrapper.find(".w-20");
    const timeContents = time.findAll("div > div > div");
    expect(timeContents.length).toBe(2);
    expect(timeContents.at(0).classes()).toEqual(
      expect.arrayContaining(["rounded-full"])
    );
    expect(timeContents.at(1).classes()).toEqual(
      expect.arrayContaining(["dashed-line"])
    );
  });

  test("render stop time line", () => {
    const wrapper = shallowMount(ExperienceHistoryTimeLine, {
      propsData: {
        start: false,
        stop: true,
      },
    });

    const time = wrapper.find(".w-20");
    const timeContents = time.findAll("div > div > div");
    expect(timeContents.length).toBe(2);
    expect(timeContents.at(0).classes()).toEqual(
      expect.arrayContaining(["dashed-line"])
    );
    expect(timeContents.at(1).classes()).toEqual(
      expect.arrayContaining(["rounded-full"])
    );
  });

  test("render intermediate time line", () => {
    const wrapper = shallowMount(ExperienceHistoryTimeLine, {
      propsData: {
        start: false,
        stop: false,
      },
    });

    const time = wrapper.find(".w-20");
    const timeContents = time.findAll("div > div > div");
    expect(timeContents.length).toBe(1);
    expect(timeContents.at(0).classes()).toEqual(
      expect.arrayContaining(["dashed-line"])
    );
  });

  test("events got redered correctly", async () => {
    const wrapper = mount(ExperienceHistoryTimeLine, {
      propsData: {
        events: [
          {
            id: "1",
            childEvents: [
              {
                id: "11",
              },
            ],
          },
          {
            id: "2",
            childEvents: [
              {
                id: "21",
              },
            ],
          },
        ],
      },
    });

    const events = wrapper.findAllComponents(ExperienceHistoryTimeLineEvent);
    expect(events.length).toBe(2);

    const childEvent = events.at(0).find(".group");
    await childEvent.trigger("click");
    expect(wrapper.emitted().selectChildEvent[0]).toEqual(["11"]);
  });
});
