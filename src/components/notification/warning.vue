<template>
  <div
    class="relative select-none truncate flex rounded-lg bg-yellow-100 shadow-md ease-in"
    :class="transitionStyle"
  >
    <div
      class="cursor-pointer select-none absolute top-1 right-1 flex flex-row items-center justify-center w-5 h-5 rounded-full bg-black text-grey-700"
      @click="hide"
    >
      <span class="icon-cross text-2"></span>
    </div>
    <ul>
      <li
        v-for="content in notification.contents"
        class="list-item list-disc list-inside text-xl leading-6 font-light text-black-900"
      >
        {{ content }}
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from "vue";
import NotificationMixin from "./mixin";

export default Vue.extend({
  mixins: [NotificationMixin],
  computed: {
    transitionStyle: function () {
      return {
        [`duration-${this.transistionTime}`]: true,
        "max-w-0": !this.isShow,
        "max-w-75 px-5 pb-3 pt-6": this.isShow,
        hidden: this.isRemoved,
      };
    },
  },
  methods: {
    show: function () {
      this.isShow = true;
    },
  },
});
</script>
