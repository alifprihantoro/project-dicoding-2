import listData from "./listData";
import showListDataFromGit from "./showList";
import btnBootstrap from "../../bootstrap/btn";

/**
 * bundle github info
 *
 * need :
 * @param data_github data fetch form github
 */
export default function githubInfo(data_github = {}) {
  const content_info =
    btnBootstrap({ link: "#", text: data_github.public_gists, icon: `octicon:logo-gist-16`, }) +
    btnBootstrap({ link: "#", text: data_github.public_repos, icon: `bx:git-repo-forked`, }) +
    btnBootstrap({ link: "#", text: `follower : ${data_github.followers}` }) +
    btnBootstrap({ link: "#", text: `following : ${data_github.following}` });

  const list_data = listData(data_github);
  const bundle = `
  <div class='d-flex'>
  <img class='img-profile img-thumbnail' src='${data_github.avatar_url}' />
    <div class='sidebar-profile'>
      <ul class="list-group list-group-flush">
        ${showListDataFromGit(list_data)}
      </ul>
    <div>
      ${content_info}
    </div>
    </div>
  </div>
  `;
  return bundle;
}
