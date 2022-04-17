import { DISPLAY_MODE_LOCAL_STORAGE_KEY } from "~/constants/display-mode";

export const state = () => ({
  displayMode: "",
});

export const mutations = {
  changeDisplayMode(state, mode) {
    state.displayMode = mode;
    localStorage.setItem(DISPLAY_MODE_LOCAL_STORAGE_KEY, mode);
  },
};
