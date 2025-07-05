import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  PenTool, 
  Code, 
  TestTube, 
  Rocket,
  CheckCircle,
  Sparkles,
  ArrowRight,
  Clock
} from 'lucide-react';

interface ProcessStep {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
  gradient: string;
}

const Process: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(0);

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

    // Auto-progress through steps
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processSteps.length);
    }, 4000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  const processSteps: ProcessStep[] = [
    {
      id: 1,
      icon: <Search className="w-8 h-8" />,
      title: "Discovery & Research",
      description: "We dive deep into understanding your business, goals, target audience, and market landscape to create the perfect foundation.",
      details: ["Business Analysis", "Market Research", "Competitor Analysis", "Requirements Gathering"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      icon: <PenTool className="w-8 h-8" />,
      title: "Strategy & Planning",
      description: "Strategic planning and design phase to create the perfect solution blueprint that aligns with your vision.",
      details: ["Project Roadmap", "UI/UX Design", "Technical Architecture", "Timeline Planning"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      icon: <Code className="w-8 h-8" />,
      title: "Development & Build",
      description: "Bringing your vision to life with clean, scalable, and efficient code using the latest technologies and best practices.",
      details: ["Frontend Development", "Backend Development", "Database Setup", "API Integration"],
      gradient: "from-[#FF6B2B] to-[#FF8A4A]"
    },
    {
      id: 4,
      icon: <TestTube className="w-8 h-8" />,
      title: "Testing & Quality Assurance",
      description: "Rigorous testing to ensure everything works perfectly across all devices, browsers, and user scenarios.",
      details: ["Quality Assurance", "Cross-browser Testing", "Performance Testing", "Security Testing"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      id: 5,
      icon: <Rocket className="w-8 h-8" />,
      title: "Launch & Support",
      description: "Deploying your project to production and providing ongoing support for continued success and growth.",
      details: ["Deployment", "Performance Monitoring", "Training & Support", "Maintenance"],
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  const stepVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <section id="process" ref={sectionRef} className="relative py-20 md:py-32 bg-gray-50 dark:bg-gradient-to-b dark:from-[#0A0F1C] dark:to-[#1A1F2E] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Light mode background */}
        <div className="absolute inset-0 dark:hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-[#FF6B2B]/10 animate-pulse"></div>
          </div>
        </div>
        
        {/* Dark mode background */}
        <div className="absolute inset-0 hidden dark:block">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-[#FF6B2B]/10 animate-pulse"></div>
          </div>
        </div>
        
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `
            radial-gradient(circle at 3px 3px, rgba(0,0,0,0.1) 1px, transparent 0),
            linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '25px 25px, 50px 50px, 50px 50px'
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-[#FF6B2B] to-[#FF8A4A] rounded-full opacity-15 blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-15 blur-2xl animate-float-delayed"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">
        {/* Header */}
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#FF6B2B]/20 to-purple-500/20 border border-[#FF6B2B]/30 rounded-full text-[#FF6B2B] text-sm font-medium mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
            Our Process
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B2B] via-[#FF8A4A] to-[#FFB366] animate-gradient-x">Work</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our proven 5-step process ensures your project is delivered on time, 
            within budget, and exceeds your expectations.
          </p>
        </motion.div>

        {/* Ready to Start Your Journey CTA */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-[#FF6B2B]/10 to-purple-500/10 dark:from-[#FF6B2B]/20 dark:to-purple-500/20 backdrop-blur-sm border border-[#FF6B2B]/30 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ready to Start Your Journey?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Let's discuss your project and create something amazing together.
            </p>
            <motion.a
              href="https://cal.com/khushal-sharma-txi5n5"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#FF6B2B] to-[#FF8A4A] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#FF6B2B]/25 transition-all duration-300 relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF8A4A] to-[#FFB366] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">Let's Get Started</span>
              <ArrowRight className="ml-2 w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
          </div>
        </motion.div>

        {/* Enhanced Complete Project Timeline */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Complete Project Timeline</h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg">From initial consultation to final launch and beyond</p>
          </div>

          {/* Interactive Process Steps */}
          <div className="mb-12">
            {/* Step Navigation */}
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {processSteps.map((step, index) => (
                <motion.button
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeStep === index
                      ? 'bg-gradient-to-r from-[#FF6B2B] to-[#FF8A4A] text-white shadow-lg'
                      : 'bg-white/50 dark:bg-white/10 text-gray-700 dark:text-gray-300 hover:bg-white/70 dark:hover:bg-white/20'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Step {step.id}: {step.title}
                </motion.button>
              ))}
            </motion.div>

            {/* Active Step Details */}
            <motion.div 
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  className="bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl p-8 md:p-12 shadow-xl"
                  variants={stepVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start space-x-6">
                    <motion.div 
                      className={`flex-shrink-0 w-20 h-20 bg-gradient-to-br ${processSteps[activeStep].gradient} rounded-xl flex items-center justify-center shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="text-white">
                        {processSteps[activeStep].icon}
                      </div>
                    </motion.div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                          {processSteps[activeStep].title}
                        </h3>
                        <div className="flex items-center space-x-2 px-3 py-1 bg-[#FF6B2B]/20 text-[#FF6B2B] text-sm font-medium rounded-full">
                          <Clock className="w-4 h-4" />
                          <span>Step {processSteps[activeStep].id}</span>
                        </div>
                      </div>
                      
                      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        {processSteps[activeStep].description}
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {processSteps[activeStep].details.map((detail, detailIndex) => (
                          <motion.div 
                            key={detailIndex} 
                            className="flex items-center space-x-3 p-3 bg-white/50 dark:bg-white/10 rounded-lg border border-gray-200 dark:border-white/10"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: detailIndex * 0.1 }}
                          >
                            <CheckCircle className="w-5 h-5 text-[#FF6B2B] flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300 font-medium">{detail}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Desktop Timeline */}
          <motion.div 
            className="hidden lg:block relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#FF6B2B] via-purple-500 to-blue-500 rounded-full transform -translate-y-1/2"></div>
            
            {/* Process Steps */}
            <div className="relative flex justify-between items-center">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  className="flex flex-col items-center max-w-xs cursor-pointer"
                  onClick={() => setActiveStep(index)}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Step Number & Icon */}
                  <motion.div 
                    className={`relative w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center mb-6 shadow-lg transition-all duration-300 ${
                      activeStep === index ? 'ring-4 ring-[#FF6B2B]/30 scale-110' : ''
                    }`}
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="text-white">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center text-gray-900 dark:text-white font-bold text-sm border-2 border-gray-200 dark:border-gray-700">
                      {step.id}
                    </div>
                  </motion.div>

                  {/* Step Content */}
                  <div className="text-center p-6 bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl hover:bg-white/70 dark:hover:bg-white/10 transition-all duration-300">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{step.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mobile Timeline */}
          <motion.div 
            className="lg:hidden space-y-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                className="flex items-start space-x-6 cursor-pointer"
                onClick={() => setActiveStep(index)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Step Icon & Number */}
                <div className="flex-shrink-0">
                  <div className={`relative w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center shadow-lg ${
                    activeStep === index ? 'ring-4 ring-[#FF6B2B]/30' : ''
                  }`}>
                    <div className="text-white">
                      {step.icon}
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center text-gray-900 dark:text-white font-bold text-xs border-2 border-gray-200 dark:border-gray-700">
                      {step.id}
                    </div>
                  </div>
                </div>

                {/* Step Content */}
                <div className="flex-1 p-6 bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl hover:bg-white/70 dark:hover:bg-white/10 transition-all duration-300">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{step.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{step.description}</p>
                  
                  <div className="grid grid-cols-1 gap-2">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <CheckCircle className="w-4 h-4 text-[#FF6B2B] mr-2 flex-shrink-0" />
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;