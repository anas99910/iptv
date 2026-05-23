import React from 'react';
import { useTranslation } from 'react-i18next';
import { Tv, Mail, MessageCircle, Send } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#02040a] pt-16 pb-8 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="bg-primary/20 p-2 rounded-lg">
                <Tv className="w-6 h-6 text-primary glow-text" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                Sub<span className="text-primary glow-text">IPTV</span>Pro
              </span>
            </a>
            <p className="text-gray-400 mb-6">
              The ultimate premium IPTV service offering you the best entertainment experience with over 20,000 channels and VODs in 4K quality.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all font-bold text-sm">
                FB
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all font-bold text-sm">
                TW
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all font-bold text-sm">
                IG
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">{t('Quick Links')}</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">{t('Home')}</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-primary transition-colors">{t('Pricing')}</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-primary transition-colors">{t('Channels')}</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-primary transition-colors">{t('FAQ')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">{t('Reseller')}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">{t('Contact Info')}</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-primary" />
                <span>support@subscriptioniptvpro.com</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <MessageCircle className="w-5 h-5 text-green-500" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Send className="w-5 h-5 text-blue-400" />
                <span>@subiptvpro_bot</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary"
              />
              <button className="bg-primary hover:bg-primary/80 text-white px-4 py-2 rounded-lg transition-colors">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            {t('Copyright')}
          </p>
          <div className="flex gap-4 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/212766836615" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg shadow-green-500/30 hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute right-full mr-4 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10">
          Chat with us
        </span>
      </a>
    </footer>
  );
};

export default Footer;
