<template>
  <div class="flex flex-col relative">
    <div
      class="absolute w-20 top-0 -left-22 text-center text-xl leading-6 text-black-900 font-light bg-ghost-100"
    >
      {{ childEvent.time }}
    </div>
    <div
      class="whitespace-normal break-words text-xl leading-6 text-black-900 font-light"
      v-html="childEvent.title"
    />
    <ExperienceHistoryTimeLineEventChildEventDescriptions
      v-if="childEvent.descriptions"
      :descriptions="childEvent.descriptions"
      class="mt-3"
    />
    <div v-if="childEvent.details" class="mt-2">
      <div
        v-for="detail in childEvent.details"
        :key="detail.id"
        class="mt-2 first:mt-0"
      >
        <div
          v-html="detail.title"
          class="whitespace-normal break-words text-xl leading-6 text-black-900 font-light"
        />
        <ExperienceHistoryTimeLineEventChildEventDescriptions
          v-if="detail.descriptions"
          :descriptions="detail.descriptions"
          class="mt-1"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    childEvent: Object,
  },
});
</script>
