<template>
  <div class="flex flex-row items-start gap-2">
    <CommonInputBase
      placeholder="Input URL (http:// https://)"
      v-model="url"
      :inputClass="'w-full'"
      :errors="urlErrors"
      @onEnter="addUrl"
      class="flex-1"
    />
    <CommonButtonBase label="Add" class="!px-4" @click.native="addUrl" />
  </div>
</template>

<script>
import Vue from "vue";
import Vuelidate from "vuelidate";
import { required, url } from "vuelidate/lib/validators";

Vue.use(Vuelidate);

export default Vue.extend({
  data: function () {
    return {
      url: null,
    };
  },
  validations: {
    url: {
      required,
      url,
    },
  },
  computed: {
    urlErrors: function () {
      const errors = [];

      if (this.url !== null) {
        if (!this.$v.url.url) {
          errors.push("Invalid url");
        }
      }

      return errors;
    },
  },
  methods: {
    addUrl() {
      console.log(111);
      if (!this.$v.$invalid) {
        this.$emit("addItem", this.url);
        this.url = "";
      }
    },
    reset() {
      this.url = null;
    },
  },
});
</script>
