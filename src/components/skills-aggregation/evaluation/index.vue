<template>
  <div
    class="px-7 py-5 flex flex-row items-center transition-color ease-in duration-200 rounded-lg bg-ghost-200 dark:bg-black"
  >
    <div class="flex flex-col items-center">
      <SkillsAggregationEvaluationCircle :id="skill.id" :pathD="skill.pathD" />
      <div
        class="mt-5 text-xl leading-6 text-black-900 dark:text-grey-700 font-normal"
      >
        {{ skill.title }}
      </div>
    </div>
    <SkillsAggregationEvaluationDetail :details="skill.details" />
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    skill: Object,
  },
});
</script>
