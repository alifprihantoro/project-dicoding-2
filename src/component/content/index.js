import getMyProfile from "../../service/myprofile";
import getDataUsrDetail from "../../service/getUsrDataDetail";
import techStack from "./techStack";
import credentialList from "./credential";
import educationList from "./education";
import positionNow from "./position/now";
import positionPast from "./position/old";
import bestProject from "./project";
import linksList from "./links";
import githubInfo from "./github";

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
  const getDataGithub = await getMyProfile(user);
  // if user not found
  if (getDataGithub == "error") {
    const title = "User Not found";
    el.innerHTML = `<h3>${title}</h3><find-user></find-user>`;
    document.title = title;
    return;
  }
  const data_github = getDataGithub.data;
  // get data from repo file
  const getDetailData = await getDataUsrDetail(user);
  // if user not have json data
  if (getDetailData.response?.status == 404) {
    const title = "Data user not found";
    el.innerHTML = `<h3>${title}</h3><find-user></find-user>`;
    document.title = title;
    return;
  }
  // extract data
  const {
    tech_stack,
    certificate,
    education,
    position_now,
    position_past,
    project,
  } = getDetailData;
  // bundle pages
  const bundle_pages =
    githubInfo(data_github) +
    linksList(getDetailData, data_github) +
    techStack(tech_stack) +
    credentialList(certificate) +
    educationList(education) +
    positionNow(position_now) +
    positionPast(position_past) +
    (await bestProject(project, user));
  // dom html into web
  el.innerHTML = bundle_pages;
}
