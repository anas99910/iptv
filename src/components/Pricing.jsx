import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Check, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Pricing = () => {
  const { t } = useTranslation();
  const [screens, setScreens] = useState(1);
  const [currency, setCurrency] = useState('MAD');

  const plans = [
    {
      name: 'Lite Plan',
      tagline: '8 000 chaînes',
      prices: { MAD: 200, USD: 20, EUR: 20 },
      popular: false,
      color: 'from-blue-400 to-blue-600',
      features: [
        '8 000 Live Channels',
        'HD Quality',
        '1 Connection'
      ]
    },
    {
      name: 'Standard Plan',
      tagline: '12 000 chaînes',
      prices: { MAD: 300, USD: 30, EUR: 30 },
      popular: false,
      color: 'from-purple-400 to-purple-600',
      features: [
        '12 000 Live Channels',
        'HD Quality',
        '1 Connection'
      ]
    },
    {
      name: 'Premium Plan',
      tagline: '25 000 chaînes + 4K',
      prices: { MAD: 400, USD: 40, EUR: 40 },
      popular: true,
      color: 'from-yellow-400 to-orange-500',
      features: [
        '25 000 Live Channels',
        'HD & 4K Quality',
        '1 Connection',
        'Free Ibo Player Activation'
      ]
    },
    {
      name: 'VIP Plan',
      tagline: '35 000 chaînes + 4K + Adultes (+18)',
      prices: { MAD: 500, USD: 50, EUR: 50 },
      popular: false,
      color: 'from-red-400 to-rose-600',
      features: [
        '35 000 Live Channels',
        'HD & 4K Quality',
        'Adult Channels (+18)',
        '1 Connection',
        'Free Ibo Player Activation',
        'Free Trial Available (VIP only)'
      ]
    }
  ];

  const currencySymbols = {
    MAD: 'DH',
    USD: '$',
    EUR: '€'
  };

  const getPrice = (plan) => {
    const basePrice = plan.prices[currency];
    const multiplier = screens === 1 ? 1.0 : screens === 2 ? 1.4 : 1.8;
    return (basePrice * multiplier).toFixed(0);
  };

  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-background">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {t('Pricing')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for you and start enjoying unlimited entertainment.
          </p>
        </div>

        {/* Dynamic Dual Switcher Container (Responsive Flex Grid) */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 mb-16 max-w-4xl mx-auto">
          
          {/* Simultaneous Connections Switcher */}
          <div className="flex flex-col sm:flex-row items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-3 flex-1 w-full justify-between backdrop-blur-md">
            <span className="text-gray-300 font-semibold text-xs uppercase tracking-wider pl-2">{t('Simultaneous Connections')}:</span>
            <div className="inline-flex p-1 rounded-full bg-black/40 border border-white/5 shadow-inner">
              {[1, 2, 3].map((num) => (
                <button
                  key={num}
                  onClick={() => setScreens(num)}
                  className={`px-5 py-2 rounded-full text-xs font-black tracking-wide transition-all duration-300 ${
                    screens === num
                      ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-[0_0_15px_rgba(59,130,246,0.4)]'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {num} {num === 1 ? t('Device') : t('Devices')}
                </button>
              ))}
            </div>
          </div>

          {/* Currency Switcher */}
          <div className="flex flex-col sm:flex-row items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-3 flex-1 w-full justify-between backdrop-blur-md">
            <span className="text-gray-300 font-semibold text-xs uppercase tracking-wider pl-2">{t('Currency')}:</span>
            <div className="inline-flex p-1 rounded-full bg-black/40 border border-white/5 shadow-inner">
              {[
                { code: 'MAD', label: 'DH' },
                { code: 'USD', label: 'USD ($)' },
                { code: 'EUR', label: 'EUR (€)' }
              ].map((curr) => (
                <button
                  key={curr.code}
                  onClick={() => setCurrency(curr.code)}
                  className={`px-4 py-2 rounded-full text-xs font-black tracking-wide transition-all duration-300 ${
                    currency === curr.code
                      ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-[0_0_15px_rgba(59,130,246,0.4)]'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {curr.label}
                </button>
              ))}
            </div>
          </div>
          
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className={`glass-card p-8 relative flex flex-col ${
                plan.popular ? 'border-primary/50 shadow-[0_0_30px_rgba(59,130,246,0.2)] bg-white/[0.02]' : 'border-white/10'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg flex items-center gap-1">
                  <Zap className="w-4 h-4" />
                  Populaire
                </div>
              )}

              <h3 className="text-2xl font-black text-white tracking-wide mb-1">{t(plan.name)}</h3>
              <p className="text-gray-400 text-sm font-medium mb-6">{plan.tagline}</p>
              
              <div className="flex items-baseline gap-1.5 mb-6">
                <span className="text-5xl font-black text-white tracking-tight">
                  {getPrice(plan)}
                </span>
                <span className="text-2xl font-bold text-gray-200 pl-0.5">
                  {currencySymbols[currency]}
                </span>
                <span className="text-gray-400 font-medium pl-1 text-sm">
                  / 12 {t('Months')}
                </span>
              </div>

              <div className="w-full h-px bg-white/10 mb-6"></div>

              <ul className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3 text-gray-300">
                    <div className={`p-0.5 mt-0.5 rounded-full bg-gradient-to-r ${plan.color} bg-opacity-20`}>
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-semibold text-sm leading-snug">{t(feature)}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-3 mt-auto">
                <a 
                  href="#freetrial"
                  className={`w-full py-3.5 rounded-xl font-black text-sm tracking-wide text-white shadow-lg transition-all transform hover:scale-[1.02] bg-gradient-to-r ${plan.color} flex items-center justify-center`}
                >
                  {t('Choose')} {t(plan.name)}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Image bottom Footnote Disclaimer */}
        <div className="mt-16 text-center text-xs text-gray-400/80 bg-white/5 border border-white/5 rounded-2xl p-4 max-w-4xl mx-auto backdrop-blur-sm">
          <p className="flex items-center justify-center gap-2">
            <span>💡</span>
            <span className="leading-relaxed font-semibold">{t('Pricing.Footnote')}</span>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
