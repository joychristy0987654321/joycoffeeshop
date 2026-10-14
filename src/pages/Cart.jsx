import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCoffee } from "../context/CoffeeContext";
import { formatINR } from "../services/api";

export default function Cart() {
  const { cart, changeQuantity, removeFromCart } = useCoffee();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (!cart.length) {
    return (
      <main className="empty-state page-container">
        <ShoppingBag size={55} />
        <h1>Your cart is waiting!</h1>
        <p>Add your favourite coffee and enjoy your day.</p>
        <Link to="/menu" className="primary-button">Explore Menu</Link>
      </main>
    );
  }

  return (
    <main className="page-container">
      <div className="page-heading">
        <span className="eyebrow">YOUR SELECTION</span>
        <h1>Shopping Cart</h1>
        <p>Your perfect coffee is just a few steps away.</p>
      </div>

      <div className="cart-layout">
        <div className="cart-items">
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p>{formatINR(item.price)} each</p>
                <div className="quantity-control">
                  <button onClick={() => changeQuantity(item.id, -1)}>
                    <Minus size={15} />
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => changeQuantity(item.id, 1)}>
                    <Plus size={15} />
                  </button>
                </div>
              </div>
              <div className="cart-item-end">
                <strong>{formatINR(item.price * item.quantity)}</strong>
                <button
                  className="remove-button"
                  onClick={() => removeFromCart(item.id)}
                  aria-label="Remove item"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <aside className="summary-card">
          <h2>Order Summary</h2>
          <div className="summary-line">
            <span>Subtotal</span><span>{formatINR(total)}</span>
          </div>
          <div className="summary-line">
            <span>Delivery</span><span className="free-text">FREE</span>
          </div>
          <div className="summary-line">
            <span>Taxes</span><span>Included</span>
          </div>
          <div className="summary-total">
            <span>Total</span><strong>{formatINR(total)}</strong>
          </div>
          <Link to="/payment" className="primary-button full-button">
            Proceed to Payment
          </Link>
          <Link to="/menu" className="continue-link">Continue shopping</Link>
        </aside>
      </div>
    </main>
  );
}










// import React from "react";
// import { Link } from "react-router-dom";
// import { useCoffee } from "../context/CoffeeContext";

// export default function Cart() {
//   const { cart, addToCart, removeFromCart } = useCoffee();

//   const increaseQuantity = (item) => {
//     addToCart(item);
//   };

//   const decreaseQuantity = (item) => {
//     if (item.quantity > 1) {
//       removeFromCart(item);
//       // If your context removes the whole item,
//       // update quantity logic in CoffeeContext instead.
//     } else {
//       removeFromCart(item);
//     }
//   };

//   const total = cart.reduce(
//     (sum, item) => sum + Number(item.price) * (item.quantity || 1),
//     0
//   );

//   return (
//     <div className="cart-page">
//       <header className="cart-header">
//         <span>FRESHLY BREWED FOR YOU</span>
//         <h1>My Shopping Cart 🛒</h1>
//         <p>Your favourite coffee is just a step away.</p>
//       </header>

//       {cart.length === 0 ? (
//         <div className="cart-empty">
//           <div className="cart-empty-icon">☕</div>
//           <h2>Your cart is empty!</h2>
//           <p>Add some delicious coffee from our menu.</p>
//           <Link to="/menu" className="cart-shop-btn">
//             Explore Menu
//           </Link>
//         </div>
//       ) : (
//         <div className="cart-layout">
//           <div className="cart-items">
//             {cart.map((item) => (
//               <article className="cart-item" key={item.id}>
//                 <img src={item.image} alt={item.name} />

//                 <div className="cart-item-info">
//                   <h3>{item.name}</h3>
//                   <p className="cart-price">₹{item.price}</p>

//                   <div className="cart-quantity">
//                     <button
//                       onClick={() => decreaseQuantity(item)}
//                       aria-label="Decrease quantity"
//                     >
//                       −
//                     </button>

//                     <span>{item.quantity || 1}</span>

//                     <button
//                       onClick={() => increaseQuantity(item)}
//                       aria-label="Increase quantity"
//                     >
//                       +
//                     </button>
//                   </div>
//                 </div>

//                 <button
//                   className="cart-remove-btn"
//                   onClick={() => removeFromCart(item)}
//                 >
//                   Remove
//                 </button>
//               </article>
//             ))}
//           </div>

//           <aside className="cart-summary">
//             <h2>Order Summary</h2>

//             <div className="cart-summary-row">
//               <span>Total Items</span>
//               <span>
//                 {cart.reduce(
//                   (sum, item) => sum + (item.quantity || 1),
//                   0
//                 )}
//               </span>
//             </div>

//             <div className="cart-summary-row">
//               <span>Subtotal</span>
//               <span>₹{total.toFixed(2)}</span>
//             </div>

//             <div className="cart-summary-row">
//               <span>Delivery</span>
//               <span className="cart-free">FREE</span>
//             </div>

//             <hr />

//             <div className="cart-total-row">
//               <span>Total</span>
//               <span>₹{total.toFixed(2)}</span>
//             </div>

//             <Link to="/payment" className="cart-checkout-btn">
//               Proceed to Payment →
//             </Link>

