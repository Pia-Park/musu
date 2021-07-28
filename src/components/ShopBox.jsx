import React, { useState, useEffect } from "react";

import Accordion from "./Accordion";
import ItemsContainer from "./ItemsContainer";

const INIT_VISIBLE_COUNT = 0;
const VISIBLE_COUNT = 4;

function ShopBox(props) {
  const [visibleItemsCount, setVisibleItemsCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const changeActiveStatus = () => {
    setVisibleItemsCount(isOpen ? INIT_VISIBLE_COUNT : VISIBLE_COUNT);
    setIsOpen(!isOpen);
  };

  const showMoreItemClicked = () => {
    setVisibleItemsCount((prevValue) => prevValue + 4);
  };

  return (
    <>
      <Accordion
        isOpen={isOpen}
        handleClick={changeActiveStatus}
        product={props.product}
      />

      {isOpen ? <div className="shop-detail">{props.children}</div> : ""}

      <ItemsContainer
        items={props.items}
        gridType={"base"}
        visibleItemsCount={visibleItemsCount}
      />

      {(props.items.length > visibleItemsCount) & isOpen ? (
        <button className="show-more-button" onClick={showMoreItemClicked}>
          もっと見る
          <i className="fas fa-angle-down" />
        </button>
      ) : (
        ""
      )}
    </>
  );
}

export default ShopBox;
