<template>
  <div>
    <div
      class="text-xl leading-6 text-black-900 dark:text-grey-700 font-normal"
    >
      Online JD
    </div>
    <CommonList
      :items="displayList"
      :showUpload="false"
      @removeItem="removeItem"
      class="mt-4"
    />
    <JobDetailUploadOnlineJobDetailInput class="mt-3" @addItem="addItem" />
  </div>
</template>

<script>
import Vue from "vue";
import { v4 as uuidv4 } from "uuid";

export default Vue.extend({
  data: function () {
    return {
      jobDetails: [],
    };
  },
  computed: {
    displayList: function () {
      return this.jobDetails.map((jobDetail) => ({
        id: jobDetail.id,
        title: jobDetail.url,
      }));
    },
  },
  watch: {
    jobDetails(val) {
      this.$emit("setUrls", val);
    },
  },
  methods: {
    addItem(url) {
      this.jobDetails.push({
        id: uuidv4(),
        url,
      });
    },
    removeItem(id) {
      this.jobDetails.splice(
        this.jobDetails.findIndex((jobDetail) => jobDetail.id === id),
        1
      );
    },
  },
});
</script>
;
