import btnBootstrap from "../../bootstrap/btn";

/**
 * show extend links
 *
 * need :
 * @param link: data extend links;
 *
 *  example data (this data maybe null):
 * {
 *   "gitlab": {
 *     "icon": "ant-design:gitlab-filled",
 *     "link": "https://gitlab.com/alifprihantoro"
 *   },
 *   "web": {
 *     "icon": "iconoir:www",
 *     "link": "https://muryp.my.id"
 *   }
 * }
 */
export default function linkWeb(link) {
  // convert object to array
  const links_name = Object.keys(link);
  const bundle_link_html = links_name
    .map((name_web) => {
      const prop = link[name_web];
      return btnBootstrap({
        url: prop.link,
        text: name_web,
        icon: prop.icon,
      });
    })
    .join("");
  return bundle_link_html;
}
