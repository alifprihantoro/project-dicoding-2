import menu from "./menu";

class Navigation extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav class="navbar navbar-expand-lg bg-primary">
  <div class="container-fluid">
    <h1><a class="navbar-brand" href="#">MuryP</a></h1>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
      ${menu()}
      </ul>
    </div>
  </div>
</nav>
    `;
  }
}

customElements.define("my-nav", Navigation);
