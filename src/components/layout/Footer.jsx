import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            alert(`Thank you for subscribing, ${email}!`);
            setEmail('');
        }
    };

    return (
        <footer className="w-full bg-[var(--brand-deep)] text-[var(--text-on-dark)] font-sans pt-16 pb-8 px-6 md:px-12 lg:px-20 select-none">
            <div className="max-w-[1440px] mx-auto space-y-12">

                {/* Top Section */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6 text-xs">

                    <div className="space-y-3">
                        <h4 className="font-bold text-[11px] tracking-widest text-[var(--text-blush)] uppercase">SHOP</h4>
                        <ul className="space-y-2 text-[var(--text-on-dark)]/80 font-normal">
                          
                            <li><Link to="/beckham-stack" className="hover:text-white transition-colors">The Beckham Stack</Link></li>
                           
                            <li><Link to="/shop" className="hover:text-white transition-colors">Shop All</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-3">
                        <h4 className="font-bold text-[11px] tracking-widest text-[var(--text-blush)] uppercase">COMPANY</h4>
                        <ul className="space-y-2 text-[var(--text-on-dark)]/80 font-normal">
                            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>

                            <li><Link to="/science" className="hover:text-white transition-colors">Science</Link></li>

                        </ul>
                    </div>

                    <div className="space-y-3">
                        <h4 className="font-bold text-[11px] tracking-widest text-[var(--text-blush)] uppercase">LEARN</h4>
                        <ul className="space-y-2 text-[var(--text-on-dark)]/80 font-normal">
                            <li><Link to="/reviews" className="hover:text-white transition-colors">Reviews</Link></li>
                            <li><Link to="/ingredients" className="hover:text-white transition-colors">Ingredients</Link></li>
                            <li><Link to="/quality" className="hover:text-white transition-colors">Quality and Standards</Link></li>

                        </ul>
                    </div>

                    <div className="space-y-3">
                        <h4 className="font-bold text-[11px] tracking-widest text-[var(--text-blush)] uppercase">SUPPORT</h4>
                        <ul className="space-y-2 text-[var(--text-on-dark)]/80 font-normal">
                            <li><Link to="/welcome" className="hover:text-white transition-colors">Welcome from david</Link></li>

                        </ul>
                    </div>

                    <div className="space-y-3">
                        <h4 className="font-bold text-[11px] tracking-widest text-[var(--text-blush)] uppercase">GUNALIFE COMMUNITY</h4>
                        <ul className="space-y-2 text-[var(--text-on-dark)]/80 font-normal">
                         
                            <li><a href="#instagram" className="hover:text-white transition-colors">Instagram</a></li>
                            <li><a href="#facebook" className="hover:text-white transition-colors">Facebook</a></li>
                            <li><a href="#pinterest" className="hover:text-white transition-colors">Pinterest</a></li>

                        </ul>
                    </div>

                    <div className="col-span-2 md:col-span-1 lg:col-span-1 space-y-3">
                        <h4 className="font-bold text-[11px] tracking-wider text-[var(--text-blush)] uppercase leading-tight">
                            JOIN THE COMMUNITY FOR EXCLUSIVE WELLNESS INSIGHTS
                        </h4>
                        <form onSubmit={handleSubmit} className="space-y-2">
                            <input
                                type="email"
                                required
                                placeholder="EMAIL ADDRESS"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2.5 rounded-full bg-white text-black placeholder-gray-500 text-xs font-semibold focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="w-full py-2.5 rounded-full bg-[var(--brand-primary)] hover:bg-[var(--brand-light)] text-white font-bold text-xs uppercase tracking-wider transition-colors border border-white/20"
                            >
                                JOIN NOW
                            </button>
                        </form>
                        <p className="text-[9px] text-[var(--text-on-dark)]/60 leading-tight">
                            *By joining, you'll receive our wellness insights and can unsubscribe anytime.
                        </p>
                    </div>

                </div>

                {/* Giant Branding */}
<div className="text-center py-6 border-t border-b border-white/10 my-8">
    <div className="inline-flex flex-col items-center">
        <h1 className="font-serif text-5xl sm:text-7xl md:text-9xl lg:text-[120px] font-bold tracking-[0.15em] text-[var(--text-blush-alt)] uppercase leading-none">
            GUNALIFE
        </h1>

        <div className="flex items-center justify-center gap-3 sm:gap-5 mt-3 w-full">
            <span className="h-px w-8 sm:w-16 bg-pink-400"></span>

            <p className="font-sans text-[9px] sm:text-xs md:text-sm tracking-[0.45em] sm:tracking-[0.6em] text-white uppercase whitespace-nowrap">
                Advanced Longevity
            </p>

            <span className="h-px w-8 sm:w-16 bg-pink-400"></span>
        </div>
    </div>
</div>

                {/* Legal */}
                <div className="flex flex-col sm:flex-row items-center justify-between text-[10px] text-[var(--text-on-dark)]/70 gap-2">
                    <p>© 2026 GunaLife® • All rights reserved.</p>
                    <div className="flex items-center space-x-4">
                        <Link to="/policy" className="hover:underline">Privacy Policy</Link>
                        <span>•</span>
                        <Link to="/terms" className="hover:underline">Terms of Service</Link>
                    </div>
                </div>

                {/* Disclaimer */}
                <div className="max-w-2xl mx-auto border border-white/20 p-4 rounded-md text-center text-[10px] text-[var(--text-on-dark)]/80 leading-relaxed">
                    *These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure or prevent any disease.
                </div>

                <p className="text-center text-[9px] text-[var(--text-on-dark)]/50 italic">
                    **Free Welcome Kit available for new subscribers only.
                </p>

                <div className="pt-4 text-center text-[8px] text-[var(--text-on-dark)]/40 max-w-4xl mx-auto leading-normal uppercase tracking-wider">
                    OUR COMMITMENT TO ACCESSIBILITY: GunaLife is committed to making our website content accessible and user-friendly to everyone. If you are having difficulty viewing or navigating the content on this website, or notice any content, feature, or functionality that you believe is not fully accessible to people with disabilities, please email our team at support@gunalife.com.
                </div>

            </div>
        </footer>
    );
};

export default Footer;
