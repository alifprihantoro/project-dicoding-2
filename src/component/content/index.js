import defaultInfo from "./info/short";

class Content extends HTMLElement {
  connectedCallback() {
    this.user = this.getAttribute("user") || "";
    defaultInfo(this.user,this)
    this.render();
  }

  render() {
    this.innerHTML = `<span>loading...</span>`;
  }
}

customElements.define("my-content", Content);
