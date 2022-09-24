import cardBootstrap from "../bootstrap/card";
import getRepos from "../../service/getRepo";
import btnBootstrap from "../bootstrap/btn";

export default async function bestProject(data, user) {
  let bundle_html = await Promise.all(
    data.map(async (e) => {
      const split_data = e.split("/");
      const usr = split_data[1] != undefined ? split_data[1] : user;
      const repo = split_data[1] != undefined ? split_data[0] : e;
      const data_repo = await getRepos(usr, repo);
      const ex_repo = data_repo.data;
      const {
        description,
        forks_count,
        forks_url,
        homepage,
        language,
        name,
        open_issues_count,
        issue_comment_url,
        size,
        url,
        watchers_count,
      } = ex_repo;
      console.log(ex_repo);
      const content = `
      <a href='${url}' ><h3 class="card-title">${name}</h3></a>
      ${btnBootstrap(`${homepage}`, `homepage`, ``)}
      ${btnBootstrap(`${forks_url}`, `fork : ${forks_count}`, ``)}
      ${btnBootstrap("#", `lang : ${language}`, ``)}
      ${btnBootstrap(
        `${issue_comment_url}`,
        `issue : ${open_issues_count}`,
        ``
      )}
      ${btnBootstrap(`#`, `watch : ${watchers_count}`, ``)}
      <h5 class="card-subtitle mb-2 text-muted">size : ${size}</h5>
      <p class="card-subtitle mb-2 text-muted">${description}</p>
      `;
      return cardBootstrap(content);
    })
  );
  return bundle_html;
}
