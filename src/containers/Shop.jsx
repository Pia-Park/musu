import "./Shop.css";
import ShopBox from "../components/ShopBox";
import productInfo from "../data/product.json";

function Shop() {

	return (
    <section className="shop-container" id="shop">
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
    </section>
  );
}

export default Shop;
