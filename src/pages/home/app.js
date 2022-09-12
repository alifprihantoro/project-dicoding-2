import "../../style/home/main.scss";
import "../../component/nav";
import headerHome from "../../component/header";
import accordion from "../../component/accorion";
import { data_feature } from "../../component/data/feature";
import { data_tutorial } from "../../component/data/tutorial";

// add element to content
class Content extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      headerHome() +
      accordion("Feature", data_feature) +
      accordion("Tutorial", data_tutorial);
  }
}

customElements.define("my-content", Content);

const start_now = document.getElementById("start-now");
start_now.addEventListener("click", () => {
  console.log("hello klick");
});
