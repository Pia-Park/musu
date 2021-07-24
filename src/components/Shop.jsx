import "./Shop.css";
import ShopBox from "./ShopBox";
import productInfo from "../data/product.json";

function Shop() {

	return (
    <section>
      <div className="shop-container" id="shop">
        <div className="shop-wrapper">
          <h2 className="shop-title">Online Shop</h2>
          {productInfo &&
            productInfo.data.map((product) => (
              <ShopBox
                key={product.title}
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
