import React, { useState, useEffect, useContext } from "react";

import { TokenContext } from "../App";
import { getBaseProducts } from "../api/baseAPI";

const Base = () => {
  const [baseItems, setBaseItems] = useState();
  const tokens = useContext(TokenContext);

  useEffect(() => {
    if (!tokens) {
      return;
    }

    const getTokens = async () => {
      const res = await getBaseProducts(tokens[1]);
      setBaseItems(res["items"]);
    };
    getTokens();
  }, [tokens]);

  return (
    <div>
      {baseItems &&
        baseItems.map((baseObj) => <p key={baseObj.item_id}>{baseObj.id}</p>)}
    </div>
  );
};

export default Base;
