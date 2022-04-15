<template>
    <div
      class="group flex flex-row items-center -ml-3 first:ml-0 p-0.5 bg-white rounded-full cursor-pointer"
      :class="{ '!bg-ghost-200': selected && !copied, 'mr-4': selected, '!bg-ghost-300': copied }"
      @mousedown="mouseDown"
      @mouseup="mouseUp"
    >
      <div
        class="w-9.5 h-9.5 rounded-full"
        :style="backgroundStyle"
      >
      </div>
      <div
        class="max-w-0 truncate width-transition text-xl leading-6 font-light text-black-900"
        :class="{ '!max-w-xs ml-1 mr-1.5' : selected }"
      >
        {{social.contactDetail}}
      </div>
    </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  data: function() {
    return {
      clicked: false,
      copied: false,
    };
  },
  props: {
    social: Object,
    selectedSocial: String
  },
  methods: {
    mouseDown: function() {
      this.$emit('selectSocial');

      if (this.selected) {
        this.copied = true;

        const el = document.createElement('textarea');
        el.value = this.social.copyContent;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
      }
    },
    mouseUp: function () {
      if (this.selected) {
        this.copied = false;
      }
    }
  },
  computed: {
    backgroundStyle: function() {
      return {
        backgroundImage: `url('${this.social.image}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
      }
    },
    selected: function() {
      return this.selectedSocial === this.social.id;
    }
  }
})
</script>

<style lang="scss" scoped>
  .width-transition {
    transition: max-width 1s ease-in;
  }
</style>
