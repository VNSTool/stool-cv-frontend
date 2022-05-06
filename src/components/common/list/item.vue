<template>
  <li
    class="list-item list-disc ml-2 mt-1 first:mt-0 text-black-900 dark:text-grey-700"
    :class="uploadingClass"
  >
    <div class="flex flex-row items-center">
      <div
        class="whitespace-normal break-all text-xl leading-6 text-black-900 dark:text-grey-700 font-light"
        :class="uploadingClass"
      >
        {{ item.title }}
      </div>
      <div
        v-if="showUpload && isUploading"
        class="flex flex-row items-center ml-3 min-w-5"
      >
        <SvgProgressCircle
          :height="20"
          :width="20"
          :radius="9"
          :strokeWidth="1"
          :percentage="item.uploadPecentage"
        />
      </div>
      <CommonListRemoveIcon
        @click.native="$emit('removeItem', item.id)"
        class="ml-3"
      />
    </div>
  </li>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  data: function () {
    return {
      isUploading: true,
    };
  },
  props: {
    item: Object,
    showUpload: Boolean,
  },
  computed: {
    uploadingClass: function () {
      return {
        "!text-grey-900 dark:!text-black-800":
          this.isUploading && this.showUpload,
      };
    },
  },
  watch: {
    "item.uploadPecentage": function (val) {
      if (val === 100) {
        setTimeout(() => {
          this.isUploading = false;
        }, 500);
      }
    },
  },
});
</script>
