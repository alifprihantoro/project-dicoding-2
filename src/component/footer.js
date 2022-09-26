// add component to content
class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    </br>
    <footer class='p-3'>
      <p>copyright &copy;2022 <a href="https://github.com/alifprihantoro">alifprihantoro</a>  </p>
    </footer>
    `
  }
}
customElements.define("my-footer", Footer);
