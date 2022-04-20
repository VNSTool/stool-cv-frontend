<template>
  <div class="flex flex-row">
    <div class="flex flex-col items-center w-20">
      <div
        v-if="start"
        class="w-4 h-4 rounded-full border-2 border-black-800"
      />
      <div class="flex-1 dashed-line"></div>
      <div v-if="stop" class="w-4 h-4 rounded-full border-2 border-black-800" />
    </div>
    <div class="flex flex-1 flex-col py-10 ml-2">
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
