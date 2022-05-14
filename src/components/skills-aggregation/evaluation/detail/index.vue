<template>
  <div class="pl-7">
    <SkillsAggregationEvaluationDetailBlock
      v-for="(detail, index) in details"
      :key="index"
      :detail="detail"
      class="mt-3 first:mt-0"
    />
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    details: Array,
  },
});
</script>
