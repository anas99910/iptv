import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Tv, Smartphone, Laptop, Gamepad, Globe, Monitor } from 'lucide-react';

const Platforms = () => {
  const { t } = useTranslation();

  const deviceBadges = [
    { name: 'Fire TV Stick', icon: <Tv className="w-5 h-5 text-orange-500" /> },
    { name: 'Samsung SMART TV', icon: <Tv className="w-5 h-5 text-blue-600" /> },
    { name: 'Android TV', icon: <Tv className="w-5 h-5 text-emerald-500" /> },
    { name: 'iOS', icon: <Smartphone className="w-5 h-5 text-slate-400" /> },
    { name: 'MAG Box', icon: <Tv className="w-5 h-5 text-pink-500" /> },
    { name: 'NVIDIA SHIELD', icon: <Tv className="w-5 h-5 text-green-500" /> },
    { name: 'Android', icon: <Smartphone className="w-5 h-5 text-emerald-400" /> },
    { name: 'IPTV SMARTERS PRO', icon: <Monitor className="w-5 h-5 text-indigo-500" /> },
    { name: 'XBOX LIVE', icon: <Gamepad className="w-5 h-5 text-green-500" /> },
    { name: 'WEBPLAYER', icon: <Globe className="w-5 h-5 text-purple-500" /> },
    { name: 'LG Smart TV', icon: <Tv className="w-5 h-5 text-red-500" /> },
    { name: 'Windows', icon: <Laptop className="w-5 h-5 text-blue-400" /> }
  ];

  const infoPills = [
    'Stable Server',
    'Security & Privacy',
    '20,000 Live TV Channels',
    'Electronic Program Guide (EPG)'
  ];

  return (
    <section id="compatibility" className="py-24 bg-background relative z-20 border-y border-white/5 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: 12 Brand Badges Grid (Fully Glassmorphism) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4 order-2 lg:order-1">
            {deviceBadges.map((badge, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, y: -4 }}
                className="glass-card p-4 flex items-center justify-center gap-3 cursor-default select-none transition-all duration-300"
              >
                {badge.icon}
                <span className="text-gray-200 font-extrabold text-sm md:text-base tracking-tight">{badge.name}</span>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Copywriting & 4 Glossy Dark Pills */}
          <div className="lg:col-span-5 flex flex-col gap-8 text-center lg:text-left order-1 lg:order-2">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                {t('IPTV Maroc')}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary glow-text uppercase">
                  {t('COMPATIBLE WITH ALL DEVICES')}
                </span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed font-light">
                {t('Enjoy premium IPTV at affordable prices.')}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {infoPills.map((pill, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ scale: 1.03, y: -2 }}
                  className="bg-white/5 border border-white/10 hover:border-secondary/50 text-gray-200 hover:text-white shadow-lg font-black text-base md:text-lg flex items-center justify-center py-4 px-6 rounded-full cursor-default select-none transition-all duration-300 backdrop-blur-md"
                >
                  {t(pill)}
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Platforms;
