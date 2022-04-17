<template>
  <div
    class="select-none truncate flex rounded-full bg-ghost-200 text-xl leading-6 font-light text-black-900 shadow-md ease-in duration-500"
    :class="transitionStyle"
  >
    {{ notification.content }}
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  data: function () {
    return {
      transitionStyle: "max-w-0",
    };
  },
  props: {
    notification: Object,
  },
  methods: {
    show: function () {
      this.transitionStyle = "max-w-xs px-4 py-1";
      setTimeout(this.hide, 2000);
    },
    hide: function () {
      this.transitionStyle = "max-w-0";
      setTimeout(() => {
        this.transitionStyle = "hidden";
        this.$store.commit("notifications/remove", this.notification.id);
      }, 500);
    },
  },
  mounted() {
    setTimeout(this.show, 200);
  },
});
</script>
