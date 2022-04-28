<template>
  <svg
    width="120"
    height="120"
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="60" cy="60" r="41.5" stroke="#4A4DE6" stroke-dasharray="4 4" />
    <mask :id="'path-2-inside-' + id" fill="white">
      <path :d="pathD" />
    </mask>
    <path
      :d="pathD"
      :fill="fillColor"
      stroke="#4A4DE6"
      stroke-width="2"
      :mask="'url(#path-2-inside-' + id"
      class="transition-colors ease-in duration-200"
    />
  </svg>
</template>

<script>
import Vue from "vue";
import {
  DISPLAY_MODE_DARK,
  DISPLAY_MODE_LIGHT,
} from "~/constants/display-mode";

export default Vue.extend({
  props: {
    id: {
      type: String,
      default: "",
    },
    pathD: {
      type: String,
      default: "",
    },
    selected: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    fillColor: function () {
      if (this.selected) {
        return "#4A4DE6";
      }

      const displayMode = this.$store.state.displayMode;

      switch (displayMode) {
        case DISPLAY_MODE_DARK:
          return "#1D1D1D";

        case DISPLAY_MODE_LIGHT:
        default:
          return "#F5F8FF";
      }
    },
  },
});
</script>
