<template>
  <div class="fixed top-3 left-0 right-0 flex flex-row lg:justify-center">
    <div class="flex flex-col items-end w-full lg:w-248 pr-2 sm:pr-8 lg:pr-4">
      <component
        v-for="notification in notifications"
        :is="notification.component"
        :key="notification.id"
        :notification="notification"
        class="mt-2 first:mt-0"
      />
    </div>
  </div>
</template>

<script>
import Vue from "vue";

import {
  NOTIFICATION_TYPE_BASIC,
  NOTIFICATION_TYPE_WARNING,
  NOTIFICATION_TYPE_ERROR,
} from "~/constants/notification";

export default Vue.extend({
  computed: {
    notifications() {
      let notifications = this.$store.state.notifications.list;
      return notifications.map((notification) => {
        switch (notification.type) {
          case NOTIFICATION_TYPE_WARNING:
            notification.component = "NotificationWarning";
            break;
          case NOTIFICATION_TYPE_ERROR:
            notification.component = "NotificationError";
            break;
          case NOTIFICATION_TYPE_BASIC:
          default:
            notification.component = "NotificationBasic";
        }

        return notification;
      });
    },
  },
});
</script>
