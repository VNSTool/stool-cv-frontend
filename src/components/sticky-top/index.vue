<template>
  <div
    class="fixed top-3 sm:top-9 lg:top-12.5 right-0 flex flex-row lg:justify-center"
  >
    <div
      class="flex flex-row gap-3 justify-end w-full pr-3 sm:pr-9 lg:pr-sticky-lg"
    >
      <StickyTopItem icon="icon-download" @action="downloadHardCopyCV" />
      <StickyTopDisplayModeToggle />
    </div>
  </div>
</template>

<script>
import Vue from "vue";

import { ICON_DOWNLOAD } from "~/constants/icons";
import { downloadFile } from "~/utils/file";

export default Vue.extend({
  methods: {
    downloadHardCopyCV() {
      downloadFile(
        "https://static.stool.vn/curriculum-vitae/nmtri_cv_120522-compressed.pdf"
      );
    },
  },
});
</script>
