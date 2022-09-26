import data_usr from "../user.json";

export default function myJson() {
  const string_data = JSON.stringify(data_usr);
  const content = `
    <div class="form-floating">
  <textarea id='copyText' class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px">
      ${string_data}
  </textarea>
  <label for="floatingTextarea2">Comments</label>
</div>
    <button id="copyBtn" type="button" class="btn btn-light mt-3">copy</button>
  `;
  return content
}
