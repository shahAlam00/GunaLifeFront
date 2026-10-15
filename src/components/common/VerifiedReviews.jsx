import React, { useState } from 'react';

const VerifiedReviews = () => {
    const [showMore, setShowMore] = useState(false);

    const initialReviews = [
        { id: 1, author: "Peter Portilla", time: "8 hours ago", title: "Architect dad of 3 \"Juice\"", text: "This product is the best, I work as an Architect and the focus and sustained energy it provides is exactly what I need...", replyTime: "8 hours ago" },
        { id: 2, author: "Scott Frizzell", time: "12 hours ago", title: "Been taking the Beckham stack for 3...", text: "Been taking the Beckham stack for 3 months now - I'm finding my energy levels and mental clarity have increased noticeably. Sleep has been great too!!", replyTime: "9 hours ago" },
        { id: 3, author: "Bryn", time: "1 day ago", title: "Positive impact", text: "This product has improved my overall health. For someone with a lot of allergies this product is amazing absolutely no negative side effects.", replyTime: "1 day ago" },
        { id: 4, author: "Richard Akante", time: "2 days ago", title: "Great brand", text: "Great brand! In addition outstanding customer service team; sharp and responsive, with a solution in hand.", replyTime: "2 days ago" },
        { id: 5, author: "Robbie J", time: "4 days ago", title: "Have been taking GunaLife for a few weeks...", text: "Have been taking GunaLife for a few weeks now. So much easier than other supplements to take each morning. Better taste, easy to store and take on trips.", replyTime: "4 days ago" },
        { id: 6, author: "Eva", time: "5 days ago", title: "excellent human customer service", text: "excellent human customer service! I think the product is good but not 100% I saw significant results but overall I like the product.", replyTime: "4 days ago" },
        { id: 7, author: "Aygul Ibragimova", time: "5 days ago", title: "GunaLife has changed my life", text: "A great product that has changed my life. I have been sleeping well since I started on the GunaLife Beckham stack, and that leads to more energy, better focus.", replyTime: "5 days ago" },
        { id: 8, author: "Laura", time: "5 days ago", title: "I was really intrigued by this product...", text: "I was really intrigued by this product and the fact that there are so many nutrients in one serving so that I could eliminate some of my other subscriptions.", replyTime: "5 days ago" },
    ];

    const extraReviews = [
        { id: 9, author: "Marcus Vance", time: "6 days ago", title: "Sustained focus all day long", text: "Replacing multiple supplement bottles with just one GunaLife scoop has been a game changer for my daily workflow.", replyTime: "6 days ago" },
        { id: 10, author: "Sarah Jenkins", time: "1 week ago", title: "Best morning routine upgrade", text: "Taste is surprisingly pleasant and mixing it in cold water feels so refreshing every morning.", replyTime: "6 days ago" },
    ];

    const displayedReviews = showMore ? [...initialReviews, ...extraReviews] : initialReviews;

    return (
        <section className="w-full bg-[var(--bg-cream)] text-[var(--brand-primary)] py-16 px-4 sm:px-6 md:px-12 select-none border-t border-[var(--border-cream)]">
            <div className="max-w-[1280px] mx-auto space-y-10">

                <div className="text-center space-y-3">
                    <span className="inline-block px-4 py-1 rounded-full bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase">
                        VERIFIED REVIEWS
                    </span>
                    <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-normal text-[#1A1A1A] leading-tight">
                        The Clinical Trial said 95% felt more energy. <br className="hidden sm:inline" />
                        <span className="italic font-light text-[var(--brand-primary)]">
                            Here's what that actually feels like.
                        </span>
                    </h2>
                </div>

                <div className="flex flex-col items-center justify-center space-y-1.5 pt-2">
                    <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-black">Excellent</span>
                        <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                                <div key={i} className="w-5 h-5 bg-[#00B67A] flex items-center justify-center text-white text-xs font-bold rounded-xs">★</div>
                            ))}
                        </div>
                    </div>
                    <p className="text-[11px] text-gray-600 font-medium">
                        Rated <span className="font-bold text-black">4.5</span> / 5 based on <span className="underline font-bold text-black">2,030 reviews</span> on <span className="font-bold text-black">★ Trustpilot</span>
                    </p>
                </div>

                <div className="max-w-[1100px] mx-auto">
                    <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider">Showing our 5 star reviews</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[1100px] mx-auto">
                    {displayedReviews.map((review) => (
                        <div
                            key={review.id}
                            className="bg-white border border-[var(--border-cream)] rounded-lg p-4 flex flex-col justify-between shadow-2xs hover:shadow-md transition-shadow duration-200"
                        >
                            <div className="space-y-3">
                                <div className="flex items-center gap-0.5">
                                    {[...Array(5)].map((_, i) => (
                                        <div key={i} className="w-4 h-4 bg-[#00B67A] flex items-center justify-center text-white text-[9px] font-bold rounded-2xs">★</div>
                                    ))}
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-gray-900 leading-snug">{review.author}</h4>
                                    <p className="text-[10px] text-gray-400">{review.time}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-xs font-bold text-black leading-snug line-clamp-1">{review.title}</p>
                                    <p className="text-[11px] text-gray-600 leading-relaxed font-normal line-clamp-4">{review.text}</p>
                                </div>
                            </div>

                            <div className="pt-3 mt-3 border-t border-gray-100 space-y-2">
                                <div className="flex items-center justify-between text-[10px] text-gray-500 bg-[#F9F9F9] p-2 rounded-xs border-l-2 border-[#00B67A]">
                                    <div className="flex items-center gap-1 font-medium">
                                        <span className="text-[#00B67A]">↳</span>
                                        <span>Reply from <strong className="text-black">GunaLife</strong></span>
                                    </div>
                                    <span className="text-[9px] text-gray-400">{review.replyTime}</span>
                                </div>
                                <button className="text-[10px] text-[#00B67A] font-bold hover:underline block">Read more</button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center pt-4">
                    <button
                        onClick={() => setShowMore(!showMore)}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[var(--brand-primary)] text-[var(--brand-primary)] hover:bg-[var(--brand-primary)] hover:text-white transition-all duration-200 text-xs font-bold tracking-wider uppercase shadow-2xs active:scale-95 cursor-pointer"
                    >
                        {showMore ? 'SHOW FEWER REVIEWS' : 'SHOW MORE REVIEWS'}
                        <span className="text-xs">{showMore ? '▲' : '▼'}</span>
                    </button>
                </div>

            </div>
        </section>
    );
};

export default VerifiedReviews;
