import React, { useEffect, useRef } from 'react';
import { 
  Code, 
  Smartphone, 
  Monitor, 
  ShoppingCart, 
  Search, 
  Zap,
  ArrowRight,
  Sparkles,
  Calendar,
  CheckCircle
} from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  gradient: string;
}

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    cardsRef.current.forEach((card, index) => {
      if (card) {
        card.style.animationDelay = `${index * 0.1}s`;
        observer.observe(card);
      }
    });

    return () => observer.disconnect();
  }, []);

  const services: Service[] = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom Web Development",
      description: "End-to-end web development solutions tailored to your business needs with modern technologies and best practices.",
      features: ["React/Next.js Development", "Full-Stack Solutions", "API Integration", "Database Design"],
      gradient: "from-[#FF6B2B] to-[#FF8A4A]"
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Custom Website Design",
      description: "Beautiful, responsive websites that capture your brand essence and engage your audience effectively.",
      features: ["UI/UX Design", "Responsive Design", "Brand Integration", "User Experience"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "E-commerce Solutions",
      description: "Complete e-commerce platforms with secure payment processing and comprehensive inventory management.",
      features: ["Online Store Setup", "Payment Integration", "Inventory Management", "Order Processing"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps that deliver exceptional user experiences across all devices.",
      features: ["iOS & Android Apps", "Cross-Platform Development", "App Store Deployment", "Push Notifications"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO Optimization",
      description: "Comprehensive SEO strategies to improve your search rankings and drive organic traffic to your website.",
      features: ["On-Page SEO", "Technical SEO", "Content Optimization", "Performance Monitoring"],
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Website Optimization",
      description: "Performance optimization and maintenance to ensure your website runs at peak efficiency and security.",
      features: ["Speed Optimization", "Security Updates", "Regular Maintenance", "Performance Monitoring"],
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="relative py-20 md:py-32 bg-white dark:bg-[#0A0F1C] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Light mode background */}
        <div className="absolute inset-0 dark:hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B2B]/10 via-transparent to-purple-500/10 animate-pulse"></div>
          </div>
        </div>
        
        {/* Dark mode background */}
        <div className="absolute inset-0 hidden dark:block">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1C] via-[#1A1F2E] to-[#0A0F1C]"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B2B]/10 via-transparent to-purple-500/10 animate-pulse"></div>
          </div>
        </div>
        
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `
            radial-gradient(circle at 2px 2px, rgba(0,0,0,0.1) 1px, transparent 0),
            linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px, 60px 60px, 60px 60px'
        }}></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-10 blur-3xl animate-float"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-r from-[#FF6B2B] to-[#FF8A4A] rounded-full opacity-10 blur-2xl animate-float-delayed"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">
        {/* All Your Website Needs Section - Moved to top */}
        <div className="text-center mb-20">
          <div className="max-w-4xl mx-auto p-8 md:p-12 bg-gradient-to-br from-[#FF6B2B]/10 to-purple-500/10 dark:from-[#FF6B2B]/20 dark:to-purple-500/20 backdrop-blur-sm border border-[#FF6B2B]/30 rounded-3xl">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              All Your Website Needs, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B2B] to-[#FF8A4A]">Expertly Handled</span>
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              End-to-end website solutions that ensure your website looks great, functions flawlessly, and drives results.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                'END-TO-END WEB DEVELOPMENT',
                'CUSTOM WEBSITE DESIGN', 
                'LANDING PAGE',
                'E-COMMERCE WEBSITE',
                'WEBSITE OPTIMIZATION',
                'SEO (SEARCH ENGINE OPTIMIZATION)'
              ].map((service, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white/50 dark:bg-white/10 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-white/10 hover:bg-white/70 dark:hover:bg-white/20 transition-all duration-300">
                  <CheckCircle className="w-5 h-5 text-[#FF6B2B] flex-shrink-0" />
                  <span className="text-gray-900 dark:text-white text-sm font-medium">{service}</span>
                </div>
              ))}
            </div>
            
            <a
              href="https://cal.com/khushal-sharma-txi5n5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#FF6B2B] to-[#FF8A4A] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#FF6B2B]/25 transition-all duration-300 hover:scale-105"
            >
              <Calendar className="w-5 h-5 mr-2" />
              BOOK A CALL
            </a>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#FF6B2B]/20 to-purple-500/20 border border-[#FF6B2B]/30 rounded-full text-[#FF6B2B] text-sm font-medium mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
            Our Services
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B2B] via-[#FF8A4A] to-[#FFB366] animate-gradient-x">Digital Solutions</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From concept to deployment, we provide end-to-end digital solutions 
            that drive growth and success for your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="service-card group relative p-8 rounded-2xl backdrop-blur-sm border border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 transition-all duration-500 hover:scale-105 overflow-hidden bg-white/50 dark:bg-white/5 hover:bg-white/80 dark:hover:bg-white/10 shadow-lg hover:shadow-xl"
            >
              {/* Animated background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#FF6B2B]/20 via-purple-500/20 to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

              <div className="relative z-10">
                {/* Icon */}
                <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#FF6B2B] group-hover:to-[#FF8A4A] transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300">
                      <CheckCircle className="w-4 h-4 text-[#FF6B2B] mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <button className={`group/btn flex items-center text-[#FF6B2B] font-medium hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#FF6B2B] hover:to-[#FF8A4A] transition-all duration-300`}>
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;