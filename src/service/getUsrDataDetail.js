import axios from "axios";

export default async function getDataUsrDetail(usr) {
  try {
    const response = await axios.get(
      `https://api.github.com/repos/${usr}/${usr}/contents/muryp_data/usr.json`
    );
    if (response.message === "Not Found") {
      return response.message;
    }
    const data = await axios.get(response.data.download_url);

    return JSON.parse(data.request.response);
  } catch (error) {
    return error;
  }
}
