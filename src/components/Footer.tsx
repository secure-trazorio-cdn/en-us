import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Twitter, Facebook, Instagram, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center mb-4"
            >
              <Shield className="h-8 w-8 text-trezor-green-600" />
              <span className="ml-2 text-2xl font-bold text-trezor-green-600">Trēzor.io</span>
            </motion.div>
            <p className="text-gray-600 mb-4 max-w-md">
              Securing the future of digital assets with cutting-edge technology and intuitive design. Your trusted partner in the digital economy.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Twitter className="h-5 w-5" />} />
              <SocialIcon icon={<Facebook className="h-5 w-5" />} />
              <SocialIcon icon={<Instagram className="h-5 w-5" />} />
              <SocialIcon icon={<Linkedin className="h-5 w-5" />} />
              <SocialIcon icon={<Github className="h-5 w-5" />} />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Products</h3>
            <ul className="space-y-2">
              <FooterLink href="#" label="Hardware Wallets" />
              <FooterLink href="#" label="Mobile App" />
              <FooterLink href="#" label="Enterprise Solutions" />
              <FooterLink href="#" label="Accessories" />
              <FooterLink href="#" label="Software" />
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              <FooterLink href="#" label="Documentation" />
              <FooterLink href="#" label="API" />
              <FooterLink href="#" label="Blog" />
              <FooterLink href="#" label="Support Center" />
              <FooterLink href="#" label="Security" />
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <FooterLink href="#" label="About Us" />
              <FooterLink href="#" label="Careers" />
              <FooterLink href="#" label="Press" />
              <FooterLink href="#" label="Contact" />
              <FooterLink href="#" label="Partners" />
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Trēzor.io. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center space-x-4 text-sm text-gray-600">
            <a href="#" className="hover:text-trezor-green-600 transition-colors mb-2 md:mb-0">Privacy Policy</a>
            <a href="#" className="hover:text-trezor-green-600 transition-colors mb-2 md:mb-0">Terms of Service</a>
            <a href="#" className="hover:text-trezor-green-600 transition-colors mb-2 md:mb-0">Cookie Policy</a>
            <a href="#" className="hover:text-trezor-green-600 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink: React.FC<{ href: string; label: string }> = ({ href, label }) => (
  <li>
    <a
      href={href}
      className="text-gray-600 hover:text-trezor-green-600 transition-colors"
    >
      {label}
    </a>
  </li>
);

const SocialIcon: React.FC<{ icon: React.ReactNode }> = ({ icon }) => (
  <a
    href="#"
    className="bg-gray-100 p-2 rounded-full text-gray-600 hover:text-trezor-green-600 hover:bg-trezor-green-50 transition-colors"
  >
    {icon}
  </a>
);

export default Footer;