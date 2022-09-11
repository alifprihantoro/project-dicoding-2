import axios from "axios";

// Make a request for a user with a given ID
export default async function getMyProfile(user) {
  try {
    const response = await axios
      .get(`https://api.github.com/users/${user}`);
    // handle success
    return response;
  }
  catch (error) {
    return error;
  }
}
