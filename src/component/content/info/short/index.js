import getMyProfile from "../../../../service/myprofile";
export default async function defaultInfo(user, el) {
  const getData = await getMyProfile(user);
  const { data } = getData;
  console.log(data)
  el.innerHTML = `
  <img class='img-profile' src='${data.avatar_url}' />
  <h2>Info :</h2>
  
  `;
}
