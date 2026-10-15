import React, { useState } from 'react';
import TrustAnnouncementBar from '../components/bechkamStack/TrustAnnouncementBar';
import ProductGallery from '../components/bechkamStack/ProductGallery';
import ProductHeader from '../components/bechkamStack/ProductHeader';
import FlavorSelector from '../components/bechkamStack/FlavorSelector';
import PurchaseOptions from '../components/bechkamStack/PurchaseOptions';
import AddToCartSection from '../components/bechkamStack/AddToCartSection';
import ProductAccordions from '../components/bechkamStack/ProductAccordions';
import NutritionModal from '../components/bechkamStack/NutritionModal';
import StickyBuyBar from '../components/bechkamStack/StickyBuyBar';
import PressTicker from '../components/bechkamStack/PressTicker';
import ClinicalHighlights from '../components/bechkamStack/ClinicalHighlights';

const BeckhamStackPage = () => {
  const [selectedFlavor, setSelectedFlavor] = useState('variety-pack');
  const [selectedPlan, setSelectedPlan] = useState('90-day');
  const [isNutritionModalOpen, setIsNutritionModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[var(--bg-cream)] text-[var(--text-on-cream)] select-none">
      {/* 1. Top Guarantee & Trust strip */}
      <TrustAnnouncementBar />

      {/* 2. Main Product Hero Section (2-Column Desktop: Left Sticky, Right Scrolling) */}
      <section className="relative w-full overflow-visible bg-[var(--bg-cream)]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start relative">
            
            {/* Left Column: Fixed / Sticky */}
            <div className="lg:col-span-6 xl:col-span-6 lg:sticky lg:top-[168px] lg:self-start z-10">
              <ProductGallery
                onOpenNutritionModal={() => setIsNutritionModalOpen(true)}
              />
            </div>

            {/* Right Column: Scrollable Content */}
            <div className="lg:col-span-6 xl:col-span-6 space-y-6 lg:border-l lg:border-[var(--border-warm)] lg:pl-10">
              {/* Product title, rating, and bullet badges */}
              <ProductHeader />

              {/* Flavor Selector */}
              <FlavorSelector
                selectedFlavor={selectedFlavor}
                onSelectFlavor={setSelectedFlavor}
              />

              {/* Subscribe & Save Plan Selector with Welcome Kit */}
              <PurchaseOptions
                selectedPlan={selectedPlan}
                onSelectPlan={setSelectedPlan}
                onOpenWelcomeKitModal={() => {}}
              />

              {/* Add to Cart CTA & Trust Seals */}
              <AddToCartSection
                selectedPlan={selectedPlan}
                selectedFlavor={selectedFlavor}
                onAddToCart={() => {}}
              />

              {/* Interactive Accordions: What's Included, Ritual, Third Party Testing, Guarantee */}
              <ProductAccordions
                onOpenNutritionModal={() => setIsNutritionModalOpen(true)}
              />
            </div>

          </div>
        </div>
      </section>

      {/* 3. Media Features Strip */}
      <PressTicker />

      {/* 4. Clinical Evidence & Biological Hallmarks */}
      <ClinicalHighlights />

      {/* 5. Sticky Bottom Purchase Bar (slides up on scroll) */}
      <StickyBuyBar
        selectedPlan={selectedPlan}
        selectedFlavor={selectedFlavor}
        onAddToCart={() => {}}
      />

      {/* 6. Full Supplement Facts & Nutrition Label Modal */}
      <NutritionModal
        isOpen={isNutritionModalOpen}
        onClose={() => setIsNutritionModalOpen(false)}
      />
    </main>
  );
};

export default BeckhamStackPage;