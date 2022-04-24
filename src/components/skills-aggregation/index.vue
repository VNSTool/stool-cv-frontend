<template>
  <CommonInformationBox :title="title">
    <SkillsAggregationSkillLine
      v-for="(skillLine, index) in skillLines"
      :key="index"
      :skills="skillLine.skills"
      :lineSize="lineSize"
      :selectedSkill="selectedSkill"
      @selectSkill="selectSkill"
      class="mt-10 first:mt-0"
    />
  </CommonInformationBox>
</template>

<script>
import Vue from "vue";
import { v4 as uuidv4 } from "uuid";

export default Vue.extend({
  data: function () {
    return {
      title: "Skill Aggregations",
      skills: [
        {
          id: uuidv4(),
          title: "Backend",
          pathD:
            "M60 10C60 4.47715 64.5076 -0.0848459 69.9539 0.831412C77.5029 2.10141 84.7705 4.80971 91.3499 8.84159C100.785 14.6232 108.437 22.9013 113.46 32.7606C118.484 42.6199 120.683 53.6763 119.815 64.7075C118.947 75.7388 115.045 86.3151 108.541 95.2671C102.037 104.219 93.1841 111.198 82.961 115.433C72.738 119.667 61.543 120.992 50.6139 119.261C39.6848 117.53 29.4473 112.811 21.0331 105.624C15.1654 100.613 10.3439 94.5379 6.80327 87.7509C4.24885 82.8543 7.19464 77.1575 12.4472 75.4509L27.6641 70.5066C32.9166 68.7999 38.4427 71.9073 42.1291 76.0197C42.8377 76.8102 43.6004 77.5555 44.4132 78.2497C47.7789 81.1243 51.8739 83.0121 56.2456 83.7045C60.6172 84.3969 65.0952 83.8669 69.1844 82.1731C73.2736 80.4793 76.8148 77.6877 79.4164 74.1068C82.018 70.526 83.5787 66.2955 83.926 61.883C84.2733 57.4705 83.3936 53.0479 81.3842 49.1042C79.3747 45.1605 76.3139 41.8493 72.54 39.5366C71.6285 38.9781 70.684 38.483 69.7132 38.0534C64.6629 35.8182 60 31.5228 60 26L60 10Z",
          strengths: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          ],
          weaknesses: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          ],
        },
        {
          id: uuidv4(),
          title: "Frontend",
          pathD:
            "M60 10C60 4.47715 64.5077 -0.0848851 69.954 0.831389C79.0555 2.3626 87.7278 5.98137 95.2671 11.459C105.518 18.9067 113.148 29.4084 117.063 41.459C120.979 53.5096 120.979 66.4904 117.063 78.541C114.184 87.404 109.295 95.4291 102.831 102.018C98.9638 105.96 92.6355 104.919 89.3893 100.451L79.9847 87.5066C76.7384 83.0385 77.9861 76.8226 80.7581 72.0458C81.6041 70.588 82.2987 69.0372 82.8254 67.4164C84.3915 62.5962 84.3915 57.4038 82.8254 52.5836C81.2592 47.7634 78.2072 43.5627 74.1068 40.5836C72.7281 39.5819 71.2546 38.7356 69.7133 38.0534C64.6629 35.8182 60 31.5228 60 26L60 10Z",
          strengths: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          ],
          weaknesses: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          ],
        },
        {
          id: uuidv4(),
          title: "Database",
          pathD:
            "M32 10C32 4.47715 36.5076 -0.0848225 41.9539 0.831419C47.9535 1.84074 53.7841 3.75998 59.2394 6.53961C67.676 10.8383 74.9755 17.0726 80.541 24.7329C86.1065 32.3932 89.7801 41.2619 91.2613 50.6139C92.7425 59.966 91.9894 69.5358 89.0634 78.541C86.1374 87.5462 81.1217 95.7311 74.4264 102.426C67.7311 109.122 59.5462 114.137 50.541 117.063C41.5358 119.989 31.966 120.743 22.614 119.261C16.5667 118.304 10.7215 116.429 5.27446 113.719C0.329743 111.259 -0.635494 104.919 2.61075 100.451L12.0153 87.5066C15.2616 83.0385 21.5587 82.3043 26.9583 83.4645C27.3845 83.556 27.8138 83.6361 28.2456 83.7045C31.9864 84.297 35.8143 83.9957 39.4164 82.8254C43.0185 81.655 46.2924 79.6487 48.9706 76.9706C51.6487 74.2924 53.655 71.0185 54.8254 67.4164C55.9957 63.8143 56.297 59.9864 55.7045 56.2456C55.112 52.5048 53.6426 48.9573 51.4164 45.8932C49.1902 42.829 46.2704 40.3353 42.8958 38.6158C42.5062 38.4174 42.1119 38.2298 41.7132 38.0534C36.6629 35.8182 32 31.5228 32 26L32 10Z",
          strengths: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          ],
          weaknesses: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          ],
        },
        {
          id: uuidv4(),
          title: "DevOps",
          pathD:
            "M60 10C60 4.47715 64.5077 -0.0848851 69.954 0.831389C79.0555 2.3626 87.7278 5.98137 95.2671 11.459C105.518 18.9067 113.148 29.4084 117.063 41.459C120.979 53.5096 120.979 66.4904 117.063 78.541C114.184 87.404 109.295 95.4291 102.831 102.018C98.9638 105.96 92.6355 104.919 89.3893 100.451L79.9847 87.5066C76.7384 83.0385 77.9861 76.8226 80.7581 72.0458C81.6041 70.588 82.2987 69.0372 82.8254 67.4164C84.3915 62.5962 84.3915 57.4038 82.8254 52.5836C81.2592 47.7634 78.2072 43.5627 74.1068 40.5836C72.7281 39.5819 71.2546 38.7356 69.7133 38.0534C64.6629 35.8182 60 31.5228 60 26L60 10Z",
          strengths: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          ],
          weaknesses: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          ],
        },
        {
          id: uuidv4(),
          title: "Cloud",
          pathD:
            "M60 10C60 4.47715 64.5077 -0.0848851 69.954 0.831389C79.0555 2.3626 87.7278 5.98137 95.2671 11.459C105.518 18.9067 113.148 29.4084 117.063 41.459C120.979 53.5096 120.979 66.4904 117.063 78.541C114.184 87.404 109.295 95.4291 102.831 102.018C98.9638 105.96 92.6355 104.919 89.3893 100.451L79.9847 87.5066C76.7384 83.0385 77.9861 76.8226 80.7581 72.0458C81.6041 70.588 82.2987 69.0372 82.8254 67.4164C84.3915 62.5962 84.3915 57.4038 82.8254 52.5836C81.2592 47.7634 78.2072 43.5627 74.1068 40.5836C72.7281 39.5819 71.2546 38.7356 69.7133 38.0534C64.6629 35.8182 60 31.5228 60 26L60 10Z",
          strengths: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          ],
          weaknesses: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          ],
        },
        {
          id: uuidv4(),
          title: "English",
          pathD:
            "M60 10C60 4.47715 64.5077 -0.0848851 69.954 0.831389C79.0555 2.3626 87.7278 5.98137 95.2671 11.459C105.518 18.9067 113.148 29.4084 117.063 41.459C120.979 53.5096 120.979 66.4904 117.063 78.541C114.184 87.404 109.295 95.4291 102.831 102.018C98.9638 105.96 92.6355 104.919 89.3893 100.451L79.9847 87.5066C76.7384 83.0385 77.9861 76.8226 80.7581 72.0458C81.6041 70.588 82.2987 69.0372 82.8254 67.4164C84.3915 62.5962 84.3915 57.4038 82.8254 52.5836C81.2592 47.7634 78.2072 43.5627 74.1068 40.5836C72.7281 39.5819 71.2546 38.7356 69.7133 38.0534C64.6629 35.8182 60 31.5228 60 26L60 10Z",
          strengths: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          ],
          weaknesses: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          ],
        },
        {
          id: uuidv4(),
          title: "Business Logic",
          pathD:
            "M60 10C60 4.47715 64.5077 -0.0848851 69.954 0.831389C79.0555 2.3626 87.7278 5.98137 95.2671 11.459C105.518 18.9067 113.148 29.4084 117.063 41.459C120.979 53.5096 120.979 66.4904 117.063 78.541C114.184 87.404 109.295 95.4291 102.831 102.018C98.9638 105.96 92.6355 104.919 89.3893 100.451L79.9847 87.5066C76.7384 83.0385 77.9861 76.8226 80.7581 72.0458C81.6041 70.588 82.2987 69.0372 82.8254 67.4164C84.3915 62.5962 84.3915 57.4038 82.8254 52.5836C81.2592 47.7634 78.2072 43.5627 74.1068 40.5836C72.7281 39.5819 71.2546 38.7356 69.7133 38.0534C64.6629 35.8182 60 31.5228 60 26L60 10Z",
          strengths: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          ],
          weaknesses: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          ],
        },
        {
          id: uuidv4(),
          title: "Documentation",
          pathD:
            "M60 10C60 4.47715 64.5077 -0.0848851 69.954 0.831389C79.0555 2.3626 87.7278 5.98137 95.2671 11.459C105.518 18.9067 113.148 29.4084 117.063 41.459C120.979 53.5096 120.979 66.4904 117.063 78.541C114.184 87.404 109.295 95.4291 102.831 102.018C98.9638 105.96 92.6355 104.919 89.3893 100.451L79.9847 87.5066C76.7384 83.0385 77.9861 76.8226 80.7581 72.0458C81.6041 70.588 82.2987 69.0372 82.8254 67.4164C84.3915 62.5962 84.3915 57.4038 82.8254 52.5836C81.2592 47.7634 78.2072 43.5627 74.1068 40.5836C72.7281 39.5819 71.2546 38.7356 69.7133 38.0534C64.6629 35.8182 60 31.5228 60 26L60 10Z",
          strengths: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          ],
          weaknesses: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          ],
        },
      ],
      lineSize: 0,
      skillLines: [],
      selectedSkill: "",
    };
  },
  watch: {
    lineSize(newSize, oldSize) {
      if (newSize !== oldSize) {
        const lines = [];
        for (let i = 0; i < this.skills.length; i += newSize) {
          lines.push({
            skills: this.skills.slice(i, i + newSize),
          });
        }

        this.skillLines = lines;
      }
    },
  },
  methods: {
    calculateLineSize() {
      const sm = 654,
        lg = 1024;

      if (window.innerWidth < sm) {
        this.lineSize = 2;
      } else if (window.innerWidth < lg) {
        this.lineSize = 3;
      } else {
        this.lineSize = 4;
      }
    },
    selectSkill(skill) {
      this.selectedSkill = skill.id;
    },
  },
  mounted() {
    if (process.client) {
      this.calculateLineSize();

      window.addEventListener("resize", this.calculateLineSize);
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
});
</script>
