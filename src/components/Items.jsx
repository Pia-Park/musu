import React from "react";

export default function Items(props) {
  const { image, title, price, ...other } = props;

  return (
    <div className="sample3">
      <img src={image} alt="img" />
      {title && price &&
      (
        <div className="mask">
          <h3 className="caption">{title}</h3>
          <h3>{price}</h3>
        </div>
      )}
    </div>
  );
}
