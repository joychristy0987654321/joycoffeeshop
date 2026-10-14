
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { ShoppingCart, Coffee, ArrowRight } from "lucide-react";
// import { useCoffee } from "../context/CoffeeContext";
// import { formatINR } from "../services/api";
// import "./Home.css";

// const coffees = [
//   {
//     id: 1,
//     name: "Espresso",
//     price: 100,
//     description: "Strong, rich and bold coffee.",
//     image:
//       "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=700&q=80",
//   },
//   {
//     id: 2,
//     name: "Cappuccino",
//     price: 140,
//     description: "Espresso with creamy milk foam.",
//     image:
//       "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=700&q=80",
//   },
//   {
//     id: 3,
//     name: "Cafe Latte",
//     price: 150,
//     description: "Smooth coffee with steamed milk.",
//     image:
//       "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=700&q=80",
//   },
//   {
//     id: 4,
//     name: "Iced Coffee",
//     price: 130,
//     description: "Refreshing chilled coffee.",
//     image:
//       "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=700&q=80",
//   },
//   {
//     id: 5,
//     name: "Mocha",
//     price: 170,
//     description: "Coffee blended with chocolate.",
//     image:
//       "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=700&q=80",
//   },
//   {
//     id: 6,
//     name: "Caramel Macchiato",
//     price: 180,
//     description: "Sweet caramel with rich espresso.",
//     image:
//       "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=700&q=80",
//   },
//   {
//     id: 7,
//     name: "Cold Brew",
//     price: 140,
//     description: "Slow-brewed, smooth cold coffee.",
//     image:
//       "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=700&q=80",
//   },
//   {
//     id: 8,
//     name: "Flat White",
//     price: 150,
//     description: "Velvety milk and espresso.",
//     image:
//       "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=700&q=80",
//   },
//   {
//     id: 9,
//     name: "Coffee Frappe",
//     price: 190,
//     description: "Blended iced coffee treat.",
//     image:
//       "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=700&q=80",
//   },
//   {
//     id: 10,
//     name: "Filter Coffee",
//     price: 80,
//     description: "Traditional South Indian filter coffee.",
//     image:
//       "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=700&q=80",
//   },
// ];

// export default function Home() {
//   const { addToCart } = useCoffee();
//   const [addedId, setAddedId] = useState(null);

//   const handleAddToCart = (coffee) => {
//     addToCart({
//       id: coffee.id,
//       name: coffee.name,
//       price: coffee.price,
//       image: coffee.image,
//     });

//     setAddedId(coffee.id);
//     setTimeout(() => setAddedId(null), 1200);
//   };

//   return (
//     <main className="home-page">
//       <section className="home-hero">
//         <div className="hero-content">
//           <span className="hero-label">
//             ☕ WELCOME TO COFFEE HAVEN
//           </span>

//           <h1>
//             Every Cup Tells
//             <br />
//             <span>A Coffee Story</span>
//           </h1>

//           <p>
//             Discover your favourite coffee, freshly brewed
//             with premium beans and lots of love.
//           </p>

//           <Link to="/menu" className="hero-button">
//             Explore Our Menu <ArrowRight size={18} />
//           </Link>
//         </div>
//       </section>

//       <section className="coffee-section">
//         <div className="section-heading">
//           <span>OUR COLLECTION</span>
//           <h2>Discover Our Coffee ☕</h2>
//           <p>
//             From strong espresso to refreshing iced coffee,
//             find your perfect cup.
//           </p>
//         </div>

//         <div className="coffee-grid">
//           {coffees.map((coffee) => (
//             <article className="coffee-card" key={coffee.id}>
//               <div className="coffee-image-wrap">
//                 <img
//                   src={coffee.image}
//                   alt={coffee.name}
//                   className="coffee-image"
//                   loading="lazy"
//                 />
//                 <span className="coffee-number">
//                   #{String(coffee.id).padStart(2, "0")}
//                 </span>
//               </div>

//               <div className="coffee-info">
//                 <h3>{coffee.name}</h3>
//                 <p>{coffee.description}</p>

//                 <div className="coffee-card-bottom">
//                   <strong className="coffee-price">
//                     {formatINR(coffee.price)}
//                   </strong>

//                   <button
//                     className="add-cart-button"
//                     type="button"
//                     onClick={() => handleAddToCart(coffee)}
//                   >
//                     <ShoppingCart size={16} />
//                     {addedId === coffee.id ? "Added!" : "Add to Cart"}
//                   </button>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>

