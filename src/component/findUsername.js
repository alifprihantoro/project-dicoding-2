// add component to content
class Finder extends HTMLElement {
  connectedCallback() {
    const date_now = Date.now();
    const content = `
      <label for="username-github-${date_now}" class="form-label">Input your username</label>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon3">https://github.com/</span>
        <input type="text" class="form-control" id="username-github-${date_now}" aria-describedby="basic-addon3">
      </div>
      <button type="button" id='start-now-${date_now}' class="btn btn-primary">Generate</button>
    `;
    this.innerHTML = content;
    // shadow.appendChild(button);
    // add event to content
    const el_input = document.getElementById(`username-github-${date_now}`);
    const el_btn = document.getElementById(`start-now-${date_now}`);
    el_btn.addEventListener("click", () => {
      const username = el_input.value;
      const link = `/user/?${username}`;
      window.location.href = link;
    });
  }
}
customElements.define("find-user", Finder);
