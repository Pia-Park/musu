import axios from "axios";

/**
 * Get images from Instagram
 * @return {[object]} the list of retrieved Instagram data including...
 *    - id: uniqu id
 *    - media_url: image url
 *    - timestamp: the time of image user post
 */
export async function getInstaImages(instaToken) {
  return await axios.get(
    process.env.REACT_APP_INSTAGRAM_BASE_ENDPOINT + "/me/media",
    {
      params: {
        fields: "media_url,timestamp",
        access_token: instaToken,
      },
    }
  );
}
