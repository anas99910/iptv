import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const { t } = useTranslation();
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (index) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  const getInitials = (name) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('');
  };

  const reviews = [
    {
      name: 'Alexandre Dubois',
      avatar: '/avatar_alexandre.png',
      rating: 5,
      text: 'Best IPTV service I have ever used. The 4K quality during the Champions League matches is simply incredible. No buffering at all!'
    },
    {
      name: 'Sarah Mitchell',
      avatar: '/avatar_sarah.png',
      rating: 5,
      text: 'Customer support is top notch! I had a small issue setting it up on my Smart TV and they helped me via WhatsApp in under 5 minutes.'
    },
    {
      name: 'Omar Hassan',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
      rating: 5,
      text: 'Amazing selection of Arabic channels and VODs. The interface is clean and my kids love the Disney and Netflix series available.'
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {t('Testimonials')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="glass-card p-8 flex flex-col h-full"
            >
              <div className="flex items-center gap-4 mb-6">
                {imageErrors[index] ? (
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center border-2 border-primary/50 text-white font-bold text-lg shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                    {getInitials(review.name)}
                  </div>
                ) : (
                  <img 
                    src={review.avatar} 
                    alt={review.name} 
                    onError={() => handleImageError(index)}
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary/50"
                  />
                )}
                <div>
                  <h3 className="font-bold text-lg text-white">{review.name}</h3>
                  <div className="flex gap-1 text-yellow-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300 flex-1 italic relative">
                <span className="text-4xl absolute -top-4 -left-2 text-white/10 font-serif">"</span>
                {review.text}
                <span className="text-4xl absolute -bottom-4 right-0 text-white/10 font-serif">"</span>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
