import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe, Tv } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    setIsLangMenuOpen(false);
  };

  const navLinks = [
    { name: t('Home'), href: '#' },
    { name: t('Pricing'), href: '#pricing' },
    { name: t('Channels'), href: '#features' },
    { name: t('FAQ'), href: '#faq' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="bg-primary/20 p-2 rounded-lg group-hover:bg-primary/40 transition-colors">
              <Tv className="w-6 h-6 text-primary glow-text" />
            </div>
            <span className="text-xl md:text-2xl font-bold tracking-tight">
              Sub<span className="text-primary glow-text">IPTV</span>Pro
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            
            {/* Language Selector */}
            <div className="relative">
              <button 
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
              >
                <Globe className="w-5 h-5" />
                <span className="uppercase text-sm font-semibold">{i18n.language}</span>
              </button>
              
              <AnimatePresence>
                {isLangMenuOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-32 bg-background border border-white/10 rounded-xl shadow-2xl overflow-hidden glass"
                  >
                    {['fr', 'en', 'ar'].map((lang) => (
                      <button
                        key={lang}
                        onClick={() => changeLanguage(lang)}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-primary/20 transition-colors uppercase ${
                          i18n.language === lang ? 'text-primary font-bold' : 'text-gray-300'
                        }`}
                      >
                        {lang === 'fr' ? 'Français' : lang === 'en' ? 'English' : 'العربية'}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="#freetrial" className="text-sm font-medium hover:text-primary transition-colors">
              {t('Start Free Trial')}
            </a>
            
            <a href="#pricing" className="bg-gradient-to-r from-primary to-secondary text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-0.5">
              {t('Buy Now')}
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-gray-300 hover:text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-t border-white/10 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-300 hover:text-white p-2 border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
              
              <div className="flex gap-4 p-2">
                {['fr', 'en', 'ar'].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      changeLanguage(lang);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`uppercase text-sm font-bold px-3 py-1 rounded-full border ${
                      i18n.language === lang 
                        ? 'border-primary text-primary bg-primary/10' 
                        : 'border-white/20 text-gray-400 hover:border-white/50'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>

              <div className="flex flex-col gap-3 mt-4">
                <a 
                  href="#freetrial"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-center py-3 rounded-full border border-primary text-primary font-semibold hover:bg-primary/10 transition-colors"
                >
                  {t('Start Free Trial')}
                </a>
                <a 
                  href="#pricing"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-center py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold"
                >
                  {t('Buy Now')}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
