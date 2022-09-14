import data_usr from "../../../user.json";

export default function eventStartNowHomeBtn() {
  const popup = document.getElementById("popup");
  const string_data = JSON.stringify(data_usr);
  console.log(string_data);
  popup.innerHTML = `
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
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Download!
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">pdf</a></li>
        <li><a class="dropdown-item" href="#">png</a></li>
        <li><a class="dropdown-item" href="#">html</a></li>
        <li><a class="dropdown-item" href="#">copy html</a></li>
      </ul>
    </div>
    <button id="Preview-cv">See Online</button>
  </div>
  `;
    const copyBtn = document.getElementById("copyBtn");
    const copyText = document.getElementById("copyText");
    copyBtn.addEventListener("click", () => {
      if (!navigator.clipboard) {
        // use old commandExec() way
        copyText.select();
        document.execCommand("copy");
      } else {
        navigator.clipboard
          .writeText(copyText.value)
          .then(function () {
            // alert("yeah!"); // success
          })
          .catch(function () {
            alert("err! cannot copy, try normal"); // error
          });
      }
    });
}

