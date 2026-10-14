import { Download, IndianRupee, ShoppingBag, Coffee, Clock } from "lucide-react";
import Sidebar from "../components/Sidebar";
import ReportCard from "../components/ReportCard";
import { useCoffee } from "../context/CoffeeContext";
import { formatINR } from "../services/api";

export default function Reports() {
  const { orders, products } = useCoffee();

  const revenue = orders.reduce((sum, order) => sum + order.total, 0);
  const delivered = orders.filter((order) => order.status === "Delivered").length;
  const pending = orders.filter((order) => order.status !== "Delivered").length;

  const stats = [
    {
      title: "Total Revenue",
      value: formatINR(revenue),
      description: "From recorded orders",
      icon: <IndianRupee />,
    },
    {
      title: "Total Orders",
      value: orders.length,
      description: "All recorded orders",
      icon: <ShoppingBag />,
    },
    {
      title: "Delivered Orders",
      value: delivered,
      description: "Successfully delivered",
      icon: <Coffee />,
    },
    {
      title: "Pending Orders",
      value: pending,
      description: "Awaiting completion",
      icon: <Clock />,
    },
  ];

  const downloadCSV = () => {
    const rows = [
      ["Order ID", "Date", "Items", "Payment Method", "Status", "Total"],
      ...orders.map((order) => [
        order.id,
        order.date,
        order.items.map((item) => `${item.name} x${item.quantity}`).join("; "),
        order.paymentMethod,
        order.status,
        order.total,
      ]),
    ];

    const csv = rows
      .map((row) =>
        row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(",")
      )
      .join("\r\n");

    const blob = new Blob(["\uFEFF" + csv], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "coffee-shop-report.csv";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="dashboard-main">
        <div className="dashboard-topbar">
          <div>
            <span className="eyebrow">BUSINESS OVERVIEW</span>
            <h1>Report Summary</h1>
            <p>Review your coffee shop's recorded orders and revenue.</p>
          </div>

          <button className="primary-button" onClick={downloadCSV}>
            <Download size={18} /> Export CSV
          </button>
        </div>

        <div className="report-grid">
          {stats.map((stat) => (
            <ReportCard
              key={stat.title}
              {...stat}
              color="#f2e6d8"
            />
          ))}
        </div>

        <section className="dashboard-panel report-details">
          <h2>Business Summary</h2>

          <div className="summary-line">
            <span>Products in menu</span>
            <strong>{products.length}</strong>
          </div>

          <div className="summary-line">
            <span>Total recorded orders</span>
            <strong>{orders.length}</strong>
          </div>

          <div className="summary-line">
            <span>Delivered orders</span>
            <strong>{delivered}</strong>
          </div>

          <div className="summary-line">
            <span>Orders still in progress</span>
            <strong>{pending}</strong>
          </div>

          <div className="summary-total">
            <span>Total recorded revenue</span>
            <strong>{formatINR(revenue)}</strong>
          </div>

          <p className="demo-notice">
            These figures are calculated from orders saved in this browser.
            They are not live sales data from a real payment system.
          </p>
        </section>
      </main>
    </div>
  );
}