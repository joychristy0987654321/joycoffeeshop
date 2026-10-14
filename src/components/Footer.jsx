
// import { Link } from "react-router-dom";

// export default function Footer() {
//   return (
//     <footer className="footer">
//       <div className="footer-grid">
//         {/* Brand */}
//         <div className="footer-brand">
//           <h2>☕ Bean & Brew</h2>
//           <p>
//             Your daily cup of happiness. Freshly brewed,
//             lovingly served. ❤️
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div className="footer-links">
//           <h3>🔗 Quick Links</h3>
//           <Link to="/">🏠 Home</Link>
//           <Link to="/menu">☕ Our Menu</Link>
//           <Link to="/about">ℹ️ About Us</Link>
//         </div>

//         {/* Customer Care */}
//         <div className="footer-links">
//           <h3>🛍️ Customer Care</h3>
//           <Link to="/orders">📦 My Orders</Link>
//           <Link to="/cart">🛒 Shopping Cart</Link>
//           <Link to="/login">👤 Login</Link>
//         </div>

//         {/* Contact */}
//         <div className="footer-contact">
//           <h3>📞 Contact Us</h3>
//           <p>📧 hello@beanandbrew.com</p>
//           <p>📍 Chennai, Tamil Nadu</p>

//           <div className="social-links">
//             <a
//               href="https://www.instagram.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Instagram"
//               title="Instagram"
//             >
//               📸 Instagram
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Copyright */}
//       <div className="footer-bottom">
//         <p>
//           © 2026 Bean & Brew Coffee House.
//           Made with ♥ and coffee.
//         </p>
//       </div>
//     </footer>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const headingStyle = {
    color: "#f5c16c",
    fontSize: "20px",
    marginBottom: "20px",
  };

  const linkStyle = {
    display: "block",
    color: "#ddd",
    textDecoration: "none",
    marginBottom: "14px",
    fontSize: "15px",
  };

  const contactStyle = {
    display: "block",
    color: "#ddd",
    textDecoration: "none",
    marginBottom: "16px",
    lineHeight: "1.5",
    overflowWrap: "anywhere",
  };

  const socialStyle = {
    color: "#ddd",
    textDecoration: "none",
    fontSize: "14px",
    padding: "9px 12px",
    borderRadius: "8px",
    background: "rgba(255,255,255,0.07)",
    display: "inline-block",
  };

  const columnStyle = {
    minWidth: 0,
  };

  return (
    <footer
      style={{
        background:
          "linear-gradient(135deg, #1b0d08, #3e2723, #160907)",
        color: "white",
        marginTop: "50px",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      {/* Responsive styles */}
      <style>{`
        .coffee-footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr 1.5fr;
          gap: 35px;
        }

        .coffee-footer-link:hover {
          color: #f5c16c !important;
          padding-left: 5px;
        }

        .coffee-footer-social:hover {
          background: rgba(245, 193, 108, 0.2) !important;
          color: #f5c16c !important;
        }

        @media (max-width: 900px) {
          .coffee-footer-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 30px;
          }
        }

        @media (max-width: 520px) {
          .coffee-footer-grid {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .coffee-footer-bottom {
            flex-direction: column;
            text-align: center;
          }

          .coffee-footer-socials {
            justify-content: center;
          }
        }
      `}</style>

      {/* Main Footer */}
      <div
        className="coffee-footer-grid"
        style={{
          maxWidth: "1200px",
          margin: "auto",
          padding: "55px 25px 35px",
          boxSizing: "border-box",
        }}
      >
        {/* Brand */}
        <div
          style={{
            ...columnStyle,
            padding: "20px",
            borderRadius: "18px",
            background: "rgba(255,255,255,0.04)",
          }}
        >
          <h2
            style={{
              fontSize: "30px",
              margin: "0 0 15px",
              color: "#f5c16c",
            }}
          >
            ☕ Coffee Haven
          </h2>

          <p
            style={{
              color: "#ddd",
              lineHeight: "1.8",
              maxWidth: "300px",
              margin: 0,
            }}
          >
            Fresh coffee made with premium quality
            beans. Every cup is crafted with love
            and passion. ❤️
          </p>

          <div
            style={{
              marginTop: "25px",
              fontSize: "25px",
              letterSpacing: "8px",
            }}
          >
            ☕ 🌿 🤎
          </div>
        </div>

        {/* Quick Links */}
        <div style={columnStyle}>
          <h3 style={headingStyle}>🔗 Quick Links</h3>

          <Link
            className="coffee-footer-link"
            style={linkStyle}
            to="/"
          >
            🏠 Home
          </Link>

          <Link
            className="coffee-footer-link"
            style={linkStyle}
            to="/menu"
          >
            ☕ Menu
          </Link>

          <Link
            className="coffee-footer-link"
            style={linkStyle}
            to="/cart"
          >
            🛒 Cart
          </Link>

          <Link
            className="coffee-footer-link"
            style={linkStyle}
            to="/favourite"
          >
            ❤️ Favourite
          </Link>

          <Link
            className="coffee-footer-link"
            style={linkStyle}
            to="/about"
          >
            ℹ️ About Us
          </Link>
        </div>

        {/* Contact */}
        <div style={columnStyle}>
          <h3 style={headingStyle}>📞 Contact Us</h3>

          <a
            href="tel:+919876543210"
            style={contactStyle}
          >
            📱 +91 9876543210
          </a>

          <a
            href="mailto:coffeehaven@gmail.com"
            style={contactStyle}
          >
            📧 coffeehaven@gmail.com
          </a>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Chennai%2C%20Tamil%20Nadu"
            target="_blank"
            rel="noopener noreferrer"
            style={contactStyle}
          >
            📍 Chennai, Tamil Nadu
          </a>
        </div>

        {/* Opening Hours */}
        <div style={columnStyle}>
          <h3 style={headingStyle}>🕐 Opening Hours</h3>

          <div
            style={{
              background:
                "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
              border: "1px solid rgba(245,193,108,0.35)",
              borderRadius: "16px",
              padding: "20px",
              boxShadow: "0 8px 25px rgba(0,0,0,0.25)",
              boxSizing: "border-box",
            }}
          >
            <p style={{ margin: "0 0 8px" }}>
              <strong>Monday - Friday</strong>
            </p>

            <p
              style={{
                color: "#ccc",
                margin: "0 0 18px",
                lineHeight: "1.6",
              }}
            >
              🕐 8:00 AM - 10:00 PM
            </p>

            <hr
              style={{
                border: "none",
                borderTop: "1px solid rgba(255,255,255,0.15)",
              }}
            />

            <p style={{ margin: "18px 0 8px" }}>
              <strong>Saturday - Sunday</strong>
            </p>

            <p
              style={{
                color: "#ccc",
                margin: 0,
                lineHeight: "1.6",
              }}
            >
              🕐 9:00 AM - 11:00 PM
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div
        className="coffee-footer-bottom"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.15)",
          maxWidth: "1200px",
          margin: "auto",
          padding: "22px 25px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "18px",
          boxSizing: "border-box",
        }}
      >
        <p style={{ margin: 0, color: "#ccc", lineHeight: "1.7" }}>
          ☕ © 2026 <strong>Coffee Haven</strong>.
          All Rights Reserved.
        </p>

        {/* Social Links */}
        <div
          className="coffee-footer-socials"
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          <a
            className="coffee-footer-social"
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={socialStyle}
          >
            🔵 Facebook
          </a>

          <a
            className="coffee-footer-social"
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={socialStyle}
          >
            📸 Instagram
          </a>

          <a
            className="coffee-footer-social"
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            style={socialStyle}
          >
            🟢 WhatsApp
          </a>

          <a
            className="coffee-footer-social"
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={socialStyle}
          >
            🔴 YouTube
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;