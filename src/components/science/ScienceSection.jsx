
import React from "react";

const scienceImage =
  "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1000&q=85";

export default function ScienceSection() {
  return (
    <>
      <style>{`
        .im8-science,
        .im8-science * {
          box-sizing: border-box;
        }

        .im8-science {
          --science-text: var(--brand-deep);

          position: relative;
          isolation: isolate;
          width: 100%;
          overflow: hidden;
          padding: 46px 24px 78px;
          color: var(--science-text);

          background:
            radial-gradient(
              ellipse at 20% 45%,
              rgba(255, 225, 188, 0.76) 0%,
              transparent 49%
            ),
            radial-gradient(
              ellipse at 78% 50%,
              rgba(255, 248, 234, 0.62) 0%,
              transparent 43%
            ),
            linear-gradient(
              105deg,
              var(--bg-warm) 0%,
              var(--bg-muted) 50%,
              var(--bg-warm) 100%
            );
        }

        .im8-science__inner {
          width: 100%;
          max-width: 888px;
          margin-inline: auto;

          display: grid;
          grid-template-columns: minmax(0, 1fr) 435px;
          align-items: center;
          column-gap: 90px;
        }

        .im8-science__content {
          width: 100%;
          max-width: 358px;
          min-width: 0;
        }

        .im8-science__heading {
          margin: 0 0 19px;
          color: var(--science-text);

          font-family: Georgia, "Times New Roman", serif;
          font-size: 32px;
          font-weight: 400;
          line-height: 0.99;
          letter-spacing: -0.85px;
        }

        .im8-science__description {
          margin: 0;
          color: var(--science-text);

          font-family: Arial, Helvetica, sans-serif;
          font-size: 12.5px;
          font-weight: 400;
          line-height: 1.4;
          letter-spacing: -0.12px;
        }

        .im8-science__visual {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          overflow: hidden;
          border-radius: 13px;
          background-color: var(--border-cream);
        }

        .im8-science__image {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 500ms ease;
        }

        @media (hover: hover) and (pointer: fine) {
          .im8-science__visual:hover .im8-science__image {
            transform: scale(1.025);
          }
        }

        /* Laptop */
        @media (max-width: 1100px) {
          .im8-science {
            padding-inline: 40px;
          }

          .im8-science__inner {
            max-width: 900px;
            grid-template-columns:
              minmax(0, 0.9fr)
              minmax(0, 1.1fr);
            column-gap: clamp(35px, 6vw, 75px);
          }

          .im8-science__heading {
            font-size: clamp(27px, 3vw, 32px);
          }

          .im8-science__description {
            line-height: 1.5;
          }
        }

        /* Tablet and mobile */
        @media (max-width: 640px) {
          .im8-science {
            padding: 42px 22px 46px;
          }

          .im8-science__inner {
            max-width: 480px;
            grid-template-columns: minmax(0, 1fr);
            row-gap: 27px;
          }

          .im8-science__content {
            max-width: 100%;
          }

          .im8-science__heading {
            max-width: 360px;
            margin-bottom: 17px;
            font-size: clamp(29px, 7.5vw, 35px);
            line-height: 1.03;
            letter-spacing: -0.7px;
          }

          .im8-science__description {
            font-size: 14px;
            line-height: 1.65;
            letter-spacing: 0;
          }

          .im8-science__visual {
            aspect-ratio: 1 / 0.92;
            border-radius: 12px;
          }
        }

        /* Small phones */
        @media (max-width: 380px) {
          .im8-science {
            padding: 34px 17px 38px;
          }

          .im8-science__inner {
            row-gap: 22px;
          }

          .im8-science__heading {
            font-size: 29px;
          }

          .im8-science__description {
            font-size: 13px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .im8-science__image {
            transition: none;
          }
        }
      `}</style>

      <section
        className="im8-science"
        aria-labelledby="im8-science-heading"
      >
        <div className="im8-science__inner">
          <div className="im8-science__content">
            <h2
              className="im8-science__heading"
              id="im8-science-heading"
            >
              Science at the Heart
              <br />
              of GunaLife
            </h2>

            <p className="im8-science__description">
              We are committed to using premium ingredients that are
              clinically validated for effectiveness. Our formulations
              undergo rigorous third-party testing, including NSF
              Certified for Sport verification, to ensure safety,
              purity, and performance. This certification tests for
              over 280 banned substances, heavy metals, and
              contaminants while verifying ingredient dosages to
              match the label. This dedication to quality ensures
              that every product we offer meets the highest standards,
              giving you the confidence that you're receiving
              scientifically backed premium nutrition you can trust.
            </p>
          </div>

          <div className="im8-science__visual">
            <img
              className="im8-science__image"
              src={scienceImage}
              alt="Scientists conducting research in a laboratory"
              width="435"
              height="435"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>
    </>
  );
}
