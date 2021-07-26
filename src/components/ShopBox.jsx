import React, { useState, useEffect } from "react";

import Accordion from "./Accordion";
import './Shopbox.css';
import ItemsContainer from "./ItemsContainer";

const INIT_VISIBLE_COUNT = 0;
const VISIBLE_COUNT = 4;

function ShopBox(props) {
  const [items, setItems] = useState([]);
  const [visibleItemsCount, setVisibleItemsCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const changeActiveStatus = () => {
    setVisibleItemsCount(isOpen ? INIT_VISIBLE_COUNT : VISIBLE_COUNT);
    setIsOpen(!isOpen);
  };

  const showMoreItemClicked = () => {
    setVisibleItemsCount((prevValue) => prevValue + 4);
  };

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/baseFakeData.json`)
      .then((res) => res.json())
      .then((data) => setItems(data.items));
  }, []);

  return (
    <>
      <Accordion
        image={props.image}
        isOpen={isOpen}
        handleClick={changeActiveStatus}
      />

      {isOpen ? <blockquote className="quote"><div className="shop-detail">{props.children}</div></blockquote> : ""}

      <ItemsContainer
        items={items}
        gridType={"base"}
        visibleItemsCount={visibleItemsCount}
      />

      {(items.length > visibleItemsCount) & isOpen ? (
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
