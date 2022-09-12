import defaultInfo from "./info/short";

class Content extends HTMLElement {
  connectedCallback() {
    this.user = this.getAttribute("user") || "";
    defaultInfo(this.user, this);
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
`;
  }
}

customElements.define("my-content", Content);
