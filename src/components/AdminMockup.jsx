import React from 'react';
import { motion } from 'framer-motion';
import { Activity, CreditCard, Laptop, Smartphone, Tv, CheckCircle2, AlertCircle } from 'lucide-react';

const AdminMockup = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[600px] bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Manage with Ease
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get full control over your subscription with our intuitive user dashboard. Renew, upgrade, and manage your devices seamlessly.
          </p>
        </div>

        {/* Dashboard Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto glass-card rounded-2xl border border-white/10 overflow-hidden shadow-2xl shadow-primary/20"
        >
          {/* Header */}
          <div className="bg-white/5 border-b border-white/10 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-sm font-medium text-gray-400">my.subscriptioniptvpro.com</div>
            <div className="w-8"></div>
          </div>

          <div className="p-6 md:p-8 bg-[#0a0f25]/80 grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Sidebar Mock */}
            <div className="hidden md:flex flex-col gap-2 border-r border-white/10 pr-6">
              <div className="p-3 rounded-lg bg-primary/20 text-primary font-medium flex items-center gap-3">
                <Activity className="w-5 h-5" /> Dashboard
              </div>
              <div className="p-3 rounded-lg text-gray-400 hover:bg-white/5 font-medium flex items-center gap-3">
                <CreditCard className="w-5 h-5" /> Subscription
              </div>
              <div className="p-3 rounded-lg text-gray-400 hover:bg-white/5 font-medium flex items-center gap-3">
                <Tv className="w-5 h-5" /> My Devices
              </div>
            </div>

            {/* Main Content */}
            <div className="md:col-span-2 space-y-6">
              
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Welcome back, John!</h3>
                  <p className="text-sm text-gray-400">Here's what's happening with your account today.</p>
                </div>
              </div>

              {/* Status Card */}
              <div className="bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 rounded-xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Activity className="w-32 h-32" />
                </div>
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-primary font-semibold uppercase tracking-wider mb-1">Active Plan</p>
                    <h4 className="text-3xl font-bold text-white mb-2">Gold Plan</h4>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                      Expires in 142 days (Oct 12, 2026)
                    </div>
                  </div>
                  <button className="px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/80 transition-colors">
                    Renew Now
                  </button>
                </div>
              </div>

              {/* Grid sections */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Active Devices */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h5 className="font-bold text-white">Active Devices (2/3)</h5>
                    <button className="text-xs text-primary hover:underline">Manage</button>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white/10 rounded-lg"><Tv className="w-5 h-5 text-gray-300" /></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-200">Samsung Smart TV</p>
                        <p className="text-xs text-green-400 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-400"></span> Online</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white/10 rounded-lg"><Smartphone className="w-5 h-5 text-gray-300" /></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-200">iPhone 14 Pro</p>
                        <p className="text-xs text-gray-400 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span> Offline</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Order History */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h5 className="font-bold text-white">Recent Orders</h5>
                    <button className="text-xs text-primary hover:underline">View All</button>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-200">Gold Plan (6 Months)</p>
                        <p className="text-xs text-gray-400">Apr 12, 2026</p>
                      </div>
                      <span className="text-sm font-bold text-white">€49.99</span>
                    </div>
                    <div className="flex items-center justify-between opacity-50">
                      <div>
                        <p className="text-sm font-medium text-gray-200">Starter Plan (1 Month)</p>
                        <p className="text-xs text-gray-400">Mar 12, 2026</p>
                      </div>
                      <span className="text-sm font-bold text-white">€15.99</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdminMockup;
