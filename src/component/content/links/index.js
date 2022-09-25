import socialMedia from "./socialMedia";
import linkWeb from "./web";

export default function linksList(detail_data, data_github) {
  const { twitter_username } = data_github;
  const { social_media, extends_links } = detail_data;
  const title = "<h2>Social media and links</h2>";
  const twitter_from_github = `
  <a 
    class="btn btn-primary"
    href="https://twitter.com/${twitter_username}"
    role="button">
    <i class="twitter"/>
    @${twitter_username}
  </a>
  `;
  const bundle_links =
    title +
    twitter_from_github +
    socialMedia(social_media) +
    linkWeb(extends_links);

  return bundle_links;
}
