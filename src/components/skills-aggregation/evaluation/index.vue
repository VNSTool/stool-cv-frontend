<template>
  <div class="flex flex-row justify-center">
    <div class="flex flex-col items-center p-3">
      <SkillsAggregationEvaluationCircle :pathD="pathD" />
      <div class="mt-5 text-xl leading-6 text-black-900 dark:text-grey-700 font-light">
        {{ title }}
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    title: {
      type: String,
      default: "",
    },
    pathD: {
      type: String,
      default: "",
    },
  },
});
</script>
