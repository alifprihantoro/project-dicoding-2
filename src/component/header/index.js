export default function headerHome() {
  return `
  <div id='testingpng'>
    <div>
      <h2>Online Generator CV from github</h2>
      <p><b>Generator CV</b> is help you to create simple CV from Github and create custom page like portfolio and will be online</p>
    </div>
    <div>
    <label for="basic-url" class="form-label">Input your username</label>
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon3">https://github.com/</span>
      <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
    </div>
      <button type="button" id='start-now' class="btn btn-success">Start Now!</button>
      <a href='#Tutorial' type="button" id='tutorial-home-btn' class="btn btn-secondary">Documentation</a>
    </div>
  </div>
  `
}
