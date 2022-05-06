<template>
  <div class="flex flex-row items-center gap-2">
    <CommonInputBase
      placeholder="Input URL"
      v-model="url"
      :inputClass="'w-full'"
      class="flex-1"
    />
    <CommonButtonBase label="Add" class="!px-4" @click.native="addUrl" />
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  data: function () {
    return {
      url: "",
    };
  },
  methods: {
    addUrl() {
      this.$emit("addItem", this.url);
      this.url = "";
    },
  },
});
</script>
