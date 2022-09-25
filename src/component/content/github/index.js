import listData from "./listData";
import showListDataFromGit from "./showList";

/**
 * bundle github info
 *
 * need :
 * @param data_github data fetch form github
 */
export default function githubInfo(data_github = {}) {
  const list_data = listData(data_github);
  const bundle = `
  <div class='d-flex'>
  <img class='img-profile img-thumbnail' src='${data_github.avatar_url}' />
    <div class='sidebar-profile'>
      <h2>Info :</h2>
      <ul class="list-group list-group-flush">
        ${showListDataFromGit(list_data)}
      </ul>
    </div>
  </div>
  `;
  return bundle;
}
