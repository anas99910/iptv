import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Platforms from './components/Platforms';
import MoviesSeries from './components/MoviesSeries';
import Sports from './components/Sports';
import Coverage from './components/Coverage';
import Pricing from './components/Pricing';
import SpeedTest from './components/SpeedTest';
import FreeTrial from './components/FreeTrial';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import AdminMockup from './components/AdminMockup';
import Footer from './components/Footer';
import CountdownBanner from './components/CountdownBanner';
import BackToTop from './components/BackToTop';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-white transition-colors duration-300">
      {/* Countdown Banner — fixed at top, pushes everything down */}
      <CountdownBanner />

      {/* Header needs top offset to not be hidden behind banner */}
      <div className="pt-10">
        <Header />
      </div>

      <main>
        <Hero />
        <Features />
        <Platforms />
        <MoviesSeries />
        <Sports />
        <Coverage />
        <Pricing />
        <SpeedTest />
        <FreeTrial />
        <AdminMockup />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />

      {/* Floating utilities */}
      <BackToTop />
    </div>
  );
}

export default App;

