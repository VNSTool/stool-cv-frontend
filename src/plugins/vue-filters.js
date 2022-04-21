import Vue from "vue";
import { capitalizeFirstLetter } from "~/utils/string";

export default () => {
  Vue.filter("capitalizeFirstLetter", (value) => capitalizeFirstLetter(value));
};
