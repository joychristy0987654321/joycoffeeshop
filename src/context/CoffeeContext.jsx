import { createContext, useContext, useEffect, useState } from "react";
import { initialCoffee } from "../data/coffeeData";

const CoffeeContext = createContext();

const readStorage = (key, fallback) => {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch {
    return fallback;
  }
};

export function CoffeeProvider({ children }) {
  const [products, setProducts] = useState(() =>
    readStorage("coffee_products", initialCoffee)
  );

  const [cart, setCart] = useState(() =>
    readStorage("coffee_cart", [])
  );

  const [favourites, setFavourites] = useState(() =>
    readStorage("coffee_favourites", [])
  );

  const [orders, setOrders] = useState(() =>
    readStorage("coffee_orders", [])
  );

  useEffect(() => {
    localStorage.setItem("coffee_products", JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem("coffee_cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("coffee_favourites", JSON.stringify(favourites));
  }, [favourites]);

  useEffect(() => {
    localStorage.setItem("coffee_orders", JSON.stringify(orders));
  }, [orders]);

  const addToCart = (product) => {
    setCart((oldCart) => {
      const existing = oldCart.find((item) => item.id === product.id);

      if (existing) {
        return oldCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...oldCart, { ...product, quantity: 1 }];
    });
  };

  const changeQuantity = (id, amount) => {
    setCart((oldCart) =>
      oldCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart((oldCart) => oldCart.filter((item) => item.id !== id));
  };

  const toggleFavourite = (product) => {
    setFavourites((oldItems) =>
      oldItems.some((item) => item.id === product.id)
        ? oldItems.filter((item) => item.id !== product.id)
        : [...oldItems, product]
    );
  };

  const addProduct = (product) => {
    setProducts((oldProducts) => [
      ...oldProducts,
      { ...product, id: Date.now() },
    ]);
  };

  const updateProduct = (updatedProduct) => {
    setProducts((oldProducts) =>
      oldProducts.map((item) =>
        item.id === updatedProduct.id ? updatedProduct : item
      )
    );
  };

  const deleteProduct = (id) => {
    setProducts((oldProducts) =>
      oldProducts.filter((item) => item.id !== id)
    );
  };

  const placeOrder = (paymentMethod) => {
    if (cart.length === 0) return null;

    const order = {
      id: `ORD-${Date.now().toString().slice(-6)}`,
      items: cart,
      total: cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      ),
      paymentMethod,
      date: new Date().toLocaleString("en-IN"),
      status: "Preparing",
    };

    setOrders((oldOrders) => [order, ...oldOrders]);
    setCart([]);
    return order;
  };

  const updateOrderStatus = (id, status) => {
    setOrders((oldOrders) =>
      oldOrders.map((order) =>
        order.id === id ? { ...order, status } : order
      )
    );
  };

  const value = {
    products,
    cart,
    favourites,
    orders,
    addToCart,
    changeQuantity,
    removeFromCart,
    toggleFavourite,
    addProduct,
    updateProduct,
    deleteProduct,
    placeOrder,
    updateOrderStatus,
  };

  return (
    <CoffeeContext.Provider value={value}>
      {children}
    </CoffeeContext.Provider>
  );
}

export function useCoffee() {
  return useContext(CoffeeContext);
}









