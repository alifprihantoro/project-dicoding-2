import getMyProfile from "../../service/myprofile";
import getDataUsrDetail from "../../service/getUsrDataDetail";
import socialMedia from "./socialMedia";
import linkWeb from "./linkWeb";
import techStack from "./techStack";
import credentialBtn from "./credential";
import educationBtn from "./education";
import { positionNow, positionPast } from "./position";
import bestProject from "./project";

/**
 * get data from repos
 * then show to innerhtl
 *
 * need :
 * @param user: user name github
 * @param element: target element for innerhtml
 */
export default async function defaultInfo(user, el) {
  // get data from gihub api profile user
  const get_data = await getMyProfile(user);
  const { data } = get_data;
  // get data from repo file
  const get_detail_data = await getDataUsrDetail(user);
  // extract data
  const {
    social_media,
    extends_links,
    tech_stack,
    certificate,
    education,
    position_now,
    position_past,
    project,
  } = get_detail_data;

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
  <h2>Social media and links</h2>
  <a 
    class="btn btn-primary"
    href="https://twitter.com/${data.twitter_username}"
    role="button">
    <i class="twitter"/>
    @${data.twitter_username}
  </a>
  ${socialMedia(social_media)}
  ${linkWeb(extends_links)}
  <h2>Tech Stack</h2>
  ${techStack(tech_stack)}
  <h2>Credential or Certivicate</h2>
  <div class='d-flex'>
    ${credentialBtn(certificate)}
  </div>
  <h2>Education</h2>
  <div class='d-flex'>
    ${educationBtn(education)}
  </div>
  <h2>position now</h2>
  <div class='d-flex'>
    ${positionNow(position_now)}
  </div>
  <h2>position past</h2>
  <div class='d-flex'>
    ${positionPast(position_past)}
  </div>
  <h2>best project</h2>
  <div class='d-flex'>
    ${await bestProject(project, user)}
  </div>
  `;
}
