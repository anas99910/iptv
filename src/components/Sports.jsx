import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Sports = () => {
  const { t } = useTranslation();
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (index) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  const sports = [
    { name: 'Premier League', color: 'from-purple-900 to-indigo-900', img: '/sports_premier_league.png' },
    { name: 'UFC', color: 'from-red-900 to-black', img: '/sports_ufc.png' },
    { name: 'Champions League', color: 'from-blue-900 to-blue-950', img: '/sports_champions_league.png' },
    { name: 'Formula 1', color: 'from-red-600 to-red-900', img: '/sports_formula1.png' },
    { name: 'NBA', color: 'from-orange-600 to-orange-900', img: '/sports_nba.png' },
    { name: 'LaLiga', color: 'from-emerald-600 to-emerald-900', img: '/sports_laliga.png' },
    { name: 'Boxing', color: 'from-zinc-700 to-black', img: '/sports_boxing.png' },
    { name: 'NFL', color: 'from-blue-800 to-red-800', img: '/sports_nfl.png' },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green-500/5 to-transparent skew-x-12 transform origin-top-right"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {t('Sports')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">Live</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Never miss a game. Stream all your favorite sports live in ultra-high definition.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {sports.map((sport, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }}
              className="relative aspect-video rounded-xl overflow-hidden group shadow-lg border border-white/10 bg-slate-900"
            >
              {imageErrors[index] ? (
                <div className={`absolute inset-0 bg-gradient-to-br ${sport.color} flex items-center justify-center p-4 text-center relative overflow-hidden`}>
                  <div className="absolute -inset-10 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                </div>
              ) : (
                <img 
                  src={sport.img} 
                  alt={sport.name} 
                  onError={() => handleImageError(index)}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-300"
                />
              )}
              
              <div className={`absolute inset-0 bg-gradient-to-br ${sport.color} opacity-40 mix-blend-overlay`}></div>
              <div className="absolute inset-0 flex items-center justify-center p-4 z-10">
                <h3 className="text-white font-black text-xl md:text-2xl text-center tracking-wider transform group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                  {sport.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sports;
