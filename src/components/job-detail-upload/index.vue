<template>
  <CommonInformationBox :title="title">
    <CommonInputBase
      v-model="email"
      placeholder="Input your email"
      :errors="emailErrors"
      :inputClass="'w-full'"
      class="w-full"
    />
    <div class="flex flex-col mt-10">
      <CommonUploadBox
        :acceptTypes="fileAcceptTypes"
        :maxSize="fileMaxSize"
        @setItems="setJobDetailFiles"
      />
      <JobDetailUploadOnlineJobDetail class="mt-10" />
      {{ jobDetailFilesErrors }}
    </div>
  </CommonInformationBox>
</template>

<script>
import Vue from "vue";
import Vuelidate from "vuelidate";
import {
  required,
  requiredIf,
  maxLength,
  email,
} from "vuelidate/lib/validators";

import { TYPE_PDF, TYPE_JPG, TYPE_PNG, TYPE_SVG } from "~/constants/mime-type";

Vue.use(Vuelidate);

export default Vue.extend({
  data: function () {
    return {
      title: "Share me job",
      email: null,
      jobDetailFiles: null,
      fileAcceptTypes: [TYPE_PDF],
      fileMaxSize: 5 * 1024 * 1024,
      jobDetailUrls: [],
    };
  },
  validations() {
    return {
      email: {
        required,
        maxLength: maxLength(255),
        email,
      },
      jobDetailFiles: {
        required: requiredIf(function () {
          return !this.jobDetailUrls || this.jobDetailUrls.length === 0;
        }),
      },
      jobDetailUrls: {
        required: requiredIf(function () {
          return !this.jobDetailFiles || this.jobDetailFiles.length === 0;
        }),
      },
    };
  },
  computed: {
    emailErrors: function () {
      const errors = [];

      if (this.email !== null) {
        if (!this.$v.email.required) {
          errors.push("Email is required");
        }
        if (!this.$v.email.maxLength) {
          errors.push("Email is too long");
        }
        if (!this.$v.email.email) {
          errors.push("Not valid email");
        }
      }

      return errors;
    },
    jobDetailErrors: function () {
      const errors = [];

      if (!this.$v.jobDetailFiles.required || !this.$v.jobDetailUrls.required) {
        errors.push("Need atleast either 1 file or 1 url");
      }

      return errors;
    },
  },
  methods: {
    setJobDetailFiles(files) {
      this.jobDetailFiles = files;
    },
  },
});
</script>
