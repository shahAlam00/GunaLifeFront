import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('gunalife_cart');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('gunalife_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [cartItems]);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const itemKey = `${product.id || 'gunalife-beckham-stack'}-${product.flavor || 'variety'}-${product.plan || '90-day'}`;
      const existingIndex = prevItems.findIndex((item) => item.key === itemKey);

      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + (product.quantity || 1)
        };
        return updated;
      } else {
        const newItem = {
          key: itemKey,
          id: product.id || 'gunalife-beckham-stack',
          title: product.title || 'GunaLife Beckham Stack: Essentials Pro + Longevity Set',
          flavor: product.flavorName || 'Variety Pack',
          plan: product.planName || 'Quarterly Subscription',
          deliveryInterval: product.deliveryInterval || 'Deliver every 12 weeks',
          price: product.price ?? 2797,
          compareAtPrice: product.compareAtPrice ?? 3996,
          savingsQuarterly: product.savingsQuarterly ?? 3597,
          image: product.image || 'https://cdn.shopify.com/s/files/1/0637/4460/6375/files/USD_90DAY_BECKHAMSTACK_COPY1_VISUAL_B.jpg?v=1778071113',
          quantity: product.quantity || 1
        };
        return [...prevItems, newItem];
      }
    });

    setIsCartOpen(true);
  };

  const removeFromCart = (key) => {
    setCartItems((prev) => prev.filter((item) => item.key !== key));
  };

  const updateQuantity = (key, delta) => {
    setCartItems((prev) => {
      return prev
        .map((item) => {
          if (item.key === key) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  const clearCart = () => setCartItems([]);

  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        openCart,
        closeCart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalCount,
        subtotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
