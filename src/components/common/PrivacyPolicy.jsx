import React from 'react';

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[var(--bg-cream)] text-[var(--text-on-cream)] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-[var(--bg-warm)] border border-[var(--border-warm)] rounded-2xl shadow-sm p-6 sm:p-10 lg:p-12">
        
        {/* Header Section */}
        <div className="border-b border-[var(--border-warm)] pb-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-heading-dark)] tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-[var(--text-muted)]">
            Last updated: October 2026
          </p>
        </div>

        {/* Introduction */}
        <div className="prose max-w-none text-[var(--text-on-cream)] space-y-4 text-base leading-relaxed mb-8">
          <p>
            By accessing or using our website, you acknowledge this Privacy Policy. Where consent is legally required, we will request it separately.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8 text-[var(--text-on-cream)]">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[var(--text-heading-dark)]">
              1. Information We Collect
            </h2>
            <p className="text-[var(--text-muted)]">We may collect the following categories of information:</p>
            <div className="space-y-2 pl-4 border-l-2 border-[var(--brand-teal)]">
              <div>
                <strong className="text-[var(--text-heading-dark)]">Personal information</strong>
                <ul className="list-disc list-inside mt-1 space-y-1 text-[var(--text-muted)]">
                  <li>Name, email address and mobile number.</li>
                  <li>Billing address and shipping address.</li>
                  <li>Order details, purchase history and customer service communications.</li>
                </ul>
              </div>
              <div className="pt-2">
                <strong className="text-[var(--text-heading-dark)]">Payment information</strong>
                <p className="text-[var(--text-muted)] mt-1">
                  Payments are processed through the payment providers available at checkout. We may receive payment status, transaction references and related information required to manage your order. We do not intend to store complete payment card details on our own systems.
                </p>
              </div>
              <div className="pt-2">
                <strong className="text-[var(--text-heading-dark)]">Technical information</strong>
                <p className="text-[var(--text-muted)] mt-1">
                  When you visit our website, we may collect information such as your IP address, browser type, device information, pages visited, referring websites and interactions with our online store.
                </p>
              </div>
              <div className="pt-2">
                <strong className="text-[var(--text-heading-dark)]">Communication and marketing information</strong>
                <p className="text-[var(--text-muted)] mt-1">
                  If you contact us through email, Instagram, WhatsApp or other available channels, we may collect the information you provide. If you subscribe to marketing communications, we may use your contact details to send product updates, offers and relevant announcements, subject to applicable consent requirements.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[var(--text-heading-dark)]">
              2. How We Use Your Information
            </h2>
            <p className="text-[var(--text-muted)]">We may use your information to:</p>
            <ul className="list-disc list-inside space-y-1 pl-4 text-[var(--text-muted)]">
              <li>Process, confirm and deliver orders.</li>
              <li>Process payments, cancellations, returns and eligible refunds.</li>
              <li>Provide customer support and respond to enquiries.</li>
              <li>Send order confirmations, shipping updates and important service notifications.</li>
              <li>Improve our website, products, customer experience and store performance.</li>
              <li>Detect fraud, prevent unauthorised transactions and protect website security.</li>
              <li>Send promotional communications where permitted and where required consent has been obtained.</li>
              <li>Comply with applicable legal, accounting, tax and regulatory obligations.</li>
            </ul>
            <p className="text-[var(--text-muted)] pt-2">
              We will not use personal information for unrelated purposes without an appropriate lawful basis.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[var(--text-heading-dark)]">
              3. Cookies and Tracking Technologies
            </h2>
            <p className="text-[var(--text-muted)]">
              Our website may use cookies and similar technologies to maintain shopping-cart functionality, remember preferences, understand website usage and measure advertising performance.
            </p>
            <p className="text-[var(--text-muted)]">
              Depending on our active website configuration, these technologies may include Shopify analytics, Google Analytics, Meta advertising tools or other third-party services.
            </p>
            <p className="text-[var(--text-muted)]">
              You can manage available cookie preferences through our website's cookie controls and your browser settings. Where consent is required, non-essential tracking technologies will be handled in accordance with applicable requirements.
            </p>
            <p className="text-[var(--text-muted)]">
              Disabling certain cookies may affect some website features.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[var(--text-heading-dark)]">
              4. How We Share Information
            </h2>
            <p className="text-[var(--text-muted)]">We may share relevant information with trusted service providers when necessary to operate our business, including:</p>
            <ul className="list-disc list-inside space-y-1 pl-4 text-[var(--text-muted)]">
              <li><strong className="text-[var(--text-heading-dark)]">Shopify:</strong> to host and operate our online store.</li>
              <li><strong className="text-[var(--text-heading-dark)]">Payment providers:</strong> to process transactions.</li>
              <li><strong className="text-[var(--text-heading-dark)]">Courier and logistics partners:</strong> to deliver orders and provide tracking.</li>
              <li><strong className="text-[var(--text-heading-dark)]">Analytics and advertising providers:</strong> to measure website performance and campaigns, where enabled.</li>
              <li><strong className="text-[var(--text-heading-dark)]">Customer communication providers:</strong> to respond to enquiries and send permitted communications.</li>
              <li><strong className="text-[var(--text-heading-dark)]">Professional advisers and authorities:</strong> where required for legal compliance, fraud prevention or the protection of legal rights.</li>
            </ul>
            <p className="text-[var(--text-muted)] pt-2">
              We do not sell customer personal information as a standalone business activity. Service providers may process information according to their own applicable privacy terms and their arrangements with us.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[var(--text-heading-dark)]">
              5. Data Security and Retention
            </h2>
            <p className="text-[var(--text-muted)]">
              We use reasonable administrative, technical and organisational measures intended to protect personal information from unauthorised access, loss, misuse or disclosure.
            </p>
            <p className="text-[var(--text-muted)]">
              No method of online transmission or electronic storage can be guaranteed to be completely secure.
            </p>
            <p className="text-[var(--text-muted)]">
              We retain information for as long as reasonably necessary to fulfil the purposes described in this policy, including order fulfilment, customer support, legal compliance, accounting and dispute resolution. Information that is no longer required will be deleted or otherwise handled in accordance with applicable requirements, subject to lawful retention obligations.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[var(--text-heading-dark)]">
              6. Your Privacy Rights and Choices
            </h2>
            <p className="text-[var(--text-muted)]">Subject to applicable law, you may request to:</p>
            <ul className="list-disc list-inside space-y-1 pl-4 text-[var(--text-muted)]">
              <li>Access personal information associated with you.</li>
              <li>Correct inaccurate or incomplete information.</li>
              <li>Withdraw consent for processing where processing relies on consent.</li>
              <li>Request deletion of personal information where legally applicable.</li>
              <li>Unsubscribe from promotional emails or messages.</li>
              <li>Raise a privacy concern or complaint.</li>
            </ul>
            <p className="text-[var(--text-muted)] pt-2">
              Withdrawing consent does not affect processing that is independently required or authorised by law. We may need to retain certain transaction records for legal or accounting purposes.
            </p>
            <p className="text-[var(--text-muted)]">
              To exercise a privacy right, please contact us using the details provided in the Contact Us section.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[var(--text-heading-dark)]">
              7. Third-Party Websites and Services
            </h2>
            <p className="text-[var(--text-muted)]">
              Our website or communications may contain links to third-party websites, social media platforms, payment services or other external services. These services have their own privacy practices.
            </p>
            <p className="text-[var(--text-muted)]">
              GUNALIFE is not responsible for the privacy policies or security practices of third-party websites that we do not operate. We encourage you to review their policies before sharing personal information.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[var(--text-heading-dark)]">
              8. International Data Processing
            </h2>
            <p className="text-[var(--text-muted)]">
              Some service providers may process or store information outside India. Where this occurs, we will handle such processing in accordance with applicable legal requirements and relevant service-provider arrangements.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[var(--text-heading-dark)]">
              9. Children's Privacy
            </h2>
            <p className="text-[var(--text-muted)]">
              Our website and products are intended for adults and are not knowingly directed at children under 18 for independent purchases. We do not knowingly collect children's personal information in circumstances where parental consent or other legal authorisation is required.
            </p>
            <p className="text-[var(--text-muted)]">
              If you believe a child has provided personal information improperly, please contact us so that we can review the matter and take appropriate action.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[var(--text-heading-dark)]">
              10. Health and Product Information
            </h2>
            <p className="text-[var(--text-muted)]">
              GUNALIFE products are positioned for nutritional wellness and are not a substitute for professional medical advice, diagnosis or treatment.
            </p>
            <p className="text-[var(--text-muted)]">
              Please do not submit unnecessary sensitive medical information through our website, social media or customer-support channels. If you voluntarily share information relevant to a product enquiry, we will handle it for the stated purpose and in accordance with applicable law.
            </p>
          </section>

          {/* Section 11 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[var(--text-heading-dark)]">
              11. Changes to This Privacy Policy
            </h2>
            <p className="text-[var(--text-muted)]">
              We may update this Privacy Policy to reflect changes in our business practices, website technology, service providers or applicable legal requirements.
            </p>
            <p className="text-[var(--text-muted)]">
              The revised policy will be published on this page with an updated “Last updated” date. We encourage customers to review this page periodically.
            </p>
          </section>

          {/* Section 12 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[var(--text-heading-dark)]">
              12. Contact Us and Privacy Complaints
            </h2>
            <p className="text-[var(--text-muted)]">
              For questions, privacy requests or complaints relating to this policy, please contact:
            </p>
            <div className="bg-[var(--bg-cream)] p-4 rounded-xl border border-[var(--border-warm)] space-y-1 text-[var(--text-on-cream)]">
              <p className="font-semibold text-[var(--brand-primary)]">Gunalife.com</p>
              <p>Email - <a href="mailto:info@gunalife.com" className="text-[var(--brand-teal)] hover:underline">info@gunalife.com</a></p>
            </div>
            <p className="text-[var(--text-muted)] pt-1">
              Please include sufficient details about your request so that we can identify the relevant information and respond appropriately.
            </p>
            <p className="text-[var(--text-muted)]">
              We will review and address privacy requests and complaints within the timeframes required by applicable law.
            </p>
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

export default PrivacyPolicy;