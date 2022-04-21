<template>
  <div class="flex flex-col cursor-pointer">
    <ExperienceHistoryTimeLineEventChildEvent
      v-for="childEvent in event.childEvents"
      :key="childEvent.id"
      :childEvent="childEvent"
      :selected="childEvent.id === selectedChildEvent"
      @click.native="$emit('selectChildEvent', childEvent.id)"
      class="mt-4 first:mt-0"
    />
  </div>
</template>

<script>
import Vue from "vue";

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
});
</script>
