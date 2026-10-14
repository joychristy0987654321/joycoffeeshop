
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Smartphone,
  Banknote,
  CreditCard,
} from "lucide-react";

import { useCoffee } from "../context/CoffeeContext";
import { formatINR } from "../services/api";

export default function Payment() {
  const { cart, placeOrder } = useCoffee();
  const navigate = useNavigate();

  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [showPayments, setShowPayments] = useState(false);
  const [method, setMethod] = useState("");
  const [message, setMessage] = useState("");

  const total = cart.reduce(
    (sum, item) =>
      sum + Number(item.price) * Number(item.quantity),
    0
  );

  const handleContinue = (e) => {
    e.preventDefault();
    setMessage("");

    if (!/^[0-9]{10}$/.test(phone)) {
      setMessage("Enter a valid 10-digit phone number.");
      return;
    }

    if (cart.length === 0) {
      setMessage("Your cart is empty. Please add coffee first.");
      return;
    }

    setShowPayments(true);
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setMessage("");

    if (!method) {
      setMessage("Please select a payment method.");
      return;
    }

    try {
      const order = placeOrder(method);

      if (order) {
        navigate("/orders", {
          state: {
            success: true,
            orderId: order.id,
          },
        });
      } else {
        setMessage("Unable to place order. Please try again.");
      }
    } catch {
      setMessage("Something went wrong. Please try again.");
    }
  };

  const paymentOptions = [
    {
      name: "UPI",
      icon: Smartphone,
      description: "Pay using UPI",
    },
    {
      name: "Cash on Delivery",
      icon: Banknote,
      description: "Pay when your coffee arrives",
    },
    {
      name: "GPay",
      icon: Smartphone,
      description: "Google Pay",
    },
    {
      name: "Debit Card",
      icon: CreditCard,
      description: "Pay using debit card",
    },
    {
      name: "Credit Card",
      icon: CreditCard,
      description: "Pay using credit card",
    },
  ];

  return (
    <main className="page-container">
      <div className="page-heading">
        <span className="eyebrow">COFFEE HAVEN ☕</span>
        <h1>Checkout & Payment</h1>
        <p>Fresh coffee is just a few steps away!</p>
      </div>

      <div className="checkout-layout">
        <form
          className="checkout-form"
          onSubmit={showPayments ? handlePlaceOrder : handleContinue}
        >
          {!showPayments ? (
            <>
              <h2>Customer Details</h2>

              <label htmlFor="customerName">Full Name</label>
              <input
                id="customerName"
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Enter your full name"
                autoComplete="name"
                required
              />

              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) =>
                  setPhone(
                    e.target.value.replace(/\D/g, "").slice(0, 10)
                  )
                }
                placeholder="Enter 10-digit phone number"
                inputMode="numeric"
                autoComplete="tel"
                maxLength={10}
                required
              />

              <button
                type="submit"
                className="primary-button full-button"
              >
                Continue
              </button>
            </>
          ) : (
            <>
              <h2>Choose Payment Method</h2>
              <p>
                Hello, {customerName}! Select your payment method.
              </p>

              <div className="payment-options">
                {paymentOptions.map(
                  ({ name, icon: Icon, description }) => (
                    <label
                      key={name}
                      className={`payment-option ${
                        method === name ? "selected" : ""
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value={name}
                        checked={method === name}
                        onChange={() => {
                          setMethod(name);
                          setMessage("");
                        }}
                      />

                      <Icon size={24} />

                      <span>
                        <strong>{name}</strong>
                        <small>{description}</small>
                      </span>
                    </label>
                  )
                )}
              </div>

              <button
                type="submit"
                className="primary-button full-button"
                disabled={cart.length === 0}
              >
                Place Order · {formatINR(total)}
              </button>

              <button
                type="button"
                className="secondary-button full-button"
                onClick={() => {
                  setShowPayments(false);
                  setMethod("");
                  setMessage("");
                }}
              >
                Back
              </button>
            </>
          )}

          {message && (
            <p className="error-message" role="alert">
              {message}
            </p>
          )}

          <p className="demo-notice">
            Demo checkout only. No real payment is processed.
          </p>
        </form>

        <aside className="summary-card">
          <h2>Your Order</h2>

          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div className="summary-line" key={item.id}>
                <span>
                  {item.name} × {item.quantity}
                </span>
                <span>
                  {formatINR(
                    Number(item.price) * Number(item.quantity)
                  )}
                </span>
              </div>
            ))
          )}

          <div className="summary-total">
            <span>Total</span>
            <strong>{formatINR(total)}</strong>
          </div>
        </aside>
      </div>
    </main>
  );
}
