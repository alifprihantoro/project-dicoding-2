/**
 * list what will be show
 *
 * need :
 * @param data_github data from github
 */
export default function listData(data_github = {}) {
  const list_data = [
    `name : ${data_github.name}`,
    `${data_github.bio == null ? "" : "bio : " + data_github.bio}`,
    `${data_github.blog == "" ? "" : "web : " + data_github.blog}`,
    `public gist : ${data_github.public_gists}`,
    `public repo : ${data_github.public_repos}`,
    `twitter : ${data_github.twitter_username}`,
    `follower : ${data_github.followers}`,
    `following : ${data_github.following}`,
    `location : ${data_github.location}`,
  ];
  return list_data;
}
