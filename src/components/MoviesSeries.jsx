import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PlayCircle } from 'lucide-react';

const MoviesSeries = () => {
  const { t } = useTranslation();
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (index) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  const posters = [
    { title: 'Dune: Part Two', src: '/movie_dune.png' },
    { title: 'Stranger Things', src: '/movie_stranger_things.png' },
    { title: 'The Batman', src: '/movie_the_batman.png' },
    { title: 'Oppenheimer', src: '/movie_oppenheimer.png' },
    { title: 'Breaking Bad', src: '/movie_breaking_bad.png' },
    { title: 'Interstellar', src: '/movie_interstellar.png' },
  ];

  return (
    <section className="py-24 bg-background relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              {t('Movies & Series')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
          </div>
          <a href="#" className="hidden md:inline-flex text-primary hover:text-white transition-colors font-medium items-center gap-2">
            Voir tout
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {posters.map((movie, index) => (
            <div 
              key={index} 
              className="relative aspect-[2/3] rounded-xl overflow-hidden group cursor-pointer shadow-lg border border-white/5 bg-slate-900/50"
            >
              {imageErrors[index] ? (
                <div className="w-full h-full bg-gradient-to-br from-indigo-950 via-slate-900 to-[#02040a] flex flex-col justify-between p-5 text-center relative">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_100%)] pointer-events-none"></div>
                  
                  <div className="w-full text-left">
                    <span className="text-[10px] uppercase tracking-widest text-primary/80 font-bold bg-primary/10 px-2 py-1 rounded">VOD HD</span>
                  </div>
                  
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border border-primary/30 shadow-[0_0_15px_rgba(59,130,246,0.3)] group-hover:scale-110 transition-transform duration-300 mx-auto">
                    <PlayCircle className="w-8 h-8 text-primary glow-text" />
                  </div>
                  
                  <h3 className="text-white font-bold text-base leading-tight w-full line-clamp-2">
                    {movie.title}
                  </h3>
                </div>
              ) : (
                <>
                  <img 
                    src={movie.src} 
                    alt={movie.title} 
                    onError={() => handleImageError(index)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <PlayCircle className="w-12 h-12 text-primary mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300" />
                    <h3 className="text-white font-bold text-lg leading-tight transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      {movie.title}
                    </h3>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoviesSeries;
