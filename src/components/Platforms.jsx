import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Tv, Smartphone, Laptop, Gamepad, Globe, Monitor, X, MessageCircle } from 'lucide-react';

const Platforms = () => {
  const { t, i18n } = useTranslation();
  const [selectedDevice, setSelectedDevice] = useState(null);

  const deviceBadges = [
    { name: 'Fire TV Stick', icon: <Tv className="w-5 h-5 text-orange-500" /> },
    { name: 'Samsung SMART TV', icon: <Tv className="w-5 h-5 text-blue-600" /> },
    { name: 'Android TV', icon: <Tv className="w-5 h-5 text-emerald-500" /> },
    { name: 'iOS', icon: <Smartphone className="w-5 h-5 text-slate-400" /> },
    { name: 'MAG Box', icon: <Tv className="w-5 h-5 text-pink-500" /> },
    { name: 'NVIDIA SHIELD', icon: <Tv className="w-5 h-5 text-green-500" /> },
    { name: 'Android', icon: <Smartphone className="w-5 h-5 text-emerald-400" /> },
    { name: 'IPTV SMARTERS PRO', icon: <Monitor className="w-5 h-5 text-indigo-500" /> },
    { name: 'XBOX LIVE', icon: <Gamepad className="w-5 h-5 text-green-500" /> },
    { name: 'WEBPLAYER', icon: <Globe className="w-5 h-5 text-purple-500" /> },
    { name: 'LG Smart TV', icon: <Tv className="w-5 h-5 text-red-500" /> },
    { name: 'Windows', icon: <Laptop className="w-5 h-5 text-blue-400" /> }
  ];

  const infoPills = [
    'Stable Server',
    'Security & Privacy',
    '20,000 Live TV Channels',
    'Electronic Program Guide (EPG)'
  ];

  const setupGuides = {
    fr: {
      'Fire TV Stick': ["Installez l'application 'Downloader' depuis l'Appstore Amazon.", "Allez dans Paramètres > Mon Fire TV > Options pour les développeurs et activez 'Applications de sources inconnues' pour l'application Downloader.", "Ouvrez Downloader et entrez le code de téléchargement direct fourni par notre service.", "Ouvrez l'application installée et saisissez votre nom d'utilisateur, mot de passe et l'URL du portail."],
      'Samsung SMART TV': ["Ouvrez le Samsung App Store sur votre téléviseur.", "Recherchez l'application 'IBO Player' ou 'IPTV Smarters Pro' et téléchargez-la.", "Ouvrez l'application sur votre écran.", "Notez l'adresse MAC et la clé de l'appareil (Device Key) affichées, puis transmettez-les à notre support WhatsApp pour une activation à distance."],
      'Android TV': ["Ouvrez le Google Play Store de votre téléviseur.", "Saisissez 'IPTV Smarters Pro' ou 'XCIPTV' dans la barre de recherche et installez-la.", "Sélectionnez 'Se connecter avec l'API Xtream Codes'.", "Saisissez vos identifiants d'abonnement (Nom d'utilisateur, Mot de passe et URL du serveur)."],
      'iOS': ["Rendez-vous sur l'App Store de votre iPhone ou iPad.", "Téléchargez l'application 'Smarters Player Lite' ou 'GSE Smart IPTV'.", "Sélectionnez 'Ajouter un utilisateur' puis activez 'API Xtream Codes'.", "Renseignez les informations de connexion reçues via WhatsApp ou e-mail."],
      'MAG Box': ["Allumez votre décodeur MAG et connectez-le à internet.", "Allez dans Réglages > Paramètres Système > Serveurs > Portails.", "Définissez le nom du Portail sur 'IPTV Premium' et saisissez l'URL de portail envoyée par notre support.", "Redémarrez votre appareil MAG pour charger l'intégralité du bouquet de chaînes."],
      'NVIDIA SHIELD': ["Ouvrez le Google Play Store sur votre console Nvidia Shield.", "Téléchargez l'application 'TiviMate' ou 'IPTV Smarters Pro'.", "Sélectionnez 'Ajouter une Playlist' ou saisissez vos API Xtream Codes.", "Saisissez les codes d'accès uniques de votre abonnement."],
      'Android': ["Ouvrez le Google Play Store de votre smartphone.", "Installez l'application 'IPTV Smarters Pro' ou 'XCIPTV'.", "Choisissez l'option 'API Xtream Codes'.", "Connectez-vous à l'aide des identifiants d'accès fournis."],
      'IPTV SMARTERS PRO': ["Lancez l'application IPTV Smarters Pro sur l'appareil de votre choix.", "Sélectionnez l'option 'Connexion via API Xtream Codes' (recommandé).", "Renseignez votre nom, votre Nom d'utilisateur, votre Mot de passe et l'URL du Serveur.", "Cliquez sur 'Ajouter un utilisateur' pour charger vos flux instantanément."],
      'XBOX LIVE': ["Recherchez 'MyIPTV Player' dans le Microsoft Store sur votre console Xbox.", "Installez et ouvrez l'application.", "Allez dans l'onglet Paramètres > Ajouter une nouvelle liste de lecture.", "Sélectionnez 'Liste de lecture distante' et collez votre lien M3U fourni."],
      'WEBPLAYER': ["Ouvrez votre navigateur web habituel (Chrome, Edge, Safari, Firefox).", "Saisissez l'adresse de notre Web Player Premium envoyée par e-mail.", "Entrez votre Nom d'utilisateur et votre Mot de passe.", "Profitez de tout votre contenu directement en ligne sans aucune installation."],
      'LG Smart TV': ["Accédez au LG Content Store de votre téléviseur.", "Recherchez et installez l'application 'IBO Player' ou 'IPTV Smarters Pro'.", "Lancez l'application pour afficher l'adresse MAC et la Device Key.", "Envoyez ces codes à notre service client sur WhatsApp pour liaison de licence."],
      'Windows': ["Téléchargez l'application 'IPTV Smarters Pro' pour Windows PC.", "Ouvrez l'application après installation et sélectionnez 'Xtream Codes API'.", "Saisissez votre Nom d'utilisateur, votre Mot de passe et l'URL du serveur.", "Cliquez sur Connexion pour charger la VOD et les chaînes en direct."]
    },
    en: {
      'Fire TV Stick': ["Search and install the 'Downloader' app from the Amazon Appstore.", "Navigate to Settings > My Fire TV > Developer Options, and enable 'Install Unknown Apps' for Downloader.", "Launch Downloader and type the direct download code provided in your email.", "Launch the newly installed app and fill in your Username, Password, and Server Portal URL."],
      'Samsung SMART TV': ["Open the Samsung App Store on your Smart TV.", "Search for 'IBO Player' or 'IPTV Smarters Pro' and download it.", "Launch the app from your dashboard.", "Copy your TV's MAC Address and Device Key displayed on screen, and send them to our WhatsApp support for remote activation."],
      'Android TV': ["Launch the Google Play Store on your Android TV.", "Search for 'IPTV Smarters Pro' or 'XCIPTV' and install it.", "Select 'Login with Xtream Codes API'.", "Enter your subscription details (Username, Password, and Server URL)."],
      'iOS': ["Open the Apple App Store on your iPhone or iPad.", "Download 'Smarters Player Lite' or 'GSE Smart IPTV'.", "Tap 'Add User' and select 'Xtream Codes API'.", "Input your Username, Password, and Server URL provided."],
      'MAG Box': ["Connect your MAG device to your TV and network.", "Navigate to Settings > System Settings > Servers > Portals.", "Set Portal 1 Name as 'IPTV Premium' and paste your custom Portal URL.", "Reboot the MAG Box to boot directly into our interactive channel guide."],
      'NVIDIA SHIELD': ["Open the Google Play Store on your Nvidia Shield.", "Install 'TiviMate' or 'IPTV Smarters Pro'.", "Choose 'Add Playlist' or login via 'Xtream Codes API'.", "Enter the login credentials we sent you via WhatsApp."],
      'Android': ["Open the Google Play Store on your Android smartphone.", "Install 'IPTV Smarters Pro' or 'XCIPTV'.", "Select 'Login with Xtream Codes API'.", "Enter your login credentials to start streaming."],
      'IPTV SMARTERS PRO': ["Open the IPTV Smarters Pro app on your selected device.", "Choose 'Login with Xtream Codes API' (recommended).", "Enter your preferred name, Username, Password, and Server URL.", "Click 'Add User' to load your VOD library and live TV guides."],
      'XBOX LIVE': ["Open the Microsoft Store on your Xbox console.", "Install the free 'MyIPTV Player' application.", "Go to Settings > Add New Playlist.", "Choose 'Remote Playlist' and paste your custom M3U subscription URL."],
      'WEBPLAYER': ["Open any modern web browser (Chrome, Edge, Safari, Firefox).", "Navigate to our premium Web Player URL sent in your credentials.", "Input your Username and Password.", "Start streaming instantly in high resolution without any downloads."],
      'LG Smart TV': ["Open the LG Content Store on your Smart TV.", "Search and install the 'IBO Player' or 'IPTV Smarters Pro' application.", "Open the application to retrieve your MAC Address and Device Key.", "Send these codes to our support team on WhatsApp to activate your device."],
      'Windows': ["Download and install 'IPTV Smarters Pro' for Windows.", "Launch the application and select 'Xtream Codes API'.", "Fill in your unique Username, Password, and Server URL.", "Click Login to access Live TV, Movies, and TV Shows."]
    },
    ar: {
      'Fire TV Stick': ["ابحث عن تطبيق 'Downloader' وقم بتثبيته من متجر تطبيقات Amazon.", "انتقل إلى الإعدادات > My Fire TV > خيارات المطور، وقم بتمكين 'تثبيت تطبيقات مجهولة' لتطبيق Downloader.", "افتح تطبيق Downloader واكتب رمز التحميل المباشر المرسل إليك.", "افتح التطبيق المثبت وأدخل اسم المستخدم وكلمة المرور ورابط البوابة الإلكترونية."],
      'Samsung SMART TV': ["افتح متجر تطبيقات Samsung على تلفزيونك الذكي.", "ابحث عن تطبيق 'IBO Player' أو 'IPTV Smarters Pro' وقم بتنزيله.", "قم بتشغيل التطبيق على الشاشة.", "انسخ عنوان MAC ومفتاح الجهاز (Device Key) الظاهريين على الشاشة وأرسلهما إلى دعم الواتساب الخاص بنا للتفعيل الفوري."],
      'Android TV': ["افتح متجر Google Play على شاشة Android TV الخاصة بك.", "ابحث عن 'IPTV Smarters Pro' أو 'XCIPTV' وقم بتثبيته.", "اختر 'تسجيل الدخول عبر Xtream Codes API'.", "أدخل بيانات اشتراكك (اسم المستخدم، كلمة المرور، ورابط السيرفر)."],
      'iOS': ["افتح متجر تطبيقات Apple App Store على هاتف iPhone أو جهاز iPad.", "قم بتنزيل تطبيق 'Smarters Player Lite' أو 'GSE Smart IPTV'.", "اختر 'إضافة مستخدم' ثم 'Xtream Codes API'.", "أدخل اسم المستخدم وكلمة المرور ورابط السيرفر المرسل إليك."],
      'MAG Box': ["قم بتوصيل جهاز MAG بالتلفزيون والإنترنت.", "انتقل إلى الإعدادات > إعدادات النظام > الخوادم > البوابات (Portals).", "قم بتسمية البوابة الأولى بـ 'IPTV Premium' والصق رابط البوابة المخصص لك.", "أعد تشغيل جهاز MAG لتبدأ باقة القنوات بالتحميل تلقائيًا."],
      'NVIDIA SHIELD': ["افتح متجر Google Play على جهاز Nvidia Shield الخاص بك.", "قم بتثبيت تطبيق 'TiviMate' أو 'IPTV Smarters Pro'.", "اختر 'إضافة قائمة تشغيل' أو تسجيل الدخول عبر 'Xtream Codes API'.", "أدخل بيانات اشتراكك المرسلة إليك عبر الواتساب."],
      'Android': ["افتح متجر Google Play على هاتفك الذكي الذي يعمل بنظام Android.", "قم بتثبيت تطبيق 'IPTV Smarters Pro' أو 'XCIPTV'.", "اختر 'تسجيل الدخول عبر Xtream Codes API'.", "أدخل بيانات اشتراكك لبدء البث المباشر فورًا."],
      'IPTV SMARTERS PRO': ["افتح تطبيق IPTV Smarters Pro على جهازك المفضل.", "اختر 'تسجيل الدخول عبر Xtream Codes API' (موصى به).", "أدخل الاسم واسم المستخدم وكلمة المرور ورابط السيرفر الخاص بنا.", "اضغط على 'إضافة مستخدم' لتحميل مكتبة القنوات والأفلام مباشرة."],
      'XBOX LIVE': ["افتح متجر Microsoft على جهاز Xbox الخاص بك.", "قم بتثبيت تطبيق 'MyIPTV Player' المجاني.", "اذهب إلى الإعدادات > إضافة قائمة تشغيل جديدة.", "اختر 'قائمة تشغيل عن بعد' والصق رابط M3U الخاص باشتراكك."],
      'WEBPLAYER': ["افتح أي متصفح إنترنت حديث (Chrome, Edge, Safari, Firefox).", "انتقل إلى رابط مشغل الويب Premium المذكور في رسالتك.", "أدخل اسم المستخدم وكلمة المرور الخاصة بك.", "ابدأ المشاهدة مباشرة عبر المتصفح بدقة عالية دون الحاجة لتثبيت أي تطبيقات."],
      'LG Smart TV': ["افتح متجر محتوى LG على تلفزيونك الذكي.", "ابحث عن تطبيق 'IBO Player' أو 'IPTV Smarters Pro' وقم بتثبيته.", "شغل التطبيق لتظهر لك عنوان MAC ومفتاح الجهاز (Device Key).", "أرسل هذه الرموز لدعمنا الفني على الواتساب لربط رخصتك وتفعيل باقتك."],
      'Windows': ["قم بتنزيل وتثبيت برنامج 'IPTV Smarters Pro' لنظام التشغيل Windows.", "شغل التطبيق بعد التثبيت واختر 'Xtream Codes API'.", "أدخل اسم المستخدم وكلمة المرور ورابط السيرفر الخاص باشتراكك.", "اضغط على تسجيل الدخول لتحميل البث المباشر والأفلام والمسلسلات."]
    }
  };

  const getSteps = (device) => {
    const lang = i18n.language || 'fr';
    const dict = setupGuides[lang] || setupGuides['en'];
    return dict[device] || dict['Fire TV Stick'];
  };

  return (
    <section id="compatibility" className="py-24 bg-background relative z-20 border-y border-white/5 overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4 order-2 lg:order-1">
            {deviceBadges.map((badge, idx) => (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedDevice(badge.name)}
                className="glass-card p-4 flex items-center justify-center gap-3 cursor-pointer select-none transition-all duration-300 text-left w-full hover:border-primary hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
              >
                {badge.icon}
                <span className="text-gray-200 font-extrabold text-sm md:text-base tracking-tight">{badge.name}</span>
              </motion.button>
            ))}
          </div>

          <div className="lg:col-span-5 flex flex-col gap-8 text-center lg:text-left order-1 lg:order-2">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                {t('IPTV Maroc')}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary glow-text uppercase">
                  {t('COMPATIBLE WITH ALL DEVICES')}
                </span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed font-light">
                {t('Enjoy premium IPTV at affordable prices.')}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {infoPills.map((pill, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ scale: 1.03, y: -2 }}
                  className="bg-white/5 border border-white/10 hover:border-secondary/50 text-gray-200 hover:text-white shadow-lg font-black text-base md:text-lg flex items-center justify-center py-4 px-6 rounded-full cursor-default select-none transition-all duration-300 backdrop-blur-md"
                >
                  {t(pill)}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedDevice && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedDevice(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0a0f26] border border-white/10 p-6 md:p-8 rounded-3xl max-w-lg w-full relative shadow-[0_0_50px_rgba(59,130,246,0.15)] overflow-hidden text-left"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-[40px] pointer-events-none"></div>
              
              <button 
                onClick={() => setSelectedDevice(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 hover:bg-white/5 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-6">
                {deviceBadges.find(b => b.name === selectedDevice)?.icon}
                <h3 className="text-xl md:text-2xl font-black text-white">
                  {selectedDevice}
                </h3>
              </div>

              <h4 className="text-sm font-black text-primary uppercase tracking-wider mb-4">
                {i18n.language === 'fr' ? "Guide d'installation" : i18n.language === 'ar' ? 'دليل التثبيت' : 'Setup Instructions'}
              </h4>

              <ol className="space-y-4 mb-8">
                {getSteps(selectedDevice).map((step, idx) => (
                  <li key={idx} className="flex gap-3 text-sm md:text-base text-gray-300 leading-relaxed">
                    <span className="font-extrabold text-primary min-w-[20px]">{idx + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>

              <div className="flex flex-col sm:flex-row gap-3">
                <button 
                  onClick={() => setSelectedDevice(null)}
                  className="w-full sm:flex-1 py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-xl font-bold text-sm transition-all"
                >
                  {i18n.language === 'fr' ? 'Fermer' : i18n.language === 'ar' ? 'إغلاق' : 'Close'}
                </button>
                <a 
                  href="https://wa.me/15551234567"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:flex-1 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-green-500/20 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{i18n.language === 'fr' ? 'Support WhatsApp' : i18n.language === 'ar' ? 'الدعم الفني' : 'WhatsApp Support'}</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Platforms;
