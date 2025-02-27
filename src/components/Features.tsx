import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Lock, Fingerprint, Zap, Layers, RefreshCw } from 'lucide-react';

const features = [
  {
    icon: <Shield className="h-8 w-8 text-trezor-green-600" />,
    title: "Military-Grade Security",
    description: "Protect your digital assets with the highest level of encryption available to civilians, ensuring your wealth remains secure against all threats."
  },
  {
    icon: <Lock className="h-8 w-8 text-trezor-green-600" />,
    title: "Offline Storage",
    description: "Keep your private keys completely offline in cold storage, eliminating the risk of online hacking attempts and unauthorized access."
  },
  {
    icon: <Fingerprint className="h-8 w-8 text-trezor-green-600" />,
    title: "Biometric Authentication",
    description: "Add an extra layer of security with advanced biometric verification, ensuring only you can access your digital assets."
  },
  {
    icon: <Zap className="h-8 w-8 text-trezor-green-600" />,
    title: "Instant Verification",
    description: "Verify transactions in seconds with our proprietary verification system, combining speed with uncompromising security."
  },
  {
    icon: <Layers className="h-8 w-8 text-trezor-green-600" />,
    title: "Multi-Asset Support",
    description: "Store and manage thousands of cryptocurrencies and digital assets in one secure location with intuitive organization."
  },
  {
    icon: <RefreshCw className="h-8 w-8 text-trezor-green-600" />,
    title: "Automatic Backups",
    description: "Never lose access to your assets with our innovative recovery system that ensures you always maintain control of your wealth."
  }
];

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}> = ({ icon, title, description, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
    >
      <div className="bg-trezor-green-50 rounded-full w-16 h-16 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const Features: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-white" id="features">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Advanced Features for the <span className="text-trezor-green-600">Digital Age</span>
          </h2>
          <p className="text-lg text-gray-600">
            Trēzor combines cutting-edge technology with intuitive design to provide unparalleled security for your digital assets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;