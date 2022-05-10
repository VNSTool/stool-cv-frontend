<template>
  <div class="flex flex-col">
    <div
      class="relative flex flex-col items-center fw-full dashed-border px-2.5 py-4"
      draggable="true"
      @dragenter.prevent="onDragEnter"
      @dragleave.prevent="onDragLeave"
      @dragover.prevent
      @drop.prevent="dropFile"
    >
      <div
        v-show="dragTarget"
        class="absolute inset-0 flex flex-row px-2.5 py-4"
      >
        <div
          class="w-full flex items-center justify-center bg-ghost-100 dark:bg-black-950 text-xl leading-6 font-normal text-black-900 dark:text-grey-700"
        >
          Drag it here
        </div>
      </div>
      <div class="flex flex-col items-center">
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
    </div>
    <CommonList
      v-if="displayList.length !== 0"
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
import {
  NOTIFICATION_TYPE_WARNING,
  NOTIFICATION_TYPE_ERROR,
} from "~/constants/notification";

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
      dragTarget: null,
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
    uploadUri: {
      type: String,
      default: "",
    },
    deleteUri: {
      type: String,
      default: "",
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
    onDragEnter(ev) {
      this.dragTarget = ev ? ev.target : null;
    },
    onDragLeave(ev) {
      if (ev && ev.target === this.dragTarget) {
        this.dragTarget = null;
      }
    },
    dropFile(ev) {
      this.dragTarget = null;
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
    validateFile(file) {
      const errors = [];

      if (!this.acceptTypes.includes(file.type)) {
        errors.push("File type is not accepted");
      }

      if (file.size > this.maxSize) {
        errors.push("File is bigger than accepted");
      }

      if (this.checkExistedFile(file)) {
        errors.push("File is already selected");
      }

      return errors;
    },
    insertFile(file) {
      const errors = this.validateFile(file);

      if (errors.length !== 0) {
        this.selectFileError(file.name, errors);
      } else {
        const itemId = uuidv4();
        const cancelSource = this.$axios.CancelToken.source();
        this.uploadItems.push({
          id: itemId,
          file,
          fileUrl: "",
          uploadPercentage: 0,
          uploadFinish: false,
          cancelUpload: cancelSource.cancel,
        });

        const formData = new FormData();
        formData.append("file", file);

        this.$axios
          .post(this.uploadUri, formData, {
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
          })
          .then((response) => {
            this.updateFileUrl(itemId, response.data.fileUrl);
          })
          .catch((error) => {
            if (!this.$axios.isCancel(error)) {
              this.uploadError(file.name);
              this.removeFile(itemId);
            }
          });
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
      if (!item.fileUrl) {
        item.cancelUpload();
      } else {
        this.$axios.delete(
          `${this.deleteUri}/${encodeURIComponent(item.fileUrl)}`
        );
      }
      this.uploadItems.splice(itemIndex, 1);
    },
    uploadError(fileName) {
      this.$store.commit("notifications/add", {
        id: uuidv4(),
        type: NOTIFICATION_TYPE_ERROR,
        content: `Upload error, removing ${fileName}`,
      });
    },
    selectFileError(fileName, errors) {
      this.$store.commit("notifications/add", {
        id: uuidv4(),
        type: NOTIFICATION_TYPE_WARNING,
        title: `${fileName} not accepted`,
        contents: errors,
      });
    },
  },
});
</script>

<style lang="scss" scoped>
.dashed-border {
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect x='1%25' y='1%25' width='98%25' height='98%25' fill='none' rx='8' ry='8' stroke='%23737880' stroke-width='2' stroke-dasharray='4%2c 8' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  border-radius: 8px;
}
</style>
