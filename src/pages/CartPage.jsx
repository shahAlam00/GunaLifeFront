import React from 'react';
import { useCart } from '../context/CartContext';
import { Trash2, Check, Lock, ShieldCheck, PauseCircle, ShoppingBag, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    totalCount,
    subtotal,
    addToCart
  } = useCart();

  const upsellProducts = [
    {
      id: 'white-cap',
      title: 'GunaLife Limited Edition Embroidered Logo White Cap',
      price: 145,
      image: 'https://im8health.com/cdn/shop/files/month4_cap-white.jpg?v=1771991682&width=240'
    },
    {
      id: 'shaker-bottle',
      title: 'GunaLife Luxe Edition Signature Shaker Bottle',
      price: 207,
      image: 'https://im8health.com/cdn/shop/files/month3_shaker.jpg?v=1771991554&width=240'
    }
  ];

  return (
    <main className="min-h-screen bg-[var(--bg-cream)] text-[var(--text-on-cream)] py-10 px-4 sm:px-6 select-none">
      <div className="max-w-[720px] mx-auto bg-[var(--bg-cream)] rounded-3xl shadow-xl border border-[var(--border-warm)] overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[var(--border-warm)] bg-[var(--bg-cream)]">
          <div className="flex items-center gap-3">
            <Link to="/beckham-stack" className="text-[var(--brand-primary)] hover:opacity-70 p-1">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-[var(--brand-primary)] uppercase">
              YOUR CART
            </h1>
          </div>
          <span className="text-xs font-bold text-[var(--text-muted)]">
            {totalCount} {totalCount === 1 ? 'item' : 'items'}
          </span>
        </div>

        {/* Shipping Notification Banner */}
        <div className="bg-[var(--bg-warm)] text-[var(--brand-primary)] text-xs sm:text-sm text-center py-2.5 px-4 font-semibold border-b border-[var(--border-warm)]">
          Shipping will be calculated at checkout
        </div>

        {/* Cart Items List */}
        <div className="p-6 space-y-6">
          {cartItems.length === 0 ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[var(--bg-warm)] flex items-center justify-center mx-auto text-[var(--brand-primary)]/70">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-[var(--brand-primary)]">
                  Your cart is empty
                </h3>
                <p className="text-sm text-[var(--text-muted)] mt-1 max-w-sm mx-auto">
                  Start your daily longevity protocol with the GunaLife Beckham Stack.
                </p>
              </div>
              <Link
                to="/beckham-stack"
                className="inline-block px-7 py-3 rounded-full bg-[var(--brand-primary)] text-white text-xs font-bold uppercase tracking-wider hover:bg-[var(--brand-deep)] transition-colors"
              >
                Shop The Beckham Stack
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.key}
                  className="p-5 rounded-2xl bg-[var(--bg-warm)] border border-[var(--border-warm)] shadow-xs space-y-3"
                >
                  <div className="flex gap-4">
                    {/* Thumbnail */}
                    <div className="w-24 h-24 rounded-xl bg-[var(--bg-cream)] border border-[var(--border-warm)] overflow-hidden shrink-0 p-1.5 flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-serif text-sm sm:text-base font-bold text-[var(--brand-primary)] leading-tight">
                          {item.title}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.key)}
                          className="text-[var(--text-muted)] hover:text-red-600 p-1 transition-colors cursor-pointer"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <p className="text-xs text-[var(--text-muted)] mt-1 leading-snug">
                        {item.flavor} / {item.plan} / {item.deliveryInterval}
                      </p>

                      <div className="flex items-center justify-between mt-3 pt-1">
                        {/* Quantity: — qty + */}
                        <div className="flex items-center gap-3 border border-[var(--border-warm)] rounded-lg px-3 py-1 bg-[var(--bg-cream)]">
                          <button
                            onClick={() => updateQuantity(item.key, -1)}
                            className="text-xs font-bold text-[var(--brand-primary)] hover:opacity-70 px-1 cursor-pointer"
                          >
                            —
                          </button>
                          <span className="text-xs font-extrabold text-[var(--brand-primary)] min-w-4 text-center">
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
                            <span className="text-xs text-[var(--text-muted)] line-through mr-2">
                              Dhs. {(item.compareAtPrice * item.quantity).toLocaleString()}
                            </span>
                          )}
                          <span className="font-serif text-base sm:text-lg font-bold text-[var(--brand-primary)]">
                            Dhs. {(item.price * item.quantity).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Savings Banner */}
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[var(--brand-teal)] pt-1">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                    <span>
                      You save Dhs. {((item.savingsQuarterly || 3597) * item.quantity).toLocaleString()} this quarter, ongoing
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Upsells */}
          <div className="pt-4 border-t border-[var(--border-warm)] space-y-3">
            <h3 className="text-xs font-bold tracking-[0.16em] uppercase text-[var(--brand-primary)]">
              CUSTOMERS ALSO BOUGHT
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {upsellProducts.map((upsell) => (
                <div
                  key={upsell.id}
                  className="p-3.5 rounded-2xl bg-[var(--bg-cream)] border border-[var(--border-warm)] flex gap-3 items-center justify-between"
                >
                  <div className="w-16 h-16 rounded-xl bg-[var(--bg-warm)] p-1 shrink-0 overflow-hidden flex items-center justify-center border border-[var(--border-warm)]">
                    <img
                      src={upsell.image}
                      alt={upsell.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0 pr-1">
                    <h5 className="text-xs font-bold text-[var(--brand-primary)] line-clamp-2 leading-tight">
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

        {/* Sticky Bottom Summary */}
        <div className="p-6 border-t border-[var(--border-warm)] bg-[var(--bg-cream)] space-y-4 shadow-lg">
          <div className="flex items-center justify-between text-base">
            <span className="font-bold text-[var(--brand-primary)]">
              Subtotal ({totalCount} {totalCount === 1 ? 'item' : 'items'})
            </span>
            <span className="font-serif text-xl sm:text-2xl font-bold text-[var(--brand-primary)]">
              Dhs. {subtotal.toLocaleString()}
            </span>
          </div>

          <button
            onClick={() => alert(`Proceeding to checkout with ${totalCount} items! Subtotal: Dhs. ${subtotal.toLocaleString()}`)}
            disabled={cartItems.length === 0}
            className="w-full py-4 rounded-full bg-[var(--brand-primary)] hover:bg-[var(--brand-deep)] disabled:opacity-50 text-white font-extrabold text-sm tracking-wider uppercase transition-all duration-200 shadow-md cursor-pointer"
          >
            CHECKOUT • DHS. {subtotal.toLocaleString()}
          </button>

          <div className="flex items-center justify-center gap-2 pt-1">
            <span className="px-3 py-1 rounded bg-[#5A31F4] text-white text-xs font-extrabold tracking-tight">
              shop
            </span>
            <span className="px-3 py-1 rounded bg-[#F2F4F8] text-[#003087] text-xs font-extrabold italic border border-gray-200">
              PayPal
            </span>
            <span className="px-3 py-1 rounded bg-black text-white text-xs font-bold">
               Pay
            </span>
          </div>

          <div className="pt-2 text-center space-y-1.5 text-xs text-[var(--brand-primary)]">
            <div className="flex items-center justify-center gap-6 text-[var(--brand-primary)] font-medium">
              <span className="flex items-center gap-1">
                <Lock className="w-3.5 h-3.5 text-[var(--brand-teal)]" />
                <span>Secure checkout</span>
              </span>
              <span className="flex items-center gap-1">
                <PauseCircle className="w-3.5 h-3.5 text-[var(--brand-teal)]" />
                <span>Cancel anytime</span>
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[var(--brand-teal)]" />
                <span>90-day guarantee</span>
              </span>
            </div>
            <p className="text-[11px] text-[var(--text-muted)] italic pt-0.5">
              Trusted by the world's best • Powered by GunaLife Science
            </p>
          </div>
        </div>

      </div>
    </main>
  );
};

export default CartPage;
