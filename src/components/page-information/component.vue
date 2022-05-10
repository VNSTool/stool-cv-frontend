<template>
  <div class="h-fit flex flex-col">
    <div
      class="text-xl leading-6 font-normal text-black-900 dark:text-grey-700"
      v-html="data.title"
    ></div>
    <div
      class="mt-1 text-xl leading-6 font-light text-black-900 dark:text-grey-700"
      v-html="data.description"
    ></div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    data: Object,
  },
});
</script>
