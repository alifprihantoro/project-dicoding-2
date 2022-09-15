import getMyProfile from "../../service/myprofile";
import getDataUsrDetail from "../../service/getUsrDataDetail";

export default async function defaultInfo(user, el) {
  const get_data = await getMyProfile(user);
  const get_detail_data = await getDataUsrDetail(user);
  const { data } = get_data;
  // console.log(data)
  el.innerHTML = `
  <img class='img-profile' src='${data.avatar_url}' />
  <h2>Info :</h2>
  name : ${data.name}
  bio : ${data.bio}
  blog : ${data.blog}
  public gist : ${data.public_gists}
  public repo : ${data.public_repos}
  twitter : ${data.twitter_username}
  follower : ${data.followers}
  following : ${data.following}
  location : ${data.location}
  `;
}
