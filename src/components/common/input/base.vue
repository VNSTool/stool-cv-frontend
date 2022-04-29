<template>
  <input
    :placeholder="placeholder"
    class="bg-transparent rounded border border-black-800 px-6 py-2 text-xl leading-6 font-light text-black-900 dark:text-grey-700"
  />
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    placeholder: {
      type: String,
      default: "",
    },
  },
});
</script>
