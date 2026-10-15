import React, { useState } from 'react';
import { ShieldCheck, Truck, RotateCcw, Lock, Check } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import Prod3 from '../../assets/Prod3.png'
const AddToCartSection = ({ selectedPlan, selectedFlavor, onAddToCart }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [showAddedToast, setShowAddedToast] = useState(false);
  const { addToCart } = useCart();

  const getPrice = () => {
    switch (selectedPlan) {
      case '90-day':
        return 'Dhs. 932.33 /mo';
      case '30-day':
        return 'Dhs. 1,065 /mo';
      case 'one-time':
        return 'Dhs. 1,335.00';
      default:
        return 'Dhs. 932.33 /mo';
    }
  };

  const getFlavorLabel = (id) => {
    switch (id) {
      case 'variety-pack':
        return 'Variety Pack';
      case 'acai-berries':
        return 'Açaí + Mixed Berries';
      case 'lemon-orange':
        return 'Lemon + Orange';
      case 'mango-passion':
        return 'Mango Passion Fruit';
      default:
        return 'Variety Pack';
    }
  };

  const handleAction = () => {
    setIsAdding(true);
    setTimeout(() => {
      setIsAdding(false);

      const planDetails =
        selectedPlan === '90-day'
          ? {
              planName: 'Quarterly Subscription',
              deliveryInterval: 'Deliver every 12 weeks',
              price: 2797,
              compareAtPrice: 3996,
              savingsQuarterly: 3597
            }
          : selectedPlan === '30-day'
          ? {
              planName: 'Monthly Subscription',
              deliveryInterval: 'Deliver every 4 weeks',
              price: 1065,
              compareAtPrice: 1335,
              savingsQuarterly: 810
            }
          : {
              planName: 'One-Time Purchase',
              deliveryInterval: 'Single Order',
              price: 1335,
              compareAtPrice: 1335,
              savingsQuarterly: 0
            };

      addToCart({
        id: 'beckham-stack-pro',
        title: 'The Beckham Stack: Essentials Pro + Longevity Set',
        flavor: selectedFlavor,
        flavorName: getFlavorLabel(selectedFlavor),
        plan: selectedPlan,
        ...planDetails,
        image: Prod3,
        quantity: 1
      });

      setShowAddedToast(true);
      if (onAddToCart) onAddToCart();
      setTimeout(() => setShowAddedToast(false), 3000);
    }, 400);
  };

  return (
    <div className="space-y-4 pt-4">
      {/* Primary CTA Button */}
      <div className="relative">
        <button
          onClick={handleAction}
          disabled={isAdding}
          className="w-full py-4 px-6 rounded-full bg-[var(--brand-primary)] hover:bg-[var(--brand-deep)] active:scale-[0.99] text-white font-bold text-sm sm:text-base tracking-wider uppercase transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group cursor-pointer"
        >
          {isAdding ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Adding to Cart...</span>
            </div>
          ) : (
            <span>
              GET THE BECKHAM STACK — {getPrice()}
            </span>
          )}
        </button>

        {/* Success Toast */}
        {showAddedToast && (
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[var(--brand-teal)] text-white text-xs font-bold py-2 px-4 rounded-full shadow-lg flex items-center gap-2 animate-fadeIn z-20 whitespace-nowrap">
            <Check className="w-4 h-4" />
            <span>Added to Cart! Arriving with Free GunaLife Welcome Kit.</span>
          </div>
        )}
      </div>

      {/* Trust Badges Strip */}
      <div className="grid grid-cols-3 gap-2 py-2 text-center text-[10px] sm:text-xs text-[var(--brand-primary)] font-medium border-y border-[var(--border-warm)]">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-1">
          <ShieldCheck className="w-4 h-4 text-[var(--brand-teal)]" />
          <span>90-Day Guarantee</span>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-1 border-x border-[var(--border-warm)]">
          <Truck className="w-4 h-4 text-[var(--brand-teal)]" />
          <span>Free Express Shipping</span>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-1">
          <RotateCcw className="w-4 h-4 text-[var(--brand-teal)]" />
          <span>Cancel Anytime</span>
        </div>
      </div>

      {/* Safe Checkout Badges */}
      <div className="flex flex-col items-center justify-center gap-1.5 pt-1 text-[11px] text-[var(--text-muted)]">
        <div className="flex items-center gap-1.5 font-medium">
          <Lock className="w-3.5 h-3.5 text-[var(--brand-primary)]" />
          <span>Guaranteed Safe & Encrypted Checkout</span>
        </div>
        <div className="flex items-center gap-2 text-xs opacity-75 font-semibold text-[var(--brand-primary)]">
          <span className="px-1.5 py-0.5 rounded bg-[var(--bg-warm)] border border-[var(--border-warm)]">VISA</span>
          <span className="px-1.5 py-0.5 rounded bg-[var(--bg-warm)] border border-[var(--border-warm)]">Mastercard</span>
          <span className="px-1.5 py-0.5 rounded bg-[var(--bg-warm)] border border-[var(--border-warm)]">AMEX</span>
          <span className="px-1.5 py-0.5 rounded bg-[var(--bg-warm)] border border-[var(--border-warm)]">Apple Pay</span>
          <span className="px-1.5 py-0.5 rounded bg-[var(--bg-warm)] border border-[var(--border-warm)]">Google Pay</span>
        </div>
      </div>
    </div>
  );
};

export default AddToCartSection;
