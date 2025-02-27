import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white to-trezor-green-50 overflow-hidden flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-trezor-green-100 rounded-full filter blur-3xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-trezor-green-200 rounded-full filter blur-3xl opacity-30 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxZTdhMmUiIGZpbGwtb3BhY2l0eT0iMC4wMiIgZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptLTIgMmgtMXYtMWgxdjF6TTM0IDI5aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptLTIgMmgtMXYtMWgxdjF6Ii8+PC9nPjwvc3ZnPg==')] opacity-40"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 md:pr-12"
          >
            <div className="flex items-center mb-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.6 
                }}
                className="bg-trezor-green-600 text-white px-4 py-1 rounded-full text-sm font-medium inline-flex items-center"
              >
                <Lock className="w-4 h-4 mr-1" /> Secure by Design
              </motion.div>
            </div>
            
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
            >
              The Future of <span className="text-trezor-green-600">Digital Asset</span> Security Starts Here
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg text-gray-700 mb-8 leading-relaxed"
            >
              Take control of your digital future with Trēzor's next-generation security solutions. Protect what matters most with military-grade encryption and intuitive design.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-trezor-green-600 text-white px-8 py-3 rounded-full font-medium hover:bg-trezor-green-700 transition-colors flex items-center justify-center"
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-trezor-green-600 border border-trezor-green-600 px-8 py-3 rounded-full font-medium hover:bg-trezor-green-50 transition-colors flex items-center justify-center"
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="md:w-1/2 mt-12 md:mt-0"
          >
            <div className="relative">
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ 
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut" 
                }}
                className="relative z-10"
              >
                <img 
                  src="https://images.unsplash.com/photo-1621416894569-0f39ed31d247?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Trēzor Hardware Wallet" 
                  className="rounded-xl shadow-2xl"
                />
              </motion.div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-trezor-green-100 rounded-full filter blur-md"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-trezor-green-200 rounded-full filter blur-md"></div>
              
              {/* Security badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-5 -left-5 bg-white rounded-lg shadow-lg p-3 flex items-center"
              >
                <Shield className="h-8 w-8 text-trezor-green-600 mr-2" />
                <div>
                  <div className="text-xs text-gray-500">Military-grade</div>
                  <div className="text-sm font-bold">256-bit Encryption</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;