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
        href="https://wa.me/212684824316?text=Hello!%20I%20would%20like%20more%20info%20about%20your%20IPTV%20subscription." 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulse rings — centered relative to the button */}
        <span className="absolute w-14 h-14 rounded-full bg-green-500/50 animate-ping" />
        {/* Main button */}
        <span className="relative w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-xl shadow-green-500/40 flex items-center justify-center hover:scale-110 transition-all duration-300">
          {/* Official WhatsApp icon */}
          <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.61 1.832 6.5L4 29l7.688-1.813A11.93 11.93 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3z"
              fill="white"
            />
            <path
              d="M21.844 18.875c-.313-.156-1.852-.913-2.14-1.018-.286-.104-.494-.156-.703.157-.208.312-.808 1.017-.99 1.226-.183.208-.365.234-.678.078-.313-.156-1.322-.487-2.517-1.553-.93-.829-1.558-1.852-1.74-2.165-.183-.313-.02-.482.137-.637.14-.14.312-.365.469-.547.156-.183.208-.313.312-.521.104-.208.052-.39-.026-.547-.078-.156-.703-1.695-.963-2.32-.253-.61-.51-.528-.703-.537-.182-.008-.39-.01-.598-.01-.208 0-.547.078-.833.39-.286.313-1.09 1.067-1.09 2.6 0 1.534 1.116 3.016 1.272 3.224.156.208 2.197 3.354 5.323 4.706.744.32 1.324.512 1.776.655.747.237 1.427.204 1.964.124.599-.09 1.844-.754 2.105-1.482.26-.729.26-1.352.182-1.482-.077-.13-.285-.208-.598-.364z"
              fill="#25D366"
            />
          </svg>
        </span>
        {/* Tooltip */}
        <span className="absolute right-full mr-3 bg-gray-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg border border-white/10">
          💬 Chat with us
          <span className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900" />
        </span>
      </a>
    </footer>
  );
};

export default Footer;
