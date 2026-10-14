import { useState } from "react";
import { Search } from "lucide-react";
import { useCoffee } from "../context/CoffeeContext";
import ProductCard from "../components/ProductCard";

export default function Menu() {
  const { products } = useCoffee();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || product.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="page-container">
      <div className="page-heading">
        <span className="eyebrow">BREWED JUST FOR YOU</span>
        <h1>Our Coffee Menu</h1>
        <p>Explore the perfect blend for your mood.</p>
      </div>

      <div className="menu-toolbar">
        <div className="search-box">
          <Search size={19} />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search your coffee..."
          />
        </div>

        <div className="category-tabs">
          {categories.map((item) => (
            <button
              key={item}
              className={category === item ? "category-tab active" : "category-tab"}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {filteredProducts.length ? (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h2>No coffee found ☕</h2>
          <p>Try another search or category.</p>
        </div>
      )}
    </main>
  );
}