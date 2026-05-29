import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Tv, Zap, Calendar, AlertCircle, ExternalLink, X, Clock, Sparkles } from 'lucide-react';

const BEINMATCH_URL = 'https://www.beinmatch.fit/clfinal';

// List of public CORS proxies to try sequentially for maximum reliability
const CORS_PROXIES = [
  (url) => `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(url)}`,
  (url) => `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
  (url) => `https://corsproxy.io/?url=${encodeURIComponent(url)}`
];

const LiveMatches = () => {
  const { t, i18n } = useTranslation();
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [activeProxyIndex, setActiveProxyIndex] = useState(0);

  const fetchMatches = async (proxyIndex = 0) => {
    if (proxyIndex >= CORS_PROXIES.length) {
      setError(t('LiveMatches.Error'));
      setLoading(false);
      return;
    }

    const proxyUrl = CORS_PROXIES[proxyIndex](BEINMATCH_URL);
    
    try {
      const response = await fetch(proxyUrl);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      
      const html = await response.text();
      
      if (!html || !html.includes('cardMatch')) {
        throw new Error('No matches found in the response HTML');
      }

      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      
      const mainCol = doc.querySelector('.col-md-8');
      if (!mainCol) {
        throw new Error('Main content column not found in scraped HTML');
      }
      
      const children = Array.from(mainCol.children);
      const parsedMatches = [];
      let inTodaySection = false;
      
      for (const child of children) {
        // Toggle capturing when entering Today's matches section
        if (child.tagName === 'H4' && child.textContent.includes('مباريات اليوم')) {
          inTodaySection = true;
          continue;
        }
        
        // Stop capturing when hitting Yesterday's matches or other H4 sections
        if (child.tagName === 'H4' && !child.textContent.includes('مباريات اليوم')) {
          inTodaySection = false;
          break;
        }
        
        // Capture match cards in the today section
        if (inTodaySection && (child.id === 'cardMatch' || child.classList.contains('text-center'))) {
          const teamElements = child.querySelectorAll('.matchTeam');
          const imgElements = child.querySelectorAll('.imgTeam');
          const compElement = child.querySelector('.matchCompt');
          const timeElement = child.querySelector('.matchTime');
          
          if (teamElements.length >= 2) {
            const team1 = teamElements[0].textContent.trim();
            const team2 = teamElements[1].textContent.trim();
            
            let logo1 = imgElements[0] ? imgElements[0].getAttribute('src') : '';
            let logo2 = imgElements[1] ? imgElements[1].getAttribute('src') : '';
            
            // Resolve relative Beinmatch URLs to absolute
            if (logo1 && logo1.startsWith('/')) logo1 = 'https://www.beinmatch.fit' + logo1;
            if (logo2 && logo2.startsWith('/')) logo2 = 'https://www.beinmatch.fit' + logo2;
            
            const tournament = compElement ? compElement.textContent.trim() : '';
            const time = timeElement ? timeElement.textContent.trim() : '';
            
            const onclick = child.getAttribute('onclick') || '';
            const onclickMatch = /goToMatch\((\d+)\s*,\s*'([^']+)'\);?/.exec(onclick);
            const matchId = onclickMatch ? onclickMatch[1] : '';
            const matchSlug = onclickMatch ? onclickMatch[2] : '';
            
            parsedMatches.push({
              team1,
              team2,
              logo1,
              logo2,
              tournament,
              time,
              matchId,
              matchSlug
            });
          }
        }
      }
      
      setMatches(parsedMatches);
      setError(null);
      setLoading(false);
    } catch (err) {
      console.warn(`Proxy ${proxyIndex} failed. Retrying with next proxy...`, err);
      setActiveProxyIndex(proxyIndex + 1);
      fetchMatches(proxyIndex + 1);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchMatches(0);
    
    // Auto refresh every 5 minutes to keep scores and statuses updated
    const interval = setInterval(() => {
      fetchMatches(0);
    }, 5 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  const isLive = (time) => {
    if (!time) return false;
    return time.includes('جارية') || time.includes('حاليا') || time.toLowerCase().includes('live');
  };

  const getWhatsAppLink = (match) => {
    const number = '+212684824316';
    const message = i18n.language === 'ar'
      ? `مرحباً! أود الحصول على اشتراك IPTV لمشاهدة مباراة ${match.team1} ضد ${match.team2} بدقة Ultra HD 4K وبدون انقطاع اليوم! 🔥`
      : i18n.language === 'fr'
      ? `Bonjour ! Je souhaite obtenir un abonnement IPTV pour regarder le match ${match.team1} vs ${match.team2} en Ultra HD 4K sans coupure aujourd'hui ! 🔥`
      : `Hello! I would like to get an IPTV subscription to watch the ${match.team1} vs ${match.team2} match in Ultra HD 4K without cut-offs today! 🔥`;
      
    return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  };

  const getStreamLink = (match) => {
    if (match.matchId && match.matchSlug) {
      return `https://www.beinmatch.fit/bein/live/${match.matchId}/1/${match.matchSlug}`;
    }
    return 'https://www.beinmatch.fit/';
  };

  return (
    <section id="live-matches" className="relative py-24 bg-[#030611] overflow-hidden border-t border-white/5">
      {/* Background Spotlight Orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4 border-primary/30"
          >
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-semibold text-primary glow-text tracking-wide uppercase">
              {t('LiveMatches.NavName')}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-white leading-tight"
          >
            {t('LiveMatches.Title')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg text-gray-300 font-light"
          >
            {t('LiveMatches.Subtext')}
          </motion.p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((n) => (
              <div key={n} className="rounded-2xl border border-white/5 bg-white/5 p-6 h-48 animate-pulse flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <div className="h-4 w-24 bg-white/10 rounded-full" />
                  <div className="h-4 w-12 bg-white/10 rounded-full" />
                </div>
                <div className="flex justify-between items-center my-4">
                  <div className="flex flex-col items-center gap-2 w-1/3">
                    <div className="w-12 h-12 rounded-full bg-white/10" />
                    <div className="h-3 w-16 bg-white/10 rounded-full" />
                  </div>
                  <div className="h-6 w-16 bg-white/10 rounded-lg" />
                  <div className="flex flex-col items-center gap-2 w-1/3">
                    <div className="w-12 h-12 rounded-full bg-white/10" />
                    <div className="h-3 w-16 bg-white/10 rounded-full" />
                  </div>
                </div>
                <div className="h-3 w-full bg-white/5 rounded-full" />
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {!loading && error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="glass border-red-500/20 max-w-xl mx-auto p-8 rounded-2xl text-center"
          >
            <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-white mb-2">{t('LiveMatches.Error')}</h4>
            <button
              onClick={() => { setLoading(true); fetchMatches(0); }}
              className="mt-4 px-6 py-2.5 rounded-full bg-primary hover:bg-primary-dark text-white font-semibold transition-colors"
            >
              Retry
            </button>
          </motion.div>
        )}

        {/* Empty State */}
        {!loading && !error && matches.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="glass border-white/5 max-w-xl mx-auto p-12 rounded-2xl text-center"
          >
            <Calendar className="w-12 h-12 text-gray-500 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-gray-400 mb-2">{t('LiveMatches.NoMatches')}</h4>
          </motion.div>
        )}

        {/* Matches Grid */}
        {!loading && !error && matches.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {matches.map((match, index) => {
              const live = isLive(match.time);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  onClick={() => setSelectedMatch(match)}
                  className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 relative group flex flex-col justify-between border ${
                    live 
                      ? 'bg-gradient-to-br from-primary/10 to-purple-950/20 border-primary/40 shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:border-primary' 
                      : 'glass border-white/5 hover:border-white/20'
                  }`}
                >
                  {/* Top: Tournament & Status */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs font-semibold text-gray-400 max-w-[70%] truncate">
                      {match.tournament}
                    </span>
                    
                    {live ? (
                      <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-500/10 text-red-400 text-[10px] font-black tracking-wider uppercase animate-pulse border border-red-500/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                        {t('LiveMatches.Live')}
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-gray-400 text-xs font-medium">
                        <Clock className="w-3.5 h-3.5" />
                        {match.time}
                      </span>
                    )}
                  </div>

                  {/* Center: Teams & Flags */}
                  <div className="flex justify-between items-center gap-4 my-2">
                    
                    {/* Team 1 */}
                    <div className="flex flex-col items-center gap-2 w-[42%] text-center">
                      <div className="w-14 h-14 rounded-full bg-black/40 border border-white/10 flex items-center justify-center overflow-hidden p-1 shadow-inner group-hover:border-primary/50 transition-colors">
                        {match.logo1 ? (
                          <img src={match.logo1} alt={match.team1} className="w-full h-full object-contain" />
                        ) : (
                          <Tv className="w-6 h-6 text-gray-500" />
                        )}
                      </div>
                      <span className="text-sm font-bold text-white tracking-tight line-clamp-1">
                        {match.team1}
                      </span>
                    </div>

                    {/* VS Badge */}
                    <div className="flex flex-col items-center justify-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black border ${
                        live 
                          ? 'bg-primary text-white border-primary-light glow-shadow' 
                          : 'bg-white/5 text-gray-400 border-white/10'
                      }`}>
                        VS
                      </div>
                    </div>

                    {/* Team 2 */}
                    <div className="flex flex-col items-center gap-2 w-[42%] text-center">
                      <div className="w-14 h-14 rounded-full bg-black/40 border border-white/10 flex items-center justify-center overflow-hidden p-1 shadow-inner group-hover:border-primary/50 transition-colors">
                        {match.logo2 ? (
                          <img src={match.logo2} alt={match.team2} className="w-full h-full object-contain" />
                        ) : (
                          <Tv className="w-6 h-6 text-gray-500" />
                        )}
                      </div>
                      <span className="text-sm font-bold text-white tracking-tight line-clamp-1">
                        {match.team2}
                      </span>
                    </div>
                  </div>

                  {/* Bottom: Action Hint */}
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-400 group-hover:text-primary transition-colors">
                    <span>{live ? 'Regarder maintenant' : 'Voir les options'}</span>
                    <ExternalLink className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

      </div>

      {/* Watch Choice Modal */}
      <AnimatePresence>
        {selectedMatch && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMatch(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="relative w-full max-w-lg bg-background border border-white/10 rounded-3xl overflow-hidden glass shadow-2xl p-6 md:p-8 text-center"
            >
              
              {/* Close Icon */}
              <button
                onClick={() => setSelectedMatch(null)}
                className="absolute right-4 top-4 p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Tournament Title */}
              <span className="text-xs font-semibold text-primary glow-text uppercase tracking-widest block mb-2">
                {selectedMatch.tournament}
              </span>

              <h3 className="text-xl font-bold text-white mb-6">
                {t('LiveMatches.ChooseWatch')}
              </h3>

              {/* Versing Card */}
              <div className="bg-white/5 border border-white/5 rounded-2xl p-6 flex justify-between items-center gap-4 mb-8">
                
                {/* Team 1 */}
                <div className="flex flex-col items-center gap-2 w-[42%]">
                  <div className="w-16 h-16 rounded-full bg-black/30 border border-white/10 flex items-center justify-center p-1.5 shadow-inner">
                    {selectedMatch.logo1 ? (
                      <img src={selectedMatch.logo1} alt={selectedMatch.team1} className="w-full h-full object-contain" />
                    ) : (
                      <Tv className="w-8 h-8 text-gray-500" />
                    )}
                  </div>
                  <span className="text-sm font-extrabold text-white leading-tight">
                    {selectedMatch.team1}
                  </span>
                </div>

                {/* Match Status / Score */}
                <div className="flex flex-col items-center">
                  {isLive(selectedMatch.time) ? (
                    <span className="px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-black tracking-wider uppercase border border-red-500/30 animate-pulse">
                      {t('LiveMatches.Live')}
                    </span>
                  ) : (
                    <span className="text-gray-400 text-xs font-black bg-black/40 px-3 py-1 rounded-lg">
                      {selectedMatch.time}
                    </span>
                  )}
                </div>

                {/* Team 2 */}
                <div className="flex flex-col items-center gap-2 w-[42%]">
                  <div className="w-16 h-16 rounded-full bg-black/30 border border-white/10 flex items-center justify-center p-1.5 shadow-inner">
                    {selectedMatch.logo2 ? (
                      <img src={selectedMatch.logo2} alt={selectedMatch.team2} className="w-full h-full object-contain" />
                    ) : (
                      <Tv className="w-8 h-8 text-gray-500" />
                    )}
                  </div>
                  <span className="text-sm font-extrabold text-white leading-tight">
                    {selectedMatch.team2}
                  </span>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-4">
                
                {/* Watch Premium (WhatsApp Funnel) */}
                <a
                  href={getWhatsAppLink(selectedMatch)}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white font-black text-sm py-4 rounded-2xl hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5"
                >
                  <Zap className="w-4 h-4 text-yellow-300 animate-bounce" />
                  <span>{t('LiveMatches.Watch4K')}</span>
                </a>
                
                <p className="text-[11px] text-gray-400 font-light leading-relaxed px-4 mb-2">
                  {t('LiveMatches.PremiumOffer')}
                </p>

                {/* Divider */}
                <div className="flex items-center gap-3 my-1">
                  <div className="h-px bg-white/10 flex-grow" />
                  <span className="text-xs text-gray-500 font-black">OR</span>
                  <div className="h-px bg-white/10 flex-grow" />
                </div>

                {/* Free Stream (External Beinmatch page) */}
                <a
                  href={getStreamLink(selectedMatch)}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setSelectedMatch(null)}
                  className="w-full border border-white/10 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white font-semibold text-sm py-3.5 rounded-2xl transition-colors flex items-center justify-center gap-2"
                >
                  <Tv className="w-4 h-4 text-primary" />
                  <span>{t('LiveMatches.FreeStream')}</span>
                </a>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default LiveMatches;
