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
