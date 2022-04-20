<template>
  <div>
    <div
      v-for="(description, index) in descriptions"
      v-html="description"
      :key="index"
      class="whitespace-normal break-words text-xl leading-6 text-black-900 dark:text-grey-700 font-light mt-1 first:mt-0"
    />
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    descriptions: Array,
  },
});
</script>
