import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Favourite", path: "/favourite", icon: "♡" },
    { name: "Cart", path: "/cart", icon: "🛒" },
    { name: "Payment", path: "/payment" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Admin", path: "/admin" },
    { name: "Login", path: "/login" },
  ];

  return (
    <>
      <style>{`
        .coffee-navbar,
        .coffee-navbar * {
          box-sizing: border-box;
        }

        .coffee-navbar {
          width: 100%;
          min-height: 85px;
          padding: 15px 25px;
          background: linear-gradient(
            135deg,
            #21130d,
            #493020,
            #21130d
          );
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          position: sticky;
          top: 0;
          z-index: 1000;
          border-bottom: 2px solid #c99560;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.25);
          font-family: Arial, sans-serif;
        }

        .coffee-navbar .coffee-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          flex-shrink: 0;
        }

        .coffee-navbar .coffee-logo-icon {
          width: 45px;
          height: 45px;
          background: #d6a36b;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 25px;
        }

        .coffee-navbar .coffee-logo-text {
          color: #fff4e5;
          font-size: 20px;
          font-weight: 800;
          letter-spacing: 1px;
          white-space: nowrap;
        }

        .coffee-navbar .coffee-logo-text span {
          color: #e8b77f;
        }

        .coffee-navbar .coffee-nav-links {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 5px;
        }

        .coffee-navbar .coffee-nav-link {
          display: inline-block;
          padding: 12px 10px;
          color: #f7eadb;
          text-decoration: none;
          font-size: 13px;
          font-weight: 600;
          border-radius: 8px;
          position: relative;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .coffee-navbar .coffee-nav-link:hover {
          color: #e8b77f;
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }

        .coffee-navbar .coffee-nav-link.active {
          color: #e8b77f;
        }

        .coffee-navbar .coffee-nav-link.active::after {
          content: "";
          position: absolute;
          bottom: 4px;
          left: 20%;
          width: 60%;
          height: 2px;
          background: #d6a36b;
          border-radius: 5px;
        }

        .coffee-navbar .coffee-nav-link.coffee-login-link {
          background: #d6a36b;
          color: #29170e;
          padding: 12px 17px;
          border-radius: 25px;
          font-weight: 700;
        }

        .coffee-navbar .coffee-nav-link.coffee-login-link:hover {
          background: #fff0dc;
          color: #29170e;
        }

        .coffee-navbar .coffee-nav-link.coffee-login-link.active::after {
          display: none;
        }

        @media (max-width: 1100px) {
          .coffee-navbar {
            flex-direction: column;
            justify-content: center;
            padding: 18px 12px;
            gap: 12px;
          }

          .coffee-navbar .coffee-nav-links {
            justify-content: center;
            width: 100%;
          }
        }

        @media (max-width: 600px) {
          .coffee-navbar .coffee-logo-text {
            font-size: 18px;
          }

          .coffee-navbar .coffee-nav-links {
            gap: 2px;
          }

          .coffee-navbar .coffee-nav-link {
            padding: 9px 7px;
            font-size: 12px;
          }

          .coffee-navbar .coffee-nav-link.coffee-login-link {
            padding: 9px 12px;
          }
        }
      `}</style>

      <nav className="coffee-navbar">
        <NavLink to="/" className="coffee-logo">
          <div className="coffee-logo-icon">☕</div>

          <div className="coffee-logo-text">
            COFFEE <span>HEAVEN</span>
          </div>
        </NavLink>

        <div className="coffee-nav-links">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `coffee-nav-link ${
                  isActive ? "active" : ""
                } ${
                  item.name === "Login"
                    ? "coffee-login-link"
                    : ""
                }`
              }
            >
              {item.icon && `${item.icon} `}
              {item.name}
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
}