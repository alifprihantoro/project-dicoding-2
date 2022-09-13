import data_usr from "../../../user.json";

export default function eventStartNowHomeBtn() {
  const popup = document.getElementById("popup");
  const string_data = JSON.stringify(data_usr);
  console.log(string_data);
  popup.innerHTML = `
  <div>
  <h2>create your CV</h2>
    <textarea type="text" id="copyText">
      ${string_data}
    </textarea>
    <button id="copyBtn"><i class="ph-copy"></i> Copy</button>
  </div>
  hello
  <script>
  </script>
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
            alert("yeah!"); // success
          })
          .catch(function () {
            alert("err"); // error
          });
      }
    });
}

