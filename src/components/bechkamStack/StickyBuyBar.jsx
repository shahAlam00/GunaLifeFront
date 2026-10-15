import React, { useState, useEffect } from 'react';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import Prod3 from '../../assets/Prod2.png'
const StickyBuyBar = ({ selectedPlan, selectedFlavor, onAddToCart }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getPrice = () => {
    switch (selectedPlan) {
      case '90-day':
        return 'Dhs. 932.33/mo';
      case '30-day':
        return 'Dhs. 1,065/mo';
      case 'one-time':
        return 'Dhs. 1,335.00';
      default:
        return 'Dhs. 932.33/mo';
    }
  };

  const getPlanLabel = () => {
    switch (selectedPlan) {
      case '90-day':
        return '90-Day Supply (Save 33%)';
      case '30-day':
        return '30-Day Supply (Save 20%)';
      case 'one-time':
        return 'One-Time Purchase';
      default:
        return '90-Day Supply';
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

      if (onAddToCart) onAddToCart();
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[var(--border-warm)] shadow-2xl py-3 px-4 transition-transform duration-300 animate-slideUp">
      <div className="max-w-[1240px] mx-auto flex items-center justify-between gap-4">
        {/* Product mini info */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-[var(--bg-warm)] border border-[var(--border-warm)] overflow-hidden flex-shrink-0 p-1">
            <img
              src={Prod3}
              alt="GunaLife Beckham Stack"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="hidden sm:block">
            <h4 className="font-serif text-sm font-bold text-[var(--brand-primary)] leading-tight">
              GunaLife Beckham Stack: Essentials Pro + Longevity
            </h4>
            <p className="text-[11px] text-[var(--brand-teal)] font-medium">
              {getPlanLabel()} • Includes Free Welcome Kit
            </p>
          </div>
        </div>

        {/* Price & Action */}
        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="font-serif text-base sm:text-lg font-bold text-[var(--brand-primary)] leading-none">
              {getPrice()}
            </div>
            <div className="text-[10px] text-[var(--brand-teal)] font-semibold mt-0.5">
              Free Express Shipping
            </div>
          </div>

          <button
            onClick={handleAction}
            disabled={isAdding}
            className="py-2.5 sm:py-3 px-6 sm:px-8 rounded-full bg-[var(--brand-primary)] hover:bg-[var(--brand-deep)] active:scale-[0.98] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-md flex items-center gap-2 cursor-pointer"
          >
            {isAdding ? (
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Cart</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyBuyBar;
