import defaultInfo from "../../component/content";

const cv_el = document.getElementById("cv");
cv_el.innerHTML = `
  loading...
`;
const get_link = window.location.href;
const username = get_link.split("?")[1];
defaultInfo(username, cv_el);
