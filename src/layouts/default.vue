<template>
  <div class="w-screen" :class="displayModeClass">
    <div class="w-full h-full flex flex-row justify-center dark:bg-black">
      <StickyTop class="z-10" />
      <Notification class="z-20" />
      <div
        class="w-full lg:w-248 pb-28 sm:px-4 sm:pt-4 lg:px-0 lg:pt-28"
      >
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

import { DISPLAY_MODE_DARK } from "~/constants/display-mode";

export default Vue.extend({
  data: function () {
    return {
      displayModeClass: "",
    };
  },
  watch: {
    "$store.state.displayMode": function (mode) {
      if (mode === DISPLAY_MODE_DARK) {
        this.displayModeClass = "dark";
      } else {
        this.displayModeClass = "";
      }
    },
  },
  mounted() {
    if (this.$store.state.displayMode === DISPLAY_MODE_DARK) {
      this.displayModeClass = "dark";
    }
  },
});
</script>
