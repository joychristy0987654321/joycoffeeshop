// import React, { useState } from "react";

// export default function Dashboard() {
//   const [period, setPeriod] = useState("Weekly");
//   const [hovered, setHovered] = useState(null);

//   const data = {
//     Daily: [
//       { label: "9 AM", sales: 1200 },
//       { label: "11 AM", sales: 2400 },
//       { label: "1 PM", sales: 1800 },
//       { label: "3 PM", sales: 3200 },
//       { label: "5 PM", sales: 2100 },
//       { label: "7 PM", sales: 3800 },
//     ],
//     Weekly: [
//       { label: "Mon", sales: 4200 },
//       { label: "Tue", sales: 5800 },
//       { label: "Wed", sales: 3900 },
//       { label: "Thu", sales: 7200 },
//       { label: "Fri", sales: 6100 },
//       { label: "Sat", sales: 9500 },
//       { label: "Sun", sales: 8400 },
//     ],
//     Monthly: [
//       { label: "Week 1", sales: 18000 },
//       { label: "Week 2", sales: 24000 },
//       { label: "Week 3", sales: 21000 },
//       { label: "Week 4", sales: 32000 },
//     ],
//     Yearly: [
//       { label: "Jan", sales: 45000 },
//       { label: "Feb", sales: 52000 },
//       { label: "Mar", sales: 48000 },
//       { label: "Apr", sales: 65000 },
//       { label: "May", sales: 58000 },
//       { label: "Jun", sales: 72000 },
//       { label: "Jul", sales: 68000 },
//       { label: "Aug", sales: 85000 },
//       { label: "Sep", sales: 76000 },
//       { label: "Oct", sales: 92000 },
//       { label: "Nov", sales: 88000 },
//       { label: "Dec", sales: 105000 },
//     ],
//   };

//   const products = [
//     { name: "Cappuccino", sold: 145, emoji: "☕" },
//     { name: "Cold Coffee", sold: 120, emoji: "🧋" },
//     { name: "Latte", sold: 98, emoji: "🥛" },
//     { name: "Mocha", sold: 76, emoji: "🍫" },
//   ];

//   const sales = data[period];
//   const max = Math.max(...sales.map((item) => item.sales));
//   const total = sales.reduce((sum, item) => sum + item.sales, 0);
//   const money = (value) => "₹" + value.toLocaleString("en-IN");

//   const card = {
//     background: "linear-gradient(145deg, #fffdf9, #f4e8d9)",
//     padding: "22px",
//     borderRadius: "20px",
//     border: "1px solid #e5cfb9",
//     boxShadow: "0 8px 24px rgba(62,39,35,0.08)",
//     minWidth: 0,
//   };

//   const grid = {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
//     gap: "18px",
//     marginBottom: "24px",
//   };

//   const buttonStyle = {
//     padding: "11px 15px",
//     border: "1px solid #c5a080",
//     borderRadius: "10px",
//     background: "#fffaf4",
//     color: "#4e342e",
//     cursor: "pointer",
//     fontWeight: "bold",
//   };

//   return (
//     <div style={{
//       minHeight: "100vh",
//       padding: "clamp(14px, 3vw, 32px)",
//       background: "linear-gradient(135deg, #f8f0e6, #ead8c4)",
//       color: "#3e2723",
//       fontFamily: "Arial, sans-serif",
//       boxSizing: "border-box",
//     }}>
//       <header style={{
//         display: "flex",
//         flexWrap: "wrap",
//         justifyContent: "space-between",
//         alignItems: "center",
//         gap: "20px",
//         padding: "clamp(22px, 4vw, 36px)",
//         marginBottom: "25px",
//         borderRadius: "24px",
//         color: "#fff8ed",
//         background: "linear-gradient(120deg, #281711, #65432f, #986b48)",
//         boxShadow: "0 12px 30px rgba(62,39,35,0.2)",
//       }}>
//         <div>
//           <p style={{ letterSpacing: "3px", color: "#e5c5a5", fontSize: "12px" }}>
//             COFFEE SHOP MANAGEMENT
//           </p>
//           <h1 style={{ fontSize: "clamp(28px, 5vw, 42px)", margin: "12px 0" }}>
//             ☕ Coffee Haven
//           </h1>
//           <p style={{ color: "#f0dfcf", lineHeight: 1.6 }}>
//             Every cup tells a story. Every sale counts.
//           </p>
//         </div>
//         <div style={{
//           padding: "17px 22px",
//           background: "rgba(255,255,255,0.12)",
//           border: "1px solid rgba(255,255,255,0.2)",
//           borderRadius: "16px",
//         }}>
//           <div style={{ fontSize: "13px", color: "#ead1b7" }}>SALES OVERVIEW</div>
//           <h2 style={{ fontSize: "27px", marginBottom: 0 }}>{money(total)}</h2>
//           <p style={{ fontSize: "12px", marginBottom: 0 }}>{period} sample revenue</p>
//         </div>
//       </header>

