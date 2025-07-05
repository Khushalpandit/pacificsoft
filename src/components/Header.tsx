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

const navItems: NavItem[] = [
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Services', href: '#services' },
  { name: 'Process', href: '#process' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' }
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openWhatsApp = () => {
    const phoneNumber = '919549020892';
    const message = encodeURIComponent('Hi! I\'m interested in your web development services. Can we discuss my project?');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const headerVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    scrolled: {
      backdropFilter: 'blur(20px)',
      backgroundColor:
        theme === 'dark' ? 'rgba(10, 15, 28, 0.95)' : 'rgba(255, 255, 255, 0.95)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    },
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, height: 0 },
    open: { opacity: 1, height: 'auto' },
  };

  return (
    <motion.header
      className="fixed left-0 right-0 top-0 z-50 transition-all duration-300"
      variants={headerVariants}
      initial="initial"
      animate={isScrolled ? 'scrolled' : 'animate'}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      style={{
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        backgroundColor: isScrolled
          ? theme === 'dark'
            ? 'rgba(10, 15, 28, 0.95)'
            : 'rgba(255, 255, 255, 0.95)'
          : 'transparent',
        boxShadow: isScrolled ? '0 8px 32px rgba(0, 0, 0, 0.1)' : 'none',
      }}
    >
      {/* Centered Container with max-width and equal spacing */}
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className={`flex items-center justify-between transition-all duration-500 ${
          isScrolled ? 'h-16' : 'h-20'
        }`}>
          
          {/* Logo - Left Side */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <a href="#home" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-[#FF6B2B] to-[#FF8A4A] rounded-lg flex items-center justify-center shadow-lg">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div className={`transition-all duration-500 ${
                isScrolled 
                  ? 'text-xl font-bold' 
                  : 'text-2xl font-bold'
              } ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {isScrolled ? (
                  <span className="bg-gradient-to-r from-[#FF6B2B] to-[#FF8A4A] bg-clip-text text-transparent">PS</span>
                ) : (
                  <>
                    Pacific<span className="text-[#FF6B2B]">Softwares</span>
                  </>
                )}
              </div>
            </a>
          </motion.div>

          {/* Navigation - Center */}
          <nav className="hidden items-center space-x-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors duration-200 hover:text-[#FF6B2B] ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Side - Theme Toggle & Chat Button */}
          <div className="hidden items-center space-x-4 lg:flex">
            <ThemeToggle />
            <motion.button
              onClick={openWhatsApp}
              className={`inline-flex items-center space-x-2 rounded-full bg-gradient-to-r from-[#FF6B2B] to-[#FF8A4A] px-6 py-2.5 font-medium text-white transition-all duration-200 hover:shadow-lg hover:shadow-[#FF6B2B]/25 hover:scale-105 ${
                isScrolled ? 'text-sm' : 'text-base'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className={`${isScrolled ? 'h-4 w-4' : 'h-5 w-5'}`} />
              <span>Chat Now</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            <ThemeToggle />
            <motion.button
              className={`rounded-lg p-2 transition-colors duration-200 ${
                theme === 'dark' 
                  ? 'text-white hover:bg-gray-800' 
                  : 'text-gray-900 hover:bg-gray-100'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
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
              className="overflow-hidden lg:hidden"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className={`mt-4 space-y-2 rounded-xl border py-4 shadow-xl backdrop-blur-lg ${
                theme === 'dark' 
                  ? 'border-white/20 bg-gray-900/95' 
                  : 'border-gray-200 bg-white/95'
              }`}>
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`block px-4 py-3 font-medium transition-colors duration-200 ${
                      theme === 'dark' 
                        ? 'text-white hover:bg-gray-800' 
                        : 'text-gray-900 hover:bg-gray-100'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
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
                    className="flex items-center justify-center w-full rounded-lg bg-gradient-to-r from-[#FF6B2B] to-[#FF8A4A] py-2.5 text-center font-medium text-white transition-all duration-200 hover:shadow-lg hover:shadow-[#FF6B2B]/25 space-x-2"
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