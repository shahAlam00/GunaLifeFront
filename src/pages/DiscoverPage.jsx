import React from 'react';
import { Link } from 'react-router-dom';

const articles = [
  {
    id: 1,
    tag: 'SCIENCE',
    title: "What are the 12 Hallmarks of Aging \u2014 and how does GunaLife target them?",
    excerpt: "Aging isn't a single process. Scientists have identified 12 distinct biological drivers of aging. Here's how our formula addresses each one.",
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    readTime: '6 min read',
  },
  {
    id: 2,
    tag: 'PERFORMANCE',
    title: "How Giannis uses GunaLife to recover faster between games",
    excerpt: "Playing 82+ games a season demands elite recovery. Giannis shares how his morning routine with GunaLife changed his preparation.",
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=800',
    readTime: '4 min read',
  },
  {
    id: 3,
    tag: 'NUTRITION',
    title: "Why most multivitamins don't work \u2014 and what makes GunaLife different",
    excerpt: "Not all supplements are created equal. We break down the bioavailability gap and why form, dose, and co-factors matter more than label claims.",
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800',
    readTime: '5 min read',
  },
  {
    id: 4,
    tag: 'WELLNESS',
    title: "The 5-minute morning ritual that world-class performers swear by",
    excerpt: "From cold water to sunlight to the Beckham Stack \u2014 the simple habits that separate good mornings from great ones.",
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800',
    readTime: '3 min read',
  },
  {
    id: 5,
    tag: 'LONGEVITY',
    title: "NMN and NAD+: The molecule at the centre of the longevity revolution",
    excerpt: "NAD+ declines with age. NMN helps restore it. Here's what the research actually says \u2014 and why we include 250mg in every serving.",
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=800',
    readTime: '7 min read',
  },
  {
    id: 6,
    tag: 'COMMUNITY',
    title: "Wall of Health: 1,000 stories of transformation",
    excerpt: "From marathon runners to new parents to retirees \u2014 real people sharing what changed when they started their GunaLife journey.",
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800',
    readTime: '2 min read',
  },
];

const tagColors = {
  SCIENCE: 'bg-blue-50 text-blue-700 border-blue-200',
  PERFORMANCE: 'bg-orange-50 text-orange-700 border-orange-200',
  NUTRITION: 'bg-green-50 text-green-700 border-green-200',
  WELLNESS: 'bg-purple-50 text-purple-700 border-purple-200',
  LONGEVITY: 'bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] border-[var(--brand-primary)]/20',
  COMMUNITY: 'bg-yellow-50 text-yellow-700 border-yellow-200',
};

const DiscoverPage = () => {
  return (
    <main className="min-h-screen bg-[var(--bg-cream)]">

      {/* Hero */}
      <section className="w-full bg-[var(--brand-primary)] text-white py-20 px-4 sm:px-8 text-center">
        <div className="max-w-[1280px] mx-auto space-y-4">
          <p className="text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase text-white/70">
            STORIES, SCIENCE & INSIGHTS
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal leading-tight">
            Discover
          </h1>
          <p className="text-sm sm:text-base text-white/80 font-light max-w-xl mx-auto">
            Deep dives into the science, the community, and the habits behind peak human performance.
          </p>
        </div>
      </section>

      {/* Featured article */}
      <section className="w-full py-14 px-4 sm:px-8">
        <div className="max-w-[1280px] mx-auto">
          <a href="#article-1" className="group grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-[var(--border-warm)] shadow-lg hover:shadow-xl transition-shadow">
            <div className="h-64 lg:h-auto overflow-hidden">
              <img
                src={articles[0].image}
                alt={articles[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="bg-[var(--bg-warm)] p-8 sm:p-12 flex flex-col justify-center space-y-4">
              <span className={`inline-block px-3 py-1 rounded-full text-[9px] font-bold tracking-wider uppercase border ${tagColors[articles[0].tag]}`}>
                {articles[0].tag}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--brand-primary)] leading-tight group-hover:underline">
                {articles[0].title}
              </h2>
              <p className="text-xs sm:text-sm text-[var(--brand-primary)]/80 leading-relaxed">{articles[0].excerpt}</p>
              <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--brand-primary)]/50">{articles[0].readTime}</p>
            </div>
          </a>
        </div>
      </section>

      {/* Article grid */}
      <section className="w-full pb-16 px-4 sm:px-8">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.slice(1).map((article) => (
            <a
              key={article.id}
              href={`#article-${article.id}`}
              className="group bg-white border border-[var(--border-cream)] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 space-y-3">
                <span className={`inline-block px-2.5 py-0.5 rounded-full text-[9px] font-bold tracking-wider uppercase border ${tagColors[article.tag]}`}>
                  {article.tag}
                </span>
                <h3 className="font-serif text-base font-bold text-[var(--brand-primary)] leading-tight group-hover:underline line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-[11px] text-[var(--brand-primary)]/70 leading-relaxed line-clamp-3">{article.excerpt}</p>
                <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--brand-primary)]/40">{article.readTime}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

    </main>
  );
};

export default DiscoverPage;
