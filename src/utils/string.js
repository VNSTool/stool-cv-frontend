import Vue from "vue";

export const capitalizeFirstLetter = function (string) {
  return string[0].toUpperCase() + string.slice(1);
};

export const copyToClipboard = function (text) {
  const el = document.createElement("textarea");
  el.value = text;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
};

export const getTextContentOfHtmlText = function (htmlText) {
  const htmlEl = new DOMParser().parseFromString(htmlText, "text/html");
  return htmlEl.firstChild.textContent;
};
