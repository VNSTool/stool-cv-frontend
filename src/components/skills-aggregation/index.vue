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
            "M55 10C55 4.47715 59.5076 -0.0848459 64.9539 0.831412C72.5029 2.10141 79.7705 4.80971 86.3499 8.84159C95.7847 14.6232 103.437 22.9013 108.46 32.7606C113.484 42.6199 115.683 53.6763 114.815 64.7075C113.947 75.7388 110.045 86.3151 103.541 95.2671C97.037 104.219 88.1841 111.198 77.961 115.433C67.738 119.667 56.543 120.992 45.6139 119.261C34.6848 117.53 24.4473 112.811 16.0331 105.624C10.1654 100.613 5.34386 94.5379 1.80327 87.7509C-0.751147 82.8543 2.19464 77.1575 7.44718 75.4509L22.6641 70.5066C27.9166 68.7999 33.4427 71.9073 37.1291 76.0197C37.8377 76.8102 38.6004 77.5555 39.4132 78.2497C42.7789 81.1243 46.8739 83.0121 51.2456 83.7045C55.6172 84.3969 60.0952 83.8669 64.1844 82.1731C68.2736 80.4793 71.8148 77.6877 74.4164 74.1068C77.018 70.526 78.5787 66.2955 78.926 61.883C79.2733 57.4705 78.3936 53.0479 76.3842 49.1042C74.3747 45.1605 71.3139 41.8493 67.54 39.5366C66.6285 38.9781 65.684 38.483 64.7132 38.0534C59.6629 35.8182 55 31.5228 55 26L55 10Z",
          detail: [
            {
              title: "Strength",
              list: [
                "Can work on PHP with frameworks Laravel, Symphony",
                "Can work on Nodejs with framework NestJS",
                "Can make backend work with SQL database, NoSQL database, queue, cache, AWS services",
                "Can implement design patterns e.g. singleton, factory, decoration",
                "Can do unit test",
              ],
            },
            {
              title: "To Improve",
              list: [
                "Apply algorithms to improve performance",
                "Learn more design patterns",
                "Implement e2e test",
              ],
            },
          ],
        },
        {
          id: uuidv4(),
          title: "Frontend",
          pathD:
            "M60 10C60 4.47715 64.5077 -0.0848851 69.954 0.831389C79.0555 2.3626 87.7278 5.98137 95.2671 11.459C105.518 18.9067 113.148 29.4084 117.063 41.459C120.979 53.5096 120.979 66.4904 117.063 78.541C114.184 87.404 109.295 95.4291 102.831 102.018C98.9638 105.96 92.6355 104.919 89.3893 100.451L79.9847 87.5066C76.7384 83.0385 77.9861 76.8226 80.7581 72.0458C81.6041 70.588 82.2987 69.0372 82.8254 67.4164C84.3915 62.5962 84.3915 57.4038 82.8254 52.5836C81.2592 47.7634 78.2072 43.5627 74.1068 40.5836C72.7281 39.5819 71.2546 38.7356 69.7133 38.0534C64.6629 35.8182 60 31.5228 60 26L60 10Z",
          detail: [
            {
              title: "Strength",
              list: [
                "Can work with ReactJS, VueJS, Google AMP",
                "Can work with Figma, Zeplin",
                "Eager to implement the design on pixel standard",
                "Can do unit test",
              ],
            },
            {
              title: "To Improve",
              list: [
                "Have more production experience working with ReactJS and VueJS",
                "Work with complex components like animations, map, graphqls, etc.",
                "Implement snapshot test and e2e test",
              ],
            },
          ],
        },
        {
          id: uuidv4(),
          title: "Database",
          pathD:
            "M60 10C60 4.47715 64.5077 -0.0848851 69.954 0.831389C79.0555 2.3626 87.7278 5.98137 95.2671 11.459C105.518 18.9067 113.148 29.4084 117.063 41.459C120.979 53.5096 120.979 66.4904 117.063 78.541C114.184 87.404 109.295 95.4291 102.831 102.018C98.9638 105.96 92.6355 104.919 89.3893 100.451L79.9847 87.5066C76.7384 83.0385 77.9861 76.8226 80.7581 72.0458C81.6041 70.588 82.2987 69.0372 82.8254 67.4164C84.3915 62.5962 84.3915 57.4038 82.8254 52.5836C81.2592 47.7634 78.2072 43.5627 74.1068 40.5836C72.7281 39.5819 71.2546 38.7356 69.7133 38.0534C64.6629 35.8182 60 31.5228 60 26L60 10Z",
          detail: [
            {
              title: "Strength",
              list: [
                "Have experience working with SQL database e.g. MySQL, MariaDB, parquet columnar database, etc.",
                "Have experiece working with NoSQL database e.g. Elasticsearch, MongoDB, Redis, etc.",
                "Understand the benefit and side effect of indexing",
                "Can optimize heavy query",
                "Can design database structure",
              ],
            },
            {
              title: "To Improve",
              list: [
                "Need to learn best pratice to design database for big and complex system",
              ],
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
              title: "Strength",
              list: [
                "Can customize a build on CI/CI tools e.g. Teamcity, Google CI",
                "Can work on Terraform to deploy application on AWS",
                "Can work with Docker",
                "Can monitor application through NewRelics",
              ],
            },
            {
              title: "To Improve",
              list: ["Learn about Ansible", "Build whole CI/CI chain"],
            },
          ],
        },
        {
          id: uuidv4(),
          title: "Cloud",
          pathD:
            "M60 10C60 4.47715 64.5077 -0.0848851 69.954 0.831389C79.0555 2.3626 87.7278 5.98137 95.2671 11.459C105.518 18.9067 113.148 29.4084 117.063 41.459C120.979 53.5096 120.979 66.4904 117.063 78.541C114.184 87.404 109.295 95.4291 102.831 102.018C98.9638 105.96 92.6355 104.919 89.3893 100.451L79.9847 87.5066C76.7384 83.0385 77.9861 76.8226 80.7581 72.0458C81.6041 70.588 82.2987 69.0372 82.8254 67.4164C84.3915 62.5962 84.3915 57.4038 82.8254 52.5836C81.2592 47.7634 78.2072 43.5627 74.1068 40.5836C72.7281 39.5819 71.2546 38.7356 69.7133 38.0534C64.6629 35.8182 60 31.5228 60 26L60 10Z",
          detail: [
            {
              title: "Strength",
              list: [
                "Have experience working on many fundamental services on AWS",
                "Can understand AWS documents quickly",
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
            "M60 10C60 4.47715 64.5077 -0.0848851 69.954 0.831389C79.0555 2.3626 87.7278 5.98137 95.2671 11.459C105.518 18.9067 113.148 29.4084 117.063 41.459C120.979 53.5096 120.979 66.4904 117.063 78.541C114.184 87.404 109.295 95.4291 102.831 102.018C98.9638 105.96 92.6355 104.919 89.3893 100.451L79.9847 87.5066C76.7384 83.0385 77.9861 76.8226 80.7581 72.0458C81.6041 70.588 82.2987 69.0372 82.8254 67.4164C84.3915 62.5962 84.3915 57.4038 82.8254 52.5836C81.2592 47.7634 78.2072 43.5627 74.1068 40.5836C72.7281 39.5819 71.2546 38.7356 69.7133 38.0534C64.6629 35.8182 60 31.5228 60 26L60 10Z",
          detail: [
            {
              title: "Strength",
              list: [
                "Can communicate with English speaker fluently, with work topics or life topics",
                "Know how to explain a thing in English using simple words, make listener easy to understand",
                "Can make a document or email in formal English",
              ],
            },
            {
              title: "To Improve",
              list: [
                "Expand the volcabulary to have interesting conversation with English native speaker",
              ],
            },
          ],
        },
        {
          id: uuidv4(),
          title: "Business Logic",
          pathD:
            "M60 10C60 4.47715 64.5077 -0.0848851 69.954 0.831389C79.0555 2.3626 87.7278 5.98137 95.2671 11.459C105.518 18.9067 113.148 29.4084 117.063 41.459C120.979 53.5096 120.979 66.4904 117.063 78.541C114.184 87.404 109.295 95.4291 102.831 102.018C98.9638 105.96 92.6355 104.919 89.3893 100.451L79.9847 87.5066C76.7384 83.0385 77.9861 76.8226 80.7581 72.0458C81.6041 70.588 82.2987 69.0372 82.8254 67.4164C84.3915 62.5962 84.3915 57.4038 82.8254 52.5836C81.2592 47.7634 78.2072 43.5627 74.1068 40.5836C72.7281 39.5819 71.2546 38.7356 69.7133 38.0534C64.6629 35.8182 60 31.5228 60 26L60 10Z",
          detail: [
            {
              title: "Strength",
              list: [
                "Can understand the business quickly",
                "Eager to understand deeply company business because it is good for work",
                "Have experience on banking and e-commerce",
              ],
            },
            {
              title: "To Improve",
              list: [
                "Have deeper knowleged in e-commerce and other domains e.g. fintech, delivery",
              ],
            },
          ],
        },
        {
          id: uuidv4(),
          title: "Documentating",
          pathD:
            "M60 10C60 4.47715 64.5077 -0.0848851 69.954 0.831389C79.0555 2.3626 87.7278 5.98137 95.2671 11.459C105.518 18.9067 113.148 29.4084 117.063 41.459C120.979 53.5096 120.979 66.4904 117.063 78.541C114.184 87.404 109.295 95.4291 102.831 102.018C98.9638 105.96 92.6355 104.919 89.3893 100.451L79.9847 87.5066C76.7384 83.0385 77.9861 76.8226 80.7581 72.0458C81.6041 70.588 82.2987 69.0372 82.8254 67.4164C84.3915 62.5962 84.3915 57.4038 82.8254 52.5836C81.2592 47.7634 78.2072 43.5627 74.1068 40.5836C72.7281 39.5819 71.2546 38.7356 69.7133 38.0534C64.6629 35.8182 60 31.5228 60 26L60 10Z",
          detail: [
            {
              title: "Strength",
              list: [
                "Can create and format a document nicely on MS Word, Confluence",
                "Have experience on creating techinal document",
                "Prepare and present slides in many sprint reviews",
              ],
            },
            {
              title: "To Improve",
              list: ["Bring the presentation to fantastic level"],
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
