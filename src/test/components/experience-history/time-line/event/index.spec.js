import { enableAutoDestroy, shallowMount } from "@vue/test-utils";

import ExperienceHistoryTimeLineEvent from "~/components/experience-history/time-line/event/index.vue";
import ExperienceHistoryTimeLineEventChildEvent from "~/components/experience-history/time-line/event/child-event/index.vue";

enableAutoDestroy(afterEach);

describe("ExperienceHistoryTimeLineEvent", () => {
  test("is a Vue instance", () => {
    const wrapper = shallowMount(ExperienceHistoryTimeLineEvent);

    expect(wrapper.vm).toBeTruthy();
  });

  test("child events got rendered correctly", async () => {
    const wrapper = shallowMount(ExperienceHistoryTimeLineEvent, {
      propsData: {
        event: {
          childEvents: [
            {
              id: "1",
            },
            {
              id: "2",
            },
          ],
        },
        selectedChildEvent: "1",
      },
    });

    const childEvents = wrapper.findAllComponents(
      ExperienceHistoryTimeLineEventChildEvent
    );
    expect(childEvents.length).toBe(2);
    expect(childEvents.at(0).vm.selected).toBe(true);
    expect(childEvents.at(1).vm.selected).toBe(false);

    await childEvents.at(1).trigger("click");
    expect(wrapper.emitted().selectChildEvent[0]).toEqual(["2"]);
  });
});
