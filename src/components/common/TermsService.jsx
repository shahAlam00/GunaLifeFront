import React from 'react';

function TermsService() {
  return (
    <div className="min-h-screen bg-[var(--bg-cream)] text-[var(--text-on-cream)] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-[var(--bg-warm)] border border-[var(--border-warm)] rounded-2xl shadow-sm p-6 sm:p-10 lg:p-12">
        
        {/* Header Section */}
        <div className="border-b border-[var(--border-warm)] pb-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-heading-dark)] tracking-tight">
            Terms of Service & Store Policies
          </h1>
          <p className="mt-2 text-sm text-[var(--text-muted)]">
            Last updated: October 2026
          </p>
        </div>

        {/* Overview Navigation / Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div className="p-4 bg-[var(--bg-cream)] rounded-xl border border-[var(--border-warm)] shadow-xs">
            <h3 className="font-bold text-[var(--brand-primary)] text-base mb-1">Terms of Service</h3>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              Website use, orders, pricing, product information, and applicable limitations.
            </p>
          </div>
          <div className="p-4 bg-[var(--bg-cream)] rounded-xl border border-[var(--border-warm)] shadow-xs">
            <h3 className="font-bold text-[var(--brand-primary)] text-base mb-1">Shipping Policy</h3>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              Dispatch timelines, delivery estimates, tracking, shipping charges, and delivery issues.
            </p>
          </div>
          <div className="p-4 bg-[var(--bg-cream)] rounded-xl border border-[var(--border-warm)] shadow-xs">
            <h3 className="font-bold text-[var(--brand-primary)] text-base mb-1">Return & Refund Policy</h3>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              Eligibility, damaged or incorrect products, cancellation deadlines, and refund timelines.
            </p>
          </div>
          <div className="p-4 bg-[var(--bg-cream)] rounded-xl border border-[var(--border-warm)] shadow-xs">
            <h3 className="font-bold text-[var(--brand-primary)] text-base mb-1">Contact & Grievance</h3>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              Official business contact details and a clear process for customer complaints.
            </p>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-10 text-[var(--text-on-cream)]">
          
          {/* Section 1: Terms of Service */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--text-heading-dark)] border-b border-[var(--border-warm)] pb-2">
              1. Terms of Service
            </h2>
            <p className="text-[var(--text-muted)] leading-relaxed">
              By accessing or using <span className="font-semibold text-[var(--brand-primary)]">Gunalife.com</span>, placing an order, or browsing our catalog, you agree to be bound by these Terms of Service. Please read them carefully before completing any transaction.
            </p>

            <div className="space-y-3 pl-2 sm:pl-4">
              <div>
                <h4 className="font-semibold text-[var(--text-heading-dark)]">A. Website Use & Account Security</h4>
                <p className="text-sm text-[var(--text-muted)] mt-1 leading-relaxed">
                  You agree to use this website only for lawful purposes. You are responsible for maintaining the confidentiality of your account credentials and for restricting access to your computer or mobile device.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[var(--text-heading-dark)]">B. Product Information & Disclaimers</h4>
                <p className="text-sm text-[var(--text-muted)] mt-1 leading-relaxed">
                  GUNALIFE products are positioned for general nutritional wellness and lifestyle optimization. Statements on this site have not been evaluated by regulatory medical authorities, and our products are not intended to diagnose, treat, cure, or prevent any disease. Always consult a qualified health professional before starting any new supplement regimen.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[var(--text-heading-dark)]">C. Orders, Pricing & Availability</h4>
                <p className="text-sm text-[var(--text-muted)] mt-1 leading-relaxed">
                  All prices listed are in INR (Indian Rupees) unless stated otherwise and are inclusive of applicable taxes. We reserve the right to modify prices, modify product specifications, or refuse or cancel orders due to stock unavailability, pricing errors, or suspected fraud.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[var(--text-heading-dark)]">D. Intellectual Property</h4>
                <p className="text-sm text-[var(--text-muted)] mt-1 leading-relaxed">
                  All trademarks, branding, logos, graphics, text content, and site architecture belong exclusively to GUNALIFE. Unauthorized reproduction, duplication, or redistribution is strictly prohibited.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Shipping Policy */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--text-heading-dark)] border-b border-[var(--border-warm)] pb-2">
              2. Shipping & Delivery Policy
            </h2>
            <div className="space-y-3 text-sm text-[var(--text-muted)] leading-relaxed pl-2 sm:pl-4">
              <p>
                <strong className="text-[var(--text-heading-dark)]">Dispatch Timelines:</strong> Standard orders are processed and dispatched within 1–2 business days (Monday through Saturday, excluding public holidays).
              </p>
              <p>
                <strong className="text-[var(--text-heading-dark)]">Delivery Estimates:</strong> Standard shipping typically takes 3–7 business days depending on your destination pin code within India. Remote or rural locations may take longer.
              </p>
              <p>
                <strong className="text-[var(--text-heading-dark)]">Tracking Your Order:</strong> Once dispatched, a tracking link and shipment details will be sent via SMS/WhatsApp or email. You can monitor live delivery status through the provided courier partner portal.
              </p>
              <p>
                <strong className="text-[var(--text-heading-dark)]">Shipping Charges:</strong> Shipping rates and free-shipping eligibility thresholds (if applicable) are displayed clearly at checkout prior to payment.
              </p>
              <p>
                <strong className="text-[var(--text-heading-dark)]">Delivery Issues & Unclaimed Packages:</strong> If a delivery fails due to an incorrect address or customer unavailability after multiple attempts, the package may return to our warehouse. Re-shipping charges may apply for re-dispatch.
              </p>
            </div>
          </section>

          {/* Section 3: Return, Cancellation & Refund Policy */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--text-heading-dark)] border-b border-[var(--border-warm)] pb-2">
              3. Return, Cancellation & Refund Policy
            </h2>
            <div className="space-y-3 text-sm text-[var(--text-muted)] leading-relaxed pl-2 sm:pl-4">
              <p>
                <strong className="text-[var(--text-heading-dark)]">Order Cancellation:</strong> You can cancel an order before it has been dispatched by contacting our support team at <a href="mailto:info@gunalife.com" className="text-[var(--brand-teal)] hover:underline font-medium">info@gunalife.com</a>. Once dispatched, orders cannot be cancelled mid-transit.
              </p>
              <p>
                <strong className="text-[var(--text-heading-dark)]">Return Eligibility:</strong> Due to hygiene and safety standards for wellness and nutritional products, we only accept returns or replacements for items that arrive damaged, defective, expired, or incorrect.
              </p>
              <p>
                <strong className="text-[var(--text-heading-dark)]">Damaged or Incorrect Items:</strong> If you receive a damaged or incorrect package, please report it within 48 hours of delivery with photos/unboxing videos of the package and invoice to <a href="mailto:info@gunalife.com" className="text-[var(--brand-teal)] hover:underline font-medium">info@gunalife.com</a>.
              </p>
              <p>
                <strong className="text-[var(--text-heading-dark)]">Refund Processing Timelines:</strong> Once approved, refunds are credited back to the original payment method within 5–7 business days, or issued as store credit as mutually agreed upon.
              </p>
            </div>
          </section>

          {/* Section 4: Contact & Grievance Information */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--text-heading-dark)] border-b border-[var(--border-warm)] pb-2">
              4. Contact & Grievance Information
            </h2>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              We aim to resolve all customer inquiries and concerns swiftly and transparently. For order queries, feedback, or official privacy and service grievances, please reach out through our official channels below:
            </p>

            <div className="bg-[var(--bg-cream)] p-5 rounded-xl border border-[var(--border-warm)] space-y-2 text-sm text-[var(--text-on-cream)] mt-3">
              <p className="font-bold text-base text-[var(--brand-primary)]">Gunalife.com</p>
              <p><strong className="text-[var(--text-heading-dark)]">Official Support Email:</strong> <a href="mailto:info@gunalife.com" className="text-[var(--brand-teal)] hover:underline font-medium">info@gunalife.com</a></p>
              <p><strong className="text-[var(--text-heading-dark)]">Response Time:</strong> Within 24–48 business hours</p>
              <p><strong className="text-[var(--text-heading-dark)]">Operating Hours:</strong> Monday – Saturday | 10:00 AM – 6:00 PM IST</p>
            </div>
          </section>

        </div>

        {/* Footer Brand Tagline */}
        <div className="mt-12 pt-6 border-t border-[var(--border-warm)] text-center">
          <p className="font-bold text-[var(--brand-primary)] tracking-wide">GUNALIFE Advanced Longevity</p>
          <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider mt-1">Perform. Transform. Sustain.</p>
        </div>

      </div>
    </div>
  );
}

export default TermsService;