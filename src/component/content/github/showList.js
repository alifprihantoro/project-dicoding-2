/**
 * get list data and show to list
 *
 * need :
 * @param list listData()
 */
export default function showListDataFromGit(list = []) {
  const bundle = list
    .map((data) => {
      return `<li class="list-group-item">${data}</li>`;
    })
    .join("");
  return bundle;
}
