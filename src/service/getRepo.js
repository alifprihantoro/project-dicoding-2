import axios from "axios";

// Make a request for a user with a given ID
export default async function getRepos(usr,repo) {
  try {
    const url = `https://api.github.com/repos/${usr}/${repo}`
    const response = await axios
      .get(url);
    // handle success
    return response;
  }
  catch (error) {
    return error;
  }
}
