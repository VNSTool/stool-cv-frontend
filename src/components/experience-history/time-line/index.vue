<template>
  <div class="flex flex-col">
    <div class="flex flex-row">
      <div class="flex flex-col items-center w-20">
        <div
          v-if="start"
          class="w-4 h-4 rounded-full border-2 border-black-800"
        />
        <div class="flex-1 dashed-line"></div>
        <div
          v-if="stop"
          class="w-4 h-4 rounded-full border-2 border-black-800"
        />
      </div>
      <div class="flex flex-1 flex-col ml-2" :class="paddingClass">
        <ExperienceHistoryTimeLineEvent
          v-for="event in events"
          :key="event.id"
          :event="event"
          :selectedChildEvent="selectedChildEvent"
          @selectChildEvent="
            (childEventId) => $emit('selectChildEvent', childEventId)
          "
          class="mt-10 first:mt-0"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    start: Boolean,
    stop: Boolean,
    events: Array,
    selectedChildEvent: String,
  },
  computed: {
    paddingClass: function () {
      return {
        "py-10": this.start && this.stop,
        "pt-10 pb-5 lg:py-10": this.start && !this.stop,
        "pt-5 pb-10 lg:py-10": !this.start && this.stop,
        "py-5 sm:py-10": !this.start && !this.stop,
      };
    },
  },
});
</script>

<style lang="scss" scoped>
.dashed-line {
  width: 2px;

  background-image: linear-gradient(#737880 62.5%, rgba(255, 255, 255, 0) 0%);
  background-position: left;
  background-size: 2px 16px;
  background-repeat: repeat-y;
}
</style>
