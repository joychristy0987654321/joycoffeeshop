import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      setMessage("Please enter your email and password.");
      setSuccess(false);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setMessage("Please enter a valid email address.");
      setSuccess(false);
      return;
    }

    setMessage("Welcome to Coffee Haven! ☕");
    setSuccess(true);
  };

  const css = `
    .coffee-login {
      min-height: 100vh;
      padding: 35px 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #f7eee5, #e8d2bc);
      font-family: Arial, sans-serif;
      box-sizing: border-box;
    }

    .coffee-login * {
      box-sizing: border-box;
    }

    .login-card {
      width: 100%;
      max-width: 1150px;
      min-height: 620px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      overflow: hidden;
      border-radius: 22px;
      background: #ffffff;
      box-shadow: 0 25px 70px rgba(57, 35, 24, 0.2);
    }

    /* LEFT COFFEE IMAGE */

    .login-left {
      position: relative;
      min-height: 620px;
      padding: 45px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: white;
      background:
        linear-gradient(
          180deg,
          rgba(28, 15, 9, 0.30),
          rgba(28, 15, 9, 0.90)
        ),
        url("https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=85")
        center / cover no-repeat;
    }

    .login-logo {
      font-size: 35px;
      font-weight: 800;
      margin-bottom: 8px;
      letter-spacing: 0.5px;
    }

    .login-logo span {
      color: #e8b477;
    }

    .login-tagline {
      color: #f1d7b8;
      font-size: 11px;
      letter-spacing: 3px;
      margin-bottom: 75px;
    }

    .login-left h1 {
      font-family: Georgia, serif;
      font-size: clamp(34px, 4vw, 48px);
      line-height: 1.2;
      margin: 0 0 18px;
    }

    .login-left p {
      max-width: 350px;
      color: #f3e5d8;
      font-size: 15px;
      line-height: 1.9;
    }

    .login-benefits {
      margin-top: 20px;
      color: #f7e0c5;
      line-height: 2.8;
      font-size: 15px;
    }

    .login-bottom-text {
      margin-top: 35px;
      color: #e8c6a4;
      font-size: 12px;
      letter-spacing: 1px;
    }

    /* RIGHT LOGIN FORM */

    .login-right {
      padding: 55px 50px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background: #fffdfb;
    }

    .login-small-title {
      color: #a77a57;
      font-size: 12px;
      letter-spacing: 3px;
      font-weight: bold;
      margin-bottom: 12px;
    }

    .login-right h2 {
      font-family: Georgia, serif;
      color: #392318;
      font-size: 44px;
      margin: 0 0 12px;
    }

    .login-subtitle {
      color: #92847a;
      font-size: 14px;
      margin: 0 0 25px;
      line-height: 1.7;
    }

    .login-label {
      display: block;
      color: #49362d;
      font-size: 14px;
      font-weight: 600;
      margin: 20px 0 10px;
    }

    .login-input-box {
      display: flex;
      align-items: center;
      gap: 12px;
      min-height: 54px;
      border: 1px solid #e4d8ce;
      border-radius: 10px;
      padding: 0 15px;
      background: #ffffff;
      transition: 0.3s;
    }

    .login-input-box:focus-within {
      border-color: #a36d47;
      box-shadow: 0 0 0 4px rgba(163, 109, 71, 0.10);
    }

    .login-field-icon {
      font-size: 18px;
      color: #9c755a;
    }

    .login-input-box input {
      flex: 1;
      width: 0;
      min-width: 0;
      border: none;
      outline: none;
      padding: 15px 0;
      font-size: 14px;
      color: #392318;
      background: transparent;
    }

    .login-input-box input::placeholder {
      color: #b5aaa1;
    }

    .login-show-btn {
      background: transparent;
      border: none;
      cursor: pointer;
      font-size: 17px;
      padding: 5px;
    }

    .login-options {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 22px 0 25px;
      font-size: 13px;
      color: #76665b;
    }

    .login-remember {
      display: flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;
    }

    .login-remember input {
      width: 16px;
      height: 16px;
      accent-color: #8b5435;
      cursor: pointer;
    }

    .login-button {
      width: 100%;
      padding: 16px;
      border: none;
      border-radius: 10px;
      background: linear-gradient(100deg, #623823, #b17b50);
      color: white;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
      transition: 0.3s;
    }

    .login-button:hover {
      background: linear-gradient(100deg, #392015, #875431);
      transform: translateY(-3px);
      box-shadow: 0 10px 22px rgba(96, 61, 43, 0.22);
    }

    .login-message {
      font-size: 13px;
      line-height: 1.6;
      margin: 0 0 15px;
      padding: 12px;
      border-radius: 8px;
    }

    .login-message.success {
      color: #27633a;
      background: #eaf7ed;
    }

    .login-message.error {
      color: #a12b2b;
      background: #fff0f0;
    }

    .login-divider {
      height: 1px;
      background: #eee3da;
      margin: 28px 0 20px;
    }

    .login-back {
      text-align: center;
      margin: 0;
    }

    .login-back a {
      text-decoration: none;
      color: #946143;
      font-size: 14px;
      font-weight: 600;
      transition: 0.3s;
    }

    .login-back a:hover {
      color: #392318;
    }

    .login-footer-text {
      text-align: center;
      color: #b0a198;
      font-size: 11px;
      margin-top: 25px;
    }

    @media (max-width: 750px) {
      .coffee-login {
        padding: 20px 12px;
      }

      .login-card {
        max-width: 480px;
        grid-template-columns: 1fr;
      }

      .login-left {
        min-height: 380px;
        padding: 32px;
      }

      .login-tagline {
        margin-bottom: 35px;
      }

      .login-right {
        padding: 40px 28px;
      }
    }

    @media (max-width: 400px) {
      .login-left {
        min-height: 340px;
        padding: 25px;
      }

      .login-logo {
        font-size: 29px;
      }

      .login-left h1 {
        font-size: 34px;
      }

      .login-right {
        padding: 32px 20px;
      }

      .login-right h2 {
        font-size: 36px;
      }
    }
  `;

  return (
    <>
      <style>{css}</style>

      <main className="coffee-login">
        <div className="login-card">

          {/* LEFT SIDE - COFFEE IMAGE */}

          <section className="login-left">
            <div className="login-logo">
              ☕ Coffee <span>Haven</span>
            </div>

            <div className="login-tagline">
              PREMIUM COFFEE • FRESH VIBES
            </div>

            <h1>
              Welcome
              <br />
              Back!
            </h1>

            <p>
              Every cup tells a story. Come back and
              enjoy your favourite coffee with us.
            </p>

            <div className="login-benefits">
              <div>☕ &nbsp; Freshly Brewed Coffee</div>
              <div>🤎 &nbsp; Made with Love</div>
              <div>🌿 &nbsp; Beautiful Coffee Moments</div>
            </div>

            <div className="login-bottom-text">
              YOUR PERFECT COFFEE EXPERIENCE
            </div>
          </section>

          {/* RIGHT SIDE - LOGIN FORM */}

          <section className="login-right">
            <div className="login-small-title">
              WELCOME TO COFFEE HAVEN
            </div>

            <h2>Sign In</h2>

            <p className="login-subtitle">
              Enter your details to continue your coffee journey.
            </p>

            <form onSubmit={handleLogin}>
              <label className="login-label" htmlFor="login-email">
                Email Address
              </label>

              <div className="login-input-box">
                <span className="login-field-icon">✉</span>

                <input
                  id="login-email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setMessage("");
                  }}
                  required
                />
              </div>

              <label className="login-label" htmlFor="login-password">
                Password
              </label>

              <div className="login-input-box">
                <span className="login-field-icon">🔒</span>

                <input
                  id="login-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setMessage("");
                  }}
                  required
                />

                <button
                  type="button"
                  className="login-show-btn"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={
                    showPassword ? "Hide password" : "Show password"
                  }
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>

              <div className="login-options">
                <label className="login-remember">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                  />
                  Remember Me
                </label>
              </div>

              {message && (
                <p
                  className={
                    "login-message " +
                    (success ? "success" : "error")
                  }
                  role="status"
                >
                  {message}
                </p>
              )}

              <button type="submit" className="login-button">
                Sign In &nbsp; →
              </button>
            </form>

            <div className="login-divider"></div>

            <p className="login-back">
              <Link to="/">← Back to Home</Link>
            </p>

            <div className="login-footer-text">
              MADE WITH ☕ AND LOVE
            </div>
          </section>

        </div>
      </main>
    </>
  );
}