<template>
  <svg :width="width" :height="height" :viewBox="`0 0 ${width} ${height}`">
    <circle
      stroke-linecap="round"
      fill="none"
      stroke-mitterlimit="0"
      :cx="cx"
      :cy="cy"
      :r="radius"
      :stroke-width="strokeWidth"
      :stroke-dasharray="perimeter"
      :stroke-dashoffset="dashOffset"
      :transform="`rotate(-90 ) translate(-${height} 0)`"
      class="transition-stroke-offset duration-200 stroke-black-900 dark:stroke-grey-700"
    />
  </svg>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    width: {
      type: Number,
      default: 40,
    },
    height: {
      type: Number,
      default: 40,
    },
    radius: {
      type: Number,
      default: 16,
    },
    strokeWidth: {
      type: Number,
      default: 2,
    },
    percentage: {
      type: Number,
      default: 40,
    },
  },
  computed: {
    viewBox: function () {
      return;
    },
    cx: function () {
      return this.width / 2;
    },
    cy: function () {
      return this.height / 2;
    },
    perimeter: function () {
      return 2 * (Math.PI * this.radius);
    },
    dashOffset: function () {
      return this.perimeter * (1 - this.percentage / 100);
    },
  },
});
</script>
