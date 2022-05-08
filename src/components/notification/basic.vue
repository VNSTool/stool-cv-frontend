<template>
  <div
    class="select-none truncate flex rounded-lg bg-ghost-200 text-xl leading-6 font-light text-black-900 shadow-md ease-in"
    :class="transitionStyle"
  >
    {{ notification.content }}
  </div>
</template>

<script>
import Vue from "vue";

import NotificationMixin from "./mixin";

export default Vue.extend({
  mixins: [NotificationMixin],
});
</script>
