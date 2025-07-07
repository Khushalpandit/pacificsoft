'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle, Code } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import ThemeToggle from './ThemeToggle';

interface NavItem {
  name: string;
  href: string;
}

const NAVIGATION_ITEMS: NavItem[] = [
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Services', href: '#services' },
  { name: 'Process', href: '#process' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' }
];

const WHATSAPP_CONFIG = {
  phoneNumber: '919549020892',
  message: 'Hi! I\'m interested in your web development services. Can we discuss my project?'
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    const handleHashChange = () => {
      setIsMobileMenuOpen(false);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const openWhatsApp = () => {
    const { phoneNumber, message } = WHATSAPP_CONFIG;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const headerClasses = `
    fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
    ${isScrolled 
      ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-200/50 dark:border-gray-700/50' 
      : 'bg-transparent'
    }
  `;

  const containerClasses = `
    mx-auto max-w-7xl px-4 sm:px-6 lg:px-8
    ${isScrolled ? 'py-3' : 'py-4'}
    transition-all duration-300 ease-in-out
  `;

  const logoClasses = `
    flex items-center space-x-3 group cursor-pointer
    ${isScrolled ? 'scale-95' : 'scale-100'}
    transition-transform duration-300 ease-in-out
  `;

  const logoTextClasses = `
    font-bold transition-all duration-300 ease-in-out
    ${isScrolled ? 'text-xl' : 'text-2xl'}
    text-gray-900 dark:text-white
  `;

  const navLinkClasses = `
    relative font-medium transition-all duration-200 ease-in-out
    text-gray-700 dark:text-gray-200
    hover:text-orange-500 dark:hover:text-orange-400
    after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0
    after:bg-orange-500 after:transition-all after:duration-300
    hover:after:w-full
  `;

  const chatButtonClasses = `
    inline-flex items-center space-x-2 rounded-full font-medium transition-all duration-200 ease-in-out
    bg-gradient-to-r from-orange-500 to-orange-600 text-white
    hover:from-orange-600 hover:to-orange-700 hover:shadow-lg hover:shadow-orange-500/25
    active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2
    ${isScrolled ? 'px-4 py-2 text-sm' : 'px-6 py-2.5 text-base'}
  `;

  const mobileMenuButtonClasses = `
    rounded-lg p-2 transition-colors duration-200 ease-in-out
    text-gray-700 dark:text-gray-200
    hover:bg-gray-100 dark:hover:bg-gray-800
    focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2
  `;

  return (
    <motion.header
      className={headerClasses}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className={containerClasses}>
        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <motion.div
            className={logoClasses}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <a 
              href="#home" 
              className="flex items-center space-x-3"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <div className={logoTextClasses}>
                {isScrolled ? (
                  <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                    PS
                  </span>
                ) : (
                  <>
                    Pacific<span className="text-orange-500">Softwares</span>
                  </>
                )}
              </div>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAVIGATION_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={navLinkClasses}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle />
            <motion.button
              onClick={openWhatsApp}
              className={chatButtonClasses}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className={isScrolled ? 'h-4 w-4' : 'h-5 w-5'} />
              <span>Chat Now</span>
            </motion.button>
          </div>

          {/* Mobile Actions */}
          <div className="lg:hidden flex items-center space-x-3">
            <ThemeToggle />
            <motion.button
              className={mobileMenuButtonClasses}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="mt-4 py-4 space-y-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 rounded-xl shadow-lg">
                {NAVIGATION_ITEMS.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 font-medium transition-colors duration-200 text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="px-4 py-2">
                  <button
                    onClick={() => {
                      openWhatsApp();
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center justify-center w-full rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 py-2.5 text-center font-medium text-white transition-all duration-200 hover:from-orange-600 hover:to-orange-700 hover:shadow-lg hover:shadow-orange-500/25 space-x-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat Now</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}