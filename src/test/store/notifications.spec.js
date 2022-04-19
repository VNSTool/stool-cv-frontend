import { state as defaultState, mutations } from "~/store/notifications";
import { NOTIFICATION_TYPE_BASIC } from "~/constants/notification";

describe("notifications", () => {
  let state;

  beforeEach(() => {
    state = defaultState();
  });

  test("can mutate notiifaction list", () => {
    mutations.add(state, {
      id: 1,
      type: NOTIFICATION_TYPE_BASIC,
      content: "test 1",
    });
    mutations.add(state, {
      id: 2,
      type: NOTIFICATION_TYPE_BASIC,
      content: "test 2",
    });
    expect(state.list.length).toBe(2);
    expect(state.list[0].content).toBe("test 1");
    expect(state.list[1].content).toBe("test 2");

    mutations.remove(state, 1);
    expect(state.list.length).toBe(1);
    expect(state.list[0].content).toBe("test 2");
  });
});
