<template>
  <div
    class="select-none truncate flex rounded-full bg-ghost-200 text-xl leading-6 font-light text-black-900 shadow-md ease-in"
    :class="transitionStyle"
  >
    {{ notification.content }}
  </div>
</template>

<script>
import Vue from "vue";

import {
  NOTIFICATION_TYPE_BASIC_DELAY_TIME,
  NOTIFICATION_TYPE_BASIC_DISPLAY_TIME,
  NOTIFICATION_TYPE_BASIC_TRANSITION_TIME,
} from "~/constants/notification";

export default Vue.extend({
  data: function () {
    return {
      isShow: false,
      isRemoved: false,
      transistionTime: NOTIFICATION_TYPE_BASIC_TRANSITION_TIME,
    };
  },
  props: {
    notification: Object,
  },
  computed: {
    transitionStyle: function () {
      return {
        [`duration-${NOTIFICATION_TYPE_BASIC_TRANSITION_TIME}`]: true,
        "max-w-0": !this.isShow,
        "max-w-xs px-4 py-1": this.isShow,
        hidden: this.isRemoved,
      };
    },
  },
  methods: {
    show: function () {
      this.isShow = true;
      setTimeout(this.hide, NOTIFICATION_TYPE_BASIC_DISPLAY_TIME);
    },
    hide: function () {
      this.isShow = false;
      setTimeout(() => {
        this.isRemoved = true;
        this.$store.commit("notifications/remove", this.notification.id);
      }, NOTIFICATION_TYPE_BASIC_TRANSITION_TIME);
    },
  },
  mounted() {
    setTimeout(this.show, NOTIFICATION_TYPE_BASIC_DELAY_TIME);
  },
});
</script>
