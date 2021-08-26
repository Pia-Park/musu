import React from "react";
import "./Items.css"

const INSTAGRAM = "insta"
const BASE = "base"
const BASE_ITEM_URL = "https://musu.official.ec/items/"
const INSTAGRAM_URL = "https://www.instagram.com/sn_1025/"

export default function Items(props) {

  const { id, image, title, price, type } = props;

  const getUrl = (dataType) => {
    switch (dataType) {
      case INSTAGRAM:
        return INSTAGRAM_URL
      case BASE:
        return `${BASE_ITEM_URL}${id}`
      default:
        return ""
    }
  }

  return (
    <div className="sample3">
      <a target="_blank" rel="noopener noreferrer" href={getUrl(type)}>
        <img src={image} alt="img" className="item-img" />
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
