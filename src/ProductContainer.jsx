import { useContext } from "react";
import ProductList from "./ProductList";
import products from "./Products";
import { CartContext } from "./CartContext";

function ProductContainer() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Our Products</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <ProductList products={products} />
      </div>
    </div>
  );
}

export default ProductContainer;