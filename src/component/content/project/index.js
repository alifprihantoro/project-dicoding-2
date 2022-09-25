import projectBundleHtml from "./bundle";

/**
 * bundle with title and cover
 *
 * need :
 * @param datas list/array where contain repos name or with username
 * @param user username if user not show username
 */
export default async function bestProject(datas, user) {
  const title = "<h2>best project</h2>";
  const bundle_project_list_html = await projectBundleHtml(datas, user);
  const bundle = title + `<div class='d-flex'>` + bundle_project_list_html + "</div>";
  return bundle;
}
