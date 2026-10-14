import { Heart, ShoppingCart, Star } from "lucide-react";
import { useCoffee } from "../context/CoffeeContext";
import { formatINR } from "../services/api";

export default function ProductCard({ product }) {
  const { addToCart, favourites, toggleFavourite } = useCoffee();

  const isFavourite = favourites.some(
    (item) => item.id === product.id
  );

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img src={product.image} alt={product.name} className="product-image" />

        <button
          className={`favourite-button ${isFavourite ? "active" : ""}`}
          onClick={() => toggleFavourite(product)}
          aria-label="Toggle favourite"
        >
          <Heart size={20} fill={isFavourite ? "currentColor" : "none"} />
        </button>

        <span className="product-category">{product.category}</span>
      </div>

      <div className="product-info">
        <div className="product-title-row">
          <h3>{product.name}</h3>
          <span className="rating"><Star size={15} fill="currentColor" /> {product.rating}</span>
        </div>

        <p>{product.description}</p>

        <div className="product-bottom">
          <strong>{formatINR(product.price)}</strong>
          <button className="add-button" onClick={() => addToCart(product)}>
            <ShoppingCart size={17} /> Add
          </button>
        </div>
      </div>
    </article>
  );
}










