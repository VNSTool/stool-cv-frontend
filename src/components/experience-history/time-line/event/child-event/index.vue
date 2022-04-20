<template>
  <div class="flex flex-col relative">
    <div
      class="absolute w-20 top-0 -left-22 text-center text-xl leading-6 text-black-900 font-light bg-ghost-100"
    >
      {{ childEvent.time }}
    </div>
    <div
      class="whitespace-normal break-words text-xl leading-6 text-black-900 font-light"
      v-html="childEvent.title"
    />
    <div
      class="whitespace-normal break-words text-xl leading-6 text-black-900 font-light mt-3"
      v-if="childEvent.description"
      v-html="childEvent.description"
    />
    <div v-if="childEvent.details" class="mt-2">
      <div
        v-for="detail in childEvent.details"
        :key="detail.id"
        class="mt-2 first:mt-0"
      >
        <div
          v-html="detail.title"
          class="whitespace-normal break-words text-xl leading-6 text-black-900 font-light"
        />
        <div v-if="detail.contents" class="mt-1">
          <div
            v-for="(content, index) in detail.contents"
            :key="index"
            class="whitespace-normal break-words text-xl leading-6 text-black-900 font-light mt-1 first:mt-0"
          >
            <div v-html="content" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    childEvent: Object,
  },
});
</script>
