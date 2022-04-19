import path, { join } from "path";
import glob from "glob";
import Vue from "vue";

import { capitalizeFirstLetter } from "../utils/string";

glob.sync(path.join(__dirname, "../components/**/*.vue")).forEach((file) => {
  const name = file
    .match(/.*components\/(.*)\.vue$/)[1]
    .split("/")
    .map((textLv1) =>
      textLv1
        .split("-")
        .map((textLv2) => {
          if (textLv2 === "index") return "";
          return capitalizeFirstLetter(textLv2);
        })
        .join("")
    )
    .join("");
  Vue.component(name, require(file).default);
});

global.Vue = Vue;
