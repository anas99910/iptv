import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Tv, MonitorPlay, Film, Trophy, Globe, Zap, Smartphone, Headphones, Rocket, ShieldCheck } from 'lucide-react';

const Features = () => {
  const { t } = useTranslation();

  const featuresList = [
    { icon: <MonitorPlay className="w-8 h-8" />, title: 'features.4k', color: 'from-blue-500 to-cyan-400' },
    { icon: <Tv className="w-8 h-8" />, title: 'features.channels', color: 'from-purple-500 to-pink-400' },
    { icon: <Film className="w-8 h-8" />, title: 'features.movies', color: 'from-orange-500 to-red-400' },
    { icon: <Trophy className="w-8 h-8" />, title: 'features.sports', color: 'from-green-500 to-emerald-400' },
    { icon: <Globe className="w-8 h-8" />, title: 'features.international', color: 'from-blue-600 to-indigo-500' },
    { icon: <ShieldCheck className="w-8 h-8" />, title: 'features.antifreeze', color: 'from-teal-400 to-emerald-500' },
    { icon: <Tv className="w-8 h-8" />, title: 'features.smarttv', color: 'from-gray-300 to-gray-100' },
    { icon: <Smartphone className="w-8 h-8" />, title: 'features.devices', color: 'from-rose-400 to-red-500' },
    { icon: <Headphones className="w-8 h-8" />, title: 'features.support', color: 'from-amber-400 to-orange-500' },
    { icon: <Rocket className="w-8 h-8" />, title: 'features.activation', color: 'from-violet-500 to-purple-600' },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="features" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {t('Features')} <span className="text-primary glow-text">Premium</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {featuresList.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className="glass-card p-6 flex flex-col items-center text-center group cursor-default"
            >
              <div className={`w-16 h-16 rounded-2xl mb-4 flex items-center justify-center bg-gradient-to-br ${feature.color} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white drop-shadow-md">
                  {feature.icon}
                </div>
              </div>
              <h3 className="font-semibold text-gray-200 group-hover:text-white transition-colors">
                {t(feature.title)}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
