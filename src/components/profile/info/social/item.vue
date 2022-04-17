<template>
  <div
    class="group select-none flex flex-row items-center -ml-3 first:ml-0 p-0.5 bg-white dark:bg-black rounded-full cursor-pointer"
    :class="{
      '!bg-ghost-200 dark:!bg-black': selected && !copied,
      'mr-4': selected,
      '!bg-ghost-300 dark:!bg-black-800': copied,
    }"
    @mousedown="mouseDown"
    @mouseup="mouseUp"
  >
    <div class="w-9.5 h-9.5 rounded-full bg-no-repeat bg-cover" :style="backgroundStyle"></div>
    <div
      class="max-w-0 truncate text-xl leading-6 font-light text-black-900 dark:text-grey-700 ease-in duration-500"
      :class="{
        '!max-w-xxxs sm:!max-w-xxs lg:!max-w-xs ml-1 mr-1.5': selected,
      }"
    >
      {{ social.contactDetail }}
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { v4 as uuidv4 } from "uuid";

import { capitalizeFirstLetter } from "~/utils/string";
import { NOTIFICATION_TYPE_BASIC } from "~/constants/notification";

export default Vue.extend({
  data: function () {
    return {
      clicked: false,
      copied: false,
    };
  },
  props: {
    social: Object,
    selected: Boolean,
  },
  methods: {
    mouseDown: function () {
      this.$emit("selectSocial");

      if (this.selected) {
        this.copied = true;
        this.$store.commit("notifications/add", {
          id: uuidv4(),
          type: NOTIFICATION_TYPE_BASIC,
          content: `Copied ${capitalizeFirstLetter(this.social.id)}`,
        });

        const el = document.createElement("textarea");
        el.value = this.social.copyContent;
        el.setAttribute("readonly", "");
        el.style.position = "absolute";
        el.style.left = "-9999px";
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
      }
    },
    mouseUp: function () {
      if (this.selected) {
        this.copied = false;
      }
    },
  },
  computed: {
    backgroundStyle: function () {
      return {
        backgroundImage: `url('${this.social.image}')`,
      };
    },
  },
});
</script>