//         <div className="view-menu">
//           <Link to="/menu">
//             View Full Menu <ArrowRight size={18} />
//           </Link>
//         </div>
//       </section>

//       <section className="home-promo">
//         <Coffee size={42} />
//         <div>
//           <h2>Your Perfect Coffee Awaits</h2>
//           <p>Freshly brewed, beautifully served, always delicious.</p>
//         </div>
//         <Link to="/menu">Order Now</Link>
//       </section>
//     </main>
//   );
// }







import React, { useState } from "react";

const coffees = [
  {
    id: 1,
    name: "Classic Espresso",
    description: "Rich, bold and freshly brewed coffee.",
    price: 99,
    rating: 4.8,
    reviews: 120,
    tag: "BEST SELLER",
    color: "#ffc65e",
    image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=600",
  },
  {
    id: 2,
    name: "Cappuccino",
    description: "Smooth espresso with creamy milk foam.",
    price: 149,
    rating: 4.9,
    reviews: 142,
    tag: "POPULAR",
    color: "#ef6472",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600",
  },
  {
    id: 3,
    name: "Cafe Latte",
    description: "Silky steamed milk with espresso.",
    price: 159,
    rating: 4.7,
    reviews: 98,
    tag: "NEW",
    color: "#39c982",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600",
  },
  {
    id: 4,
    name: "Caramel Macchiato",
    description: "Espresso, creamy milk and caramel.",
    price: 189,
    rating: 4.9,
    reviews: 135,
    tag: "SPECIAL",
    color: "#9b57ee",
    image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=600",
  },
  {
    id: 5,
    name: "Mocha",
    description: "A delicious blend of coffee and chocolate.",
    price: 179,
    rating: 4.8,
    reviews: 110,
    tag: "POPULAR",
    color: "#ef6472",
    image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=600",
  },
  {
    id: 6,
    name: "Americano",
    description: "A smooth and refreshing black coffee.",
    price: 119,
    rating: 4.6,
    reviews: 87,
    tag: "",
    color: "#ffc65e",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600",
  },
  {
    id: 7,
    name: "Cold Coffee",
    description: "Chilled coffee for a refreshing break.",
    price: 169,
    rating: 4.8,
    reviews: 121,
    tag: "CHILLED",
    color: "#25b8ef",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600",
  },
  {
    id: 8,
    name: "Iced Latte",
    description: "Cold milk, espresso and refreshing ice.",
    price: 179,
    rating: 4.7,
    reviews: 105,
    tag: "",
    color: "#ffc65e",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600",
  },
  {
    id: 9,
    name: "Flat White",
    description: "Velvety milk and a rich espresso shot.",
    price: 169,
    rating: 4.8,
    reviews: 119,
    tag: "",
    color: "#ffc65e",
    image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600",
  },
  {
    id: 10,
    name: "Vanilla Latte",
    description: "Aromatic vanilla with creamy coffee.",
    price: 189,
    rating: 4.9,
    reviews: 130,
    tag: "FAVOURITE",
    color: "#f5a623",
    image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=600",
  },
];

