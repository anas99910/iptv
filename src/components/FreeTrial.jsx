import React from 'react';
import { useTranslation } from 'react-i18next';
import { Send, Smartphone, Tv, Monitor } from 'lucide-react';
import { motion } from 'framer-motion';

const FreeTrial = () => {
  const { t } = useTranslation();

  return (
    <section id="freetrial" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Text / Info */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Get Your <span className="text-primary glow-text">Free Trial</span> Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
              Test our premium service for 24 hours. Experience the quality and stability before you buy. No credit card required.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { icon: <Tv className="w-6 h-6 text-primary" />, title: 'Smart TV' },
                { icon: <Smartphone className="w-6 h-6 text-secondary" />, title: 'Mobile & Tablet' },
                { icon: <Monitor className="w-6 h-6 text-blue-400" />, title: 'PC & Mac' },
              ].map((device, index) => (
                <div key={index} className="flex flex-col items-center lg:items-start gap-2">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    {device.icon}
                  </div>
                  <span className="font-semibold text-gray-300">{device.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full max-w-md lg:max-w-full"
          >
            <form className="glass-card p-8 md:p-10 flex flex-col gap-6">
              <h3 className="text-2xl font-bold text-white mb-2">{t('Free Trial Request')}</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">{t('Name')}</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">{t('Email')}</label>
                  <input 
                    type="email" 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">{t('WhatsApp Number')}</label>
                  <input 
                    type="tel" 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="+1 234 567 890"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">{t('Device Type')}</label>
                  <select 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none"
                    style={{ backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23FFFFFF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem top 50%', backgroundSize: '0.65rem auto' }}
                  >
                    <option value="smart-tv" className="bg-background text-white">Smart TV (Samsung/LG)</option>
                    <option value="android" className="bg-background text-white">Android Box / Phone</option>
                    <option value="firestick" className="bg-background text-white">Amazon Firestick</option>
                    <option value="mag" className="bg-background text-white">MAG Box</option>
                    <option value="pc" className="bg-background text-white">PC / Mac / Browser</option>
                  </select>
                </div>
              </div>

              <button 
                type="button"
                className="w-full bg-gradient-to-r from-primary to-secondary text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300 group"
              >
                <span>{t('Submit')}</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FreeTrial;
