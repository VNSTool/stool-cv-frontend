<template>
  <div class="flex flex-row">
    <div class="flex flex-col items-center h-64 w-20 bg-grey-700">
      <div
        v-if="start"
        class="w-4 h-4 rounded-full border-2 border-black-800"
      />
      <div class="flex-1 dashed-line"></div>
      <div v-if="stop" class="w-4 h-4 rounded-full border-2 border-black-800" />
    </div>
    <div class="flex flex-1 h-64 bg-grey-900"></div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    start: Boolean,
    stop: Boolean,
  },
});
</script>

<style lang="scss" scoped>
.dashed-line {
  width: 2px;

  background-image: linear-gradient(#737880 62.5%, rgba(255, 255, 255, 0) 0%);
  background-position: left;
  background-size: 2px 16px;
  background-repeat: repeat-y;
}
</style>
