import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, FileText } from 'lucide-react';
import Prod3 from '../../assets/Prod3.png'
import Prod4 from '../../assets/Prod4.png'
import Prod1 from '../../assets/Prod1.png'
import Prod2 from '../../assets/Prod2.png'
import Prod5 from '../../assets/Prod5.jpeg'
import Prod6 from '../../assets/Prod6.jpeg'
const ProductGallery = ({ onOpenNutritionModal }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const images = [
    {
      id: 0,
      title: "GunaLife Quarterly Beckham Stack & Welcome Kit",
      tag: "THE QUARTERLY PACKAGE",
      headline: "More energy. Better gut health. Improved sleep. Healthy aging.",
      src: Prod1,
      alt: "GunaLife Beckham Stack Pro 90-Day Supply with Free Welcome Kit",
      isCustomCard: true
    },
    {
      id: 1,
      title: "David Beckham Daily GunaLife Ritual",
      src: Prod2,
      alt: "David Beckham preparing the daily GunaLife stack ritual",
      isCustomCard: false
    },
    {
      id: 2,
      title: "Clinically Proven GunaLife Results",
      src: Prod3,
      alt: "Clinical trial results and third-party validation for GunaLife",
      isCustomCard: false
    },
    {
      id: 3,
      title: "GunaLife Science & Trademarks",
      src: Prod4,
      alt: "GunaLife scientific advisory board and trademarked longevity actives",
      isCustomCard: false
    },
    {
      id: 4,
      title: "Full GunaLife Supplement Facts",
      src: Prod5,
      alt: "Complete GunaLife nutrition label and active ingredients list",
      isCustomCard: false
    },
    {
      id: 5,
      title: "GunaLife vs Traditional 16+ Pill Protocols",
      src: Prod6,
      alt: "GunaLife vs Traditional 16+ Pill Protocols",
      isCustomCard: false
    }
  ];

  const handlePrev = () => {
    setSelectedImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const currentImage = images[selectedImageIndex];

  return (
    <div className="w-full space-y-3">
      {/* Featured Main Visual */}
      <div className="relative w-full rounded-2xl overflow-hidden bg-[var(--bg-warm)] border border-[var(--border-warm)] shadow-sm flex flex-col justify-between transition-all duration-300">
        
        {/* If custom quarterly card view */}
        {currentImage.isCustomCard ? (
          <div className="p-5 sm:p-6 flex flex-col items-center text-center">
            {/* Top pill badge */}
            <div className="inline-block px-3 py-0.5 bg-[var(--bg-muted)] text-[var(--brand-primary)] text-[10px] sm:text-[11px] font-bold tracking-[0.18em] uppercase rounded-full mb-2.5 border border-[var(--border-muted)]">
              {currentImage.tag}
            </div>

            {/* Headline */}
            <h2 className="font-serif text-xl sm:text-2xl text-[var(--brand-primary)] font-normal leading-[1.2] max-w-sm tracking-tight mb-4">
              More energy. Better gut health. Improved sleep. Healthy aging.
            </h2>

            {/* Stack Image */}
            <div className="relative w-full max-w-[380px] my-1 transition-transform duration-500 hover:scale-[1.02]">
              <img
                src={currentImage.src}
                alt={currentImage.alt}
                className="w-full h-auto object-contain max-h-[290px] drop-shadow-md mx-auto"
                loading="eager"
              />
            </div>

            {/* Welcome kit promotional callout */}
            <div className="w-full pt-3 border-t border-[var(--border-warm)] mt-2">
              <div className="font-serif text-lg sm:text-xl text-[var(--brand-primary)] font-normal tracking-tight">
                US$80 Welcome kit—On Us.
              </div>
              <p className="text-[11px] text-[var(--text-muted)] italic mt-0.5 mb-3">
                Three complimentary gifts with your GunaLife stack.
              </p>

              {/* 3 Gift items */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 max-w-sm mx-auto text-center">
                <div className="flex flex-col items-center">
                  <div className="text-[10px] font-bold text-[var(--brand-primary)] leading-tight">
                    Signature Red Cup
                  </div>
                  <div className="text-[10px] font-extrabold text-[var(--brand-teal)] uppercase tracking-wider mt-0.5">
                    US$44 VALUE
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="text-[10px] font-bold text-[var(--brand-primary)] leading-tight">
                    Luxe Edition Mixer
                  </div>
                  <div className="text-[10px] font-extrabold text-[var(--brand-teal)] uppercase tracking-wider mt-0.5">
                    US$18 VALUE
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="text-[10px] font-bold text-[var(--brand-primary)] leading-tight">
                    5x Single-Serve Sachets
                  </div>
                  <div className="text-[10px] font-extrabold text-[var(--brand-teal)] uppercase tracking-wider mt-0.5">
                    US$18 VALUE
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Standard photo display */
          <div className="p-4 sm:p-5 flex items-center justify-center min-h-[380px] sm:min-h-[440px]">
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className="w-full h-auto max-h-[440px] object-contain rounded-xl drop-shadow-sm transition-all duration-300"
            />
          </div>
        )}

        {/* Prev / Next floating overlay arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-[var(--brand-primary)] shadow-md flex items-center justify-center transition-all hover:scale-105 border border-[var(--border-cream)]"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-[var(--brand-primary)] shadow-md flex items-center justify-center transition-all hover:scale-105 border border-[var(--border-cream)]"
          aria-label="Next image"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Thumbnails Carousel */}
      <div className="relative flex items-center gap-2">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 w-full">
          {images.map((img, idx) => (
            <button
              key={img.id}
              onClick={() => setSelectedImageIndex(idx)}
              className={`relative flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border-2 transition-all duration-200 bg-[var(--bg-warm)] cursor-pointer ${
                selectedImageIndex === idx
                  ? 'border-[var(--brand-primary)] shadow-md scale-[1.03]'
                  : 'border-[var(--border-warm)] opacity-75 hover:opacity-100 hover:border-[var(--brand-primary)]/50'
              }`}
              title={img.title}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>

        {/* Small next arrow */}
        <button
          onClick={handleNext}
          className="flex-shrink-0 w-7 h-7 rounded-full border border-[var(--border-warm)] bg-white hover:bg-[var(--bg-warm)] text-[var(--brand-primary)] flex items-center justify-center transition-colors shadow-sm cursor-pointer"
          aria-label="Next thumbnail"
        >
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* View Nutrition Label Button */}
      <div className="pt-0.5 flex justify-center">
        <button
          onClick={onOpenNutritionModal}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[var(--brand-primary)] hover:text-[var(--brand-teal)] transition-colors py-1.5 px-4 rounded-full border border-[var(--border-warm)] bg-white hover:bg-[var(--bg-warm)] shadow-xs cursor-pointer"
        >
          <FileText className="w-4 h-4 text-[var(--brand-teal)]" />
          <span>View GunaLife Nutrition Label</span>
        </button>
      </div>
    </div>
  );
};

export default ProductGallery;
