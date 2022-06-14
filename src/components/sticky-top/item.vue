<template>
  <div
    class="w-10.5 h-10.5 bg-ghost-100 dark:bg-black-950 shadow-3.5xl dark:shadow-2xl-dark flex flex-row justify-center items-center cursor-pointer rounded-full hover:bg-ghost-200 dark:hover:bg-black"
    :class="backgroundClass"
    @mousedown="mouseDown"
    @mouseup="mouseUp"
    @mouseleave="mouseLeave"
  >
    <div class="text-black-900 dark:text-grey-700" :class="icon"></div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  data: function () {
    return {
      onMouseDown: false,
    };
  },
  props: {
    icon: String,
  },
  computed: {
    backgroundClass: function () {
      return {
        "!bg-ghost-300 dark:!bg-black-800": this.onMouseDown,
        "bg-ghost-200 dark:bg-black": this.selected && !this.onMouseDown,
      };
    },
  },
  methods: {
    mouseDown() {
      this.$emit("selectMode");
      this.onMouseDown = true;
    },
    mouseUp() {
      this.onMouseDown = false;
      this.$emit("action");
    },
    mouseLeave() {
      this.onMouseDown = false;
    },
  },
});
</script>
