<template>
  <CommonInformationBox :title="title" class="relative flex flex-col">
    <CommonInputBase
      v-model="email"
      placeholder="Input your email"
      :errors="inputEmailErrors"
      :inputClass="'w-full'"
    />
    <div class="flex flex-col gap-10 lg:flex-row mt-10">
      <CommonUploadBox
        :acceptTypes="fileAcceptTypes"
        :maxSize="fileMaxSize"
        @setItems="setJobDetailFiles"
        class="flex-1"
      />
      <div
        class="hidden lg:flex w-px bg-grey-900 dark:bg-grey-700 h-15 mt-10"
      ></div>
      <JobSharingOnlineJobDetail @setUrls="setJobDetailUrls" class="flex-1" />
    </div>
    <CommonButtonBase
      label="Submit"
      class="hidden sm:block absolute top-6 right-6 bg-majorelle !text-grey-700"
      @click.native="submit"
    />
    <div class="flex flex-row justify-end">
      <CommonButtonBase
        label="Submit"
        class="flex sm:hidden mt-10 bg-majorelle !text-grey-700"
        @click.native="submit"
      />
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
import { v4 as uuidv4 } from "uuid";

import { TYPE_PDF, TYPE_JPG, TYPE_PNG, TYPE_SVG } from "~/constants/mime-type";
import { NOTIFICATION_TYPE_WARNING } from "~/constants/notification";

Vue.use(Vuelidate);

const uploadFinished = function (files) {
  if (!files || files.length === 0) return true;

  for (let file of files) {
    if (!file.fileUrl) {
      return false;
    }
  }

  return true;
};

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
        uploadFinished,
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

      if (!this.$v.email.required) {
        errors.push("Email is required");
      }
      if (!this.$v.email.maxLength) {
        errors.push("Email is too long");
      }
      if (!this.$v.email.email) {
        errors.push("Not valid email");
      }

      return errors;
    },
    inputEmailErrors: function () {
      if (this.email !== null) {
        return this.emailErrors;
      }

      return [];
    },
    jobDetailErrors: function () {
      const errors = [];

      if (!this.$v.jobDetailFiles.required || !this.$v.jobDetailUrls.required) {
        errors.push("Need at least either 1 file or 1 url");
      }

      if (!this.$v.jobDetailFiles.uploadFinished) {
        errors.push("Wait for file uploading");
      }

      return errors;
    },
    submitErrors: function () {
      return [...this.emailErrors, ...this.jobDetailErrors];
    },
  },
  methods: {
    setJobDetailFiles(files) {
      this.jobDetailFiles = files;
    },
    setJobDetailUrls(urls) {
      this.jobDetailUrls = urls;
    },
    submit() {
      if (!this.$v.$invalid) {
      } else {
        this.$store.commit("notifications/add", {
          id: uuidv4(),
          type: NOTIFICATION_TYPE_WARNING,
          contents: this.submitErrors,
        });
      }
    },
  },
});
</script>
