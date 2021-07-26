import React from "react";
import './Accordion.css'

export default function Accordion(props) {
  return (
    <div className="img-box">
      <img
        src='/img/shop-img2.jpg'
        alt="taimakazari"
        className="shop-img"
      />
      <img src='/img/bgpattern.png' alt='pattern' className="pattern" />
      <div className="text-box">
        <div className="box-title">大麻飾り
        </div>
        <div className="explain">
        神聖な祓い清めの装飾で祓い清めることで『元氣』な状態に整います。
        </div>
      </div>
      <button className="show-item" onClick={props.handleClick}>
        <p>{props.isOpen ? "商品ページを閉じる" : "商品ページを開く"}</p>
        {props.isOpen ? ( 
          <img className="arrow" src="/img/arrow-up.png" alt="arrow up"></img>
          ) : (
          <img className="arrow" src="/img/arrow-down.png" alt="arrow down"></img>
        )}
      </button>
    </div>
  );
}
