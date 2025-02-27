import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Shield, Lock, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <Shield className="h-8 w-8 text-trezor-green-600" />
              <span className="ml-2 text-2xl font-bold text-trezor-green-600">Trēzor.io</span>
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavItem label="Products" hasDropdown />
            <NavItem label="Features" />
            <NavItem label="Security" />
            <NavItem label="Support" />
            <NavItem label="About" />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-trezor-green-600 text-white px-6 py-2 rounded-full font-medium hover:bg-trezor-green-700 transition-colors"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-trezor-green-600 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="flex flex-col py-4">
              <MobileNavItem label="Products" />
              <MobileNavItem label="Features" />
              <MobileNavItem label="Security" />
              <MobileNavItem label="Support" />
              <MobileNavItem label="About" />
              <div className="px-4 mt-4">
                <button className="w-full bg-trezor-green-600 text-white px-4 py-2 rounded-full font-medium hover:bg-trezor-green-700 transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

const NavItem: React.FC<{ label: string; hasDropdown?: boolean }> = ({
  label,
  hasDropdown,
}) => (
  <motion.div
    whileHover={{ y: -2 }}
    className="relative group"
  >
    <a
      href="#"
      className="text-gray-800 font-medium flex items-center hover:text-trezor-green-600 transition-colors"
    >
      {label}
      {hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
    </a>
    {hasDropdown && (
      <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left">
        <div className="py-2">
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-trezor-green-50 hover:text-trezor-green-600">
            Hardware Wallets
          </a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-trezor-green-50 hover:text-trezor-green-600">
            Software Solutions
          </a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-trezor-green-50 hover:text-trezor-green-600">
            Enterprise Services
          </a>
        </div>
      </div>
    )}
  </motion.div>
);

const MobileNavItem: React.FC<{ label: string }> = ({ label }) => (
  <a
    href="#"
    className="block px-4 py-2 text-gray-800 hover:bg-trezor-green-50 hover:text-trezor-green-600"
  >
    {label}
  </a>
);

export default Navbar;