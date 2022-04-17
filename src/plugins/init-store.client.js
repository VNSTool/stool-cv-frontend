import {
  DISPLAY_MODE_LIGHT,
  DISPLAY_MODE_DARK,
  DISPLAY_MODE_LOCAL_STORAGE_KEY,
} from "~/constants/display-mode";

export default function ({ store }) {
  const localStorageDisplayMode = localStorage.getItem(
    DISPLAY_MODE_LOCAL_STORAGE_KEY
  );

  if ([DISPLAY_MODE_LIGHT, DISPLAY_MODE_DARK].includes(localStorageDisplayMode)) {
    store.commit("changeDisplayMode", localStorageDisplayMode);
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    store.commit("changeDisplayMode", DISPLAY_MODE_DARK);
  }
}
