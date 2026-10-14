
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Favourite from "./pages/Favourite";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import Reports from "./pages/Reports";
import Payment from "./pages/Payment";
import Checkout from "./pages/Checkout";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favourite" element={<Favourite />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/checkout" element={<Checkout />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;











