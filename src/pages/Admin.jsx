// import { useState } from "react";
// import { Plus, Pencil, Trash2, X, Package } from "lucide-react";
// import Sidebar from "../components/SideBar";
// import { useCoffee } from "../context/CoffeeContext";
// import { formatINR } from "../services/api";

// const emptyForm = {
//   name: "",
//   category: "Hot Coffee",
//   price: "",
//   image: "",
//   description: "",
//   rating: 4.5,
// };

// export default function Admin() {
//   const { products, addProduct, updateProduct, deleteProduct } = useCoffee();
//   const [form, setForm] = useState(emptyForm);
//   const [editingId, setEditingId] = useState(null);
//   const [showForm, setShowForm] = useState(false);
//   const [message, setMessage] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const product = {
//       ...form,
//       price: Number(form.price),
//       rating: Number(form.rating),
//     };

//     if (editingId !== null) {
//       updateProduct({ ...product, id: editingId });
//       setMessage("Product updated successfully!");
//     } else {
//       addProduct(product);
//       setMessage("New product added successfully!");
//     }

//     setForm(emptyForm);
//     setEditingId(null);
//     setShowForm(false);
//   };

//   const handleEdit = (product) => {
//     setForm({
//       ...product,
//       price: String(product.price),
//       rating: product.rating ?? 4.5,
//     });
//     setEditingId(product.id);
//     setShowForm(true);
//     setMessage("");
//   };

//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this product?")) {
//       deleteProduct(id);
//       setMessage("Product deleted successfully!");
//     }
//   };

//   return (
//     <div className="dashboard-layout">
//       <Sidebar />

//       <main className="dashboard-main">
//         <div className="dashboard-topbar">
//           <div>
//             <span className="eyebrow">ADMINISTRATION</span>
//             <h1>Product Management</h1>
//             <p>Add, edit and manage your coffee menu.</p>
//           </div>

//           <button
//             className="primary-button"
//             onClick={() => {
//               setForm(emptyForm);
//               setEditingId(null);
//               setShowForm(!showForm);
//               setMessage("");
//             }}
//           >
//             {showForm ? <X size={18} /> : <Plus size={18} />}
//             {showForm ? "Close Form" : "Add Product"}
//           </button>
//         </div>

//         {message && <div className="success-message">{message}</div>}

//         {showForm && (
//           <form className="admin-form" onSubmit={handleSubmit}>
//             <h2>{editingId !== null ? "Edit Product" : "Add New Product"}</h2>

//             <div className="form-grid">
//               <div>
//                 <label>Product Name</label>
//                 <input
//                   required
//                   value={form.name}
//                   onChange={(e) => setForm({ ...form, name: e.target.value })}
//                   placeholder="e.g. Vanilla Latte"
//                 />
//               </div>

//               <div>
//                 <label>Category</label>
//                 <select
//                   value={form.category}
//                   onChange={(e) => setForm({ ...form, category: e.target.value })}
//                 >
//                   <option>Hot Coffee</option>
//                   <option>Cold Coffee</option>
//                   <option>Special Coffee</option>
//                 </select>
//               </div>

//               <div>
//                 <label>Price (₹)</label>
//                 <input
//                   type="number"
//                   min="1"
//                   required
//                   value={form.price}
//                   onChange={(e) => setForm({ ...form, price: e.target.value })}
//                   placeholder="150"
//                 />
//               </div>

//               <div>
//                 <label>Rating</label>
//                 <input
//                   type="number"
//                   min="0"
//                   max="5"
//                   step="0.1"
//                   value={form.rating}
//                   onChange={(e) => setForm({ ...form, rating: e.target.value })}
//                 />
//               </div>

//               <div className="form-full">
//                 <label>Image URL</label>
//                 <input
//                   type="url"
//                   required
//                   value={form.image}
//                   onChange={(e) => setForm({ ...form, image: e.target.value })}
//                   placeholder="https://example.com/coffee.jpg"
//                 />
//               </div>

//               <div className="form-full">
//                 <label>Description</label>
//                 <textarea
//                   required
//                   value={form.description}
//                   onChange={(e) => setForm({ ...form, description: e.target.value })}
//                   placeholder="Describe the coffee..."
//                 />
//               </div>
//             </div>

//             <button className="primary-button" type="submit">
//               {editingId !== null ? "Save Changes" : "Add Product"}
//             </button>
//           </form>
//         )}

