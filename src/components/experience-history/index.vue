<template>
  <CommonInformationBox :title="title">
    <div class="flex flex-col lg:flex-row">
      <ExperienceHistoryTimeLine
        v-for="(timeLine, index) in timeLines"
        :key="timeLine.id"
        :start="index === 0"
        :stop="index === timeLines.length - 1"
        class="first:ml-0 lg:flex-1 lg:ml-20"
      />
    </div>
  </CommonInformationBox>
</template>

<script>
import Vue from "vue";
import { v4 as uuidv4 } from "uuid";

export default Vue.extend({
  data: function () {
    return {
      title: "Experience History",
      timeLines: [
        {
          id: uuidv4(),
        },
        {
          id: uuidv4(),
        },
      ],
    };
  },
});
</script>
