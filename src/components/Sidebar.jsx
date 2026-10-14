import { NavLink } from "react-router-dom";
import {
  LayoutDashboard, Coffee, ShoppingBag, Package,
  BarChart3, CreditCard, Heart, Home
} from "lucide-react";

export default function Sidebar() {
  const links = [
    { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { to: "/", label: "Home", icon: Home },
    { to: "/menu", label: "Menu & Products", icon: Coffee },
    { to: "/orders", label: "Orders", icon: ShoppingBag },
    { to: "/admin", label: "Manage Products", icon: Package },
    { to: "/favourite", label: "Favourites", icon: Heart },
    { to: "/payment", label: "Payments", icon: CreditCard },
    { to: "/reports", label: "Report Summary", icon: BarChart3 },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <Coffee size={27} />
        <div>
          <strong>Bean & Brew</strong>
          <small>COFFEE MANAGEMENT</small>
        </div>
      </div>

      <p className="sidebar-label">MAIN MENU</p>

      <nav>
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink key={to} to={to} end={to === "/"}>
            <Icon size={19} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-note">
        <Coffee size={25} />
        <strong>Take a coffee break!</strong>
        <p>Great ideas start with great coffee.</p>
      </div>
    </aside>
  );
}