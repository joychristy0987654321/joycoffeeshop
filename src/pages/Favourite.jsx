import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { useCoffee } from "../context/CoffeeContext";
import ProductCard from "../components/ProductCard";

export default function Favourite() {
  const { favourites } = useCoffee();

  return (
    <main className="page-container">
      <div className="page-heading">
        <span className="eyebrow">SAVED WITH LOVE</span>
        <h1>Your Favourites <Heart size={27} /></h1>
        <p>Your favourite coffee, all in one place.</p>
      </div>

      {favourites.length ? (
        <div className="product-grid">
          {favourites.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <Heart size={52} />
          <h2>No favourites yet</h2>
          <p>Tap the heart on a coffee you love to save it here.</p>
          <Link to="/menu" className="primary-button">Discover Coffee</Link>
        </div>
      )}
    </main>
  );
}





