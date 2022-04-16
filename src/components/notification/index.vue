<template>
  <div class="flex flex-col lg:items-center fixed top-3 left-0 right-0">
    <div
      class="flex flex-col items-center sm:items-end w-full lg:w-248 sm:pr-8 lg:pr-4"
    >
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

export default Vue.extend({
  computed: {
    notifications() {
      let notifications = this.$store.state.notifications.list;
      notifications = notifications.map((notification) => {
        switch (notification.type) {
          case "basic":
          default:
            notification.component = "NotificationBasic";
        }

        return notification;
      });
      return notifications;
    },
  },
});
</script>
