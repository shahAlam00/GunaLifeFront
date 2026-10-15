
import React, { useEffect, useState } from "react";

const videos = [
  {
    id: 1,
    category: "Daily Wellness",
    title: "The GunaLife Smoothie",
    duration: "32 SECONDS",
    description:
      "Discover simple ways to make your daily wellness routine more enjoyable. Recipe inspiration included.",
    thumbnail:
      "https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=900&q=85",
    video: "/videos/gunalife-smoothie.mp4",
  },
  {
    id: 2,
    category: "Our Story",
    title: "What Is GunaLife?",
    duration: "28 SECONDS",
    description:
      "Discover the GunaLife philosophy and our approach to thoughtful everyday wellness.",
    thumbnail:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85",
    video: "/videos/gunalife-story.mp4",
  },
  {
    id: 3,
    category: "Our Story",
    title: "A Journey Towards Better Living",
    duration: "5 MINUTES",
    description:
      "Explore the people, experiences, and everyday inspiration behind a more thoughtful approach to wellness.",
    thumbnail:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85",
    video: "/videos/gunalife-journey.mp4",
  },
  {
    id: 4,
    category: "Daily Wellness",
    title: "Build Your Morning Ritual",
    duration: "45 SECONDS",
    description:
      "Explore simple morning habits that can help you create a more consistent daily routine.",
    thumbnail:
      "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=900&q=85",
    video: "/videos/morning-ritual.mp4",
  },
  {
    id: 5,
    category: "Science",
    title: "The Science Behind Ingredients",
    duration: "2 MINUTES",
    description:
      "Learn how ingredient research and careful selection inform the development of wellness products.",
    thumbnail:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=85",
    video: "/videos/ingredient-science.mp4",
  },
  {
    id: 6,
    category: "Daily Wellness",
    title: "Everyday Nutrition Made Simple",
    duration: "55 SECONDS",
    description:
      "Discover practical ways to approach nutrition and make more informed everyday choices.",
    thumbnail:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=85",
    video: "/videos/everyday-nutrition.mp4",
  },
  {
    id: 7,
    category: "Our Story",
    title: "Meet The GunaLife Team",
    duration: "3 MINUTES",
    description:
      "Get to know the people and values that shape the GunaLife wellness experience.",
    thumbnail:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85",
    video: "/videos/gunalife-team.mp4",
  },
  {
    id: 8,
    category: "Science",
    title: "Understanding Product Quality",
    duration: "90 SECONDS",
    description:
      "Explore ingredient transparency, quality-conscious development, and why product information matters.",
    thumbnail:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=85",
    video: "/videos/product-quality.mp4",
  },
  {
    id: 9,
    category: "Daily Wellness",
    title: "Small Habits, Everyday Wellness",
    duration: "40 SECONDS",
    description:
      "Find inspiration for building sustainable habits around movement, rest, nutrition, and self-care.",
    thumbnail:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=85",
    video: "/videos/everyday-habits.mp4",
  },
  {
    id: 10,
    category: "Science",
    title: "Exploring Nutritional Research",
    duration: "2 MINUTES",
    description:
      "Discover how scientific research helps us understand ingredients and evaluate nutrition-related evidence.",
    thumbnail:
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=900&q=85",
    video: "/videos/nutritional-research.mp4",
  },
];

const filters = [
  "All videos",
  "Daily Wellness",
  "Our Story",
  "Science",
];

function PlayIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="ml-1 h-5 w-5"
    >
      <path d="M7 4.8c0-.7.8-1.1 1.4-.7l11 7.2a.85.85 0 0 1 0 1.4l-11 7.2a.85.85 0 0 1-1.4-.7V4.8Z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
    >
      <path
        d="m6 6 12 12M18 6 6 18"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function VideoCard({ item, onPlay }) {
  return (
    <article className="group flex min-w-0 flex-col overflow-hidden rounded-[12px] bg-[var(--bg-warm)]">
      {/* Thumbnail */}
      <button
        type="button"
        onClick={() => onPlay(item)}
        aria-label={`Play video: ${item.title}`}
        className="relative block aspect-[1.59/1] w-full overflow-hidden bg-[var(--border-warm)] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--brand-primary)]"
      >
        <img
          src={item.thumbnail}
          alt=""
          width="900"
          height="566"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transition-none"
        />

        {/* Image contrast */}
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-black/5 transition-colors group-hover:bg-black/15"
        />

        {/* Category badge */}
        <span className="absolute left-3 top-3 rounded-full bg-[var(--bg-cream)]/95 px-3 py-[6px] font-mono text-[9px] font-medium uppercase leading-none tracking-[0.02em] text-[var(--brand-deep)] sm:left-3 sm:top-3">
          {item.category}
        </span>

        {/* Play button */}
        <span className="absolute left-1/2 top-1/2 flex h-[43px] w-[43px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[var(--brand-deep)] shadow-md transition-transform duration-300 group-hover:scale-110">
          <PlayIcon />
        </span>
      </button>

      {/* Text content */}
      <div className="flex flex-1 flex-col px-5 pb-6 pt-4 sm:px-[30px] sm:pb-7 sm:pt-[17px]">
        <h3 className="font-sans text-[16px] font-medium leading-[1.3] tracking-[-0.2px] text-[var(--brand-deep)] sm:text-[17px]">
          {item.title}
        </h3>

        <p className="mt-2 font-mono text-[10px] font-medium uppercase leading-[1.4] text-[var(--brand-deep)]">
          {item.duration}
        </p>

        <p className="mt-2 text-[12px] leading-[1.5] text-[var(--brand-deep)] sm:text-[12px]">
          {item.description}
        </p>
      </div>
    </article>
  );
}

