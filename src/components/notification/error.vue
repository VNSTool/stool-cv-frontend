<template>
  <div
    class="select-none overflow-hidden flex rounded-lg bg-red shadow-md ease-in"
    :class="transitionStyle"
  >
    <div
      class="min-w-64 whitespace-normal break-words text-xl leading-6 font-light text-grey-700"
    >
      {{ notification.content }}
    </div>
  </div>
</template>

<script>
import Vue from "vue";

import NotificationMixin from "./mixin";

export default Vue.extend({
  mixins: [NotificationMixin],
});
</script>