//       <section style={grid}>
//         {[
//           { title: "Today's Revenue", value: "₹12,450", icon: "💰", note: "Daily sales" },
//           { title: "Total Orders", value: "156", icon: "🛍️", note: "Order overview" },
//           { title: "Customers", value: "98", icon: "👥", note: "Customer overview" },
//           { title: "Coffee Menu", value: "24", icon: "☕", note: "Available products" },
//         ].map((item) => (
//           <article
//             key={item.title}
//             style={{
//               ...card,
//               transition: "transform 0.25s, box-shadow 0.25s",
//               borderTop: "4px solid #986b48",
//             }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.transform = "translateY(-6px)";
//               e.currentTarget.style.boxShadow = "0 14px 28px rgba(62,39,35,0.16)";
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.transform = "translateY(0)";
//               e.currentTarget.style.boxShadow = "0 8px 24px rgba(62,39,35,0.08)";
//             }}
//           >
//             <div style={{ fontSize: "30px" }}>{item.icon}</div>
//             <p style={{ color: "#8d7060" }}>{item.title}</p>
//             <h2 style={{ fontSize: "clamp(24px, 3vw, 31px)", margin: "8px 0" }}>
//               {item.value}
//             </h2>
//             <small style={{ color: "#795548" }}>{item.note}</small>
//           </article>
//         ))}
//       </section>

//       <section style={{ ...card, marginBottom: "24px" }}>
//         <div style={{
//           display: "flex",
//           justifyContent: "space-between",
//           flexWrap: "wrap",
//           alignItems: "center",
//           gap: "15px",
//         }}>
//           <div>
//             <h2 style={{ marginBottom: "6px" }}>📈 Revenue Analytics</h2>
//             <p style={{ color: "#8d7060", marginTop: 0 }}>
//               Explore your sales performance
//             </p>
//           </div>
//           <select
//             value={period}
//             onChange={(e) => {
//               setPeriod(e.target.value);
//               setHovered(null);
//             }}
//             style={buttonStyle}
//           >
//             <option value="Daily">Daily Sales</option>
//             <option value="Weekly">Weekly Sales</option>
//             <option value="Monthly">Monthly Sales</option>
//             <option value="Yearly">Yearly Sales</option>
//           </select>
//         </div>

//         <h2 style={{ fontSize: "clamp(28px, 4vw, 36px)", margin: "20px 0" }}>
//           {money(total)}
//         </h2>

//         <div style={{
//           display: "flex",
//           alignItems: "flex-end",
//           justifyContent: "space-around",
//           gap: "clamp(4px, 1.5vw, 14px)",
//           height: "280px",
//           paddingTop: "15px",
//           borderBottom: "2px solid #dfc9b3",
//         }}>
//           {sales.map((item) => (
//             <div
//               key={item.label}
//               style={{
//                 display: "flex",
//                 flex: "1",
//                 minWidth: 0,
//                 height: "100%",
//                 flexDirection: "column",
//                 justifyContent: "flex-end",
//                 alignItems: "center",
//                 gap: "10px",
//               }}
//             >
//               <span style={{
//                 fontSize: "clamp(8px, 1.5vw, 12px)",
//                 color: "#795548",
//                 textAlign: "center",
//                 overflowWrap: "anywhere",
//               }}>
//                 {money(item.sales)}
//               </span>
//               <div
//                 title={`${item.label}: ${money(item.sales)}`}
//                 onMouseEnter={() => setHovered(item.label)}
//                 onMouseLeave={() => setHovered(null)}
//                 onFocus={() => setHovered(item.label)}
//                 onBlur={() => setHovered(null)}
//                 tabIndex={0}
//                 style={{
//                   width: "min(100%, 55px)",
//                   height: `${(item.sales / max) * 65}%`,
//                   minHeight: "8px",
//                   borderRadius: "9px 9px 3px 3px",
//                   background: hovered === item.label
//                     ? "linear-gradient(180deg, #edc99e, #9a623c)"
//                     : "linear-gradient(180deg, #bc916a, #4b2e21)",
//                   boxShadow: hovered === item.label
//                     ? "0 0 18px rgba(154,98,60,0.4)"
//                     : "0 3px 8px rgba(62,39,35,0.12)",
//                   transform: hovered === item.label
//                     ? "scaleX(1.1) scaleY(1.04)"
//                     : "scale(1)",
//                   transformOrigin: "bottom",
//                   transition: "all 0.25s ease",
//                   cursor: "pointer",
//                 }}
//               />
//               <span style={{
//                 fontSize: "clamp(9px, 1.5vw, 12px)",
//                 color: "#795548",
//                 textAlign: "center",
//                 overflowWrap: "anywhere",
//               }}>
//                 {item.label}
//               </span>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section style={{ ...card, marginBottom: "24px" }}>
//         <h2>🏆 Best-Selling Coffee</h2>
//         <div style={grid}>
//           {products.map((product, index) => (
//             <article
//               key={product.name}
//               style={{
//                 padding: "20px",
//                 borderRadius: "16px",
//                 background: "#fff6eb",
//                 border: "1px solid #e5cfb9",
//               }}
//             >
//               <div style={{ fontSize: "30px" }}>{product.emoji}</div>
//               <p style={{ color: "#9b795f" }}>RANK #{index + 1}</p>
//               <h3>{product.name}</h3>
//               <strong>{product.sold} cups sold</strong>
//               <div style={{
//                 marginTop: "14px",
//                 height: "8px",
//                 borderRadius: "20px",
//                 background: "#e7d7c7",
//                 overflow: "hidden",
//               }}>
//                 <div style={{
//                   width: `${(product.sold / products[0].sold) * 100}%`,
//                   height: "100%",
//                   background: "linear-gradient(90deg, #c49a72, #4b2e21)",
//                   borderRadius: "20px",
//                 }} />
//               </div>
//             </article>
//           ))}
//         </div>
//       </section>

