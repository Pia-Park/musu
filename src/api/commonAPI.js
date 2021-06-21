import axios from "axios";

/**
 * Get tokens from and return them
 * @return [object] the list of retrieved token ids
 */
export async function setAccessToken() {
  const res = await axios.get(
    process.env.REACT_APP_AWS_BASE_ENDPOINT + "/access-token"
  );
  const instaToken = res["data"]["instagram"]["currentToken"]["accessToken"];
  const baseToken = res["data"]["base"]["currentToken"]["accessToken"];

  return [instaToken, baseToken];
}
