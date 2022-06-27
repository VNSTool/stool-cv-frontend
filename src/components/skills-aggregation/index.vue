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
            "M60 10C60 4.47715 64.5076 -0.0848319 69.9539 0.831418C76.7279 1.97102 83.2808 4.26967 89.3173 7.65024C98.2743 12.6664 105.794 19.8969 111.158 28.6501C116.522 37.4033 119.551 47.3863 119.954 57.6444C120.357 67.9025 118.121 78.0924 113.46 87.2394C108.8 96.3865 101.87 104.185 93.3342 109.888C84.7984 115.592 74.9419 119.01 64.7076 119.815C54.4732 120.621 44.2034 118.787 34.8804 114.489C28.5974 111.592 22.886 107.642 17.9824 102.831C14.0399 98.9637 15.0811 92.6355 19.5492 89.3893L32.4934 79.9847C36.9615 76.7385 43.1773 77.9861 47.9541 80.7581C48.602 81.134 49.2686 81.4803 49.9522 81.7954C53.6814 83.5146 57.7893 84.2482 61.883 83.926C65.9768 83.6038 69.9193 82.2367 73.3337 79.9553C76.748 77.6739 79.5199 74.5546 81.3842 70.8958C83.2484 67.2369 84.1427 63.161 83.9815 59.0578C83.8203 54.9545 82.6089 50.9613 80.4634 47.46C78.3178 43.9588 75.3097 41.0666 71.7269 39.0601C71.0702 38.6923 70.3982 38.3565 69.7132 38.0534C64.6629 35.8182 60 31.5228 60 26L60 10Z",
          detail: [
            {
              title: "Having",
              list: [
                "Work on PHP with frameworks Laravel, Symphony, implemented features to serve millions of end user",
                "Work on Nodejs with framework NestJS",
                "Work with GraphQL",
                "Can make backend work with SQL database, NoSQL database, queue, cache, AWS services",
                "Do unit test",
              ],
            },
            {
              title: "To Improve",
              list: ["Learn about micro service and Kafka"],
            },
          ],
        },
        {
          id: uuidv4(),
          title: "Frontend",
          pathD:
            "M60 10C60 4.47715 64.5078 -0.0849448 69.9541 0.831335C80.6124 2.62446 90.6545 7.27616 98.9669 14.3756C109.83 23.6538 117.026 36.5036 119.261 50.6139C121.496 64.7242 118.623 79.1689 111.158 91.3499C105.447 100.671 97.3336 108.198 87.7511 113.197C82.8545 115.751 77.1575 112.805 75.4508 107.553L70.5066 92.3359C68.7999 87.0834 71.9073 81.5572 76.0198 77.8708C77.7386 76.3301 79.2389 74.5381 80.4634 72.54C83.4492 67.6676 84.5985 61.8897 83.7045 56.2456C82.8106 50.6015 79.9321 45.4615 75.5868 41.7503C73.8048 40.2283 71.8241 38.9876 69.7133 38.0534C64.663 35.8183 60 31.5228 60 26L60 10Z",
          detail: [
            {
              title: "Having",
              list: [
                "Work with frontend libraries and frameworks like ReactJS, VueJS, AngularJS, Google AMP",
                "Work with CSS pre-processor like Sass, CSS atomic libraries like Tachyons, Tailwind",
                "Work with UI/UX tooks like Figma, Zeplin",
                "Strive to implement the design on pixel perfect",
                "Do unit test",
              ],
            },
            {
              title: "To Improve",
              list: [
                "Have more production experience working with ReactJS and VueJS",
                "Work with complex components like animation, map, graph, etc.",
                "Implement snapshot test and e2e test",
                "Learn about micro frontend",
              ],
            },
          ],
        },
        {
          id: uuidv4(),
          title: "Programming",
          pathD:
            "M60 10C60 4.47715 64.5078 -0.0849448 69.9541 0.831335C80.6124 2.62446 90.6545 7.27616 98.9669 14.3756C109.83 23.6538 117.026 36.5036 119.261 50.6139C121.496 64.7242 118.623 79.1689 111.158 91.3499C105.447 100.671 97.3336 108.198 87.7511 113.197C82.8545 115.751 77.1575 112.805 75.4508 107.553L70.5066 92.3359C68.7999 87.0834 71.9073 81.5572 76.0198 77.8708C77.7386 76.3301 79.2389 74.5381 80.4634 72.54C83.4492 67.6676 84.5985 61.8897 83.7045 56.2456C82.8106 50.6015 79.9321 45.4615 75.5868 41.7503C73.8048 40.2283 71.8241 38.9876 69.7133 38.0534C64.663 35.8183 60 31.5228 60 26L60 10Z",
          detail: [
            {
              title: "Having",
              list: [
                "Work design patterns like Singleton, Abstract Factory, Decorator",
                "Understand design principles DRY, SOLID",
                "Work with generic algorithm and understand sorting algorithms",
              ],
            },
            {
              title: "To Improve",
              list: [
                "Learn more design patterns",
                "Learn more algorithms to improve system performance",
              ],
            },
          ],
        },
        {
          id: uuidv4(),
          title: "Database",
          pathD:
            "M60 10C60 4.47715 64.5076 -0.0848225 69.9539 0.831419C75.9535 1.84074 81.7841 3.75998 87.2394 6.53961C95.676 10.8383 102.975 17.0726 108.541 24.7329C114.107 32.3932 117.78 41.2619 119.261 50.6139C120.743 59.966 119.989 69.5358 117.063 78.541C114.137 87.5462 109.122 95.7311 102.426 102.426C95.7311 109.122 87.5462 114.137 78.541 117.063C69.5358 119.989 59.966 120.743 50.614 119.261C44.5667 118.304 38.7215 116.429 33.2745 113.719C28.3297 111.259 27.3645 104.919 30.6108 100.451L40.0153 87.5066C43.2616 83.0385 49.5587 82.3043 54.9583 83.4645C55.3845 83.556 55.8138 83.6361 56.2456 83.7045C59.9864 84.297 63.8143 83.9957 67.4164 82.8254C71.0185 81.655 74.2924 79.6487 76.9706 76.9706C79.6487 74.2924 81.655 71.0185 82.8254 67.4164C83.9957 63.8143 84.297 59.9864 83.7045 56.2456C83.112 52.5048 81.6426 48.9573 79.4164 45.8932C77.1902 42.829 74.2704 40.3353 70.8958 38.6158C70.5062 38.4174 70.1119 38.2298 69.7132 38.0534C64.6629 35.8182 60 31.5228 60 26L60 10Z",
          detail: [
            {
              title: "Having",
              list: [
                "Work with SQL database e.g. MySQL, MariaDB, etc.",
                "Work with NoSQL database e.g. Elasticsearch, MongoDB, Redis, etc.",
                "Understand the benefit and side effect of indexing",
                "Optimize heavy query",
                "Design database structure",
              ],
            },
            {
              title: "To Improve",
              list: ["Learn database structure of big and complex system"],
            },
          ],
        },
        {
          id: uuidv4(),
          title: "DevOps",
          pathD:
            "M60 10C60 4.47715 64.5077 -0.0848851 69.954 0.831389C79.0555 2.3626 87.7278 5.98137 95.2671 11.459C105.518 18.9067 113.148 29.4084 117.063 41.459C120.979 53.5096 120.979 66.4904 117.063 78.541C114.184 87.404 109.295 95.4291 102.831 102.018C98.9638 105.96 92.6355 104.919 89.3893 100.451L79.9847 87.5066C76.7384 83.0385 77.9861 76.8226 80.7581 72.0458C81.6041 70.588 82.2987 69.0372 82.8254 67.4164C84.3915 62.5962 84.3915 57.4038 82.8254 52.5836C81.2592 47.7634 78.2072 43.5627 74.1068 40.5836C72.7281 39.5819 71.2546 38.7356 69.7133 38.0534C64.6629 35.8182 60 31.5228 60 26L60 10Z",
          detail: [
            {
              title: "Having",
              list: [
                "Work with Docker",
                "Work with Terraform to deploy application on AWS",
                "Can build pipelines on CI/CD tools e.g. Teamcity, Github Actions",
                "Monitor application through NewRelics",
              ],
            },
            {
              title: "To Improve",
              list: ["Learn about more CI/CD utilities"],
            },
          ],
        },
        {
          id: uuidv4(),
          title: "Cloud",
          pathD:
            "M60 10C60 4.47715 64.5076 -0.0848225 69.9539 0.831419C75.9535 1.84074 81.7841 3.75998 87.2394 6.53961C95.676 10.8383 102.975 17.0726 108.541 24.7329C114.107 32.3932 117.78 41.2619 119.261 50.6139C120.743 59.966 119.989 69.5358 117.063 78.541C114.137 87.5462 109.122 95.7311 102.426 102.426C95.7311 109.122 87.5462 114.137 78.541 117.063C69.5358 119.989 59.966 120.743 50.614 119.261C44.5667 118.304 38.7215 116.429 33.2745 113.719C28.3297 111.259 27.3645 104.919 30.6108 100.451L40.0153 87.5066C43.2616 83.0385 49.5587 82.3043 54.9583 83.4645C55.3845 83.556 55.8138 83.6361 56.2456 83.7045C59.9864 84.297 63.8143 83.9957 67.4164 82.8254C71.0185 81.655 74.2924 79.6487 76.9706 76.9706C79.6487 74.2924 81.655 71.0185 82.8254 67.4164C83.9957 63.8143 84.297 59.9864 83.7045 56.2456C83.112 52.5048 81.6426 48.9573 79.4164 45.8932C77.1902 42.829 74.2704 40.3353 70.8958 38.6158C70.5062 38.4174 70.1119 38.2298 69.7132 38.0534C64.6629 35.8182 60 31.5228 60 26L60 10Z",
          detail: [
            {
              title: "Having",
              list: [
                "Work on many fundamental services on AWS",
                "Can do R&D on AWS by myself",
              ],
            },
            {
              title: "To Improve",
              list: [
                "Get familiar with more AWS services",
                "Have production experiece working with other clouds e.g. GCP, Azure",
              ],
            },
          ],
        },
        {
          id: uuidv4(),
          title: "English",
          pathD:
            "M60 10C60 4.47715 64.5076 -0.0848459 69.9539 0.831412C77.5029 2.10141 84.7705 4.80971 91.3499 8.84159C100.785 14.6232 108.437 22.9013 113.46 32.7606C118.484 42.6199 120.683 53.6763 119.815 64.7075C118.947 75.7388 115.045 86.3151 108.541 95.2671C102.037 104.219 93.1841 111.198 82.961 115.433C72.738 119.667 61.543 120.992 50.6139 119.261C39.6848 117.53 29.4473 112.811 21.0331 105.624C15.1654 100.613 10.3439 94.5379 6.80327 87.7509C4.24885 82.8543 7.19464 77.1575 12.4472 75.4509L27.6641 70.5066C32.9166 68.7999 38.4427 71.9073 42.1291 76.0197C42.8377 76.8102 43.6004 77.5555 44.4132 78.2497C47.7789 81.1243 51.8739 83.0121 56.2456 83.7045C60.6172 84.3969 65.0952 83.8669 69.1844 82.1731C73.2736 80.4793 76.8148 77.6877 79.4164 74.1068C82.018 70.526 83.5787 66.2955 83.926 61.883C84.2733 57.4705 83.3936 53.0479 81.3842 49.1042C79.3747 45.1605 76.3139 41.8493 72.54 39.5366C71.6285 38.9781 70.684 38.483 69.7132 38.0534C64.6629 35.8182 60 31.5228 60 26L60 10Z",
          detail: [
            {
              title: "Having",
              list: [
                "Can communicate in English fluently, in work topics or casual topics, verbal or written",
              ],
            },
            {
              title: "To Improve",
              list: ["Expand vocabulary"],
            },
          ],
        },
        {
          id: uuidv4(),
          title: "Documenting",
          pathD:
            "M60 10C60 4.47715 64.5076 -0.0848319 69.9539 0.831418C76.7279 1.97102 83.2808 4.26967 89.3173 7.65024C98.2743 12.6664 105.794 19.8969 111.158 28.6501C116.522 37.4033 119.551 47.3863 119.954 57.6444C120.357 67.9025 118.121 78.0924 113.46 87.2394C108.8 96.3865 101.87 104.185 93.3342 109.888C84.7984 115.592 74.9419 119.01 64.7076 119.815C54.4732 120.621 44.2034 118.787 34.8804 114.489C28.5974 111.592 22.886 107.642 17.9824 102.831C14.0399 98.9637 15.0811 92.6355 19.5492 89.3893L32.4934 79.9847C36.9615 76.7385 43.1773 77.9861 47.9541 80.7581C48.602 81.134 49.2686 81.4803 49.9522 81.7954C53.6814 83.5146 57.7893 84.2482 61.883 83.926C65.9768 83.6038 69.9193 82.2367 73.3337 79.9553C76.748 77.6739 79.5199 74.5546 81.3842 70.8958C83.2484 67.2369 84.1427 63.161 83.9815 59.0578C83.8203 54.9545 82.6089 50.9613 80.4634 47.46C78.3178 43.9588 75.3097 41.0666 71.7269 39.0601C71.0702 38.6923 70.3982 38.3565 69.7132 38.0534C64.6629 35.8182 60 31.5228 60 26L60 10Z",
          detail: [
            {
              title: "Having",
              list: [
                "Create and format a document nicely on MS Word, Confluence, etc.",
                "Creating techinal document",
                "Prepare and present slides",
              ],
            },
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
    this.selectedSkill = this.skills[0].id;

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
