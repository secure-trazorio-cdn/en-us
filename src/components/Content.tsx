import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, Shield, Lock, Zap } from 'lucide-react';

const Content: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const bulletPoints = [
    "Military-grade encryption protects your assets from all threats",
    "Offline storage eliminates the risk of online hacking attempts",
    "Intuitive interface makes managing digital assets simple",
    "Multi-signature authorization for enterprise-level security",
    "Automatic backups ensure you never lose access to your assets",
    "Biometric authentication adds an extra layer of protection"
  ];

  return (
    <section ref={ref} className="py-20 bg-white" id="content">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Secure Your Digital Future with <span className="text-trezor-green-600">Trēzor.io</span>
            </h2>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              In today's rapidly evolving digital landscape, securing your assets has never been more critical. Trēzor.io stands at the forefront of digital security innovation, providing unparalleled protection for your cryptocurrency investments and digital assets.
            </p>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our revolutionary hardware wallets combine cutting-edge technology with intuitive design, ensuring that your digital wealth remains secure against all threats while remaining accessible to you whenever needed. With Trēzor, you're not just buying a product – you're investing in peace of mind.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Trēzor?</h3>
              <ul className="space-y-3">
                {bulletPoints.map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="flex items-start"
                  >
                    <CheckCircle className="h-6 w-6 text-trezor-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              As blockchain technology continues to reshape our financial systems, having a secure foundation becomes essential. Trēzor.io provides that foundation, allowing you to navigate the digital economy with confidence and security.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-trezor-green-600 text-white px-8 py-3 rounded-full font-medium hover:bg-trezor-green-700 transition-colors"
            >
              Start Your Journey
            </motion.button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-trezor-green-50 rounded-2xl p-8 relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Security Features</h3>
              
              <div className="space-y-6">
                <FeatureItem 
                  icon={<Shield className="h-8 w-8 text-trezor-green-600" />}
                  title="Advanced Encryption"
                  description="Our proprietary encryption algorithms exceed industry standards, ensuring your private keys remain secure against all threats, including quantum computing."
                />
                
                <FeatureItem 
                  icon={<Lock className="h-8 w-8 text-trezor-green-600" />}
                  title="Physical Security"
                  description="Tamper-resistant hardware design prevents physical attacks, with automatic data wiping if unauthorized access is detected."
                />
                
                <FeatureItem 
                  icon={<Zap className="h-8 w-8 text-trezor-green-600" />}
                  title="Instant Verification"
                  description="Verify transactions in seconds with our proprietary verification system, combining speed with uncompromising security."
                />
              </div>
              
              <div className="mt-8 p-4 bg-white rounded-lg border border-trezor-green-100">
                <p className="text-sm text-gray-600 italic">
                  "Trēzor has revolutionized how we approach digital asset security. Their innovative solutions provide the perfect balance of security and usability."
                </p>
                <p className="text-sm font-bold text-gray-900 mt-2">— Blockchain Security Quarterly</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-trezor-green-100 rounded-full filter blur-xl opacity-70"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-trezor-green-200 rounded-full filter blur-xl opacity-70"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FeatureItem: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <div className="flex">
    <div className="flex-shrink-0 mr-4">{icon}</div>
    <div>
      <h4 className="text-lg font-semibold text-gray-900 mb-1">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default Content;