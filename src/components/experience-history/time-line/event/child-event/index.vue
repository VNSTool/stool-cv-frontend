<template>
  <div class="group relative flex flex-col cursor-pointer">
    <div
      class="z-0 absolute -inset-2 rounded group-hover:bg-ghost-200 dark:group-hover:bg-black"
      :class="backgroundClass"
    ></div>
    <div
      class="transition-colors ease-in duration-200 absolute w-20 top-0 -left-22 text-center text-xl leading-6 text-black-900 dark:text-grey-700 font-light group-hover:font-medium bg-ghost-100 dark:bg-black-950"
      :class="timeClass"
    >
      {{ childEvent.time }}
    </div>
    <div
      class="z-1 whitespace-normal break-words text-xl leading-6 text-black-900 dark:text-grey-700 font-light"
      v-html="childEvent.title"
    />
    <ExperienceHistoryTimeLineEventChildEventDescriptions
      v-if="childEvent.descriptions"
      :descriptions="childEvent.descriptions"
      class="z-1 mt-3"
    />
    <div v-if="childEvent.details" class="z-1 mt-2">
      <div
        v-for="detail in childEvent.details"
        :key="detail.id"
        class="mt-2 first:mt-0"
      >
        <div
          v-html="detail.title"
          class="whitespace-normal break-words text-xl leading-6 text-black-900 dark:text-grey-700 font-light"
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
    childEvent: {
      type: Object,
      default: function () {
        return {
          time: "",
          title: "",
          descriptions: [],
          details: [],
        };
      },
    },
    selected: Boolean,
  },
  computed: {
    backgroundClass: function () {
      return {
        "bg-ghost-200 dark:bg-black": this.selected,
      };
    },
    timeClass: function () {
      return {
        "!font-medium": this.selected,
      };
    },
  },
});
</script>
