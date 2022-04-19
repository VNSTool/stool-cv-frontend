<template>
  <div
    class="flex flex-row items-center p-1.5 rounded-full bg-ghost-100 dark:bg-black-950 shadow-3xl dark:shadow-2xl-dark"
  >
    <StickyTopDisplayModeToggleItem
      v-for="mode in displayModes"
      :key="mode"
      :mode="mode"
      :selected="selectedMode === mode"
      @selectMode="selectMode(mode)"
      class="ml-2 first:ml-0"
    />
  </div>
</template>

<script>
import Vue from "vue";
import { mapMutations } from 'vuex'

import {
  DISPLAY_MODE_LIGHT,
  DISPLAY_MODE_DARK,
} from "~/constants/display-mode";

export default Vue.extend({
  data: function () {
    return {
      displayModes: [
        DISPLAY_MODE_LIGHT,
        DISPLAY_MODE_DARK,
      ],
    };
  },
  methods: {
    ...mapMutations({
      selectMode: 'changeDisplayMode',
    }),
  },
  computed: {
    selectedMode: function() {
      return this.$store.state.displayMode;
    }
  }
});
</script>