//       <footer style={{
//         textAlign: "center",
//         padding: "24px",
//         borderRadius: "18px",
//         background: "#3e2723",
//         color: "#fff8ed",
//       }}>
//         <h2>☕ Coffee Haven</h2>
//         <p>Fresh coffee made with premium quality beans. ❤️</p>
//         <p>📍 Chennai, Tamil Nadu</p>
//         <small>© 2026 Coffee Haven. All Rights Reserved.</small>
//       </footer>
//     </div>
//   );
// }










import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "Cappuccino",
    category: "Hot Coffee",
    price: 120,
    sold: 124,
    tag: "BEST SELLER",
    color: "#ffc65f",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500",
  },
  {
    id: 2,
    name: "Caramel Latte",
    category: "Special Coffee",
    price: 160,
    sold: 98,
    tag: "POPULAR",
    color: "#f35b78",
    image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=500",
  },
  {
    id: 3,
    name: "Espresso",
    category: "Black Coffee",
    price: 90,
    sold: 86,
    tag: "NEW",
    color: "#26c879",
    image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=500",
  },
  {
    id: 4,
    name: "Mocha",
    category: "Chocolate Coffee",
    price: 170,
    sold: 76,
    tag: "SPECIAL",
    color: "#9254ed",
    image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=500",
  },
  {
    id: 5,
    name: "Cold Coffee",
    category: "Iced Coffee",
    price: 130,
    sold: 68,
    tag: "CHILLED",
    color: "#20a8f5",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500",
  },
];

const initialOrders = [
  {
    id: "#CH1027",
    customer: "Divya R",
    items: "Mocha × 1",
    amount: 150,
    status: "Completed",
    date: "2026-10-01 10:45 AM",
  },
  {
    id: "#CH1026",
    customer: "Rahul M",
    items: "Espresso × 2",
    amount: 180,
    status: "Pending",
    date: "2026-10-01 09:32 AM",
  },
  {
    id: "#CH1025",
    customer: "Priya S",
    items: "Caramel Latte × 1",
    amount: 160,
    status: "Preparing",
    date: "2026-10-01 08:20 AM",
  },
  {
    id: "#CH1024",
    customer: "Arun Kumar",
    items: "Cappuccino × 2",
    amount: 240,
    status: "Completed",
    date: "2026-09-30 07:15 PM",
  },
];

const navigation = [
  { label: "Dashboard", icon: "⌂", path: "/dashboard" },
  { label: "Home", icon: "⌂", path: "/" },
  { label: "Coffee Menu", icon: "☕", path: "/menu" },
  { label: "Orders", icon: "▤", path: "/orders", count: 5 },
  { label: "Cart", icon: "🛒", path: "/cart", count: 3 },
  { label: "Favourite", icon: "♡", path: "/favourite" },
  { label: "Admin & Products", icon: "⚙", path: "/admin" },
  { label: "Payments", icon: "▣", path: "/payment" },
  { label: "Report Summary", icon: "▥", path: "/reports" },
  { label: "Login", icon: "⇥", path: "/login" },
];

