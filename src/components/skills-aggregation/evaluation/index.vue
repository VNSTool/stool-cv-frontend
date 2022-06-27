<template>
  <div class="flex flex-row justify-center">
    <div
      class="transition-color ease-in duration-200 flex flex-col items-center p-3 rounded-lg cursor-pointer hover:bg-ghost-200 hover:dark:bg-black"
      :class="containerBackgroundClass"
      @click="selectSkill"
    >
      <SkillsAggregationEvaluationCircle
        :id="id"
        :pathD="pathD"
        :selected="selected"
      />
      <div
        class="mt-5 text-xl leading-6 text-black-900 dark:text-grey-700 font-light"
      >
        {{ title }}
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    id: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    pathD: {
      type: String,
      default: "",
    },
    selected: {
      type: Boolean,
      default: false,
    },
    isInSelectedLine: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    titleClass: function () {
      return {
        "font-normal": this.selected,
      };
    },
    containerBackgroundClass: function () {
      return {
        "!rounded-b-none": this.isInSelectedLine,
        "bg-ghost-200 dark:bg-black": this.selected,
      };
    },
  },
  methods: {
    selectSkill() {
      this.$emit("selectSkill");

      this.$gtm.push({
        event: "click_skill",
        value: this.title,
      });
    },
  },
});
</script>
