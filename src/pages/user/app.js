import defaultInfo from "../../component/content";

const cv_el = document.getElementById("cv");
cv_el.innerHTML = `
  loading...
`;
const get_link = window.location.href;
const username = get_link.split("?")[1];
username == undefined
  ? (cv_el.innerHTML = "masukkan username dengan benar")
  : defaultInfo(username, cv_el);
