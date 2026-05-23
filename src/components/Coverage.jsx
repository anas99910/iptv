import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Globe, CheckCircle } from 'lucide-react';

const Coverage = () => {
  const { t } = useTranslation();

  const regions = [
    {
      country: 'France / Belgique / Suisse',
      flag: '🇫🇷🇧🇪🇨🇭',
      channels: '5,500+ TV',
      percent: 100,
      gradient: 'from-blue-500 to-red-500',
      channelsList: ['Canal+', 'beIN Sports', 'TF1', 'RMC Sport', 'M6', 'Proximus']
    },
    {
      country: 'Arab World',
      flag: '🇸🇦🇲🇦🇪🇬🇩🇿',
      channels: '6,200+ TV',
      percent: 100,
      gradient: 'from-emerald-400 to-teal-600',
      channelsList: ['beIN Sports', 'MBC', 'OSN', 'Rotana', 'SSC', 'AD Sports']
    },
    {
      country: 'USA & Canada',
      flag: '🇺🇸🇨🇦',
      channels: '4,800+ TV',
      percent: 98,
      gradient: 'from-blue-600 to-indigo-500',
      channelsList: ['HBO', 'ESPN', 'NBC', 'CBS', 'TSN', 'Sportsnet']
    },
    {
      country: 'UK & Ireland',
      flag: '🇬🇧🇮🇪',
      channels: '3,500+ TV',
      percent: 98,
      gradient: 'from-purple-500 to-blue-500',
      channelsList: ['Sky Sports', 'BBC One', 'ITV', 'TNT Sports', 'RTE']
    },
    {
      country: 'Spain / Portugal / Italy',
      flag: '🇪🇸🇵🇹🇮🇹',
      channels: '3,200+ TV',
      percent: 99,
      gradient: 'from-yellow-500 to-red-600',
      channelsList: ['Movistar+', 'DAZN', 'Sky Italia', 'RAI', 'Sport TV']
    },
    {
      country: 'Latino & International',
      flag: '🇧🇷🇲🇽🇩🇪🇹🇷',
      channels: '8,500+ TV',
      percent: 95,
      gradient: 'from-pink-500 to-rose-600',
      channelsList: ['Sky Deutschland', 'EXXEN', 'Globo', 'Fox Sports', 'TRT']
    }
  ];

  return (
    <section id="coverage" className="py-24 bg-[#030611] relative z-10 overflow-hidden border-t border-white/5">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 flex items-center justify-center gap-3">
            <Globe className="w-8 h-8 text-primary animate-spin-[spin_8s_linear_infinite]" />
            <span>{t('Worldwide Coverage')}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            We provide full coverage for all international bouquets, tailored locally with premium stable feeds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {regions.map((region, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              className="glass-card p-6 flex flex-col justify-between border border-white/10 select-none relative"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{region.flag}</span>
                    <h3 className="font-extrabold text-white text-base md:text-lg tracking-wide">{region.country}</h3>
                  </div>
                  <span className="text-xs font-black uppercase bg-primary/10 text-primary py-1 px-2.5 rounded-lg border border-primary/20">
                    {region.channels}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-xs font-bold text-gray-400">
                    <span>{t('Coverage Level')}</span>
                    <span className="text-white">{region.percent}%</span>
                  </div>
                  <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden p-[1px] border border-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${region.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.1 }}
                      className={`h-full rounded-full bg-gradient-to-r ${region.gradient}`}
                    ></motion.div>
                  </div>
                </div>

                <div className="w-full h-px bg-white/5 mb-4"></div>
              </div>

              {/* Channels list badges */}
              <div>
                <p className="text-xs font-black uppercase text-gray-500 tracking-wider mb-2.5">{t('Featured Channels')}</p>
                <div className="flex flex-wrap gap-1.5">
                  {region.channelsList.map((ch, chIdx) => (
                    <span
                      key={chIdx}
                      className="text-[11px] font-bold text-gray-300 bg-white/5 border border-white/5 px-2.5 py-1 rounded-md flex items-center gap-1 hover:border-white/20 transition-all"
                    >
                      <CheckCircle className="w-2.5 h-2.5 text-primary" />
                      {ch}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coverage;
