import axios from "axios";

/**
 * Get products data from BASE
 * @return {[object]} the list of retrieved Instagram data including...
 *    - id: uniqu id
 *    - media_url: image url
 *    - timestamp: the time of image user post
 */
export async function getBaseProducts(instaToken) {
  return await axios.get(process.env.REACT_APP_INSTA_BASE_END + "/me/media", {
    params: {
      fields: "media_url,timestamp",
      access_token: instaToken,
    },
  });
}
