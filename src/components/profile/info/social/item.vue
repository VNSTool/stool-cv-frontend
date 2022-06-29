<template>
  <div
    class="select-none flex flex-row items-center -ml-3 first:ml-0 p-0.5 bg-white dark:bg-black rounded-full cursor-pointer"
    :class="{
      '!bg-ghost-200 dark:!bg-black': selected && !copied,
      'mr-4': selected,
      '!bg-ghost-300 dark:!bg-black-800': copied,
    }"
    @mousedown="mouseDown"
    @mouseup="mouseUp"
  >
    <NuxtPicture :src="social.image" width="38px" height="38px" />
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
import { copyToClipboard } from "~/utils/string";

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

        copyToClipboard(this.social.copyContent);

        this.$gtm.push({
          event: "copy_contact",
          value: this.social.id,
        });
      } else {
        this.$gtm.push({
          event: "select_contact",
          value: this.social.id,
        });
      }
    },
    mouseUp: function () {
      if (this.selected) {
        this.copied = false;
      }
    },
  },
});
</script>
