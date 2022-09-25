import cardBootstrap from "../../bootstrap/card";
import btnBootstrap from "../../bootstrap/btn";
import cekIsRepoOnly from "./cekRepos";

/**
 * bundle project list from detail json
 *
 * need :
 * @param datas list/array where contain repos name or with username
 * @param user username if user not show username
 */
export default async function projectBundleHtml(datas,user) {
  let bundle_html = await Promise.all(
    datas.map(async (data) => {
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
      } = await cekIsRepoOnly(data,user);
      const content = `
      <a href='${url}' ><h3 class="card-title">${name}</h3></a>
      ${btnBootstrap({url:homepage, text:`homepage`})}
      ${btnBootstrap({url:forks_url,text: `fork : ${forks_count}`})}
      ${btnBootstrap({url:"#", text:`lang : ${language}`})}
      ${btnBootstrap({url:issue_comment_url,text:`issue : ${open_issues_count}`})}
      ${btnBootstrap({url:`#`, text:`watch : ${watchers_count}`})}
      <h5 class="card-subtitle mb-2 text-muted">size : ${size}</h5>
      <p class="card-subtitle mb-2 text-muted">${description}</p>
      `;
      return cardBootstrap(content);
    })
  );
  return bundle_html;
}
