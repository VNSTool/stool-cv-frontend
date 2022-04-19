import { state as defaultState, mutations } from "~/store/index";
import { DISPLAY_MODE_LIGHT } from "~/constants/display-mode";

describe("index", () => {
  let state;

  beforeEach(() => {
    state = defaultState();
  });

  test("can mou display mode", () => {
    mutations.changeDisplayMode(state, DISPLAY_MODE_LIGHT);
    expect(state.displayMode).toBe(DISPLAY_MODE_LIGHT);
  });
});
