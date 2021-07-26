import React, { useState, useEffect } from "react";

import Accordion from "./Accordion";
import './Shopbox.css';

const INIT_VISIBLE_COUNT = 0;
const VISIBLE_COUNT = 4;

function ShopBox(props) {
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const changeActiveStatus = () => {
    setVisible(isOpen ? INIT_VISIBLE_COUNT : VISIBLE_COUNT);
    setIsOpen(!isOpen);
  };

  const showMoreItemClicked = () => {
    setVisible((prevValue) => prevValue + 4);
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

      <div className="items-container">
        {items.slice(0, visible).map((item) => (
          <div className="sample3" key={item.item_id}>
            <img src={item.img1_origin} alt="img" />
            <div className="mask">
              <h3 className="caption">{item.title}</h3>
              <h3 className="price">{item.price}円</h3>
            </div>
          </div>
        ))}
      </div>

      {(items.length > visible) & isOpen ? (
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
