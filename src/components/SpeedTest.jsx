import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Gauge, ArrowRight, Play, RefreshCw, Server, Zap, ShieldAlert, Globe, CheckCircle } from 'lucide-react';

const SpeedTest = () => {
  const { t, i18n } = useTranslation();
  const [testState, setTestState] = useState('idle'); // idle, testing, complete
  const [speed, setSpeed] = useState(0);
  const [ping, setPing] = useState(0);
  const [jitter, setJitter] = useState(0);
  const [currentProgress, setCurrentProgress] = useState(0); // 0 to 100

  useEffect(() => {
    let interval = null;
    if (testState === 'testing') {
      let progress = 0;
      setPing(Math.floor(Math.random() * 12) + 4); // 4-15ms
      setJitter(Math.floor(Math.random() * 3) + 1); // 1-3ms
      
      interval = setInterval(() => {
        progress += 2;
        setCurrentProgress(progress);
        
        // Simulating speedometer dial fluctuation
        if (progress < 40) {
          setSpeed(Math.floor(Math.random() * 30) + 10);
        } else if (progress < 80) {
          setSpeed(Math.floor(Math.random() * 40) + 50);
        } else {
          setSpeed(Math.floor(Math.random() * 10) + 82); // settles around 82-92 Mbps
        }

        if (progress >= 100) {
          clearInterval(interval);
          setTestState('complete');
          setSpeed(87); // final stable speed
        }
      }, 80);
    }
    return () => clearInterval(interval);
  }, [testState]);

  const startTest = () => {
    setSpeed(0);
    setPing(0);
    setJitter(0);
    setCurrentProgress(0);
    setTestState('testing');
  };

  const getRecommendation = () => {
    if (i18n.language === 'fr') {
      return "Votre vitesse de connexion est excellente ! 🚀 Parfaite pour le streaming en 4K Ultra HD sans aucune coupure sur 3 appareils simultanément.";
    } else if (i18n.language === 'ar') {
      return "سرعة الاتصال لديك ممتازة! 🚀 مثالية للبث بجودة 4K Ultra HD دون أي تقطيع على ما يصل إلى 3 شاشات في نفس الوقت.";
    } else {
      return "Your connection speed is excellent! 🚀 Ideal for buffer-free 4K Ultra HD streaming on up to 3 screens simultaneously.";
    }
  };

  // SVG parameters for the Dial
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (currentProgress / 100) * circumference;

  return (
    <section id="speedtest" className="py-24 bg-background relative z-10 overflow-hidden border-t border-white/5">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 flex items-center justify-center gap-3">
            <Gauge className="w-8 h-8 text-primary" />
            <span>{t('Connection Speed Test')}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Verify your internet speed directly to ensure you have optimal bandwidth for high-definition 4K streaming.
          </p>
        </div>

        {/* Speed Tester Interactive Container */}
        <div className="glass-card p-8 md:p-12 border border-white/10 max-w-2xl mx-auto relative overflow-hidden flex flex-col items-center">
          {/* Ambient background glow inside card */}
          <div className="absolute w-40 h-40 bg-primary/10 rounded-full blur-[50px] -z-10 pointer-events-none"></div>

          {/* Speedometer Circle Dial */}
          <div className="relative w-56 h-56 flex items-center justify-center mb-8 select-none">
            {/* Background Circle */}
            <svg className="absolute w-full h-full transform -rotate-90">
              <circle
                cx="112"
                cy="112"
                r={radius}
                className="stroke-white/5"
                strokeWidth="10"
                fill="transparent"
              />
              {/* Animated Progress Circle */}
              <circle
                cx="112"
                cy="112"
                r={radius}
                className="stroke-primary"
                strokeWidth="10"
                fill="transparent"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                style={{
                  transition: 'stroke-dashoffset 0.1s ease-out',
                  filter: 'drop-shadow(0 0 8px rgba(59,130,246,0.6))'
                }}
              />
            </svg>

            {/* Central Readout */}
            <div className="text-center z-10">
              <motion.div 
                key={speed}
                initial={{ scale: 0.9, opacity: 0.8 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-5xl md:text-6xl font-black text-white leading-none tracking-tight glow-text"
              >
                {speed}
              </motion.div>
              <div className="text-xs uppercase font-extrabold tracking-widest text-gray-400 mt-2">Mbps</div>
            </div>
          </div>

          {/* Digital Network Readouts (Ping / Jitter / Server) */}
          <div className="grid grid-cols-3 gap-6 w-full max-w-md mb-8 border-t border-b border-white/5 py-4 select-none">
            <div className="text-center">
              <div className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1 flex items-center justify-center gap-1">
                <Zap className="w-3.5 h-3.5 text-primary" /> PING
              </div>
              <div className="text-xl font-extrabold text-white">{ping} <span className="text-xs font-semibold text-gray-400">ms</span></div>
            </div>
            <div className="text-center border-x border-white/5">
              <div className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1 flex items-center justify-center gap-1">
                <Server className="w-3.5 h-3.5 text-secondary" /> JITTER
              </div>
              <div className="text-xl font-extrabold text-white">{jitter} <span className="text-xs font-semibold text-gray-400">ms</span></div>
            </div>
            <div className="text-center">
              <div className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1 flex items-center justify-center gap-1">
                <Globe className="w-3.5 h-3.5 text-blue-400" /> SERVER
              </div>
              <div className="text-sm font-extrabold text-white uppercase tracking-wider">Premium IPTV</div>
            </div>
          </div>

          {/* Recommendation Alert Box */}
          <AnimatePresence mode="wait">
            {testState === 'complete' && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="w-full bg-emerald-500/10 border border-emerald-500/30 p-4 rounded-2xl mb-8 flex items-start gap-3 text-left"
              >
                <div className="p-2 bg-emerald-500/20 rounded-xl text-emerald-400 mt-0.5">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-white mb-1">{t('Optimization Standard Passed')}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{getRecommendation()}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button CTA */}
          <div className="w-full max-w-xs">
            {testState === 'idle' && (
              <button
                onClick={startTest}
                className="w-full py-4 bg-gradient-to-r from-primary to-secondary text-white font-black rounded-full flex items-center justify-center gap-2.5 shadow-lg shadow-primary/30 hover:scale-105 transition-transform"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>{t('Start Connection Test')}</span>
              </button>
            )}

            {testState === 'testing' && (
              <button
                disabled
                className="w-full py-4 bg-white/5 border border-white/10 text-gray-400 font-black rounded-full flex items-center justify-center gap-2.5 cursor-not-allowed select-none"
              >
                <RefreshCw className="w-4 h-4 animate-spin text-primary" />
                <span>{t('Testing Connection...')}</span>
              </button>
            )}

            {testState === 'complete' && (
              <div className="flex gap-3">
                <button
                  onClick={startTest}
                  className="p-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold rounded-full transition-all"
                  title={t('Retest Connection')}
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
                <a
                  href="#freetrial"
                  className="flex-1 py-4 bg-gradient-to-r from-primary to-secondary text-white font-black rounded-full flex items-center justify-center gap-2 shadow-lg shadow-primary/30 hover:scale-105 transition-transform text-sm md:text-base text-center"
                >
                  <span>{t('Get Your Free Trial')}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeedTest;
