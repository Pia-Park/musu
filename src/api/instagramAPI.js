import axios from "axios";

/**
 * Get images from Instagram
 * @return {[object]} the list of retrieved Instagram data including...
 *    - id: uniqu id
 *    - media_url: image url
 *    - timestamp: the time of image user post
 */
export async function getInstaImages(instaToken) {
  return await axios.get(process.env.REACT_APP_INSTA_BASE_END + "/me/media", {
    params: {
      fields: "media_url,timestamp",
      access_token: instaToken,
    },
  });
}

// /**
//  * Get long-alivd token
//  * @return {[object]} long-alivd token is
//  */
// export const getInstagramLongToken = () => {
//   axios
//     .get(process.env.REACT_APP_INSTA_END_REFLESH, {
//       params: {
//         grant_type: "ig_refresh_token",
//         access_token: process.env.RACT_APP_INSTA_LONG_TOKEN,
//       },
//     })
//     .then((res) => {
//       console.log(res);
//     });
// };

// export const getInstagramMedia = () => {
//   console.log("RUN");
// };
