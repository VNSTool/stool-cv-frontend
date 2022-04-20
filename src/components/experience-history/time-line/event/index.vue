<template>
  <div class="flex flex-col">
    <ExperienceHistoryTimeLineEventChildEvent
      v-for="childEvent in event.childEvents"
      :key="childEvent.id"
      :childEvent="childEvent"

      class="mt-4 first:mt-0"
    />
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    event: Object,
  },
});
</script>
