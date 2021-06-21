import axios from "axios";

/**
 * Get products data from BASE
 * @return {[object]} the list of retrieved BASE product data
 */
export async function getBaseProducts(baseRefreshToken) {
  const accessToken = await getAccessToken(baseRefreshToken);

  return await axios.get(
    process.env.REACT_APP_BASE_BASE_ENDPOINT + "/1/items",
    {
      headers: {
        Authorization: accessToken,
      },
      params: {
        visible: "1",
        order: "created",
        sort: "desc",
      },
    }
  );
}

/**
 * Get products data from BASE
 * @return {[object]} the list of retrieved BASE product data
 */
async function getAccessToken(baseRefreshToken) {
  return await axios.get(
    process.env.REACT_APP_BASE_BASE_ENDPOINT + "/1/items",
    {
      params: {
        grant_type: "refresh_token",
        client_id: process.env.REACT_APP_BASE_CLIENT_ID,
        client_secret: process.env.REACT_APP_BASE_CLIENT_SECRET,
        refresh_token: baseRefreshToken,
        redirect_uri: process.env.REACT_APP_BASE_REDIRECT_URL,
      },
    }
  );
}
