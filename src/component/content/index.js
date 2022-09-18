import getMyProfile from "../../service/myprofile";
import getDataUsrDetail from "../../service/getUsrDataDetail";
import btnBootstrap from "../bootstrap/btn";

const socialMedia = (social_media) => {
  const sosmed_keys = Object.keys(social_media);
  const hello = sosmed_keys
    .map((sosmed_name) => {
      const tes = social_media[sosmed_name]
        .map((username) =>
          btnBootstrap(
            `https://${sosmed_name}.com/${username}`,
            username,
            `akar-icons:${sosmed_name}-fill`
          )
        )
        .join("");
      console.log(tes);
      return tes;
    })
    .join("");
  console.log(hello);
  return hello;
};

export default async function defaultInfo(user, el) {
  const get_data = await getMyProfile(user);
  const { data } = get_data;

  const get_detail_data = await getDataUsrDetail(user);
  const { social_media } = get_detail_data;

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
  `;
}