//         <section className="dashboard-panel">
//           <div className="panel-heading">
//             <div>
//               <h2>All Products</h2>
//               <p>{products.length} products in your menu</p>
//             </div>
//             <Package size={25} />
//           </div>

//           <div className="admin-table-wrap">
//             <table className="admin-table">
//               <thead>
//                 <tr>
//                   <th>Product</th>
//                   <th>Category</th>
//                   <th>Price</th>
//                   <th>Rating</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {products.map((product) => (
//                   <tr key={product.id}>
//                     <td>
//                       <div className="table-product">
//                         <img src={product.image} alt={product.name} />
//                         <strong>{product.name}</strong>
//                       </div>
//                     </td>
//                     <td>{product.category}</td>
//                     <td>{formatINR(product.price)}</td>
//                     <td>⭐ {product.rating}</td>
//                     <td>
//                       <div className="table-actions">
//                         <button
//                           className="edit-button"
//                           onClick={() => handleEdit(product)}
//                           aria-label="Edit product"
//                         >
//                           <Pencil size={17} />
//                         </button>
//                         <button
//                           className="delete-button"
//                           onClick={() => handleDelete(product.id)}
//                           aria-label="Delete product"
//                         >
//                           <Trash2 size={17} />
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }















import React, { useState } from "react";

const initialCoffee = [
  {
    id: 1,
    name: "Cappuccino",
    category: "Hot Coffee",
    price: 120,
    stock: 124,
    rating: 4.8,
    sold: 124,
    image:
      "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=700",
    description:
      "Rich, bold and freshly brewed coffee with creamy milk foam.",
    status: "In Stock",
  },
  {
    id: 2,
    name: "Caramel Latte",
    category: "Special Coffee",
    price: 160,
    stock: 98,
    rating: 4.9,
    sold: 98,
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=700",
    description: "Smooth latte with sweet caramel flavour.",
    status: "In Stock",
  },
  {
    id: 3,
    name: "Espresso",
    category: "Black Coffee",
    price: 90,
    stock: 86,
    rating: 4.7,
    sold: 86,
    image:
      "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=700",
    description: "Strong espresso made from freshly ground coffee beans.",
    status: "In Stock",
  },
];

const blankForm = {
  name: "",
  category: "Hot Coffee",
  price: "",
  stock: "",
  image: "",
  description: "",
  status: "In Stock",
};

