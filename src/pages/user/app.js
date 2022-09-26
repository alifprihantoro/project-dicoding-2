import defaultInfo from "../../component/content";
import "../../style/usr/main.scss";
import "../../component/findUsername";

const cv_el = document.getElementById("cv");
cv_el.innerHTML = `
<div class="spinner-border text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
`;
const get_link = window.location.href;
const username = get_link.split("?")[1];
if (username == undefined) {
  const title = "User Not found";
  cv_el.innerHTML = `<h3>${title}</h3><find-user></find-user>`;
  document.title = title;
} else {
  document.title = username;
  defaultInfo(username, cv_el);
}
