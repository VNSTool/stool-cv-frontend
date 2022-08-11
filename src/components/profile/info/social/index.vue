<template>
  <div class="flex flex-row">
    <ProfileInfoSocialItem
      v-for="social in socials"
      :key="social.id"
      :social="social"
      :selected="selectedSocial === social.id"
      @selectSocial="selectSocial(social)"
    />
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  data: function () {
    return {
      socials: [
        {
          id: "gmail",
          image:
            "https://static.stool.vn/images/curriculum-vitae/gmail.png",
          contactDetail: "nmtri.dev@gmail.com",
          copyContent: "nmtri.dev@gmail.com",
        },
        {
          id: "github",
          image:
            "https://static.stool.vn/images/curriculum-vitae/github.png",
          contactDetail: "nmtri-dev",
          copyContent: "https://github.com/nmtri-dev",
        },
        {
          id: "telegram",
          image:
            "https://static.stool.vn/images/curriculum-vitae/telegram.png",
          contactDetail: "mtri88",
          copyContent: "https://t.me/mtri88",
        },
        {
          id: "linkedin",
          image:
            "https://static.stool.vn/images/curriculum-vitae/linkedin.png",
          contactDetail: "tri-nguyen-0970b4147",
          copyContent: "https://www.linkedin.com/in/tri-nguyen-0970b4147/",
        },
      ],
      selectedSocial: "",
    };
  },
  methods: {
    selectSocial: function (social) {
      this.selectedSocial = social.id;
    },
  },
});
</script>
