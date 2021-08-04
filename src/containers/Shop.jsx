import "./Shop.css";
import ShopBox from "../components/ShopBox";
import productInfo from "../data/product.json";
import React ,{ useEffect, useState } from "react";
import { getBaseProducts } from "../api/baseAPI";
import CommonWrapper from "../components/CommonWrapper";


function Shop() {
  const [items, setItems] = useState([]);

  useEffect(() =>{
    const getItems = async () => {
      const resItems = await getBaseProducts();
      setItems(resItems["data"]);
      console.log(resItems);
    };
    getItems();

  },[]);

  return (
    <section className="shop-container" id="shop">
      <CommonWrapper>
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
            </CommonWrapper>
    </section>
  );
}

export default Shop;
