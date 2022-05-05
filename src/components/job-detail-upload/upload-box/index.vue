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
        class="mt-5 text-xl leading-6 font-normal text-black-900 dark:text-grey-700"
      >
        Select a file or drop and drag here
      </div>
      <div
        class="mt-2 text-xl leading-6 font-light text-black-900 dark:text-grey-700"
      >
        Only accept PDF, file size no more than 5MB
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
    <CommonList :items="displayList" @removeItem="removeFile" class="mt-5" />
  </div>
</template>

<script>
import Vue from "vue";
import { v4 as uuidv4 } from "uuid";

export default Vue.extend({
  data: function () {
    return {
      uploadItems: [],
      acceptTypes: ["application/pdf"],
      maxSize: 5 * 1024 * 1024,
    };
  },
  computed: {
    displayList: function () {
      return this.uploadItems.map((item) => ({
        id: item.id,
        title: item.file.name,
      }));
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
        this.uploadItems.push({
          id: uuidv4(),
          file,
        });
      }
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
      this.uploadItems.splice(
        this.uploadItems.findIndex((item) => item.id === id),
        1
      );
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
