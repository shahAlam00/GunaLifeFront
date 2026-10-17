import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import CartDrawer from './components/cart/CartDrawer';

import TopAnnouncementBanner from './components/common/TopAnnouncementBanner';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import SciencePage from './pages/SciencePage';
import BeckhamStackPage from './pages/BeckhamStackPage';
import WelcomeFromDavidPage from './pages/WelcomeFromDavidPage';
import ReviewsPage from './pages/ReviewsPage';
import IngredientsPage from './pages/IngredientsPage';
import DiscoverPage from './pages/DiscoverPage';
import CartPage from './pages/CartPage';

import Quality from './pages/Quality';
import AboutUs from './pages/AboutUs';
import PrivacyPolicy from './components/common/PrivacyPolicy.jsx';
import TermsService from './components/common/TermsService.jsx';

// Scrolls to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop />

        {/* Sticky header — banner + navbar together */}
        <div className="sticky top-0 z-50">
          <TopAnnouncementBanner />
          <Navbar />
        </div>

        {/* Page content */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/science" element={<SciencePage />} />
          <Route path="/beckham-stack" element={<BeckhamStackPage />} />
          <Route path="/welcome" element={<WelcomeFromDavidPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/ingredients" element={<IngredientsPage />} />
          <Route path="/discover" element={<DiscoverPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/quality' element={<Quality />} />
          <Route path="/policy" element={<PrivacyPolicy/>}/>
          <Route path="/terms" element={<TermsService/>}/>
          {/* 404 fallback */}
          <Route path="*" element={
            <div className="min-h-screen bg-[var(--bg-cream)] flex flex-col items-center justify-center text-[var(--brand-primary)] gap-4">
              <h1 className="font-serif text-6xl font-normal">404</h1>
              <p className="text-sm font-medium">Page not found.</p>
              <a href="/" className="px-6 py-2.5 bg-[var(--brand-primary)] text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-[var(--brand-deep)] transition-colors">
                Go Home
              </a>
            </div>
          } />
        </Routes>

        <Footer />

        {/* Global Slide-Over Cart Drawer */}
        <CartDrawer />
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
