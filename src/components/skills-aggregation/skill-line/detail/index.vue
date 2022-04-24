<template>
  <div
    class="transition-color px-4 sm:px-10 ease-in duration-200 rounded-lg bg-ghost-200 dark:bg-black w-full"
    :class="containerClass"
  >
    <SkillsAggregationSkillLineDetailBlock
      v-for="(detail, index) in selectedSkillDetail"
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
    selectedSkillDetail: Array,
  },
  computed: {
    containerClass: function () {
      return {
        "py-4 sm:py-6": this.selectedSkillDetail,
      };
    },
  },
});
</script>
