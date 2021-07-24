import React from "react";

export default function Accordion(props) {
  return (
    <div class="img-box">
      <img
        src={`${process.env.PUBLIC_URL}/img/${props.image}`}
        alt="taimakazari"
        className="shop-img"
      />
      <button className="show-item" onClick={props.handleClick}>
        <p>{props.isOpen ? "商品ページを閉じる" : "商品ページを開く"}</p>
        {props.isOpen ? (
          <i className="fas fa-angle-up" />
        ) : (
          <i className="fas fa-angle-down" />
        )}
      </button>
    </div>
  );
}
