import "./Shop.css";
import ShopBox from "./ShopBox";
import productInfo from "../data/product.json";

function Shop() {
  const product = productInfo.data;
  console.log(product);
  return (
    <section>
      <div className="shop-container" id="shop">
        <div className="shop-wrapper">
          <h2 className="shop-title">Online Shop</h2>
          {productInfo &&
            productInfo.data.map((product) => (
              <ShopBox
                categoryId={product.categoryId}
                image={product.image}
                children={product.description}
              />
            ))}
        </div>
      </div>
    </section>
  );
}

export default Shop;