function Dashboard() {
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [orders, setOrders] = useState(initialOrders);
  const [activePage, setActivePage] = useState("/dashboard");

  const filteredProducts = products.filter((product) =>
    `${product.name} ${product.category}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const filteredOrders = orders.filter((order) =>
    `${order.id} ${order.customer} ${order.items} ${order.status}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const navigateTo = (path) => {
    setActivePage(path);
    window.location.href = path;
  };

  const updateStatus = (orderId, status) => {
    setOrders((oldOrders) =>
      oldOrders.map((order) =>
        order.id === orderId ? { ...order, status } : order
      )
    );
  };

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }

        .cd {
          --brown: #32180e;
          --brown2: #542918;
          --gold: #ffc45f;
          --paper: #fbf8f4;
          --ink: #241a16;
          --muted: #76685f;
          display: flex;
          min-height: 100vh;
          background: var(--paper);
          color: var(--ink);
          font-family: Arial, Helvetica, sans-serif;
          font-size: 14px;
        }

        .cd button, .cd input { font: inherit; }
        .cd button { cursor: pointer; }

        .cd-sidebar {
          width: 285px;
          flex: 0 0 285px;
          background: #291209;
          color: white;
          padding: 22px 14px 18px;
          display: flex;
          flex-direction: column;
        }

        .cd-logo {
          text-align: center;
          padding: 0 0 26px;
          border-bottom: 1px solid #6b4837;
          margin-bottom: 17px;
        }

        .cd-logo-main {
          font-family: Georgia, serif;
          font-size: 28px;
          font-style: italic;
          font-weight: bold;
          color: #fff5e8;
          white-space: nowrap;
        }

        .cd-logo-main span { color: var(--gold); }
        .cd-logo-icon { font-size: 36px; margin-right: 6px; }

        .cd-logo small {
          display: block;
          margin-top: 9px;
          font-size: 11px;
          letter-spacing: 5px;
          color: #f1d8c0;
        }

        .cd-nav {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .cd-nav-item {
          display: flex;
          align-items: center;
          gap: 15px;
          width: 100%;
          text-align: left;
          border: 0;
          border-radius: 12px;
          padding: 13px 14px;
          color: #fff7ee;
          background: transparent;
          text-decoration: none;
          font-size: 14px;
          transition: .2s;
        }

        .cd-nav-item:hover, .cd-nav-item.active {
          background: linear-gradient(90deg, #9a522b, #68351d);
        }

        .cd-nav-item.active {
          border-left: 4px solid var(--gold);
          padding-left: 10px;
          font-weight: bold;
        }

        .cd-nav-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 27px;
          flex-shrink: 0;
          font-size: 24px;
          color: #ffdfad;
        }

        .cd-nav-label { flex: 1; }

        .cd-count {
          min-width: 27px;
          height: 27px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: var(--gold);
          color: #3b1b0d;
          font-size: 12px;
          font-weight: bold;
        }

        .cd-sidebar-bottom {
          margin-top: auto;
          padding-top: 24px;
        }

        .cd-side-promo {
          min-height: 190px;
          border: 1px solid #815035;
          border-radius: 17px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 18px;
          background:
            linear-gradient(#2410086b, #241008aa),
            url("https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=500")
            center / cover;
        }

        .cd-side-promo h3 {
          font-family: Georgia, serif;
          font-style: italic;
          font-size: 24px;
          line-height: 1.4;
          color: #ffe2ac;
          margin: 0;
        }

        .cd-side-footer {
          text-align: center;
          color: #e8d1bd;
          padding-top: 17px;
          line-height: 1.9;
        }

        .cd-side-footer strong {
          display: block;
          font-family: Georgia, serif;
          font-size: 23px;
          font-style: italic;
          color: var(--gold);
        }

        .cd-main {
          flex: 1;
          min-width: 0;
          background: var(--paper);
        }

        .cd-topbar {
          height: 64px;
          padding: 10px 24px;
          display: flex;
          align-items: center;
          gap: 18px;
          justify-content: space-between;
          background: #fffdfa;
          border-bottom: 1px solid #eee5dc;
          position: sticky;
          top: 0;
          z-index: 10;
        }

        .cd-search {
          display: flex;
          align-items: center;
          gap: 10px;
          width: min(300px, 42%);
          background: #f2ece6;
          border-radius: 28px;
          padding: 10px 15px;
        }

        .cd-search span { font-size: 19px; }

        .cd-search input {
          width: 100%;
          min-width: 0;
          border: 0;
          outline: 0;
          background: transparent;
          color: #39251a;
          font-size: 13px;
        }

        .cd-top-actions {
          display: flex;
          align-items: center;
          gap: 17px;
        }

        .cd-icon-button {
          border: 0;
          background: transparent;
          font-size: 22px;
          position: relative;
          color: #39251a;
          padding: 5px;
        }

        .cd-notification-count {
          position: absolute;
          right: -2px;
          top: -3px;
          background: #ed3945;
          color: white;
          font-size: 10px;
          width: 17px;
          height: 17px;
          border-radius: 50%;
          display: grid;
          place-items: center;
        }

        .cd-profile-wrap { position: relative; }

        .cd-profile {
          display: flex;
          align-items: center;
          gap: 10px;
          background: transparent;
          border: 0;
          text-align: left;
          color: inherit;
        }

        .cd-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: #f0d7c0;
          font-size: 24px;
        }

        .cd-profile strong { display: block; font-size: 13px; }
        .cd-profile small { display: block; margin-top: 4px; color: var(--muted); font-size: 11px; }

        .cd-dropdown {
          position: absolute;
          top: calc(100% + 12px);
          right: 0;
          width: 220px;
          background: white;
          color: #32180e;
          padding: 15px;
          border-radius: 12px;
          box-shadow: 0 8px 28px #0002;
          z-index: 20;
        }

        .cd-dropdown p { margin: 6px 0; font-size: 12px; line-height: 1.6; }

        .cd-content { padding: 16px 20px 25px; }

        .cd-hero {
          min-height: 193px;
          display: flex;
          align-items: center;
          overflow: hidden;
          border-radius: 16px;
          color: white;
          background:
            linear-gradient(90deg, #1c0c05f5 0%, #301508d9 38%, #30150810 100%),
            url("https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1600")
            center 53% / cover;
        }

        .cd-hero-content {
          padding: 24px 32px;
          max-width: 650px;
        }

        .cd-hero h1 {
          font-family: Georgia, serif;
          font-size: clamp(24px, 3vw, 35px);
          line-height: 1.25;
          margin: 0 0 10px;
        }

        .cd-hero h1 span { color: var(--gold); font-style: italic; }

        .cd-hero p {
          font-size: 14px;
          line-height: 1.6;
          margin: 0 0 15px;
          color: #f6e9df;
        }

        .cd-gold-button {
          border: 0;
          border-radius: 30px;
          background: var(--gold);
          color: #35180c;
          font-weight: bold;
          padding: 12px 24px;
          transition: .2s;
        }

        .cd-gold-button:hover { background: #ffdb92; transform: translateY(-2px); }

        .cd-stats {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
          margin: 16px 0;
        }

        .cd-stat {
          min-width: 0;
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 17px;
          border-radius: 14px;
          border: 1px solid #e9e1d8;
          transition: .2s;
        }

        .cd-stat:hover { transform: translateY(-3px); box-shadow: 0 6px 16px #0000000b; }
        .cd-stat.revenue { background: #fff1df; }
        .cd-stat.orders { background: #eaf8ed; }
        .cd-stat.products { background: #e8f3ff; }
        .cd-stat.customers { background: #f5eafa; }

        .cd-stat-icon {
          width: 57px;
          height: 57px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          flex-shrink: 0;
          font-size: 28px;
          background: #f8b53f;
          color: white;
        }

        .cd-stat.orders .cd-stat-icon { background: #1aa85c; }
        .cd-stat.products .cd-stat-icon { background: #70baf4; color: #163c5a; }
        .cd-stat.customers .cd-stat-icon { background: #c5a0f3; color: #45236d; }

        .cd-stat-label { font-size: 12px; color: #51453e; }
        .cd-stat h2 { margin: 7px 0; font-size: clamp(19px, 2vw, 27px); color: #25170f; }
        .cd-stat small { font-size: 11px; color: #16834c; }

        .cd-section { margin-top: 17px; }

        .cd-section-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }

        .cd-section-title {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .cd-section-title > span { font-size: 27px; color: #63321c; }

        .cd-section-title h2 {
          font-family: Georgia, serif;
          font-size: 25px;
          font-style: italic;
          margin: 0 0 3px;
          color: #32180e;
        }

        .cd-section-title p { margin: 0; color: #76685f; font-size: 12px; }

        .cd-view-link {
          border: 0;
          background: transparent;
          color: #6b301a;
          font-size: 12px;
          font-weight: bold;
          white-space: nowrap;
        }

        .cd-product-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 14px;
        }

        .cd-product {
          min-width: 0;
          overflow: hidden;
          border-radius: 12px;
          border: 1px solid #eadfd5;
          background: white;
          box-shadow: 0 3px 8px #30180e0d;
          transition: .25s;
        }

        .cd-product:hover { transform: translateY(-4px); box-shadow: 0 8px 18px #30180e17; }

        .cd-product-image {
          height: 136px;
          position: relative;
          overflow: hidden;
          background: #ead7c6;
        }

        .cd-product-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform .3s;
        }

        .cd-product:hover .cd-product-image img { transform: scale(1.05); }

        .cd-tag {
          position: absolute;
          left: 9px;
          top: 9px;
          padding: 6px 9px;
          border-radius: 20px;
          font-size: 9px;
          font-weight: bold;
          color: #241309;
        }

        .cd-product-body { padding: 10px; }

        .cd-product-name-price {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 5px;
        }

        .cd-product h3 { font-size: 13px; margin: 0 0 4px; }
        .cd-product-category { font-size: 11px; color: #65564d; }
        .cd-product-price { color: #572817; font-size: 14px; font-weight: bold; white-space: nowrap; }
        .cd-product-bottom { display: flex; justify-content: space-between; gap: 5px; margin-top: 10px; font-size: 11px; }
        .cd-stars { color: #eaa21b; font-size: 15px; }
        .cd-sold { color: #62554c; white-space: nowrap; }

        .cd-table-wrap {
          width: 100%;
          overflow-x: auto;
          border: 1px solid #eadfd5;
          border-radius: 12px;
          background: white;
        }

        .cd-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          white-space: nowrap;
          font-size: 12px;
        }

        .cd-table th {
          background: #f7e6d0;
          color: #38251a;
          padding: 14px 13px;
          font-size: 11px;
        }

        .cd-table td {
          padding: 12px 13px;
          border-top: 1px solid #eee5de;
        }

        .cd-table tbody tr:hover { background: #fffaf4; }

        .cd-order-id { font-weight: bold; color: #462617; }

        .cd-status {
          display: inline-block;
          padding: 6px 12px;
          min-width: 88px;
          text-align: center;
          border-radius: 20px;
          font-size: 10px;
          font-weight: bold;
        }

        .cd-status.Completed { background: #c9f5d8; color: #13773b; }
        .cd-status.Pending { background: #ffe19a; color: #785000; }
        .cd-status.Preparing { background: #ffd2a1; color: #8b4400; }

        .cd-status-select {
          border: 1px solid #eadfd5;
          background: white;
          border-radius: 8px;
          padding: 6px;
          font-size: 11px;
          max-width: 115px;
        }

        .cd-no-results { padding: 25px; text-align: center; color: #76685f; }

        .cd-dark {
          --paper: #201711;
          --ink: #f6e8da;
          --muted: #c6ad9a;
        }

        .cd-dark .cd-main,
        .cd-dark .cd-topbar { background: #201711; color: #f6e8da; }
        .cd-dark .cd-topbar { border-color: #493426; }
        .cd-dark .cd-search { background: #39291f; }
        .cd-dark .cd-search input { color: white; }
        .cd-dark .cd-icon-button { color: white; }
        .cd-dark .cd-section-title h2 { color: #ffdcad; }
        .cd-dark .cd-table-wrap, .cd-dark .cd-product, .cd-dark .cd-dropdown { background: #302219; color: #f6e8da; }
        .cd-dark .cd-table td { border-color: #493426; }
        .cd-dark .cd-table th { background: #4c3221; color: #fff1df; }
        .cd-dark .cd-product h3, .cd-dark .cd-product-price { color: #ffdfb6; }
        .cd-dark .cd-product-category, .cd-dark .cd-sold { color: #ddc5b0; }
        .cd-dark .cd-stat h2 { color: #25170f; }

        @media (max-width: 1250px) {
          .cd-sidebar { width: 235px; flex-basis: 235px; }
          .cd-logo-main { font-size: 23px; }
          .cd-stats { gap: 10px; }
          .cd-stat { padding: 12px; gap: 9px; }
          .cd-stat-icon { width: 44px; height: 44px; font-size: 22px; }
          .cd-product-grid { gap: 9px; }
          .cd-product-image { height: 115px; }
        }

        @media (max-width: 950px) {
          .cd-sidebar { width: 76px; flex-basis: 76px; padding: 18px 8px; }
          .cd-logo-main { font-size: 28px; }
          .cd-logo-main .cd-logo-text, .cd-logo small,
          .cd-nav-label, .cd-count, .cd-sidebar-bottom { display: none; }
          .cd-nav-item { justify-content: center; padding: 13px 4px; }
          .cd-nav-item.active { padding-left: 0; border-left: 0; }
          .cd-nav-icon { font-size: 23px; }
          .cd-product-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
          .cd-stats { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }

        @media (max-width: 600px) {
          .cd-sidebar { width: 57px; flex-basis: 57px; padding: 13px 5px; }
          .cd-logo { padding-bottom: 15px; margin-bottom: 12px; }
          .cd-logo-main { font-size: 22px; }
          .cd-nav-item { padding: 11px 2px; }
          .cd-nav-icon { font-size: 19px; width: 25px; }
          .cd-topbar { padding: 9px 10px; gap: 8px; }
          .cd-search { width: 48%; padding: 9px; }
          .cd-search input { font-size: 11px; }
          .cd-top-actions { gap: 7px; }
          .cd-profile { gap: 5px; }
          .cd-avatar { width: 30px; height: 30px; font-size: 19px; }
          .cd-profile strong { font-size: 10px; }
          .cd-profile small { font-size: 9px; }
          .cd-profile-arrow { display: none; }
          .cd-content { padding: 12px 10px 20px; }
          .cd-hero { min-height: 200px; background-position: 60% center; }
          .cd-hero-content { padding: 18px; }
          .cd-hero h1 { font-size: 24px; }
          .cd-hero p { font-size: 12px; }
          .cd-gold-button { padding: 10px 15px; font-size: 12px; }
          .cd-stats { gap: 8px; margin: 10px 0; }
          .cd-stat { padding: 10px; flex-direction: column; align-items: flex-start; gap: 8px; }
          .cd-stat-icon { width: 36px; height: 36px; font-size: 19px; }
          .cd-stat-label { font-size: 10px; }
          .cd-stat h2 { font-size: 20px; }
          .cd-stat small { font-size: 9px; }
          .cd-product-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 9px; }
          .cd-product-image { height: 115px; }
          .cd-product-body { padding: 8px; }
          .cd-product h3 { font-size: 12px; }
          .cd-product-price { font-size: 12px; }
          .cd-product-category, .cd-product-bottom { font-size: 10px; }
          .cd-section-title h2 { font-size: 20px; }
          .cd-section-title p { font-size: 10px; }
          .cd-section-title > span { font-size: 20px; }
          .cd-view-link { font-size: 10px; }
          .cd-table { font-size: 11px; }
          .cd-table th, .cd-table td { padding: 10px 9px; }
          .cd-notification-count { width: 14px; height: 14px; font-size: 9px; }
        }
      `}</style>

      <div className={`cd ${darkMode ? "cd-dark" : ""}`}>
        {/* SIDEBAR */}
        <aside className="cd-sidebar">
          <div className="cd-logo">
            <div className="cd-logo-main">
              <span className="cd-logo-icon">☕</span>
              <span className="cd-logo-text">
                Coffee <span>Heaven</span>
              </span>
            </div>
            <small>ADMIN PANEL</small>
          </div>

          <nav className="cd-nav">
            {navigation.map((item) => (
              <button
                key={item.path}
                type="button"
                className={`cd-nav-item ${
                  activePage === item.path ? "active" : ""
                }`}
                title={item.label}
                onClick={() => navigateTo(item.path)}
              >
                <span className="cd-nav-icon">{item.icon}</span>
                <span className="cd-nav-label">{item.label}</span>
                {item.count && (
                  <span className="cd-count">{item.count}</span>
                )}
              </button>
            ))}
          </nav>

          <div className="cd-sidebar-bottom">
            <div className="cd-side-promo">
              <h3>
                Good Coffee
                <br />
                Good Mood!
                <br />
                ♡
              </h3>
            </div>

            <div className="cd-side-footer">
              <strong>Coffee Heaven</strong>
              Fresh coffee, happy moments.
              <br />
              © 2026
            </div>
          </div>
        </aside>

        {/* MAIN DASHBOARD */}
        <div className="cd-main">
          <header className="cd-topbar">
            <label className="cd-search">
              <span>⌕</span>
              <input
                type="search"
                placeholder="Search here..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </label>

            <div className="cd-top-actions">
              <div className="cd-profile-wrap">
                <button
                  className="cd-icon-button"
                  type="button"
                  aria-label="Notifications"
                  onClick={() => {
                    setShowNotifications(!showNotifications);
                    setShowProfile(false);
                  }}
                >
                  ♧
                  <span className="cd-notification-count">3</span>
                </button>

                {showNotifications && (
                  <div className="cd-dropdown">
                    <strong>Notifications</strong>
                    <p>☕ New coffee products are ready to review.</p>
                    <p>🛍 Check your pending customer orders.</p>
                    <p>📦 Remember to review stock levels.</p>
                  </div>
                )}
              </div>

              <button
                className="cd-icon-button"
                type="button"
                aria-label="Toggle dark mode"
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? "☀" : "☼"}
              </button>

              <div className="cd-profile-wrap">
                <button
                  className="cd-profile"
                  type="button"
                  onClick={() => {
                    setShowProfile(!showProfile);
                    setShowNotifications(false);
                  }}
                >
                  <span className="cd-avatar">👩🏻</span>
                  <span>
                    <strong>Shop Admin</strong>
                    <small>Administrator</small>
                  </span>
                  <span className="cd-profile-arrow">⌄</span>
                </button>

                {showProfile && (
                  <div className="cd-dropdown">
                    <strong>Shop Admin</strong>
                    <p>Administrator account</p>
                    <p>Welcome to Coffee Heaven!</p>
                    <button
                      type="button"
                      className="cd-view-link"
                      onClick={() => navigateTo("/")}
                    >
                      Go to Home →
                    </button>
                  </div>
                )}
              </div>
            </div>
          </header>

          <main className="cd-content">
            {/* WELCOME BANNER */}
            <section className="cd-hero">
              <div className="cd-hero-content">
                <h1>
                  Welcome Back, <span>Shop Admin!</span> 👋
                </h1>

                <p>
                  Manage your coffee shop, track orders and keep
                  <br />
                  your customers happy with the best coffee!
                </p>

                <button
                  className="cd-gold-button"
                  type="button"
                  onClick={() => navigateTo("/menu")}
                >
                  View Menu&nbsp; →
                </button>
              </div>
            </section>

            {/* SUMMARY CARDS */}
            <section className="cd-stats">
              <div className="cd-stat revenue">
                <div className="cd-stat-icon">₹</div>
                <div>
                  <div className="cd-stat-label">Today's Revenue</div>
                  <h2>₹12,850</h2>
                  <small>↑ 12% from last week</small>
                </div>
              </div>

              <div className="cd-stat orders">
                <div className="cd-stat-icon">🛒</div>
                <div>
                  <div className="cd-stat-label">Total Orders</div>
                  <h2>156</h2>
                  <small>↑ 8% from last week</small>
                </div>
              </div>

              <div className="cd-stat products">
                <div className="cd-stat-icon">☕</div>
                <div>
                  <div className="cd-stat-label">Coffee Products</div>
                  <h2>24</h2>
                  <small>↑ 3% from last week</small>
                </div>
              </div>

              <div className="cd-stat customers">
                <div className="cd-stat-icon">♟</div>
                <div>
                  <div className="cd-stat-label">Total Customers</div>
                  <h2>320</h2>
                  <small>↑ 15% from last week</small>
                </div>
              </div>
            </section>

            {/* POPULAR COFFEE */}
            <section className="cd-section">
              <div className="cd-section-head">
                <div className="cd-section-title">
                  <span>☕</span>
                  <div>
                    <h2>Popular Coffee</h2>
                    <p>Customer favourites at Coffee Heaven</p>
                  </div>
                </div>

                <button
                  className="cd-view-link"
                  type="button"
                  onClick={() => navigateTo("/menu")}
                >
                  View Menu&nbsp; →
                </button>
              </div>

              <div className="cd-product-grid">
                {filteredProducts.map((product) => (
                  <article className="cd-product" key={product.id}>
                    <div className="cd-product-image">
                      <img src={product.image} alt={product.name} />

                      <span
                        className="cd-tag"
                        style={{ background: product.color }}
                      >
                        {product.tag}
                      </span>
                    </div>

                    <div className="cd-product-body">
                      <div className="cd-product-name-price">
                        <div>
                          <h3>{product.name}</h3>
                          <div className="cd-product-category">
                            {product.category}
                          </div>
                        </div>

                        <span className="cd-product-price">
                          ₹{product.price}
                        </span>
                      </div>

                      <div className="cd-product-bottom">
                        <span className="cd-stars">★ 4.8</span>
                        <span className="cd-sold">{product.sold} sold</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="cd-no-results">
                  No matching coffee products found.
                </div>
              )}
            </section>

            {/* RECENT ORDERS */}
            <section className="cd-section">
              <div className="cd-section-head">
                <div className="cd-section-title">
                  <span>▤</span>
                  <div>
                    <h2>Recent Orders</h2>
                    <p>Latest customer orders</p>
                  </div>
                </div>

                <button
                  className="cd-view-link"
                  type="button"
                  onClick={() => navigateTo("/orders")}
                >
                  View All Orders&nbsp; →
                </button>
              </div>

              <div className="cd-table-wrap">
                <table className="cd-table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>ORDER ID</th>
                      <th>CUSTOMER</th>
                      <th>ITEMS</th>
                      <th>AMOUNT</th>
                      <th>STATUS</th>
                      <th>DATE</th>
                    </tr>
                  </thead>

                  <tbody>
                    {filteredOrders.map((order, index) => (
                      <tr key={order.id}>
                        <td>{index + 1}</td>
                        <td className="cd-order-id">{order.id}</td>
                        <td>{order.customer}</td>
                        <td>{order.items}</td>
                        <td><strong>₹{order.amount}</strong></td>
                        <td>
                          <select
                            className={`cd-status-select`}
                            aria-label={`Update status for ${order.id}`}
                            value={order.status}
                            onChange={(e) =>
                              updateStatus(order.id, e.target.value)
                            }
                          >
                            <option value="Pending">Pending</option>
                            <option value="Preparing">Preparing</option>
                            <option value="Completed">Completed</option>
                          </select>
                          <span className={`cd-status ${order.status}`}>
                            {order.status}
                          </span>
                        </td>
                        <td>{order.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {filteredOrders.length === 0 && (
                  <div className="cd-no-results">
                    No matching orders found.
                  </div>
                )}
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}

export default Dashboard;