<template>
  <div class="flex flex-row items-center">
    <div class="hidden sm:flex w-px bg-grey-900 h-15 mr-10"></div>
    <div class="flex flex-col lg:w-120">
      <div class="text-2.5xl leading-8 text-black-900 font-medium">Nguyen Minh Tri</div>
      <div class="mt-1.5 text-xl leading-6 text-black-900 font-light">{{currentAge}} years old</div>
      <ProfileInfoSocial class="mt-4" />
      <div class="flex flex-row mt-4">
        <div class="icon-marker text-black-900"></div>
        <div class="ml-2 text-xl leading-6 font-light 5">Ho Chi Minh City</div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  data: function() {
    return {
      birthDay: "1994-08-08T00:00:00.000+07:00",
    };
  },
  computed: {
    currentAge: function () {
      const yearInMs = 3.15576e+10;
      return Math.floor((new Date() - new Date(this.birthDay)) / yearInMs);
    }
  }
})
</script>
