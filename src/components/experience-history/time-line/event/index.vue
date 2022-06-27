<template>
  <div class="flex flex-col">
    <ExperienceHistoryTimeLineEventChildEvent
      v-for="childEvent in event.childEvents"
      :key="childEvent.id"
      :childEvent="childEvent"
      :selected="childEvent.id === selectedChildEvent"
      @click.native="selectChildEvent(childEvent)"
      class="mt-4 first:mt-0"
    />
  </div>
</template>

<script>
import Vue from "vue";

import { getTextContentOfHtmlText } from "~/utils/string";

export default Vue.extend({
  props: {
    event: {
      type: Object,
      default: function () {
        return {
          childEvents: [],
        };
      },
    },
    selectedChildEvent: String,
  },
  methods: {
    selectChildEvent(childEvent) {
      this.$emit("selectChildEvent", childEvent.id);

      this.$gtm.push({
        event: "click_experience",
        value: getTextContentOfHtmlText(childEvent.title),
      });
    },
  },
});
</script>