function Home() {
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("cart")) || [];
    } catch {
      return [];
    }
  });

  const [favourites, setFavourites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("favourites")) || [];
    } catch {
      return [];
    }
  });

  const [notice, setNotice] = useState("");

  const cartCount = cart.reduce(
    (total, item) => total + Number(item.quantity || 1),
    0
  );

  const addToCart = (coffee) => {
    const existing = cart.find((item) => item.id === coffee.id);

    const updatedCart = existing
      ? cart.map((item) =>
          item.id === coffee.id
            ? { ...item, quantity: Number(item.quantity || 1) + 1 }
            : item
        )
      : [...cart, { ...coffee, quantity: 1 }];

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setNotice(`${coffee.name} added to cart!`);

    window.setTimeout(() => setNotice(""), 2500);
  };

  const toggleFavourite = (coffee) => {
    const exists = favourites.some((item) =>
      typeof item === "object" ? item.id === coffee.id : item === coffee.id
    );

    const updated = exists
      ? favourites.filter((item) =>
          typeof item === "object" ? item.id !== coffee.id : item !== coffee.id
        )
      : [...favourites, coffee];

    setFavourites(updated);
    localStorage.setItem("favourites", JSON.stringify(updated));
  };

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        .coffee-home {
          background: #fffaf5;
          color: #30180f;
          min-height: 100vh;
          font-family: Arial, Helvetica, sans-serif;
        }

        .coffee-home a {
          text-decoration: none;
        }

        .coffee-nav {
          min-height: 68px;
          background: #35170d;
          color: #fff8ee;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 4%;
          gap: 24px;
          position: sticky;
          top: 0;
          z-index: 50;
          box-shadow: 0 3px 12px #00000022;
        }

        .coffee-logo {
          color: #fff7ec;
          display: flex;
          align-items: center;
          gap: 10px;
          white-space: nowrap;
          font-family: Georgia, serif;
          font-style: italic;
          font-weight: bold;
          font-size: 28px;
        }

        .coffee-logo span {
          color: #ffc45f;
        }

        .coffee-logo-icon {
          font-size: 37px;
          font-style: normal;
        }

        .coffee-nav-links {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 25px;
          flex-wrap: wrap;
        }

        .coffee-nav-links a {
          color: #fff8f1;
          font-size: 14px;
          padding: 12px 0;
          transition: .2s;
        }

        .coffee-nav-links a:hover,
        .coffee-nav-links a.active {
          color: #ffc45f;
          border-bottom: 2px solid #ffc45f;
        }

        .coffee-order-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          background: #ffc45f;
          color: #32190d;
          border: 0;
          padding: 12px 25px;
          border-radius: 30px;
          font-size: 14px;
          font-weight: bold;
          cursor: pointer;
          transition: .25s;
          white-space: nowrap;
        }

        .coffee-order-btn:hover {
          background: #ffdb91;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px #ffc45f30;
        }

        .coffee-hero {
          min-height: 340px;
          position: relative;
          display: flex;
          align-items: center;
          overflow: hidden;
          border-radius: 0 0 12px 12px;
          background:
            linear-gradient(90deg, #170b06ed 0%, #241008c9 38%, #24100815 76%),
            url("https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1800")
            center 52% / cover no-repeat;
        }

        .coffee-hero-content {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 650px;
          padding: 40px 7%;
          color: white;
        }

        .coffee-welcome {
          font-size: 14px;
          font-weight: bold;
          letter-spacing: 4px;
          color: #ffcb6c;
          margin-bottom: 12px;
        }

        .coffee-hero h1 {
          font-family: Georgia, "Times New Roman", serif;
          font-style: italic;
          font-size: clamp(45px, 6vw, 78px);
          line-height: 1;
          margin: 0 0 12px;
          letter-spacing: -2px;
        }

        .coffee-hero h1 span {
          color: #ffc45f;
        }

        .coffee-tagline {
          font-size: 21px;
          font-style: italic;
          margin: 0 0 13px;
        }

        .coffee-hero-description {
          color: #f3e8dd;
          font-size: 15px;
          line-height: 1.7;
          max-width: 430px;
          margin-bottom: 20px;
        }

        .coffee-section-heading {
          text-align: center;
          padding: 24px 15px 14px;
        }

        .coffee-eyebrow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          color: #684532;
          font-size: 13px;
          font-weight: bold;
          margin-bottom: 3px;
        }

        .coffee-eyebrow span {
          height: 1px;
          width: 55px;
          background: #8a6b58;
        }

        .coffee-section-heading h2 {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 35px;
          font-style: italic;
          margin: 0 0 5px;
          color: #482316;
        }

        .coffee-section-heading p {
          margin: 0;
          color: #77675d;
          font-size: 13px;
        }

        .coffee-products {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 20px;
          padding: 0 2.3% 20px;
        }

        .coffee-card {
          min-width: 0;
          background: white;
          border: 1px solid #eadfd5;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 3px 8px #32190d12;
          transition: transform .25s, box-shadow .25s;
        }

        .coffee-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 22px #32190d20;
        }

        .coffee-image-wrap {
          height: 155px;
          position: relative;
          overflow: hidden;
          background: #e8d7c6;
        }

        .coffee-image {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          transition: transform .4s;
        }

        .coffee-card:hover .coffee-image {
          transform: scale(1.05);
        }

        .coffee-tag {
          position: absolute;
          top: 9px;
          left: 9px;
          padding: 6px 11px;
          border-radius: 20px;
          font-size: 10px;
          font-weight: bold;
          color: #28150b;
        }

        .coffee-favourite {
          position: absolute;
          right: 9px;
          top: 9px;
          width: 31px;
          height: 31px;
          border: 0;
          border-radius: 50%;
          background: #ffffffeb;
          font-size: 18px;
          cursor: pointer;
          display: grid;
          place-items: center;
        }

        .coffee-card-body {
          padding: 11px 12px 12px;
        }

        .coffee-card-body h3 {
          font-size: 15px;
          margin: 0 0 5px;
          color: #24160f;
        }

        .coffee-card-description {
          font-size: 12px;
          color: #65574e;
          line-height: 1.4;
          min-height: 34px;
          margin: 0 0 9px;
        }

        .coffee-rating-price {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 5px;
          margin-bottom: 11px;
        }

        .coffee-rating {
          font-size: 12px;
          color: #493c33;
          white-space: nowrap;
        }

        .coffee-rating span {
          color: #e9a21b;
          font-size: 16px;
        }

        .coffee-price {
          font-size: 16px;
          color: #512515;
          font-weight: bold;
          white-space: nowrap;
        }

        .coffee-add-btn {
          width: 100%;
          background: #6a321c;
          color: white;
          border: 0;
          border-radius: 25px;
          padding: 10px 5px;
          font-size: 12px;
          font-weight: bold;
          cursor: pointer;
          transition: .2s;
        }

        .coffee-add-btn:hover {
          background: #9a522d;
        }

        .coffee-promo {
          display: flex;
          align-items: center;
          justify-content: space-around;
          gap: 20px;
          margin: 0 2% 16px;
          padding: 18px 25px;
          border-radius: 15px;
          color: #fff6e8;
          background:
            linear-gradient(90deg, #35170dF5, #4c2414F0),
            url("https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1200")
            center / cover;
          border: 1px solid #d5b38b;
        }

        .coffee-promo-icon {
          font-size: 48px;
        }

        .coffee-promo-text {
          flex: 1;
        }

        .coffee-promo h2 {
          font-family: Georgia, serif;
          font-style: italic;
          color: #ffc45f;
          font-size: clamp(22px, 3vw, 32px);
          margin: 0 0 5px;
        }

        .coffee-promo p {
          margin: 0;
          font-size: 13px;
          color: #f2e2d4;
        }

        .coffee-notice {
          position: fixed;
          right: 20px;
          bottom: 20px;
          z-index: 100;
          background: #35170d;
          color: white;
          padding: 15px 22px;
          border-radius: 12px;
          box-shadow: 0 5px 20px #0003;
          font-size: 14px;
        }

        @media (max-width: 1050px) {
          .coffee-nav {
            flex-wrap: wrap;
            justify-content: center;
          }

          .coffee-products {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .coffee-image-wrap {
            height: 190px;
          }
        }

        @media (max-width: 650px) {
          .coffee-nav {
            gap: 12px;
            padding: 12px;
          }

          .coffee-logo {
            width: 100%;
            justify-content: center;
            font-size: 25px;
          }

          .coffee-nav-links {
            width: 100%;
            gap: 17px;
          }

          .coffee-nav-links a {
            font-size: 12px;
          }

          .coffee-nav > .coffee-order-btn {
            padding: 10px 20px;
          }

          .coffee-hero {
            min-height: 390px;
            background-position: 60% center;
          }

          .coffee-hero-content {
            padding: 35px 22px;
            background: linear-gradient(90deg, #170b06a8, transparent);
          }

          .coffee-hero h1 {
            font-size: 48px;
          }

          .coffee-tagline {
            font-size: 18px;
          }

          .coffee-hero-description {
            font-size: 13px;
            max-width: 310px;
          }

          .coffee-section-heading h2 {
            font-size: 30px;
          }

          .coffee-products {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
            padding: 0 12px 18px;
          }

          .coffee-image-wrap {
            height: 145px;
          }

          .coffee-card-body {
            padding: 10px;
          }

          .coffee-card-body h3 {
            font-size: 13px;
          }

          .coffee-card-description {
            font-size: 11px;
            min-height: 45px;
          }

          .coffee-rating {
            font-size: 10px;
          }

          .coffee-price {
            font-size: 14px;
          }

          .coffee-promo {
            flex-wrap: wrap;
            justify-content: center;
            text-align: center;
            padding: 22px 15px;
          }

          .coffee-promo-icon {
            display: none;
          }

          .coffee-promo-text {
            flex-basis: 100%;
          }
        }

        @media (max-width: 370px) {
          .coffee-products {
            grid-template-columns: 1fr;
          }

          .coffee-image-wrap {
            height: 210px;
          }

          .coffee-nav-links {
            gap: 12px;
          }
        }
      `}</style>

      <div className="coffee-home">
        {/* NAVIGATION */}
        <nav className="coffee-nav">
          <a className="coffee-logo" href="/">
            <span className="coffee-logo-icon">☕</span>
            {/* Coffee <span>Heaven</span> */}
          </a>

          {/* <div className="coffee-nav-links">
            <a className="active" href="/">Home</a>
            <a href="/menu">Menu</a>
            <a href="/cart">Cart 🛒 {cartCount}</a>
            <a href="/favourite">♡ Favourite</a>
            <a href="/login">♙ Login</a>
          </div> */}

          <button
            className="coffee-order-btn"
            onClick={() =>
              document.getElementById("popular-coffees")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            Order Now <span>➜</span>
          </button>
        </nav>

        {/* HERO BANNER */}
        <section className="coffee-hero">
          <div className="coffee-hero-content">
            <div className="coffee-welcome">WELCOME TO</div>

            <h1>
              Coffee <span>Heaven</span>
            </h1>

            <p className="coffee-tagline">Good Coffee. Better Mood.</p>

            <p className="coffee-hero-description">
              Experience the finest coffee, crafted with passion
              and served with love. Discover a world of rich flavours
              and aromatic blends at Coffee Heaven.
            </p>

            <button
              className="coffee-order-btn"
              onClick={() =>
                document.getElementById("popular-coffees")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              Order Now <span>➜</span>
            </button>
          </div>
        </section>

        {/* COFFEE COLLECTION */}
        <section id="popular-coffees">
          <div className="coffee-section-heading">
            <div className="coffee-eyebrow">
              <span />
              OUR COFFEE COLLECTION
              <span />
            </div>

            <h2>Popular Coffees</h2>

            <p>Choose your favourite from our special collection</p>
          </div>

          <div className="coffee-products">
            {coffees.map((coffee) => {
              const isFavourite = favourites.some((item) =>
                typeof item === "object"
                  ? item.id === coffee.id
                  : item === coffee.id
              );

              return (
                <article className="coffee-card" key={coffee.id}>
                  <div className="coffee-image-wrap">
                    <img
                      className="coffee-image"
                      src={coffee.image}
                      alt={coffee.name}
                      loading={coffee.id > 5 ? "lazy" : "eager"}
                    />

                    {coffee.tag && (
                      <span
                        className="coffee-tag"
                        style={{ background: coffee.color }}
                      >
                        {coffee.tag}
                      </span>
                    )}

                    <button
                      className="coffee-favourite"
                      type="button"
                      aria-label={
                        isFavourite
                          ? `Remove ${coffee.name} from favourites`
                          : `Add ${coffee.name} to favourites`
                      }
                      onClick={() => toggleFavourite(coffee)}
                    >
                      {isFavourite ? "❤️" : "♡"}
                    </button>
                  </div>

                  <div className="coffee-card-body">
                    <h3>{coffee.name}</h3>

                    <p className="coffee-card-description">
                      {coffee.description}
                    </p>

                    <div className="coffee-rating-price">
                      <div className="coffee-rating">
                        <span>★</span> {coffee.rating} ({coffee.reviews})
                      </div>

                      <div className="coffee-price">₹{coffee.price}</div>
                    </div>

                    <button
                      className="coffee-add-btn"
                      type="button"
                      onClick={() => addToCart(coffee)}
                    >
                      🛒 Add to Cart
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* PROMOTIONAL BANNER */}
        <section className="coffee-promo">
          <div className="coffee-promo-icon">☕</div>

          <div className="coffee-promo-text">
            <h2>Your Perfect Cup Awaits!</h2>
            <p>Take a break and enjoy the best coffee in town.</p>
          </div>

          <button
            className="coffee-order-btn"
            onClick={() => (window.location.href = "/menu")}
          >
            Explore Full Menu <span>➜</span>
          </button>
        </section>

        {notice && (
          <div className="coffee-notice" role="status">
            ✓ {notice}
          </div>
        )}
      </div>
    </>
  );
}

export default Home;









