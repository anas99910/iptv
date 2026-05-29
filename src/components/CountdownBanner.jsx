import React, { useState, useEffect, useRef } from 'react';
import { X, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const OFFER_ENDS_HOURS = 24;

const getEndTime = () => {
  const stored = localStorage.getItem('offerEndTime');
  if (stored) return parseInt(stored, 10);
  const end = Date.now() + OFFER_ENDS_HOURS * 60 * 60 * 1000;
  localStorage.setItem('offerEndTime', end.toString());
  return end;
};

const CountdownBanner = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState({ h: 0, m: 0, s: 0 });
  const bannerRef = useRef(null);

  useEffect(() => {
    const endTime = getEndTime();
    const tick = () => {
      const diff = endTime - Date.now();
      if (diff <= 0) { setTimeLeft({ h: 0, m: 0, s: 0 }); return; }
      setTimeLeft({
        h: Math.floor(diff / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!visible) {
      document.documentElement.style.setProperty('--banner-height', '0px');
      return;
    }

    const updateHeight = () => {
      if (bannerRef.current) {
        const height = bannerRef.current.offsetHeight;
        document.documentElement.style.setProperty('--banner-height', `${height}px`);
      }
    };

    // Initial measurement
    updateHeight();

    // Use ResizeObserver for extremely robust dynamic measurements (handles rotation, resize, text wrap)
    const observer = new ResizeObserver(updateHeight);
    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [visible]);

  const pad = (n) => String(n).padStart(2, '0');

  const dismiss = () => {
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          ref={bannerRef}
          initial={{ y: '-100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="fixed top-0 left-0 right-0 z-[70] h-auto"
        >
          <div className="bg-gradient-to-r from-primary via-purple-600 to-secondary text-white text-xs md:text-sm flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 px-8 md:px-4 py-2 md:py-0 md:h-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-white/5 pointer-events-none" />

            {/* Row 1: Offer text & Icon */}
            <div className="flex items-center justify-center gap-1.5 flex-wrap">
              <Zap className="w-3.5 h-3.5 md:w-4 md:h-4 text-yellow-300 flex-shrink-0 animate-bounce" />
              <span className="font-semibold text-center leading-tight">
                {t('Banner.Offer')}{' '}
                <span className="font-black underline underline-offset-2">
                  {t('Banner.Discount')}
                </span>{' '}
                <span className="hidden md:inline">{t('Banner.EndsIn')}</span>
              </span>
            </div>

            {/* Row 2: Timer & Call to Action (compact and side-by-side) */}
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <span className="md:hidden font-semibold text-[11px] opacity-90">{t('Banner.EndsInShort')}</span>
              
              <div className="flex items-center gap-1 bg-black/30 rounded-lg px-2 md:px-3 py-0.5 font-mono font-black text-xs md:text-sm tracking-widest backdrop-blur-sm flex-shrink-0">
                <span>{pad(timeLeft.h)}</span>
                <span className="text-yellow-300 animate-pulse">:</span>
                <span>{pad(timeLeft.m)}</span>
                <span className="text-yellow-300 animate-pulse">:</span>
                <span>{pad(timeLeft.s)}</span>
              </div>

              <a
                href="#pricing"
                className="bg-white text-primary font-black text-[10px] md:text-xs px-2.5 md:px-3 py-0.5 md:py-1 rounded-full hover:bg-yellow-100 transition-colors flex-shrink-0"
              >
                {t('Banner.GrabDeal')}
              </a>
            </div>

            {/* Close Button */}
            <button
              onClick={dismiss}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
              aria-label="Dismiss banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CountdownBanner;
