<template>
  <div class="relative -mx-2 sm:mx-0 flex flex-col items-center">
    <div :class="['grid-cols-' + lineSize]" class="w-full grid">
      <SkillsAggregationEvaluation
        v-for="(skill, index) in skills"
        :key="skill.id"
        :id="skill.id"
        :title="skill.title"
        :pathD="skill.pathD"
        :selected="selectedSkill === skill.id"
        @selectSkill="$emit('selectSkill', skill)"
      />
    </div>
    <SkillsAggregationSkillLineDetail
      :selectedSkillDetail="selectedSkillDetail"
    />
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    skills: {
      type: Array,
      default: function () {
        return [];
      },
    },
    lineSize: {
      type: Number,
      default: 0,
    },
    selectedSkill: {
      type: String,
      default: "",
    },
  },
  computed: {
    selectedSkillDetail: function () {
      let skill;
      if (
        (skill = this.skills.filter(
          (skill) => skill.id === this.selectedSkill
        )[0]) !== undefined
      ) {
        return skill.detail;
      }
    },
  },
});
</script>
