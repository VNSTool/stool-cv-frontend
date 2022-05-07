<template>
  <div>
    <input
      :placeholder="placeholder"
      :value="value"
      @input="$emit('input', $event.target.value)"
      @keyup.enter.prevent="$emit('onEnter')"
      class="bg-transparent rounded border border-black-800 px-6 py-2 min-w-0 text-xl leading-6 font-light text-black-900 dark:text-grey-700"
      :class="inputClass"
    />
    <div v-if="errors.length !== 0" class="mt-1">
      <div
        class="mt-1 first:mt-0 whitespace-normal break-all text-base leading-6 text-black-900 dark:text-grey-700 font-light italic"
      >
        {{ errors.join("/ ") }}
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
    inputClass: {
      type: String,
      default: "",
    },
    errors: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
});
</script>
