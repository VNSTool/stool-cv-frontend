<template>
  <div
    class="w-7.5 h-7.5 flex flex-row justify-center items-center cursor-pointer rounded-full hover:bg-ghost-200 dark:hover:bg-black"
    :class="backgroundClass"
    @mousedown="mouseDown"
    @mouseup="mouseUp"
    @mouseleave="mouseLeave"
  >
    <div class="text-black-900 dark:text-grey-700" :class="iconClass"></div>
  </div>
</template>

<script>
import Vue from "vue";

import {
  DISPLAY_MODE_LIGHT,
  DISPLAY_MODE_DARK,
} from "~/constants/display-mode";
import { ICON_MOON, ICON_SUN } from "~/constants/icons";

export default Vue.extend({
  data: function () {
    return {
      onMouseDown: false,
    };
  },
  props: {
    mode: String,
    selected: Boolean,
  },
  computed: {
    iconClass: function () {
      switch (this.mode) {
        case DISPLAY_MODE_DARK:
          return ICON_MOON;

        case DISPLAY_MODE_LIGHT:
        default:
          return ICON_SUN;
      }
    },
    backgroundClass: function () {
      return {
        "!bg-ghost-300 dark:!bg-black-800": this.onMouseDown,
        "bg-ghost-200 dark:bg-black": this.selected && !this.onMouseDown,
      };
    },
  },
  methods: {
    mouseDown() {
      this.onMouseDown = true;
    },
    mouseUp() {
      this.$emit("selectMode");

      this.onMouseDown = false;

      this.$gtm.push({
        event: "select_display_mode",
        value: this.mode,
      });
    },
    mouseLeave() {
      this.onMouseDown = false;
    },
  },
});
</script>
