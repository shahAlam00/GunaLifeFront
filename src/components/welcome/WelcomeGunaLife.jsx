
import React from "react";

export default function WelcomeGunaLife() {
  const dummyVideo = "/videos/gunalife-welcome.mp4";

  return (
    <section className="grid min-h-[620px] w-full grid-cols-1 overflow-hidden bg-[var(--brand-primary)] md:min-h-[700px] md:grid-cols-2 lg:h-screen lg:min-h-[650px] lg:max-h-[1000px]">
      {/* LEFT: Video */}
      <div className="relative min-h-[360px] overflow-hidden bg-[var(--brand-deep)] sm:min-h-[450px] md:min-h-full">
        <video
          className="absolute inset-0 h-full w-full object-cover object-center"
          src={dummyVideo}
          autoPlay
          muted
          loop
          playsInline
          controls
          preload="metadata"
          poster="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=85"
        >
          Your browser does not support HTML video.
        </video>

        {/* Subtle cinematic overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/5"
        />
      </div>

      {/* RIGHT: Welcome content */}
      <div className="relative isolate flex min-h-[470px] flex-col items-center justify-center overflow-hidden bg-[var(--brand-primary)] px-7 py-14 text-center sm:px-12 md:min-h-full md:px-8 lg:px-12 xl:px-16">
        {/* Botanical background texture */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_80%_15%,rgba(255,80,83,0.26),transparent_48%),linear-gradient(135deg,var(--brand-primary)_0%,var(--brand-primary)_60%,var(--brand-primary)_100%)]"
        />

        {/* Background botanical image */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-cover bg-center opacity-[0.16] mix-blend-screen"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1200&q=80')",
          }}
        />

        <div className="mx-auto flex w-full max-w-[540px] flex-col items-center">
          {/* Brand wordmark */}
          <div className="mb-12 font-serif text-[27px] font-normal tracking-[0.12em] text-white sm:mb-14 sm:text-[30px] lg:mb-16">
            GunaLife
          </div>

          {/* Heading */}
          <h1 className="mb-7 font-serif text-[clamp(43px,5vw,70px)] font-normal leading-[1.06] tracking-[-1.5px] text-[var(--text-blush)]">
            Welcome
            <br />
            to GunaLife
          </h1>

          {/* Description */}
          <div className="max-w-[390px] space-y-4 text-left font-sans text-[13px] leading-[1.55] text-white sm:text-[14px]">
            <p>
              Welcome to GunaLife, where thoughtful wellness meets
              a commitment to quality, transparency, and everyday
              well-being.
            </p>

            <p>
              Discover our approach to wellness, explore carefully
              considered ingredients, and learn more about the
              principles behind our products and formulations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
