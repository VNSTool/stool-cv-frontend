<template>
  <div
    class="w-7.5 h-7.5 flex flex-row justify-center items-center cursor-pointer rounded-full hover:bg-ghost-200 dark:hover:bg-black"
    :class="backgroundClass"
    @mousedown="mouseDown"
    @mouseup="mouseUp"
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

export default Vue.extend({
  data: function() {
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
          return "icon-moon";

        case DISPLAY_MODE_LIGHT:
        default:
          return "icon-sun";
      }
    },
    backgroundClass: function() {
      if (this.onMouseDown) {
        return '!bg-ghost-300 dark:!bg-black-800';
      }

      if (this.selected) {
        return 'bg-ghost-200 dark:bg-black';
      }

      return '';
    }
  },
  methods: {
    mouseDown() {
      this.$emit('selectMode');
      this.onMouseDown = true;
    },
    mouseUp() {
      this.onMouseDown = false;
    },
  },
});
</script>
