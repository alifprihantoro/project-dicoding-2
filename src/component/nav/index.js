import menu from './menu'

class Navigation extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
<nav> <ul>
${menu()}
</ul> </nav>
    `;
  }
}

customElements.define("my-nav", Navigation);
