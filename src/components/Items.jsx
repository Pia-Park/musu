import React from "react";
import './Shopbox.css'

export default function Items(props) {
  const { image, title, price } = props;

  return (
    <div className="sample3">
      <img src={image} alt="img" />
      {title && price &&
      (
        <div className="mask">
          <h3 className="caption">{title}</h3>
          <h3 className="price">{price}</h3>
        </div>
      )}
    </div>
  );
}
