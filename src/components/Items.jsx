import React from "react";
import "./Items.css"

export default function Items(props) {
  const { id, image, title, price } = props;


  return (
    <div className="sample3">
      <a href={`https://musu.official.ec/items/${id}`}>
      <img src={image} alt="img" className="item-img"/>
      {title && price &&
      (
        <div className="mask">
          <h3 className="caption">{title}</h3>
          <h3 className="price">{price}円</h3>
        </div>
      )}
      </a>
    </div>
  );
}
