import "./Shop.css";
import ShopBox from "../components/ShopBox";
import productInfo from "../data/product.json";
import React ,{ useEffect, useState } from "react";
import { getBaseProducts } from "../api/baseAPI";


function Shop() {
  const [items, setItems] = useState([]);
  // console.log(items);

  useEffect(() =>{
    const getItems = async () => {
      const resItems = await getBaseProducts();
      setItems(resItems["data"]);
    };
    getItems();

  },[]);
  console.log("run1",items);

  return (
    <section className="shop-container" id="shop">
          <h2 className="shop-title">Online Shop</h2>
          {productInfo &&
            productInfo.data.map((product) => (
              <ShopBox
                items={items.length === 0 ?  items : items[product.categoryId]}
                key={product.title}
                categoryId={product.categoryId}
                children={product.description}
                product={product}
              />
            ))}
    </section>
  );
}

export default Shop;
