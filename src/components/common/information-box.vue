<template>
  <div
    class="transition-colors ease-in duration-200 truncate py-6 px-5 sm:px-6 lg:px-10 bg-ghost-100 dark:bg-black-950 sm:rounded-lg"
  >
    <div
      v-if="title"
      class="text-2.5xl leading-8 font-medium text-black-900 dark:text-grey-700 mb-10"
    >
      {{ title }}
    </div>
    <slot />
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    title: String,
  },
});
</script>
