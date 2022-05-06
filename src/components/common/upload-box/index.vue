<template>
  <div class="flex flex-col">
    <div
      class="flex flex-col items-center fw-full dashed-border px-2.5 py-4"
      @drop.prevent="dropFile"
      @dragenter.prevent
      @dragover.prevent
    >
      <SvgUploadCloud />
      <div
        class="mt-5 whitespace-normal break-words text-center text-xl leading-6 font-normal text-black-900 dark:text-grey-700"
      >
        Select a file or drop and drag here
      </div>
      <div
        class="mt-2 whitespace-normal break-words text-center text-xl leading-6 font-light text-black-900 dark:text-grey-700"
      >
        Only accept {{ acceptTypesText }}. File size no more than
        {{ maxSize / (1024 * 1024) }}MB
      </div>
      <CommonButtonBase
        label="Select File"
        class="mt-5"
        @click.native="$refs.fileInput.click()"
      />
      <input
        ref="fileInput"
        type="file"
        multiple
        v-show="false"
        :accept="acceptTypes.join(',')"
        @change="selectFile"
      />
    </div>
    <CommonList
      :items="displayList"
      :showUpload="true"
      @removeItem="removeFile"
      class="mt-5"
    />
  </div>
</template>

<script>
import Vue from "vue";
import { v4 as uuidv4 } from "uuid";
import { TYPE_PDF, TYPE_JPG, TYPE_PNG, TYPE_SVG } from "~/constants/mime-type";

// use nuxt axios
import axios from "axios";

const FILE_TYPE_MAP = {
  [TYPE_PDF]: "PDF",
  [TYPE_JPG]: "jpg, jpeg",
  [TYPE_PNG]: "png",
  [TYPE_SVG]: "svg",
};

export default Vue.extend({
  data: function () {
    return {
      uploadItems: [],
    };
  },
  props: {
    acceptTypes: {
      type: Array,
      default: function () {
        return [];
      },
    },
    maxSize: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    acceptTypesText: function () {
      return this.acceptTypes.map((type) => FILE_TYPE_MAP[type]).join(", ");
    },
    displayList: function () {
      return this.uploadItems.map((item) => ({
        id: item.id,
        title: item.file.name,
        uploadPecentage: item.uploadPercentage,
      }));
    },
  },
  watch: {
    uploadItems: {
      handler(items) {
        this.$emit("setItems", items);
      },
      deep: true,
    },
  },
  methods: {
    dropFile(ev) {
      if (ev.dataTransfer.items) {
        for (let i = 0; i < ev.dataTransfer.items.length; i++) {
          if (ev.dataTransfer.items[i].kind === "file") {
            this.insertFile(ev.dataTransfer.items[i].getAsFile());
          }
        }
      } else {
        for (let i = 0; i < ev.dataTransfer.files.length; i++) {
          this.insertFile(ev.dataTransfer.files[i]);
        }
      }
    },
    selectFile(ev) {
      for (let i = 0; i < ev.target.files.length; i++) {
        this.insertFile(ev.target.files[i]);
      }

      ev.target.value = "";
    },
    insertFile(file) {
      if (
        this.acceptTypes.includes(file.type) &&
        file.size <= this.maxSize &&
        !this.checkExistedFile(file)
      ) {
        const itemId = uuidv4();
        const cancelSource = axios.CancelToken.source();
        this.uploadItems.push({
          id: itemId,
          file,
          fileUrl: "",
          uploadPercentage: 0,
          cancelUpload: cancelSource.cancel,
        });

        const formData = new FormData();
        formData.append("file", file);

        axios
          .post(
            "https://curriculumvitae-api.stool.vn/job-detail/upload",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
              cancelToken: cancelSource.token,
              onUploadProgress: (progressEvent) => {
                const uploadPercentage = parseInt(
                  Math.round((progressEvent.loaded / progressEvent.total) * 100)
                );
                this.updateFileUploadPercentage(itemId, uploadPercentage);
              },
            }
          )
          .then((response) => {
            this.updateFileUrl(itemId, response.data.fileUrl);
          })
          .catch((error) => {});
      }
    },
    updateFileUrl(id, fileUrl) {
      this.uploadItems[
        this.uploadItems.findIndex((item) => item.id === id)
      ].fileUrl = fileUrl;
    },
    updateFileUploadPercentage(id, percentage) {
      this.uploadItems[
        this.uploadItems.findIndex((item) => item.id === id)
      ].uploadPercentage = percentage;
    },
    checkExistedFile(file) {
      for (let i = 0; i < this.uploadItems.length; i++) {
        let item = this.uploadItems[i];
        if (item.file.name === file.name) {
          return true;
        }
      }

      return false;
    },
    removeFile(id) {
      const itemIndex = this.uploadItems.findIndex((item) => item.id === id);
      const item = this.uploadItems[itemIndex];
      if (item.uploadPercentage !== 100) {
        item.cancelUpload();
      }
      this.uploadItems.splice(itemIndex, 1);
    },
  },
});
</script>

<style lang="scss" scoped>
.dashed-border {
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%23737880' stroke-width='2' stroke-dasharray='4%2c 8' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  border-radius: 8px;
}
</style>
