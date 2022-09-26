export default function headerHome() {
  return `
  <div class='d-flex p-3'>
    <div class='left-header my-3 mx-2'>
      <h2>Create cv online with github</h2>
      <p><b>Generator CV</b> is help you to create simple CV from Github and create custom page like portfolio and will be online</p>
    </div>
    <div>
      <label for="username-github" class="form-label">Input your username</label>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon3">https://github.com/</span>
        <input type="text" class="form-control" id="username-github" aria-describedby="basic-addon3">
      </div>
      <button type="button" id='start-now' class="btn btn-primary">Start Now!</button>
      <a href='#Tutorial' type="button" id='tutorial-home-btn' class="btn btn-primary primary2">Documentation</a>
    </div>
    </div>
  `
}
