import { useLocation } from "react-router-dom";
import { PackageCheck } from "lucide-react";
import { useCoffee } from "../context/CoffeeContext";
import { formatINR } from "../services/api";

export default function Orders() {
  const { orders } = useCoffee();
  const location = useLocation();

  return (
    <main className="page-container">
      {location.state?.success && (
        <div className="success-message">
          <PackageCheck size={24} />
          <div>
            <strong>Order placed successfully!</strong>
            <p>Order ID: {location.state.orderId}</p>
          </div>
        </div>
      )}

      <div className="page-heading">
        <span className="eyebrow">YOUR COFFEE JOURNEY</span>
        <h1>My Orders</h1>
        <p>Track your coffee orders and their current status.</p>
      </div>

      {!orders.length ? (
        <div className="empty-state">
          <PackageCheck size={52} />
          <h2>No orders yet</h2>
          <p>Your placed orders will appear here.</p>
        </div>
      ) : (
        <div className="orders-list">
          {orders.map((order) => (
            <article className="order-card" key={order.id}>
              <div className="order-top">
                <div>
                  <span className="eyebrow">ORDER ID</span>
                  <h3>{order.id}</h3>
                  <p>{order.date}</p>
                </div>
                <span className="status-pill">{order.status}</span>
              </div>

              {order.items.map((item) => (
                <div className="order-product" key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <div>
                    <strong>{item.name}</strong>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                  <strong>{formatINR(item.price * item.quantity)}</strong>
                </div>
              ))}

              <div className="order-bottom">
                <span>Payment: {order.paymentMethod}</span>
                <strong>Total: {formatINR(order.total)}</strong>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}