<template>
  <ul class="px-2">
    <CommonListItem
      v-for="(item, index) in items"
      :key="index"
      :item="item"
      :showUpload="showUpload"
      @removeItem="(id) => $emit('removeItem', id)"
    />
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
    showUpload: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
;
