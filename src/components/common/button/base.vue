<template>
  <button
    :value="label"
    class="px-10 py-2 rounded border border-majorelle text-xl leading-6 font-medium text-majorelle cursor-pointer"
  >
    {{ label }}
  </button>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    label: {
      type: String,
      default: "",
    },
  },
});
</script>
