/**
 * list what will be show
 *
 * need :
 * @param data_github data from github
 */
export default function listData(data_github = {}) {
  const list_data = [
    `name : ${data_github.name}`,
    `location : ${data_github.location}`,
    `${data_github.bio == null ? "" : data_github.bio}`,
  ];
  return list_data;
}
