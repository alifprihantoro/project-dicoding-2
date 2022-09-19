import getMyProfile from "../../service/myprofile";
import getDataUsrDetail from "../../service/getUsrDataDetail";
import getRepos from "../../service/getRepo";
import btnBootstrap from "../bootstrap/btn";
import cardBootstrap from "../bootstrap/card";

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

// Credential
const credentialBtn = (data) => {
  return data.map((e) => {
    const content = `
        <h3 class="card-title">${e.title}</h3>
        <h4 class="card-subtitle mb-2 text-muted">${e.institute}</h4>
        <h5 class="card-subtitle mb-2 text-muted">${
          e.current ? "still learn" : `${e.from} - ${e.to}`
        }</h4>
        <h4 class="card-subtitle mb-2 text-muted">${
          e.id == null ? "" : e.id
        }</h4>
        <a href="${e.url}" class="card-link">Show credential</a>
    `;
    return cardBootstrap(content);
  });
};

// education
const educationBtn = (data) => {
  return data.map((e) => {
    const content = `
      <h3 class="card-title">${e.name}</h3>
      <h5 class="card-subtitle mb-2 text-muted">${
        e.current ? "still learn" : `${e.from} - ${e.to}`
      }</h4>
      <h4 class="card-subtitle mb-2 text-muted">${e.field_of_study}</h4>
    `;
    return cardBootstrap(content);
  });
};

// position now
const jobPosition = (e, current) => {
  const content = `
    <h3 class="card-title">${e.company}</h3>
    <h5 class="card-subtitle mb-2 text-muted">${e.from} - ${
    current ? "Now" : e.out
  }</h5>
    <p class="card-subtitle mb-2 text-muted">${e.description}</p>
  `;
  return cardBootstrap(content);
};

const positionNow = (data) => {
  return jobPosition(data, false);
};
const positionPast = (data) => {
  return data.map((e) => {
    return jobPosition(e, true);
  });
};

const bestProject = async (data, user) => {
  let bundle_html = await Promise.all(
    data.map(async (e) => {
      const split_data = e.split("/");
      const usr = split_data[1] != undefined ? split_data[1] : user;
      const repo = split_data[1] != undefined ? split_data[0] : e;
      const data_repo = await getRepos(usr, repo);
      const ex_repo = data_repo.data;
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
      } = ex_repo;
   console.log(ex_repo)
      const content = `
      <a href='${url}' ><h3 class="card-title">${name}</h3></a>
      ${btnBootstrap(`${homepage}`, `homepage`, ``)}
      ${btnBootstrap(`${forks_url}`, `fork : ${forks_count}`, ``)}
      ${btnBootstrap("#", `lang : ${language}`, ``)}
      ${btnBootstrap(`${issue_comment_url}`, `issue : ${open_issues_count}`, ``)}
      ${btnBootstrap(`#`, `watch : ${watchers_count}`, ``)}
      <h5 class="card-subtitle mb-2 text-muted">size : ${size}</h5>
      <p class="card-subtitle mb-2 text-muted">${description}</p>
      `;
      return cardBootstrap(content);
    })
  );
  return bundle_html;
};
export default async function defaultInfo(user, el) {
  const get_data = await getMyProfile(user);
  const { data } = get_data;

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
    ${positionNow(position_now)}
  <h2>position past</h2>
    ${positionPast(position_past)}
  <h2>best project</h2>
    ${await bestProject(project, user)}
  `;
}
