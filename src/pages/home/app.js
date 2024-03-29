import "../../style/home/main.scss";
import "../../component/nav";
import headerHome from "../../component/header";
import accordion from "../../component/bootstrap/accordion";
import { data_feature } from "../../component/data/feature";
import { data_tutorial } from "../../component/data/tutorial";
import copyTextTutorial from "../../component/event/home/copy";
import '../../component/footer'
import '../../component/findUsername'

// add component to content
class Content extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      headerHome() +
      accordion("Feature", data_feature) +
      accordion("Tutorial", data_tutorial);

    // add event to content
    // myEvent();
    copyTextTutorial()
  }
}
customElements.define("my-content", Content);

