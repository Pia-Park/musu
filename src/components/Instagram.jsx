import React, { useState, useEffect, useContext } from "react";

import { TokenContext } from "../App";
import { getInstaImages } from "../api/instagramAPI";

const Instagram = () => {
  const [instaImages, setinstaImages] = useState();
  const tokens = useContext(TokenContext);

  useEffect(() => {
    if (!tokens) {
      return;
    }

    const getTokens = async () => {
      const res = await getInstaImages(tokens[0]);
      const sortedImageUrls = res["data"]["data"].sort(
        (x, y) => x["timestamp"] - y["timestamp"]
      );
      setinstaImages(sortedImageUrls);
    };
    getTokens();
  }, [tokens]);

  return (
    <div>
      {instaImages &&
        instaImages.map((instaObj) => (
          <p key={instaObj.id}>{instaObj.media_url}</p>
        ))}
    </div>
  );
};

export default Instagram;
