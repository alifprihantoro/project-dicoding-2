import socialMedia from "./socialMedia";
import linkWeb from "./web";
import btnBootstrap from "../../bootstrap/btn";

export default function linksList(detail_data, data_github) {
  const { twitter_username, blog } = data_github;
  const { social_media, extends_links } = detail_data;
  const title = "<h2>Social media and links</h2>";
  const btn_web = btnBootstrap({ link: blog, icon: "" });
  const btn_twitter = btnBootstrap({
    link: `https://twitter.com/${twitter_username}`,
    text: `@${twitter_username}`,
    icon: "",
  });
  const bundle_links =
    title +
    btn_web +
    btn_twitter +
    socialMedia(social_media) +
    linkWeb(extends_links);

  return bundle_links;
}
