import data_usr from "../user.json";

export default function myJson() {
  const string_data = JSON.stringify(data_usr);
  const content = `
  <div>
    <h2>create your CV</h2>
    <div class="alert alert-primary" role="alert">
      if you have not <code>data_usr.json</code>. copy and change this json into your repo <code>https://github.com/username/username</code> and create paste into <code>muryp/data_usr.json</code>
    </div>
    <textarea type="text" id="copyText">
      ${string_data}
    </textarea>
    <button id="copyBtn"><i class="ph-copy"></i> Copy</button>
    and then input your username in this
    <input type='text' id='inputusername' placeholder='username'/>
    <button id="Preview-cv">generate</button>
  </div>
  `;
  return content
}
