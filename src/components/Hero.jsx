import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { PlayCircle, ShieldCheck, Film, Trophy } from 'lucide-react';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-[#030611]">
      {/* Background Grid & Ambient Spotlight Orbs */}
      <div className="absolute inset-0 z-0 minimal-grid pointer-events-none">
        {/* Sleek bottom dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030611]/60 via-[#030611]/85 to-[#030611]"></div>
        
        {/* Ultra-smooth pulsing glow orbs */}
        <div className="absolute top-1/6 left-1/5 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[130px] mix-blend-screen animate-pulse pointer-events-none"></div>
        <div className="absolute bottom-1/6 right-1/5 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[130px] mix-blend-screen animate-pulse delay-1000 pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Copywriting & Actions */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border-primary/30 mx-auto lg:mx-0">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-gray-200">{t('Trust Badge')}</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight text-white">
              {t('The Ultimate')}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary glow-text">
                {t('IPTV Experience')}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-10 font-light max-w-2xl mx-auto lg:mx-0">
              {t('Hero.Subtext')}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href="#pricing" 
                className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full text-lg font-bold hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300 transform hover:-translate-y-1 text-center"
              >
                {t('View Plans')}
              </a>
              <a 
                href="#freetrial" 
                className="w-full sm:w-auto group flex items-center justify-center gap-2 glass px-8 py-4 rounded-full text-lg font-bold hover:bg-white/10 transition-all duration-300 border-white/20 hover:border-primary/50 text-center"
              >
                <PlayCircle className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                <span>{t('Free Test')}</span>
              </a>
            </div>

            {/* Quick trust metrics */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/5 max-w-md mx-auto lg:mx-0">
              <div>
                <h4 className="text-2xl font-bold text-white">20K+</h4>
                <p className="text-xs text-gray-400 font-medium">{t('Live Channels')}</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white">60K+</h4>
                <p className="text-xs text-gray-400 font-medium">{t('Movies & TV Shows')}</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white">99.9%</h4>
                <p className="text-xs text-gray-400 font-medium">{t('Stable Uptime')}</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Floating 3D Movies & Football Cards Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 hidden lg:flex justify-center items-center relative h-[550px]"
          >
            {/* Ambient Background glow in right side */}
            <div className="absolute w-72 h-72 bg-secondary/10 rounded-full blur-[80px] -z-10"></div>
            
            {/* Poster Column 1 */}
            <div className="flex flex-col gap-6 transform -rotate-12 translate-y-6">
              
              {/* Dune Card */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="w-48 aspect-[2/3] rounded-2xl overflow-hidden shadow-2xl shadow-black/80 border border-white/10 relative group"
              >
                <img src="/movie_dune.png" alt="Dune" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                  <div className="flex items-center gap-1.5 text-xs text-white font-medium">
                    <Film className="w-3.5 h-3.5 text-primary" />
                    <span>Dune: Part Two</span>
                  </div>
                </div>
              </motion.div>

              {/* Champions League Football Card */}
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.5 }}
                className="w-48 aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-black/80 border border-white/10 relative group"
              >
                <img src="/sports_champions_league.png" alt="Champions League" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                  <div className="flex items-center gap-1.5 text-xs text-white font-medium">
                    <Trophy className="w-3.5 h-3.5 text-green-400" />
                    <span>Champions League</span>
                  </div>
                </div>
              </motion.div>

            </div>

            {/* Poster Column 2 */}
            <div className="flex flex-col gap-6 transform -rotate-12 -translate-y-6 ml-6">
              
              {/* Interstellar Card */}
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 0.2 }}
                className="w-48 aspect-[2/3] rounded-2xl overflow-hidden shadow-2xl shadow-black/80 border border-white/10 relative group"
              >
                <img src="/movie_interstellar.png" alt="Interstellar" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                  <div className="flex items-center gap-1.5 text-xs text-white font-medium">
                    <Film className="w-3.5 h-3.5 text-primary" />
                    <span>Interstellar</span>
                  </div>
                </div>
              </motion.div>

              {/* Formula 1 Card */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut", delay: 0.7 }}
                className="w-48 aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-black/80 border border-white/10 relative group"
              >
                <img src="/sports_formula1.png" alt="Formula 1" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                  <div className="flex items-center gap-1.5 text-xs text-white font-medium">
                    <Trophy className="w-3.5 h-3.5 text-red-500" />
                    <span>Formula 1</span>
                  </div>
                </div>
              </motion.div>

            </div>

          </motion.div>
          
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 z-10"
      >
        <div className="w-[30px] h-[50px] rounded-full border-2 border-white/30 flex justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
