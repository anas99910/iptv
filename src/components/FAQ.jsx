import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'Which devices are supported?',
      answer: 'Our IPTV service is compatible with almost all devices including Smart TVs (Samsung, LG, etc.), Android boxes, Apple TV, Amazon Firestick, MAG boxes, smartphones (iOS and Android), and computers (PC and Mac).'
    },
    {
      question: 'Do you offer a free trial?',
      answer: 'Yes! We offer a 24-hour free trial so you can test the quality of our channels, movies, and series before making a purchase. Simply fill out the trial request form.'
    },
    {
      question: 'How fast is activation?',
      answer: 'Activation is instant. As soon as your payment is processed, you will receive your login credentials via email and WhatsApp within a few minutes.'
    },
    {
      question: 'Is VPN required?',
      answer: 'A VPN is not strictly required to use our service, but we highly recommend it if your internet service provider (ISP) blocks or throttles IPTV traffic.'
    },
    {
      question: 'Can I use IPTV on Smart TV?',
      answer: 'Absolutely. You can use apps like IBO Player, IPTV Smarters Pro, or DuplexPlay on your Samsung or LG Smart TV to access our service easily.'
    },
    {
      question: 'What payment methods are accepted?',
      answer: 'We accept all major credit and debit cards, PayPal, and various cryptocurrencies to ensure a safe and secure transaction.'
    }
  ];

  return (
    <section id="faq" className="py-24 bg-background relative z-10 border-t border-white/5">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {t('Frequently Asked Questions')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`glass-card overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-primary/50 bg-white/10' : 'border-white/10'}`}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className={`font-semibold text-lg ${openIndex === index ? 'text-primary' : 'text-gray-200'}`}>
                  {t(faq.question)}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-primary' : 'text-gray-400'}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-gray-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
