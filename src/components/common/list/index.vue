<template>
  <ul class="px-2">
    <li
      v-for="(item, index) in items"
      :key="index"
      class="list-item list-disc ml-2 mt-1 first:mt-0"
    >
      <div class="flex flex-row items-center">
        <div
          class="whitespace-normal break-words text-xl leading-6 text-black-900 dark:text-grey-700 font-light"
        >
          {{ item.title }}
        </div>
        <CommonListRemoveIcon @click.native="$emit('removeItem', item.id)" />
      </div>
    </li>
  </ul>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    items: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
});
</script>
;
