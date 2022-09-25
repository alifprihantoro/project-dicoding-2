import getRepos from "../../../service/getRepo";

export default async function cekIsRepoOnly(data,user) {
  const split_data = data.split("/");
  const usr = split_data[1] != undefined ? split_data[1] : user;
  const repo = split_data[1] != undefined ? split_data[0] : data;
  const data_repo = await getRepos(usr, repo);
  const ex_repo = data_repo.data;
  return ex_repo
}