export default function WelcomeVideos() {
  const [activeFilter, setActiveFilter] = useState("All videos");
  const [selectedVideo, setSelectedVideo] = useState(null);

  const visibleVideos =
    activeFilter === "All videos"
      ? videos
      : videos.filter((video) => video.category === activeFilter);

  useEffect(() => {
    if (!selectedVideo) return undefined;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedVideo(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedVideo]);

  return (
    <section className="min-h-screen w-full border-t-2 border-[var(--brand-deep)] bg-[radial-gradient(ellipse_at_50%_0%,var(--bg-cream)_0%,var(--bg-cream)_55%,var(--bg-cream)_100%)] px-4 pb-12 pt-10 text-[var(--brand-deep)] sm:px-7 sm:pb-16 sm:pt-12 lg:px-10 lg:pt-[66px]">
      <div className="mx-auto w-full max-w-[1400px]">
        {/* Category filters */}
        <nav
          aria-label="Filter videos by topic"
          className="mx-auto mb-10 flex w-fit max-w-full flex-wrap items-center justify-center gap-x-5 gap-y-3 rounded-full border border-[var(--border-warm)] bg-white/90 px-5 py-3 sm:mb-12 sm:gap-x-7 sm:px-8 sm:py-[11px] lg:mb-[60px]"
        >
          <span className="shrink-0 text-[13px] font-medium sm:text-[15px]">
            Sort by topic:
          </span>

          {filters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={isActive}
                className={`shrink-0 border-b pb-1 text-[13px] transition-colors duration-200 sm:text-[15px] ${
                  isActive
                    ? "border-[var(--brand-primary)] font-medium text-[var(--brand-deep)]"
                    : "border-transparent text-[var(--brand-deep)] hover:border-[var(--border-warm)]"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </nav>

        {/* Results count */}
        <div className="mb-4 flex items-center justify-between lg:hidden">
          <p className="text-xs text-[var(--brand-deep)]/70">
            {activeFilter === "All videos" ? "All videos" : activeFilter}
          </p>
          <span className="text-xs text-[var(--brand-deep)]/70">
            {visibleVideos.length} videos
          </span>
        </div>

        {/* Video cards */}
        <div
          className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-x-3 lg:gap-y-4 xl:gap-x-3"
          aria-live="polite"
        >
          {visibleVideos.map((item) => (
            <VideoCard
              key={item.id}
              item={item}
              onPlay={setSelectedVideo}
            />
          ))}
        </div>

        {visibleVideos.length === 0 && (
          <p className="py-16 text-center text-sm">
            No videos found in this category.
          </p>
        )}
      </div>

      {/* Video modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-8"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedVideo(null);
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selectedVideo.title}
            className="relative w-full max-w-[1000px] overflow-hidden rounded-xl bg-[var(--bg-warm)] shadow-2xl"
          >
            {/* Modal header */}
            <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
              <div className="min-w-0">
                <p className="font-mono text-[9px] uppercase tracking-wide text-[var(--brand-primary)]/75">
                  {selectedVideo.category}
                </p>
                <h2 className="truncate font-serif text-lg text-[var(--brand-deep)] sm:text-xl">
                  {selectedVideo.title}
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setSelectedVideo(null)}
                aria-label="Close video"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[var(--brand-deep)] transition-colors hover:bg-[var(--bg-warm)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]"
              >
                <CloseIcon />
              </button>
            </div>

            {/* HTML video player */}
            <video
              key={selectedVideo.id}
              src={selectedVideo.video}
              poster={selectedVideo.thumbnail}
              controls
              autoPlay
              playsInline
              preload="metadata"
              className="block max-h-[75vh] w-full bg-black object-contain"
            >
              Your browser does not support HTML video.
            </video>

            <div className="px-4 py-4 sm:px-6">
              <p className="text-sm leading-6 text-[var(--brand-deep)]">
                {selectedVideo.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
