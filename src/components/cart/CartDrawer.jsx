import React from 'react';
import { X, Trash2, Check, Lock, ShieldCheck, PauseCircle, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import Prod2 from '../../assets/Prod2.png'
const CartDrawer = () => {
  const {
    cartItems,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    totalCount,
    subtotal,
    addToCart
  } = useCart();

  if (!isCartOpen) return null;

  const upsellProducts = [
    {
      id: 'white-cap',
      title: 'GunaLife Limited Edition Embroidered Logo White Cap',
      price: 145,
      image: Prod2
    },
    {
      id: 'shaker-bottle',
      title: 'GunaLife Luxe Edition Signature Shaker Bottle',
      price: 207,
      image: Prod2
    }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden select-none">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity animate-fadeIn"
        onClick={closeCart}
      />

      {/* Drawer Panel */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-[420px] sm:max-w-[460px] bg-[var(--bg-cream)] shadow-2xl flex flex-col justify-between border-l border-[var(--border-warm)] animate-slideLeft text-[var(--text-on-cream)]">
          
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[var(--border-warm)] bg-[var(--bg-cream)]">
            <h2 className="font-serif text-lg font-bold tracking-wider text-[var(--brand-primary)] uppercase">
              YOUR CART
            </h2>
            <button
              onClick={closeCart}
              className="p-1.5 rounded-full hover:bg-[var(--bg-warm)] text-[var(--brand-primary)] transition-colors cursor-pointer"
              aria-label="Close cart"
            >
              <X className="w-5 h-5 stroke-[2.2]" />
            </button>
          </div>

          {/* Shipping Notification Banner */}
          <div className="bg-[var(--bg-warm)] text-[var(--brand-primary)] text-xs text-center py-2.5 px-4 font-semibold border-b border-[var(--border-warm)]">
            Shipping will be calculated at checkout
          </div>

          {/* Cart Content: Scrollable Body */}
          <div className="flex-1 overflow-y-auto p-5 space-y-6 shop-scrollbar">
            {cartItems.length === 0 ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[var(--bg-warm)] flex items-center justify-center mx-auto text-[var(--brand-primary)]/70">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[var(--brand-primary)]">
                    Your cart is empty
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] mt-1 max-w-xs mx-auto">
                    Start your daily longevity protocol with the GunaLife Beckham Stack.
                  </p>
                </div>
                <Link
                  to="/beckham-stack"
                  onClick={closeCart}
                  className="inline-block px-6 py-2.5 rounded-full bg-[var(--brand-primary)] text-white text-xs font-bold uppercase tracking-wider hover:bg-[var(--brand-deep)] transition-colors"
                >
                  Shop The Beckham Stack
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.key}
                    className="p-4 rounded-2xl bg-[var(--bg-warm)] border border-[var(--border-warm)] shadow-xs space-y-3"
                  >
                    <div className="flex gap-3">
                      {/* Product Thumbnail */}
                      <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-xl bg-[var(--bg-cream)] border border-[var(--border-warm)] overflow-hidden shrink-0 p-1 flex items-center justify-center">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="font-serif text-xs sm:text-sm font-bold text-[var(--brand-primary)] leading-tight">
                            {item.title}
                          </h4>
                          <button
                            onClick={() => removeFromCart(item.key)}
                            className="text-[var(--text-muted)] hover:text-red-600 p-0.5 transition-colors cursor-pointer"
                            title="Remove item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Variants line */}
                        <p className="text-[11px] text-[var(--text-muted)] mt-1 leading-snug">
                          {item.flavor} / {item.plan} / {item.deliveryInterval}
                        </p>

                        {/* Quantity and Pricing row */}
                        <div className="flex items-center justify-between mt-3 pt-1">
                          {/* Quantity selector: — qty + */}
                          <div className="flex items-center gap-3 border border-[var(--border-warm)] rounded-lg px-2.5 py-1 bg-[var(--bg-cream)]">
                            <button
                              onClick={() => updateQuantity(item.key, -1)}
                              className="text-xs font-bold text-[var(--brand-primary)] hover:opacity-70 px-1 cursor-pointer"
                            >
                              —
                            </button>
                            <span className="text-xs font-extrabold text-[var(--brand-primary)] min-w-3 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.key, 1)}
                              className="text-xs font-bold text-[var(--brand-primary)] hover:opacity-70 px-1 cursor-pointer"
                            >
                              +
                            </button>
                          </div>

                          {/* Price */}
                          <div className="text-right">
                            {item.compareAtPrice && (
                              <span className="text-xs text-[var(--text-muted)] line-through mr-1.5">
                                Dhs. {(item.compareAtPrice * item.quantity).toLocaleString()}
                              </span>
                            )}
                            <span className="font-serif text-sm sm:text-base font-bold text-[var(--brand-primary)]">
                              Dhs. {(item.price * item.quantity).toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Savings green badge banner */}
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[var(--brand-teal)] pt-1">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      <span>
                        You save Dhs. {((item.savingsQuarterly || 3597) * item.quantity).toLocaleString()} this quarter, ongoing
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Customers Also Bought Section */}
            <div className="pt-2 border-t border-[var(--border-warm)] space-y-3">
              <h3 className="text-[11px] font-bold tracking-[0.16em] uppercase text-[var(--brand-primary)]">
                CUSTOMERS ALSO BOUGHT
              </h3>

              <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
                {upsellProducts.map((upsell) => (
                  <div
                    key={upsell.id}
                    className="flex-shrink-0 w-64 p-3 rounded-2xl bg-[var(--bg-cream)] border border-[var(--border-warm)] flex gap-3 items-center justify-between"
                  >
                    <div className="w-14 h-14 rounded-xl bg-[var(--bg-warm)] p-1 shrink-0 overflow-hidden flex items-center justify-center border border-[var(--border-warm)]">
                      <img
                        src={upsell.image}
                        alt={upsell.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0 pr-1">
                      <h5 className="text-[11px] font-bold text-[var(--brand-primary)] line-clamp-2 leading-tight">
                        {upsell.title}
                      </h5>
                      <p className="text-xs font-extrabold text-[var(--brand-primary)] mt-0.5">
                        Dhs. {upsell.price}
                      </p>
                    </div>
                    <button
                      onClick={() =>
                        addToCart({
                          id: upsell.id,
                          title: upsell.title,
                          flavorName: 'One Size',
                          planName: 'One-Time Purchase',
                          deliveryInterval: 'Standard Delivery',
                          price: upsell.price,
                          image: upsell.image,
                          quantity: 1
                        })
                      }
                      className="px-3 py-1.5 rounded-full bg-[var(--brand-primary)] text-white text-[10px] font-bold uppercase tracking-wider hover:bg-[var(--brand-deep)] transition-colors shrink-0 cursor-pointer"
                    >
                      ADD
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Checkout Bottom Section */}
          <div className="p-5 border-t border-[var(--border-warm)] bg-[var(--bg-cream)] space-y-3 shadow-lg">
            {/* Subtotal row */}
            <div className="flex items-center justify-between text-sm sm:text-base">
              <span className="font-bold text-[var(--brand-primary)]">
                Subtotal ({totalCount} {totalCount === 1 ? 'item' : 'items'})
              </span>
              <span className="font-serif text-lg sm:text-xl font-bold text-[var(--brand-primary)]">
                Dhs. {subtotal.toLocaleString()}
              </span>
            </div>

            {/* Big Checkout Pill Button */}
            <button
              onClick={() => alert(`Proceeding to checkout with ${totalCount} items! Subtotal: Dhs. ${subtotal.toLocaleString()}`)}
              disabled={cartItems.length === 0}
              className="w-full py-4 rounded-full bg-[var(--brand-primary)] hover:bg-[var(--brand-deep)] disabled:opacity-50 text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 shadow-md cursor-pointer"
            >
              CHECKOUT • DHS. {subtotal.toLocaleString()}
            </button>

            {/* Payment provider pills row */}
            <div className="flex items-center justify-center gap-2 pt-1">
              <span className="px-3 py-1 rounded bg-[#5A31F4] text-white text-[11px] font-extrabold tracking-tight">
                shop
              </span>
              <span className="px-3 py-1 rounded bg-[#F2F4F8] text-[#003087] text-[11px] font-extrabold italic border border-gray-200">
                PayPal
              </span>
              <span className="px-3 py-1 rounded bg-black text-white text-[11px] font-bold">
                 Pay
              </span>
            </div>

            {/* Trust Seals Footer */}
            <div className="pt-2 text-center space-y-1.5 text-[11px] text-[var(--brand-primary)]">
              <div className="flex items-center justify-center gap-4 text-[var(--brand-primary)] font-medium">
                <span className="flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-[var(--brand-teal)]" />
                  <span>Secure checkout</span>
                </span>
                <span className="flex items-center gap-1">
                  <PauseCircle className="w-3.5 h-3.5 text-[var(--brand-teal)]" />
                  <span>Cancel anytime</span>
                </span>
              </div>
              <div className="flex items-center justify-center gap-1 text-[var(--brand-primary)] font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-[var(--brand-teal)]" />
                <span>90-day money-back guarantee</span>
              </div>
              <p className="text-[10px] text-[var(--text-muted)] italic pt-0.5">
                Trusted by the world's best • Powered by GunaLife Science
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
