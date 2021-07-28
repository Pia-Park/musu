import React from "react";
import './Accordion.css'

export default function Accordion(props) {
  return (
    <div className="img-box">
      <img
        src={props.product.image}
        alt={props.product.alt}
        className="shop-img"
      />
      <img src='/img/bgpattern.png' alt='pattern' className="pattern" />
      <div className="text-box">
        <div className="box-title">{props.product.title}
        </div>
        <div className="explain">{props.product.explain}
        </div>
      </div>
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
