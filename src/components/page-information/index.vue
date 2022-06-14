<template>
  <CommonInformationBox :title="title">
    <div class="px-4 sm:px-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <PageInformationVersion />
      <PageInformationComponent
        v-for="(information, index) in informations"
        :key="index"
        :data="information"
      />
    </div>
  </CommonInformationBox>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  data: function () {
    return {
      title: "About this page",
      informations: [
        {
          title:
            '<a target="_blank" href="https://github.com/VNSTool/stool-cv-frontend">Frontend Repository</a>',
          description: "Built by VueJS and NuxtJS",
        },
        {
          title:
            '<a target="_blank" href="https://github.com/VNSTool/stool-cv-backend">Backend Repository</a>',
          description: "Built by NodeJS and NestJS",
        },
        {
          title: "AWS",
          description: "EC2, S3, SQS, SES, CloudFront",
        },
        {
          title: "CI/CD",
          description: "Docker, Terraform, Github Actions",
        },
      ],
    };
  },
});
</script>
