<template>
  <CommonInformationBox :title="title">
    <CommonInputBase placeholder="Input your email" class="w-full" />
    <div class="flex flex-col mt-10">
      <JobDetailUploadUploadBox />
      <JobDetailUploadOnlineJobDetail class="mt-10" />
    </div>
  </CommonInformationBox>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  data: function () {
    return {
      title: "Share me job",
    };
  },
});
</script>