//             <Link to="/menu" className="cart-continue-link">
//               Continue Shopping
//             </Link>
//           </aside>
//         </div>
//       )}

//       <style>{`
//         .cart-page {
//           min-height: 75vh;
//           padding: 45px 6%;
//           background: #faf5ef;
//           font-family: Arial, sans-serif;
//         }

//         .cart-header {
//           text-align: center;
//           margin-bottom: 40px;
//         }

//         .cart-header > span {
//           color: #a16c45;
//           font-size: 12px;
//           letter-spacing: 3px;
//           font-weight: bold;
//         }

//         .cart-header h1 {
//           color: #402719;
//           font-family: Georgia, serif;
//           font-size: clamp(30px, 5vw, 44px);
//           margin: 12px 0;
//         }

//         .cart-header p {
//           color: #817066;
//         }

//         .cart-empty {
//           max-width: 550px;
//           margin: 50px auto;
//           padding: 45px 25px;
//           background: white;
//           border-radius: 18px;
//           text-align: center;
//           box-shadow: 0 8px 25px #3822150c;
//         }

//         .cart-empty-icon {
//           font-size: 55px;
//         }

//         .cart-empty h2 {
//           color: #402719;
//         }

//         .cart-empty p {
//           color: #817066;
//           line-height: 1.8;
//         }

//         .cart-shop-btn {
//           display: inline-block;
//           margin-top: 15px;
//           padding: 13px 24px;
//           border-radius: 8px;
//           background: #633d27;
//           color: white;
//           text-decoration: none;
//           font-weight: bold;
//         }

//         .cart-layout {
//           display: grid;
//           grid-template-columns: minmax(0, 2fr) minmax(260px, 1fr);
//           gap: 25px;
//           align-items: start;
//         }

//         .cart-items {
//           display: grid;
//           gap: 18px;
//         }

//         .cart-item {
//           display: flex;
//           align-items: center;
//           gap: 18px;
//           padding: 18px;
//           background: white;
//           border-radius: 14px;
//           box-shadow: 0 5px 20px #3822150c;
//         }

//         .cart-item > img {
//           width: 115px;
//           height: 115px;
//           border-radius: 10px;
//           object-fit: cover;
//         }

//         .cart-item-info {
//           flex: 1;
//           min-width: 0;
//         }

//         .cart-item-info h3 {
//           color: #402719;
//           font-family: Georgia, serif;
//           font-size: 20px;
//           margin: 0 0 10px;
//         }

//         .cart-price {
//           color: #9b603b;
//           font-size: 18px;
//           font-weight: bold;
//           margin: 0 0 12px;
//         }

//         .cart-quantity {
//           display: flex;
//           align-items: center;
//           gap: 15px;
//         }

//         .cart-quantity button {
//           width: 32px;
//           height: 32px;
//           border: none;
//           border-radius: 6px;
//           background: #f1e4d7;
//           color: #402719;
//           font-size: 20px;
//           cursor: pointer;
//         }

//         .cart-quantity button:hover {
//           background: #d6a36b;
//         }

//         .cart-quantity span {
//           color: #402719;
//           font-weight: bold;
//         }

//         .cart-remove-btn {
//           border: none;
//           background: #f7e9e5;
//           color: #9d4238;
//           padding: 10px 12px;
//           border-radius: 7px;
//           cursor: pointer;
//           font-weight: bold;
//         }

//         .cart-remove-btn:hover {
//           background: #efd2ca;
//         }

//         .cart-summary {
//           background: white;
//           border-radius: 15px;
//           padding: 25px;
//           box-shadow: 0 5px 20px #38221512;
//         }

//         .cart-summary h2 {
//           margin-top: 0;
//           color: #402719;
//           font-family: Georgia, serif;
//         }

//         .cart-summary-row,
//         .cart-total-row {
//           display: flex;
//           justify-content: space-between;
//           gap: 12px;
//           margin: 18px 0;
//           color: #76665b;
//         }

//         .cart-free {
//           color: #43834c;
//           font-weight: bold;
//         }

//         .cart-summary hr {
//           border: none;
//           border-top: 1px solid #eee1d5;
//         }

//         .cart-total-row {
//           color: #402719;
//           font-size: 20px;
//           font-weight: bold;
//         }

//         .cart-checkout-btn {
//           display: block;
//           width: 100%;
//           margin-top: 22px;
//           padding: 14px;
//           background: #633d27;
//           color: white;
//           text-align: center;
//           text-decoration: none;
//           border-radius: 8px;
//           font-weight: bold;
//         }

//         .cart-checkout-btn:hover {
//           background: #a16c45;
//         }

//         .cart-continue-link {
//           display: block;
//           margin-top: 17px;
//           color: #633d27;
//           text-align: center;
//           text-decoration: none;
//           font-weight: bold;
//         }

//         @media (max-width: 850px) {
//           .cart-layout {
//             grid-template-columns: 1fr;
//           }
//         }

//         @media (max-width: 550px) {
//           .cart-page {
//             padding: 30px 4%;
//           }

//           .cart-item {
//             flex-wrap: wrap;
//             gap: 12px;
//           }

//           .cart-item > img {
//             width: 85px;
//             height: 85px;
//           }

//           .cart-item-info h3 {
//             font-size: 17px;
//           }

//           .cart-remove-btn {
//             margin-left: auto;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }
