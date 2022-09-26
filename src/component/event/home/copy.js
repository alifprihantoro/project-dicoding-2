export default function copyTextTutorial() {
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