function Admin() {
  const [coffees, setCoffees] = useState(() => {
    try {
      const saved = localStorage.getItem("adminCoffees");
      return saved ? JSON.parse(saved) : initialCoffee;
    } catch {
      return initialCoffee;
    }
  });

  const [form, setForm] = useState(blankForm);
  const [editId, setEditId] = useState(null);
  const [selectedId, setSelectedId] = useState(1);
  const [message, setMessage] = useState("");
  const [search, setSearch] = useState("");

  const selected = coffees.find((c) => c.id === selectedId);

  const saveProducts = (items) => {
    setCoffees(items);
    try {
      localStorage.setItem("adminCoffees", JSON.stringify(items));
    } catch {
      setMessage(
        "Storage is full. Try using a smaller image."
      );
    }
  };

  const change = (e) => {
    const { name, value } = e.target;
    setForm((old) => ({ ...old, [name]: value }));
  };

  const reset = () => {
    setForm(blankForm);
    setEditId(null);
  };

  const saveCoffee = (e) => {
    e.preventDefault();

    const name = form.name.trim();
    const price = Number(form.price);
    const stock = Number(form.stock);

    if (!name || !form.description.trim()) {
      setMessage("Please fill in all required fields.");
      return;
    }

    if (!Number.isFinite(price) || price <= 0) {
      setMessage("Price must be greater than zero.");
      return;
    }

    if (!Number.isInteger(stock) || stock < 0) {
      setMessage("Stock must be a non-negative whole number.");
      return;
    }

    const item = {
      ...form,
      name,
      description: form.description.trim(),
      price,
      stock,
      image:
        form.image ||
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=700",
      status:
        stock === 0
          ? "Out of Stock"
          : stock <= 10
          ? "Low Stock"
          : "In Stock",
    };

    let updated;

    if (editId !== null) {
      updated = coffees.map((c) =>
        c.id === editId ? { ...c, ...item } : c
      );
      setMessage("Coffee updated successfully!");
    } else {
      const newItem = {
        ...item,
        id: Date.now(),
        rating: 4.8,
        sold: 0,
      };

      updated = [...coffees, newItem];
      setSelectedId(newItem.id);
      setMessage("Coffee added successfully!");
    }

    if (editId !== null) setSelectedId(editId);

    saveProducts(updated);
    reset();
  };

  const editCoffee = (coffee) => {
    setEditId(coffee.id);
    setSelectedId(coffee.id);

    setForm({
      name: coffee.name,
      category: coffee.category,
      price: String(coffee.price),
      stock: String(coffee.stock),
      image: coffee.image,
      description: coffee.description,
      status: coffee.status,
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const deleteCoffee = (id) => {
    if (!window.confirm("Are you sure you want to delete this coffee?")) {
      return;
    }

    const remaining = coffees.filter((c) => c.id !== id);

    saveProducts(remaining);

    if (selectedId === id) {
      setSelectedId(remaining[0]?.id ?? null);
    }

    if (editId === id) reset();

    setMessage("Coffee deleted successfully!");
  };

  const uploadImage = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setMessage("Please select a valid image file.");
      e.target.value = "";
      return;
    }

    if (file.size > 1.5 * 1024 * 1024) {
      setMessage("Please select an image smaller than 1.5 MB.");
      e.target.value = "";
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      setForm((old) => ({
        ...old,
        image: String(reader.result),
      }));
    };

    reader.onerror = () => {
      setMessage("Unable to read this image.");
    };

    reader.readAsDataURL(file);
  };

  const filteredCoffees = coffees.filter((coffee) =>
    `${coffee.name} ${coffee.category}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const totalStock = coffees.reduce(
    (sum, coffee) => sum + Number(coffee.stock || 0),
    0
  );

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }

        .ah {
          min-height: 100vh;
          padding: 28px;
          background: #f7f3ee;
          color: #34231c;
          font-family: Arial, sans-serif;
        }

        .ah-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          padding: 22px;
          background: #38180e;
          color: white;
          border-radius: 16px;
          margin-bottom: 25px;
        }

        .ah-brand { display: flex; gap: 12px; align-items: center; }
        .ah-brand h1 { margin: 0; font-family: Georgia, serif; }
        .ah-brand p { margin: 5px 0 0; color: #e2c4ad; font-size: 12px; }
        .ah-avatar { font-size: 35px; }

        .ah-stats {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
          margin-bottom: 30px;
        }

        .ah-stat {
          padding: 22px;
          background: white;
          border-radius: 14px;
          border: 1px solid #e8d9cc;
          transition: .25s;
        }

        .ah-stat:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 22px #4b29151a;
        }

        .ah-stat span { color: #99765f; font-size: 13px; }
        .ah-stat h2 { margin: 10px 0 0; color: #572b19; font-size: 28px; }

        .ah-message {
          padding: 13px 16px;
          margin-bottom: 20px;
          background: #dcf8e6;
          color: #176d3b;
          border-radius: 9px;
          overflow-wrap: anywhere;
        }

        .ah-message button {
          float: right;
          border: 0;
          background: transparent;
          cursor: pointer;
        }

        .ah-title { font-size: 26px; margin: 0 0 8px; }
        .ah-subtitle { color: #8b796d; font-size: 13px; margin-bottom: 25px; }

        .ah-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
          align-items: stretch;
        }

        .ah-panel {
          min-width: 0;
          position: relative;
          padding: 25px 18px 20px;
          margin-top: 13px;
          background: #fffdfa;
          border: 1px solid #ddcec3;
          border-radius: 17px;
          box-shadow: 0 5px 16px #4929180a;
        }

        .ah-tab {
          position: absolute;
          top: -14px;
          left: 14px;
          padding: 8px 15px;
          border-radius: 10px;
          background: linear-gradient(100deg, #35170c, #67321d);
          color: white;
          font-family: Georgia, serif;
          font-weight: bold;
          font-size: 14px;
        }

        .ah-panel-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 7px;
          margin: 4px 0 22px;
        }

        .ah-panel-head h3 { font-family: Georgia, serif; font-size: 16px; margin: 0; }

        .ah-back {
          border: 1px solid #e4d4c8;
          border-radius: 22px;
          background: #fff;
          padding: 8px 10px;
          font-size: 11px;
          color: #55382a;
          cursor: pointer;
        }

        .ah-form { display: flex; flex-direction: column; gap: 15px; }

        .ah-form label {
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-size: 12px;
          font-weight: bold;
        }

        .ah-form label b { color: #d73b3b; }

        .ah-form input:not([type=file]),
        .ah-form select,
        .ah-form textarea {
          width: 100%;
          min-width: 0;
          padding: 12px;
          border: 1px solid #ded7d0;
          border-radius: 9px;
          background: white;
          color: #49372e;
          outline: none;
          font: inherit;
          font-size: 12px;
        }

        .ah-form input:focus,
        .ah-form select:focus,
        .ah-form textarea:focus {
          border-color: #8b4c2d;
          box-shadow: 0 0 0 2px #8b4c2d18;
        }

        .ah-form input[type=file] {
          width: 100%;
          min-width: 0;
          font-size: 11px;
          padding: 8px;
          border: 1px solid #ded7d0;
          border-radius: 8px;
          background: white;
        }

        .ah-form textarea { min-height: 88px; resize: vertical; }
        .ah-form .ah-status { background: #e0f8e9; color: #187e49; }

        .ah-two { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }

        .ah-preview {
          width: 100%;
          height: 115px;
          object-fit: cover;
          border-radius: 9px;
        }

        .ah-buttons { display: flex; gap: 10px; margin-top: 5px; }

        .ah-buttons button {
          flex: 1;
          min-width: 0;
          padding: 12px 5px;
          border-radius: 10px;
          font-weight: bold;
          font-size: 12px;
          cursor: pointer;
          transition: .2s;
        }

        .ah-cancel { background: #f8f1eb; border: 1px solid #ddcec2; }
        .ah-primary { background: #482013; border: 0; color: white; }
        .ah-primary:hover { background: #81452a; transform: translateY(-2px); }
        .ah-cancel:hover { background: #ebded3; }

        .ah-edit-list { display: flex; flex-direction: column; gap: 12px; }

        .ah-edit-row {
          display: flex;
          align-items: center;
          gap: 9px;
          min-width: 0;
          padding: 10px;
          border: 1px solid #ecdfd5;
          border-radius: 11px;
          background: white;
        }

        .ah-edit-row img {
          width: 48px;
          height: 48px;
          flex-shrink: 0;
          object-fit: cover;
          border-radius: 8px;
        }

        .ah-edit-info { flex: 1; min-width: 0; }
        .ah-edit-info strong { display: block; font-size: 12px; overflow-wrap: anywhere; }
        .ah-edit-info small { display: block; margin-top: 5px; color: #907c6e; font-size: 10px; }

        .ah-edit-row button {
          padding: 8px;
          background: #ffedcf;
          color: #70401d;
          border: 0;
          border-radius: 8px;
          font-size: 11px;
          font-weight: bold;
          cursor: pointer;
        }

        .ah-edit-note { font-size: 12px; line-height: 1.7; color: #8c7a6f; }

        .ah-view-select, .ah-search {
          width: 100%;
          padding: 11px;
          margin-bottom: 14px;
          border: 1px solid #e0d5cc;
          border-radius: 8px;
          background: white;
          color: #49372e;
        }

        .ah-detail-img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 11px;
          display: block;
        }

        .ah-detail-head {
          display: flex;
          justify-content: space-between;
          gap: 8px;
          align-items: flex-start;
          margin-top: 16px;
        }

        .ah-detail-head h2 { margin: 0 0 10px; font-size: 20px; overflow-wrap: anywhere; }
        .ah-price { font-size: 22px; color: #512518; white-space: nowrap; }

        .ah-badge {
          display: inline-block;
          padding: 6px 10px;
          border-radius: 20px;
          background: #d8f8e4;
          color: #138044;
          font-size: 10px;
          font-weight: bold;
        }

        .ah-out { background: #ffe0e0; color: #bd222c; }
        .ah-low { background: #fff0cb; color: #8a5b00; }
        .ah-rating { display: flex; justify-content: space-between; margin: 15px 0; font-size: 13px; }
        .ah-rating small { color: #88786e; }
        .ah-divider { height: 1px; background: #eadfd7; margin: 15px 0; }

        .ah-details { display: flex; flex-direction: column; gap: 13px; }
        .ah-detail-row { display: grid; grid-template-columns: 80px minmax(0, 1fr); gap: 8px; font-size: 11px; line-height: 1.7; }
        .ah-detail-row strong { color: #604b3e; }
        .ah-detail-row span { overflow-wrap: anywhere; }

        .ah-detail-actions { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 25px; }
        .ah-detail-actions button { padding: 12px 5px; border: 0; border-radius: 10px; font-weight: bold; cursor: pointer; }
        .ah-edit-btn { background: #ffb63e; color: #46260e; }
        .ah-delete-btn { background: #ef303b; color: white; }
        .ah-edit-btn:hover { background: #f5a51f; }
        .ah-delete-btn:hover { background: #c91d2a; }

        .ah-inventory { margin-top: 45px; }
        .ah-inventory-head { display: flex; justify-content: space-between; gap: 15px; align-items: center; flex-wrap: wrap; }
        .ah-inventory-head h2 { margin: 0; font-size: 24px; }
        .ah-search { max-width: 280px; margin: 0; }

        .ah-inventory-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
          margin-top: 20px;
        }

        .ah-product {
          min-width: 0;
          overflow: hidden;
          background: white;
          border: 1px solid #e8dbd0;
          border-radius: 13px;
          transition: .25s;
        }

        .ah-product:hover { transform: translateY(-4px); box-shadow: 0 9px 22px #48271918; }
        .ah-product img { width: 100%; height: 155px; object-fit: cover; display: block; }
        .ah-product-body { padding: 13px; }
        .ah-product h3 { margin: 10px 0; font-size: 15px; overflow-wrap: anywhere; }
        .ah-product p { color: #8c796d; font-size: 11px; line-height: 1.6; }
        .ah-product-price { color: #572b19; font-size: 19px; font-weight: bold; }

        .ah-product-actions { display: flex; flex-wrap: wrap; gap: 6px; }
        .ah-product-actions button {
          flex: 1;
          padding: 9px 5px;
          border: 1px solid #eadbd0;
          border-radius: 7px;
          background: #faf3ed;
          color: #55382a;
          font-size: 10px;
          font-weight: bold;
          cursor: pointer;
        }

        .ah-empty {
          padding: 25px;
          text-align: center;
          color: #8c796d;
          background: white;
          border: 1px dashed #ddcec3;
          border-radius: 12px;
        }

        .ah-footer { text-align: center; padding: 30px 10px; margin-top: 40px; color: #8c786b; font-size: 12px; }

        @media(max-width: 1100px) {
          .ah-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .ah-view-panel { grid-column: 1 / -1; }
          .ah-inventory-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }

        @media(max-width: 650px) {
          .ah { padding: 14px; }
          .ah-stats { grid-template-columns: 1fr; gap: 10px; }
          .ah-grid { grid-template-columns: 1fr; }
          .ah-view-panel { grid-column: auto; }
          .ah-inventory-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; }
          .ah-header { padding: 17px; }
          .ah-detail-img { height: 210px; }
          .ah-product img { height: 125px; }
          .ah-product-body { padding: 9px; }
          .ah-product-actions { flex-direction: column; }
          .ah-inventory-head { align-items: stretch; }
          .ah-search { max-width: none; }
        }

        @media(max-width: 390px) {
          .ah-inventory-grid { grid-template-columns: 1fr; }
          .ah-two { gap: 7px; }
          .ah-detail-head { flex-direction: column; }
        }
      `}</style>

      <main className="ah">
        <header className="ah-header">
          <div className="ah-brand">
            <span className="ah-avatar">☕</span>
            <div>
              <h1>Coffee Heaven</h1>
              <p>Admin Control Panel · 2026</p>
            </div>
          </div>
          <strong>👤 Administrator</strong>
        </header>

        <section className="ah-stats">
          <div className="ah-stat">
            <span>Total Coffee Products</span>
            <h2>{coffees.length}</h2>
          </div>

          <div className="ah-stat">
            <span>Total Stock Quantity</span>
            <h2>{totalStock}</h2>
          </div>

          <div className="ah-stat">
            <span>Available Products</span>
            <h2>{coffees.filter((c) => c.stock > 0).length}</h2>
          </div>
        </section>

        {message && (
          <div className="ah-message" role="status">
            ✓ {message}
            <button
              type="button"
              aria-label="Dismiss message"
              onClick={() => setMessage("")}
            >
              ✕
            </button>
          </div>
        )}

        <h2 className="ah-title">Coffee Management</h2>
        <p className="ah-subtitle">
          Add new coffee, update existing products and manage your inventory.
        </p>

        <section className="ah-grid">
          {/* ADD OR EDIT COFFEE FORM */}
          <article className="ah-panel">
            <div className="ah-tab">
              {editId !== null ? "Edit Coffee" : "Add Coffee"}
            </div>

            <div className="ah-panel-head">
              <h3>{editId !== null ? "✎ Edit Coffee" : "+ Add New Coffee"}</h3>
              <button className="ah-back" type="button" onClick={reset}>
                Reset
              </button>
            </div>

            <form className="ah-form" onSubmit={saveCoffee}>
              <label>
                Coffee Name <b>*</b>
                <input
                  name="name"
                  value={form.name}
                  onChange={change}
                  placeholder="Enter coffee name"
                  required
                />
              </label>

              <label>
                Category <b>*</b>
                <select
                  name="category"
                  value={form.category}
                  onChange={change}
                >
                  <option>Hot Coffee</option>
                  <option>Special Coffee</option>
                  <option>Black Coffee</option>
                  <option>Chocolate</option>
                  <option>Iced Coffee</option>
                  <option>Cold Coffee</option>
                </select>
              </label>

              <div className="ah-two">
                <label>
                  Price (₹) <b>*</b>
                  <input
                    name="price"
                    type="number"
                    min="1"
                    step="1"
                    value={form.price}
                    onChange={change}
                    placeholder="Price"
                    required
                  />
                </label>

                <label>
                  Stock Quantity <b>*</b>
                  <input
                    name="stock"
                    type="number"
                    min="0"
                    step="1"
                    value={form.stock}
                    onChange={change}
                    placeholder="Stock"
                    required
                  />
                </label>
              </div>

              <label>
                Upload Coffee Image
                <input
                  type="file"
                  accept="image/*"
                  onChange={uploadImage}
                />
              </label>

              {form.image && (
                <img
                  className="ah-preview"
                  src={form.image}
                  alt="Coffee preview"
                />
              )}

              <label>
                Description <b>*</b>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={change}
                  placeholder="Enter coffee description"
                  required
                />
              </label>

              <label>
                Stock Status
                <select
                  className="ah-status"
                  name="status"
                  value={form.status}
                  onChange={change}
                >
                  <option>In Stock</option>
                  <option>Low Stock</option>
                  <option>Out of Stock</option>
                </select>
              </label>

              <div className="ah-buttons">
                <button
                  className="ah-cancel"
                  type="button"
                  onClick={reset}
                >
                  Cancel
                </button>

                <button className="ah-primary" type="submit">
                  {editId !== null ? "Update Coffee" : "Add Coffee"}
                </button>
              </div>
            </form>
          </article>

          {/* EDIT COFFEE */}
          <article className="ah-panel">
            <div className="ah-tab">Edit Products</div>

            <div className="ah-panel-head">
              <h3>✎ Edit Coffee</h3>
              <button
                className="ah-back"
                type="button"
                onClick={reset}
              >
                Reset
              </button>
            </div>

            <p className="ah-edit-note">
              Choose a product to load its details into the form on the left.
            </p>

            <div className="ah-edit-list">
              {coffees.map((coffee) => (
                <div className="ah-edit-row" key={coffee.id}>
                  <img src={coffee.image} alt={coffee.name} />

                  <div className="ah-edit-info">
                    <strong>{coffee.name}</strong>
                    <small>
                      ₹{coffee.price} · Stock {coffee.stock}
                    </small>
                  </div>

                  <button
                    type="button"
                    onClick={() => editCoffee(coffee)}
                  >
                    ✎ Edit
                  </button>
                </div>
              ))}

              {coffees.length === 0 && (
                <p className="ah-edit-note">No coffee products available.</p>
              )}
            </div>
          </article>

          {/* VIEW COFFEE DETAILS */}
          <article className="ah-panel ah-view-panel">
            <div className="ah-tab">View Coffee</div>

            <div className="ah-panel-head">
              <h3>☕ Coffee Details</h3>
              <button
                className="ah-back"
                type="button"
                onClick={() =>
                  setSelectedId(coffees[0]?.id ?? null)
                }
              >
                First Item
              </button>
            </div>

            <label
              htmlFor="ah-coffee-select"
              style={{
                display: "block",
                fontSize: 12,
                fontWeight: "bold",
                marginBottom: 8,
              }}
            >
              Select Coffee
            </label>

            <select
              id="ah-coffee-select"
              className="ah-view-select"
              value={selected?.id ?? ""}
              onChange={(e) =>
                setSelectedId(
                  e.target.value === "" ? null : Number(e.target.value)
                )
              }
            >
              {coffees.length === 0 && (
                <option value="">No coffee products</option>
              )}

              {coffees.map((coffee) => (
                <option key={coffee.id} value={coffee.id}>
                  {coffee.name}
                </option>
              ))}
            </select>

            {selected ? (
              <>
                <img
                  className="ah-detail-img"
                  src={selected.image}
                  alt={selected.name}
                />

                <div className="ah-detail-head">
                  <div>
                    <h2>{selected.name}</h2>
                    <span
                      className={`ah-badge ${
                        selected.stock === 0
                          ? "ah-out"
                          : selected.stock <= 10
                          ? "ah-low"
                          : ""
                      }`}
                    >
                      {selected.stock === 0
                        ? "Out of Stock"
                        : selected.stock <= 10
                        ? "Low Stock"
                        : "In Stock"}
                    </span>
                  </div>

                  <strong className="ah-price">
                    ₹{selected.price}
                  </strong>
                </div>

                <div className="ah-rating">
                  <span>⭐ {selected.rating || 4.8} Rating</span>
                  <small>{selected.sold || 0} sold</small>
                </div>

                <div className="ah-divider" />

                <div className="ah-details">
                  <div className="ah-detail-row">
                    <strong>Category</strong>
                    <span>{selected.category}</span>
                  </div>

                  <div className="ah-detail-row">
                    <strong>Stock</strong>
                    <span>{selected.stock} units</span>
                  </div>

                  <div className="ah-detail-row">
                    <strong>Description</strong>
                    <span>{selected.description}</span>
                  </div>
                </div>

                <div className="ah-detail-actions">
                  <button
                    className="ah-edit-btn"
                    type="button"
                    onClick={() => editCoffee(selected)}
                  >
                    ✎ Edit
                  </button>

                  <button
                    className="ah-delete-btn"
                    type="button"
                    onClick={() => deleteCoffee(selected.id)}
                  >
                    🗑 Delete
                  </button>
                </div>
              </>
            ) : (
              <div className="ah-empty">
                No coffee selected. Add a coffee to get started.
              </div>
            )}
          </article>
        </section>

        {/* COMPLETE INVENTORY */}
        <section className="ah-inventory">
          <div className="ah-inventory-head">
            <h2>☕ Coffee Inventory</h2>

            <input
              className="ah-search"
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search coffee..."
              aria-label="Search coffee products"
            />
          </div>

          <p className="ah-subtitle">
            All products · {filteredCoffees.length} displayed
          </p>

          {filteredCoffees.length > 0 ? (
            <div className="ah-inventory-grid">
              {filteredCoffees.map((coffee) => (
                <article className="ah-product" key={coffee.id}>
                  <img src={coffee.image} alt={coffee.name} />

                  <div className="ah-product-body">
                    <span
                      className={`ah-badge ${
                        coffee.stock === 0
                          ? "ah-out"
                          : coffee.stock <= 10
                          ? "ah-low"
                          : ""
                      }`}
                    >
                      {coffee.stock === 0
                        ? "Out of Stock"
                        : coffee.stock <= 10
                        ? "Low Stock"
                        : "In Stock"}
                    </span>

                    <h3>{coffee.name}</h3>

                    <p>{coffee.category}</p>

                    <div className="ah-product-price">
                      ₹{coffee.price}
                    </div>

                    <p>Stock: {coffee.stock} units</p>

                    <div className="ah-product-actions">
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedId(coffee.id);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                      >
                        View
                      </button>

                      <button
                        type="button"
                        onClick={() => editCoffee(coffee)}
                      >
                        Edit
                      </button>

                      <button
                        type="button"
                        onClick={() => deleteCoffee(coffee.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="ah-empty">
              No matching coffee products found.
            </div>
          )}
        </section>

        <footer className="ah-footer">
          ☕ Coffee Heaven Admin Panel · Manage your coffee shop with love.
        </footer>
      </main>
    </>
  );
}

export default Admin;

