<template>
  <div>
    <div>
      <div
        class="text-xl leading-6 text-black-900 dark:text-grey-700 font-normal"
      >
        {{ detail.title }}
      </div>
      <ul class="mt-2">
        <li
          class="list-item list-disc list-inside ml-2 whitespace-normal break-words text-xl leading-6 text-black-900 dark:text-grey-700 font-light"
          v-for="(item, index) in detail.list"
          :key="index"
          v-html="item"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    detail: Object,
  },
  watch: {
    detail(newVal) {
      console.log(newVal);
    },
  },
});
</script>
