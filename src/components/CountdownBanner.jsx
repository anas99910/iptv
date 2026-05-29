import React, { useState, useEffect } from 'react';
import { X, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const OFFER_ENDS_HOURS = 24; // offer duration in hours from first visit

const getEndTime = () => {
  const stored = localStorage.getItem('offerEndTime');
  if (stored) return parseInt(stored, 10);
  const end = Date.now() + OFFER_ENDS_HOURS * 60 * 60 * 1000;
  localStorage.setItem('offerEndTime', end.toString());
  return end;
};

const CountdownBanner = () => {
  const [visible, setVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState({ h: 0, m: 0, s: 0 });

  useEffect(() => {
    const endTime = getEndTime();

    const tick = () => {
      const diff = endTime - Date.now();
      if (diff <= 0) {
        setTimeLeft({ h: 0, m: 0, s: 0 });
        return;
      }
      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setTimeLeft({ h, m, s });
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n) => String(n).padStart(2, '0');

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed top-0 left-0 right-0 z-[60] overflow-hidden"
        >
          <div className="bg-gradient-to-r from-primary via-purple-600 to-secondary text-white text-sm py-2.5 px-4 flex items-center justify-center gap-3 relative">
            {/* Animated shimmer */}
            <div className="absolute inset-0 bg-white/10 animate-pulse pointer-events-none" />

            <Zap className="w-4 h-4 text-yellow-300 flex-shrink-0 animate-bounce" />

            <span className="font-semibold">
              🔥 Limited Offer — Get <span className="font-black underline underline-offset-2">30% OFF</span> on all plans! Ends in:
            </span>

            {/* Countdown */}
            <div className="flex items-center gap-1 bg-black/30 rounded-lg px-3 py-1 font-mono font-black text-base tracking-widest backdrop-blur-sm">
              <span>{pad(timeLeft.h)}</span>
              <span className="text-yellow-300 animate-pulse">:</span>
              <span>{pad(timeLeft.m)}</span>
              <span className="text-yellow-300 animate-pulse">:</span>
              <span>{pad(timeLeft.s)}</span>
            </div>

            <a
              href="#pricing"
              className="bg-white text-primary font-black text-xs px-3 py-1 rounded-full hover:bg-yellow-100 transition-colors flex-shrink-0"
            >
              Grab Deal →
            </a>

            {/* Close button */}
            <button
              onClick={() => setVisible(false)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
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
