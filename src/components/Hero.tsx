import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Sparkles, Star, TrendingUp, Users, Award, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  const services = [
    'Custom Web Development',
    'E-commerce Solutions', 
    'Mobile Applications',
    'Enterprise Software',
    'Digital Transformation'
  ];

  useEffect(() => {
    // Rotating services
    const serviceTimer = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % services.length);
    }, 3000);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      clearInterval(serviceTimer);
      observer.disconnect();
    };
  }, []);

  const clientLogos = [
    { name: 'TechCorp', logo: 'TC' },
    { name: 'InnovateLab', logo: 'IL' },
    { name: 'DataFlow', logo: 'DF' },
    { name: 'CloudSync', logo: 'CS' },
    { name: 'NextGen', logo: 'NG' },
    { name: 'WebFlow', logo: 'WF' }
  ];

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-[#0A0F1C] dark:to-[#1A1F2E] pt-24">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-orange-50/50 dark:from-[#0A0F1C] dark:via-[#1A1F2E] dark:to-[#0A0F1C]"></div>
        
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-gradient-to-r from-orange-500/30 to-orange-600/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-20 w-24 h-24 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-2xl animate-float-delayed"></div>
        <div className="absolute top-1/2 right-10 w-20 h-20 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-2xl animate-float"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-20 dark:opacity-10" style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-20">
        {/* Main Content */}
        <div className="text-center mb-16">
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500/20 to-purple-500/20 border border-orange-500/30 rounded-full text-orange-500 text-sm font-medium mb-8 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
            Pacific Softwares - Your Website Partner
            <div className="w-2 h-2 bg-orange-500 rounded-full ml-2 animate-ping"></div>
          </motion.div>
          
          {/* Main Headline */}
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight px-4 sm:px-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block">We Don't Just Build Websites</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 animate-gradient-x">
              We Build Market Leaders.
            </span>
          </motion.h1>
          
          {/* Subheadline */}
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8 px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Your website is your first impression. We make sure it's unforgettable, 
            high-converting, and built to dominate.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16 px-4 sm:px-0"
          >
            <a
              href="https://cal.com/khushal-sharma-txi5n5"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 relative overflow-hidden text-sm sm:text-base"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Calendar className="mr-2 w-4 h-4 sm:w-5 sm:h-5 relative z-10" />
              <span className="relative z-10">Book a 15 min call</span>
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </motion.div>

          {/* Trusted by Industry Leaders Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-16"
          >
            <p className="text-gray-500 dark:text-gray-400 mb-8 text-xs sm:text-sm px-4 sm:px-0">Trusted by industry leaders worldwide</p>
            
            {/* Scrolling Logos Animation */}
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll space-x-8">
                {/* First set of logos */}
                {clientLogos.map((client, index) => (
                  <motion.div 
                    key={`first-${index}`}
                    className="flex-shrink-0 w-20 h-12 sm:w-24 sm:h-16 bg-white/50 dark:bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm border border-gray-200 dark:border-white/10 hover:bg-white/70 dark:hover:bg-white/20 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-gray-700 dark:text-white font-bold text-sm sm:text-lg">{client.logo}</span>
                  </motion.div>
                ))}
                {/* Duplicate set for seamless loop */}
                {clientLogos.map((client, index) => (
                  <motion.div 
                    key={`second-${index}`}
                    className="flex-shrink-0 w-20 h-12 sm:w-24 sm:h-16 bg-white/50 dark:bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm border border-gray-200 dark:border-white/10 hover:bg-white/70 dark:hover:bg-white/20 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-gray-700 dark:text-white font-bold text-sm sm:text-lg">{client.logo}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Rotating Services Display with margin bottom */}
          <motion.div 
            className="text-center mb-24 sm:mb-32 px-4 sm:px-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <div className="inline-flex items-center space-x-2 sm:space-x-3 px-4 sm:px-6 py-2 sm:py-3 bg-white/50 dark:bg-white/10 backdrop-blur-sm rounded-full border border-gray-200 dark:border-white/10">
              <span className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Specializing in:</span>
              <div className="text-sm sm:text-lg font-semibold text-orange-500 h-5 sm:h-6 overflow-hidden">
                <motion.div 
                  className="transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateY(-${currentServiceIndex * (window.innerWidth < 640 ? 20 : 24)}px)` }}
                >
                  {services.map((service, index) => (
                    <div key={index} className="h-5 sm:h-6 flex items-center">
                      {service}
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-400 dark:border-white/30 rounded-full flex justify-center relative animate-bounce">
            <div className="w-1 h-2 sm:h-3 bg-gradient-to-b from-orange-500 to-transparent rounded-full mt-1 sm:mt-2 animate-pulse"></div>
          </div>
          <div className="text-gray-500 dark:text-white/50 text-xs mt-1 sm:mt-2 text-center">Scroll</div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;