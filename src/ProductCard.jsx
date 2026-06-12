import { useContext } from "react";
import { CartContext } from "./CartContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "10px",
        margin: "10px",
        width: "250px",
        borderRadius: "8px",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        width="100%"
        style={{
          height: "180px",
          objectFit: "cover",
          borderRadius: "6px",
        }}
      />

      <h3>{product.name}</h3>

      <p>
        <strong>Price:</strong> ₹{product.price}
      </p>

      <p>
        <strong>Category:</strong> {product.category}
      </p>

      <button onClick={() => addToCart(product)}>
        Add To Cart
      </button>
    </div>
  );
}

export default ProductCard;