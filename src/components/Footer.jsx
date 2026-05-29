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
        {/* Pulse ring */}
        <span className="absolute w-16 h-16 rounded-full bg-green-500/40 animate-ping" />
        <span className="absolute w-14 h-14 rounded-full bg-green-500/20" />
        {/* Main button */}
        <span className="relative w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-xl shadow-green-500/40 flex items-center justify-center hover:scale-110 transition-all duration-300">
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.458L0 24zm6.735-4.437c1.618.96 3.2 1.48 4.978 1.486 5.489.004 9.954-4.463 9.957-9.96.002-2.662-1.032-5.166-2.91-7.047C16.94 2.162 14.444.982 12.01.982c-5.492 0-9.959 4.468-9.963 9.968-.002 1.8.481 3.56 1.393 5.118l-.994 3.634 3.737-.981zm12.39-6.2c-.27-.135-1.602-.79-1.85-.88-.25-.09-.432-.135-.615.135-.183.27-.707.88-.866 1.062-.16.183-.32.203-.59.068-.27-.135-1.14-.42-2.17-1.34-.802-.715-1.343-1.6-1.5-1.871-.16-.272-.017-.42.119-.554.12-.12.27-.315.405-.47.135-.16.18-.27.27-.45.09-.18.046-.337-.02-.472-.068-.135-.616-1.482-.843-2.031-.22-.533-.443-.46-.615-.46-.16 0-.34-.02-.52-.02-.18 0-.472.067-.719.338-.247.27-.942.922-.942 2.25s.965 2.612 1.1 2.8c.134.18 1.9 2.9 4.6 4.07.64.28 1.14.445 1.52.565.64.2 1.22.17 1.68.1 5.14-.76 1.5-.15 1.98-.38.48-.23 1.026-.55 1.258-.85.232-.3.232-.563.162-.68-.07-.12-.25-.205-.52-.34z" />
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
