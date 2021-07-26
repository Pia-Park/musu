import axios from "axios";

/**
 * Get images from Instagram
 * @return {[object]} the list of retrieved Instagram data including...
 *    - id: uniqu id
 *    - media_url: image url
 *    - timestamp: the time of image user post
 */
export async function getInstaImages() {
  const res = await axios.get(
    process.env.REACT_APP_AWS_BASE_ENDPOINT + "/access-token"
  );
  const instaToken = res["data"]["instagram"]["currentToken"]["accessToken"];

  return await axios
    .get(process.env.REACT_APP_INSTAGRAM_BASE_ENDPOINT + "/me/media", {
      params: {
        fields: "media_url,timestamp",
        access_token: instaToken,
      },
    })
    .then((res) => {
      return res.data.data;
    });
}
