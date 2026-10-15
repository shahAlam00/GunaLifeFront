import React from 'react';
import { ShieldCheck, Truck, Award } from 'lucide-react';

const TrustAnnouncementBar = () => {
  return (
    <div className="w-full bg-[var(--bg-warm)] border-b border-[var(--border-warm)] text-[var(--brand-primary)] text-xs font-medium py-2.5 px-4 select-none">
      <div className="max-w-[1240px] mx-auto flex flex-wrap items-center justify-center gap-6 sm:gap-10 tracking-tight">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[var(--brand-teal)]" />
          <span className="font-semibold">90-Day Money-Back Guarantee</span>
        </div>
        <div className="flex items-center gap-2">
          <Truck className="w-4 h-4 text-[var(--brand-teal)]" />
          <span className="font-semibold">Free Express Shipping</span>
        </div>
        <div className="flex items-center gap-2">
          <Award className="w-4 h-4 text-[var(--brand-teal)]" />
          <span className="font-semibold">NSF Certified for Sport</span>
        </div>
      </div>
    </div>
  );
};

export default TrustAnnouncementBar;
