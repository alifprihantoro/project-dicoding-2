import defaultInfo from "../../component/content";
import "../../style/usr/main.scss";

const cv_el = document.getElementById("cv");
cv_el.innerHTML = `
<div class="spinner-border text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
`;
const get_link = window.location.href;
const username = get_link.split("?")[1];
username == undefined
  ? (cv_el.innerHTML = "masukkan username dengan benar")
  : defaultInfo(username, cv_el);

