import React, { useState, useEffect } from "react";

import Accordion from "./Accordion";
import './Shopbox.css';
import ItemsContainer from "./ItemsContainer";

const INIT_VISIBLE_COUNT = 0;
const VISIBLE_COUNT = 4;

function ShopBox(props) {
  const [visibleItemsCount, setVisibleItemsCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const items = props.items.map(item => {
    return {
      id: item.item_id,
      url: item.img1_origin,
      title: item.title,
      price: item.price
    }
  })

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

      {isOpen ? <blockquote className="quote"><div className="shop-detail">{props.children}</div></blockquote> : ""}

      <ItemsContainer
        items={items}
        gridType={"base"}
        visibleItemsCount={visibleItemsCount}
      />

      {(props.items.length > visibleItemsCount) & isOpen ? (
        <button className="show-more-button" onClick={showMoreItemClicked}>
          もっと見る
          <img className="arrow" src="/img/arrow-down.png" alt="arrow down"></img>
        </button>
      ) : (
          ""
        )}
    </>
  );
}

export default ShopBox;
