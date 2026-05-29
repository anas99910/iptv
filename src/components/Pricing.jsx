import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Check, Zap, X, Copy } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Pricing = () => {
  const { t } = useTranslation();
  const [screens, setScreens] = useState(1);
  const [currency, setCurrency] = useState('MAD');

  const PAYMENT_CONFIG = {
    WHATSAPP_NUMBER: "+212684824316", // Your WhatsApp number
    BANK_NAME: "CIH Bank (Morocco)",
    BANK_RIB: "230780000000000000000000", // 24-digit RIB
    RECIPIENT_NAME: "ANAS EL GHAZI",
    RECIPIENT_CITY: "Casablanca",
    RECIPIENT_COUNTRY: "Morocco",
    USDT_TRC20: "TXp7RzVzNXJkQ3NjZGh6eDZqTGdKWTk0cW1zTjg=", // USDT TRC20 Wallet Address
    PAYPAL_EMAIL: "billing@iptvpro.com"
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('taptap'); // 'taptap', 'wu', 'bank', 'paypal', 'crypto'
  const [copiedText, setCopiedText] = useState('');

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(''), 2000);
  };

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
                <button 
                  onClick={() => {
                    setSelectedPlan(plan);
                    setIsModalOpen(true);
                  }}
                  className={`w-full py-3.5 rounded-xl font-black text-sm tracking-wide text-white shadow-lg transition-all transform hover:scale-[1.02] bg-gradient-to-r ${plan.color} flex items-center justify-center`}
                >
                  {t('Choose')} {t(plan.name)}
                </button>
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

      {/* Checkout Modal */}
      <AnimatePresence>
        {isModalOpen && selectedPlan && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-8 shadow-2xl z-10 text-left"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Left Column: Order Summary & Selection */}
              <div className="flex-1 flex flex-col gap-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-white tracking-wide mb-2">
                    {t('Checkout.Title')}
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                </div>

                {/* Order Summary */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col gap-3">
                  <span className="text-xs uppercase font-bold text-gray-400 tracking-wider">
                    {t('Checkout.OrderSummary')}
                  </span>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-black text-white">{t(selectedPlan.name)}</span>
                    <span className="text-2xl font-black text-white">
                      {getPrice(selectedPlan)} {currencySymbols[currency]}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>{screens} {screens === 1 ? t('Device') : t('Devices')}</span>
                    <span>12 {t('Months')}</span>
                  </div>
                </div>

                {/* Choose Payment Method */}
                <div className="flex flex-col gap-3">
                  <span className="text-xs uppercase font-bold text-gray-400 tracking-wider pl-1">
                    {t('Checkout.PaymentMethod')}
                  </span>
                  
                  <div className="flex flex-col gap-2.5">
                    {[
                      { id: 'taptap', name: t('Checkout.TapTapSendwave'), desc: 'TapTap Send, Sendwave transfer' },
                      { id: 'remitly', name: t('Checkout.Remitly'), desc: 'Remitly international transfer' },
                      { id: 'wu', name: t('Checkout.WesternUnion'), desc: 'Western Union, MoneyGram, Ria' },
                      { id: 'bank', name: t('Checkout.BankTransfer'), desc: 'Moroccan Bank RIB (CIH Bank)' },
                      { id: 'paypal', name: t('Checkout.PayPalCard'), desc: 'PayPal, Credit Card securely' },
                      { id: 'crypto', name: t('Checkout.Crypto'), desc: 'USDT (TRC-20), Bitcoin' }
                    ].map((method) => (
                      <button
                        key={method.id}
                        onClick={() => setPaymentMethod(method.id)}
                        className={`w-full p-4 rounded-2xl flex items-center justify-between border text-left transition-all duration-300 ${
                          paymentMethod === method.id
                            ? 'bg-primary/10 border-primary shadow-[0_0_15px_rgba(59,130,246,0.2)]'
                            : 'bg-white/[0.02] border-white/10 hover:bg-white/5 hover:border-white/20'
                        }`}
                      >
                        <div className="flex flex-col">
                          <span className="font-bold text-sm text-white">{method.name}</span>
                          <span className="text-xs text-gray-400 mt-0.5">{method.desc}</span>
                        </div>
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                          paymentMethod === method.id
                            ? 'border-primary bg-primary'
                            : 'border-white/30'
                        }`}>
                          {paymentMethod === method.id && (
                            <div className="w-2 h-2 rounded-full bg-white" />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Instructions & Submit */}
              <div className="flex-1 flex flex-col justify-between gap-6 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8">
                <div className="flex flex-col gap-4">
                  <h4 className="text-lg font-bold text-white flex items-center gap-2">
                    <span>💡</span> {t('Checkout.Instructions')}
                  </h4>

                  <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-5 md:p-6 text-sm text-gray-300 leading-relaxed space-y-4">
                    {/* Render instructions dynamically */}
                    {paymentMethod === 'taptap' && (
                      <div className="space-y-4">
                        <p className="font-semibold text-gray-400">
                          {t('Checkout.TapTapInstructions').split('\n')[0]}
                        </p>
                        <ul className="space-y-2 list-none pl-0">
                          <li>{t('Checkout.TapTapInstructions').split('\n')[1]}</li>
                          <li>{t('Checkout.TapTapInstructions').split('\n')[2]}</li>
                          <li className="mt-4 p-3.5 bg-black/40 border border-white/5 rounded-xl flex flex-col gap-2 relative">
                            <span className="text-xs uppercase font-bold text-gray-500 tracking-wider">
                              Moroccan Bank Coordinates
                            </span>
                            <div className="flex justify-between items-center">
                              <span className="font-semibold text-white">Bank Name:</span>
                              <span className="text-gray-300 font-bold">{PAYMENT_CONFIG.BANK_NAME}</span>
                            </div>
                            <div className="flex flex-col gap-1 mt-1">
                              <span className="font-semibold text-white">RIB (Account Details):</span>
                              <div className="flex items-center justify-between gap-2 bg-slate-900 border border-white/10 p-2 rounded-lg mt-1">
                                <span className="font-mono text-xs text-primary tracking-wider select-all break-all pr-2">
                                  {PAYMENT_CONFIG.BANK_RIB}
                                </span>
                                <button
                                  onClick={() => handleCopy(PAYMENT_CONFIG.BANK_RIB)}
                                  className="text-gray-400 hover:text-white transition-colors"
                                  title="Copy RIB"
                                >
                                  <Copy className="w-4 h-4" />
                                </button>
                              </div>
                              {copiedText === PAYMENT_CONFIG.BANK_RIB && (
                                <span className="text-xs text-green-400 self-end font-semibold">
                                  Copied!
                                </span>
                              )}
                            </div>
                          </li>
                          <li className="mt-2 text-xs text-yellow-400/80">
                            {t('Checkout.TapTapInstructions').split('\n')[5]}
                          </li>
                        </ul>
                      </div>
                    )}

                    {paymentMethod === 'remitly' && (
                      <div className="space-y-4">
                        <p className="font-semibold text-gray-400">
                          {t('Checkout.RemitlyInstructions').split('\n')[0]}
                        </p>
                        <ul className="space-y-2 list-none pl-0">
                          <li>{t('Checkout.RemitlyInstructions').split('\n')[1]}</li>
                          <li>{t('Checkout.RemitlyInstructions').split('\n')[2]}</li>
                          <li className="mt-4 p-3.5 bg-black/40 border border-white/5 rounded-xl flex flex-col gap-2 relative">
                            <span className="text-xs uppercase font-bold text-gray-500 tracking-wider">
                              Moroccan Bank Coordinates
                            </span>
                            <div className="flex justify-between items-center">
                              <span className="font-semibold text-white">Bank Name:</span>
                              <span className="text-gray-300 font-bold">{PAYMENT_CONFIG.BANK_NAME}</span>
                            </div>
                            <div className="flex flex-col gap-1 mt-1">
                              <span className="font-semibold text-white">RIB (Account Details):</span>
                              <div className="flex items-center justify-between gap-2 bg-slate-900 border border-white/10 p-2 rounded-lg mt-1">
                                <span className="font-mono text-xs text-primary tracking-wider select-all break-all pr-2">
                                  {PAYMENT_CONFIG.BANK_RIB}
                                </span>
                                <button
                                  onClick={() => handleCopy(PAYMENT_CONFIG.BANK_RIB)}
                                  className="text-gray-400 hover:text-white transition-colors"
                                  title="Copy RIB"
                                >
                                  <Copy className="w-4 h-4" />
                                </button>
                              </div>
                              {copiedText === PAYMENT_CONFIG.BANK_RIB && (
                                <span className="text-xs text-green-400 self-end font-semibold">
                                  Copied!
                                </span>
                              )}
                            </div>
                          </li>
                          <li className="mt-2 text-xs text-yellow-400/80">
                            {t('Checkout.RemitlyInstructions').split('\n')[5]}
                          </li>
                        </ul>
                      </div>
                    )}

                    {paymentMethod === 'wu' && (
                      <div className="space-y-4">
                        <p className="font-semibold text-gray-400">
                          {t('Checkout.WesternUnionInstructions').split('\n')[0]}
                        </p>
                        <p>{t('Checkout.WesternUnionInstructions').split('\n')[1]}</p>
                        <div className="p-3.5 bg-black/40 border border-white/5 rounded-xl flex flex-col gap-2">
                          <span className="text-xs uppercase font-bold text-gray-500 tracking-wider">
                            Recipient Information
                          </span>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Recipient Name:</span>
                            <span className="font-bold text-white">{PAYMENT_CONFIG.RECIPIENT_NAME}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">City:</span>
                            <span className="font-bold text-white">{PAYMENT_CONFIG.RECIPIENT_CITY}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Country:</span>
                            <span className="font-bold text-white">{PAYMENT_CONFIG.RECIPIENT_COUNTRY}</span>
                          </div>
                        </div>
                        <p className="text-xs text-yellow-400/80">
                          {t('Checkout.WesternUnionInstructions').split('\n')[5]}
                        </p>
                      </div>
                    )}

                    {paymentMethod === 'bank' && (
                      <div className="space-y-4">
                        <p className="font-semibold text-gray-400">
                          Direct Bank Transfer:
                        </p>
                        <p>Transfer the exact amount to the following Moroccan bank account:</p>
                        <div className="p-3.5 bg-black/40 border border-white/5 rounded-xl flex flex-col gap-2">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-400">Bank Name:</span>
                            <span className="font-bold text-white">{PAYMENT_CONFIG.BANK_NAME}</span>
                          </div>
                          <div className="flex flex-col gap-1 mt-1">
                            <span className="text-gray-400">RIB (Account Details):</span>
                            <div className="flex items-center justify-between gap-2 bg-slate-900 border border-white/10 p-2 rounded-lg mt-1">
                              <span className="font-mono text-xs text-primary tracking-wider select-all break-all pr-2">
                                {PAYMENT_CONFIG.BANK_RIB}
                              </span>
                              <button
                                onClick={() => handleCopy(PAYMENT_CONFIG.BANK_RIB)}
                                className="text-gray-400 hover:text-white transition-colors"
                                title="Copy RIB"
                              >
                                <Copy className="w-4 h-4" />
                              </button>
                            </div>
                            {copiedText === PAYMENT_CONFIG.BANK_RIB && (
                              <span className="text-xs text-green-400 self-end font-semibold">
                                Copied!
                              </span>
                            )}
                          </div>
                        </div>
                        <p className="text-xs text-yellow-400/80">
                          Take a screenshot of the transfer confirmation receipt.
                        </p>
                      </div>
                    )}

                    {paymentMethod === 'paypal' && (
                      <div className="space-y-4">
                        <p className="font-semibold text-gray-400">
                          PayPal / Credit Card:
                        </p>
                        <p>{t('Checkout.PayPalInstructions')}</p>
                      </div>
                    )}

                    {paymentMethod === 'crypto' && (
                      <div className="space-y-4">
                        <p className="font-semibold text-gray-400">
                          USDT (TRC-20 Network):
                        </p>
                        <p>Send the exact equivalent of the plan's price in USDT (TRC-20 Network):</p>
                        <div className="p-3.5 bg-black/40 border border-white/5 rounded-xl flex flex-col gap-1">
                          <span className="text-xs uppercase font-bold text-gray-500 tracking-wider mb-1">
                            USDT (TRC-20) Address
                          </span>
                          <div className="flex items-center justify-between gap-2 bg-slate-900 border border-white/10 p-2 rounded-lg">
                            <span className="font-mono text-xs text-yellow-500 tracking-wider select-all break-all pr-2">
                              {PAYMENT_CONFIG.USDT_TRC20}
                            </span>
                            <button
                              onClick={() => handleCopy(PAYMENT_CONFIG.USDT_TRC20)}
                              className="text-gray-400 hover:text-white transition-colors"
                              title="Copy Address"
                            >
                              <Copy className="w-4 h-4" />
                            </button>
                          </div>
                          {copiedText === PAYMENT_CONFIG.USDT_TRC20 && (
                            <span className="text-xs text-green-400 self-end font-semibold mt-1">
                              Copied!
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-yellow-400/80">
                          Ensure you use the TRC-20 network to avoid loss of funds.
                        </p>
                      </div>
                    )}
                  </div>

                  <p className="text-xs text-gray-400 px-1">
                    {t('Checkout.NextStep')}
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    onClick={() => {
                      const finalPrice = getPrice(selectedPlan);
                      const methodNames = {
                        taptap: 'TapTap Send / Sendwave',
                        remitly: 'Remitly',
                        wu: 'Western Union / MoneyGram',
                        bank: 'Bank Transfer (RIB)',
                        paypal: 'PayPal / Credit Card',
                        crypto: 'Cryptocurrency (USDT/BTC)'
                      };
                      const message = `Hello! I would like to order:
🌟 Plan: ${selectedPlan.name}
📺 Devices: ${screens} ${screens === 1 ? 'Device' : 'Devices'}
💰 Total Price: ${finalPrice} ${currencySymbols[currency]}
💳 Payment Method: ${methodNames[paymentMethod]}

Please activate my subscription. Here is my payment receipt/transaction code:`;
                      const whatsappUrl = `https://wa.me/${PAYMENT_CONFIG.WHATSAPP_NUMBER.replace(/\+/g, '')}?text=${encodeURIComponent(message)}`;
                      window.open(whatsappUrl, '_blank');
                    }}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-black py-4 px-6 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-[1.01] shadow-[0_0_20px_rgba(16,185,129,0.3)] text-sm md:text-base"
                  >
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.458L0 24zm6.735-4.437c1.618.96 3.2 1.48 4.978 1.486 5.489.004 9.954-4.463 9.957-9.96.002-2.662-1.032-5.166-2.91-7.047C16.94 2.162 14.444.982 12.01.982c-5.492 0-9.959 4.468-9.963 9.968-.002 1.8.481 3.56 1.393 5.118l-.994 3.634 3.737-.981zm12.39-6.2c-.27-.135-1.602-.79-1.85-.88-.25-.09-.432-.135-.615.135-.183.27-.707.88-.866 1.062-.16.183-.32.203-.59.068-.27-.135-1.14-.42-2.17-1.34-.802-.715-1.343-1.6-1.5-1.871-.16-.272-.017-.42.119-.554.12-.12.27-.315.405-.47.135-.16.18-.27.27-.45.09-.18.046-.337-.02-.472-.068-.135-.616-1.482-.843-2.031-.22-.533-.443-.46-.615-.46-.16 0-.34-.02-.52-.02-.18 0-.472.067-.719.338-.247.27-.942.922-.942 2.25s.965 2.612 1.1 2.8c.134.18 1.9 2.9 4.6 4.07.64.28 1.14.445 1.52.565.64.2 1.22.17 1.68.1 5.14-.76 1.5-.15 1.98-.38.48-.23 1.026-.55 1.258-.85.232-.3.232-.563.162-.68-.07-.12-.25-.205-.52-.34z" />
                    </svg>
                    <span>{t('Checkout.ConfirmWhatsApp')}</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Pricing;
