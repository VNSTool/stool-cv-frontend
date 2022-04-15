<template>
  <div class="flex flex-row">
    <ProfileInfoSocialItem
      v-for="social in socials"
      :key="social.id"
      :social="social"
      :selectedSocial="selectedSocial"
      @selectSocial="selectSocial(social)"
    />
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  data: function() {
    return {
      socials: [
        {
          'id': 'gmail',
          'image': '/images/socials/gmail.png',
          'contactDetail': 'nmtri881994@gmail.com',
          'copyContent': 'nmtri881994@gmail.com',
        },
        {
          'id': 'github',
          'image': '/images/socials/github.png',
          'contactDetail': 'nmtri-dev',
          'copyContent': 'https://github.com/nmtri-dev',
        },
        {
          'id': 'telegram',
          'image': '/images/socials/telegram.png',
          'contactDetail': 'mtri88',
          'copyContent': 'https://t.me/mtri88',
        },
        {
          'id': 'linkedin',
          'image': '/images/socials/linkedin.png',
          'contactDetail': 'tri-nguyen-0970b4147',
          'copyContent': 'https://www.linkedin.com/in/tri-nguyen-0970b4147/',
        }
      ],
      selectedSocial: '',
    };
  },
  methods: {
    selectSocial: function(social) {
      this.selectedSocial = social.id;
    }
  }
})
</script>
