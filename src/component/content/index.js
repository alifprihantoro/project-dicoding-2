import getMyProfile from "../../service/myprofile";
import getDataUsrDetail from "../../service/getUsrDataDetail";
import btnBootstrap from "../bootstrap/btn";

const socialMedia = (social_media) => {
  const sosmed_keys = Object.keys(social_media);
  const sosmed_bundle_html = sosmed_keys
    .map((sosmed_name) => {
      const sosmed_list_bundle_html = social_media[sosmed_name]
        .map((username) =>
          btnBootstrap(
            `https://${sosmed_name}.com/${username}`,
            "@" + username,
            `akar-icons:${sosmed_name}-fill`
          )
        )
        .join("");
      return sosmed_list_bundle_html;
    })
    .join("");
  return sosmed_bundle_html;
};
// link tambahan
const linkWeb = (link) => {
  const tes = { hello: "hai" };
  const links_name = Object.keys(link);
  const bundle_link_html = links_name
    .map((name_web) => {
      const prop = link[name_web];
      return btnBootstrap(prop.link, name_web, prop.icon);
    })
    .join("");
  return bundle_link_html;
};

// tech stack
const techStack = (stack) => {
  return stack.map((name_icon) => {
    return btnBootstrap("#", name_icon, `akar-icons:${name_icon}-fill`);
  });
};
export default async function defaultInfo(user, el) {
  const get_data = await getMyProfile(user);
  const { data } = get_data;

  const get_detail_data = await getDataUsrDetail(user);
  const { social_media, extends_links, tech_stack } = get_detail_data;
  el.innerHTML = `
  <img class='img-profile' src='${data.avatar_url}' />
  <h2>Info :</h2>
  name : ${data.name}
  ${data.bio == null ? "" : "bio : " + data.bio}
  ${data.blog == "" ? "" : "web : " + data.blog}
  public gist : ${data.public_gists}
  public repo : ${data.public_repos}
  twitter : ${data.twitter_username}
  follower : ${data.followers}
  following : ${data.following}
  location : ${data.location}
  Follow on : <br/>
  <a 
    class="btn btn-primary"
    href="https://twitter.com/${data.twitter_username}"
    role="button">
    <i class="twitter"/>
    @${data.twitter_username}
  </a>
  ${socialMedia(social_media)}
  ${linkWeb(extends_links)}
  ${techStack(tech_stack)}
  `;
}
