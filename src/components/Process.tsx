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
  Clock,
  Calendar,
  Users,
  Target,
  Zap
} from 'lucide-react';

interface ProcessStep {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
  gradient: string;
  duration: string;
  deliverables: string[];
}

const Process: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

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

    // Auto-progress through steps with slower timing
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % processSteps.length);
      }, 8000); // Increased from 5000ms to 8000ms for slower progression
      
      setIntervalId(interval);
    }

    return () => {
      observer.disconnect();
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isAutoPlaying]);

  // Handle manual step selection
  const handleStepClick = (index: number) => {
    setActiveStep(index);
    setIsAutoPlaying(false); // Stop auto-progression permanently when user clicks
    
    // Clear any existing interval
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  const processSteps: ProcessStep[] = [
    {
      id: 1,
      icon: <Search className="w-8 h-8" />,
      title: "Discovery & Strategy",
      description: "We dive deep into understanding your business goals, target audience, and competitive landscape to create a strategic foundation that drives results.",
      details: [
        "Comprehensive Business Analysis", 
        "Target Audience Research & Personas", 
        "Competitive Landscape Analysis", 
        "Technical Requirements Planning"
      ],
      deliverables: ["Strategy Document", "Project Roadmap", "Technical Specifications"],
      gradient: "from-blue-500 to-cyan-500",
      duration: "1-2 weeks"
    },
    {
      id: 2,
      icon: <PenTool className="w-8 h-8" />,
      title: "Design & User Experience",
      description: "Our design team crafts intuitive user experiences and stunning visual designs that align perfectly with your brand and convert visitors into customers.",
      details: [
        "User Experience (UX) Design", 
        "Visual Design & Brand Integration", 
        "Interactive Wireframes & Prototypes", 
        "Design System Creation"
      ],
      deliverables: ["Design Mockups", "Interactive Prototypes", "Style Guide"],
      gradient: "from-purple-500 to-pink-500",
      duration: "2-3 weeks"
    },
    {
      id: 3,
      icon: <Code className="w-8 h-8" />,
      title: "Development & Implementation",
      description: "We bring your vision to life using cutting-edge technologies and industry best practices, ensuring your website is fast, secure, and scalable.",
      details: [
        "Frontend Development (React/Next.js)", 
        "Backend Development & APIs", 
        "Database Design & Integration", 
        "Third-party Service Integration"
      ],
      deliverables: ["Functional Website", "Admin Dashboard", "API Documentation"],
      gradient: "from-orange-500 to-orange-600",
      duration: "3-6 weeks"
    },
    {
      id: 4,
      icon: <TestTube className="w-8 h-8" />,
      title: "Testing & Quality Assurance",
      description: "Rigorous testing across all devices, browsers, and scenarios ensures your website performs flawlessly and provides an exceptional user experience.",
      details: [
        "Comprehensive Quality Assurance", 
        "Cross-browser & Device Testing", 
        "Performance & Speed Optimization", 
        "Security & Vulnerability Testing"
      ],
      deliverables: ["Test Reports", "Performance Metrics", "Security Audit"],
      gradient: "from-green-500 to-emerald-500",
      duration: "1-2 weeks"
    },
    {
      id: 5,
      icon: <Rocket className="w-8 h-8" />,
      title: "Launch & Ongoing Success",
      description: "We deploy your website with precision and provide comprehensive support to ensure continued success, growth, and optimal performance.",
      details: [
        "Strategic Website Deployment", 
        "Performance Monitoring & Analytics", 
        "Team Training & Documentation", 
        "Ongoing Support & Maintenance"
      ],
      deliverables: ["Live Website", "Analytics Setup", "Training Materials"],
      gradient: "from-yellow-500 to-orange-500",
      duration: "Ongoing"
    }
  ];

  const stepVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <section id="process" ref={sectionRef} className="relative py-20 md:py-32 bg-gray-50 dark:bg-gradient-to-b dark:from-[#0A0F1C] dark:to-[#1A1F2E] overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Light mode background */}
        <div className="absolute inset-0 dark:hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white"></div>
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-orange-500/10 to-blue-500/10 animate-pulse"></div>
          </div>
        </div>
        
        {/* Dark mode background */}
        <div className="absolute inset-0 hidden dark:block">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-orange-500/10 to-blue-500/10 animate-pulse"></div>
          </div>
        </div>
        
        {/* Enhanced grid pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `
            radial-gradient(circle at 3px 3px, rgba(249,115,22,0.3) 1px, transparent 0),
            radial-gradient(circle at 15px 15px, rgba(147,51,234,0.2) 1px, transparent 0),
            linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '25px 25px, 35px 35px, 50px 50px, 50px 50px'
        }}></div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full opacity-15 blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-15 blur-2xl animate-float-delayed"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-10 blur-2xl animate-float"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">
        {/* Enhanced Header */}
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500/20 to-purple-500/20 border border-orange-500/30 rounded-full text-orange-500 text-sm font-medium mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
            Our Proven Process
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 animate-gradient-x">Transform Ideas</span> Into Reality
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Our battle-tested 5-step methodology ensures your project is delivered on time, 
            within budget, and exceeds your expectations at every milestone.
          </p>
        </motion.div>

        {/* Enhanced Ready to Start Your Journey CTA */}
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="relative max-w-4xl mx-auto">
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-xl"></div>
            
            <div className="relative p-8 md:p-12 lg:p-16 bg-gradient-to-br from-white/80 to-gray-50/80 dark:from-white/10 dark:to-white/5 backdrop-blur-xl border border-gray-200/50 dark:border-white/20 rounded-3xl shadow-2xl">
              {/* Decorative elements */}
              <div className="absolute top-6 left-6 w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute bottom-6 right-6 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
              
              <motion.div
                initial={{ scale: 0.95 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <div className="flex items-center justify-center mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                  Ready to Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Journey?</span>
                </h3>
                
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Let's discuss your project and create something amazing together. 
                  Your success story starts with a single conversation.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <motion.a
                    href="https://cal.com/khushal-sharma-txi5n5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 flex items-center">
                      <Calendar className="w-5 h-5 mr-2" />
                      Let's Get Started
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </motion.a>
                  
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Free 15-minute consultation • No commitment required
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Complete Project Timeline Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Complete Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Timeline</span>
          </h3>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From initial consultation to final launch and beyond - here's our proven roadmap 
            to transform your vision into a market-leading digital solution
          </p>
        </motion.div>

        {/* Enhanced Interactive Process Steps */}
        <div className="mb-20">
          {/* Enhanced Step Navigation */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {processSteps.map((step, index) => (
              <motion.button
                key={step.id}
                onClick={() => handleStepClick(index)}
                className={`px-4 md:px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeStep === index
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/25 scale-105'
                    : 'bg-white/70 dark:bg-white/10 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-white/20 border border-gray-200 dark:border-white/20'
                }`}
                whileHover={{ scale: activeStep === index ? 1.05 : 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="hidden sm:inline">Step {step.id}: </span>
                <span className="text-sm md:text-base">{step.title}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Enhanced Active Step Details */}
          <motion.div 
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                className="bg-white/90 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl"
                variants={stepVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.4 }}
              >
                <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-8 lg:space-y-0 lg:space-x-12">
                  {/* Enhanced Icon Section */}
                  <motion.div 
                    className="flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className={`relative w-24 h-24 bg-gradient-to-br ${processSteps[activeStep].gradient} rounded-2xl flex items-center justify-center shadow-xl`}>
                      <div className="text-white">
                        {processSteps[activeStep].icon}
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center text-gray-900 dark:text-white font-bold text-sm border-2 border-gray-200 dark:border-gray-700 shadow-lg">
                        {processSteps[activeStep].id}
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Enhanced Content Section */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-0">
                        {processSteps[activeStep].title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3">
                        <div className="flex items-center space-x-2 px-4 py-2 bg-orange-500/20 text-orange-600 dark:text-orange-400 text-sm font-medium rounded-full border border-orange-500/30">
                          <Clock className="w-4 h-4" />
                          <span>{processSteps[activeStep].duration}</span>
                        </div>
                        <div className="flex items-center space-x-2 px-4 py-2 bg-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium rounded-full border border-blue-500/30">
                          <span>Step {processSteps[activeStep].id} of {processSteps.length}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                      {processSteps[activeStep].description}
                    </p>
                    
                    {/* Enhanced Details Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                          <CheckCircle className="w-5 h-5 text-orange-500 mr-2" />
                          What We Do
                        </h4>
                        <div className="space-y-3">
                          {processSteps[activeStep].details.map((detail, detailIndex) => (
                            <motion.div 
                              key={detailIndex} 
                              className="flex items-start space-x-3 p-4 bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: detailIndex * 0.1 }}
                            >
                              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700 dark:text-gray-300 font-medium">{detail}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                          <Rocket className="w-5 h-5 text-orange-500 mr-2" />
                          What You Get
                        </h4>
                        <div className="space-y-3">
                          {processSteps[activeStep].deliverables.map((deliverable, deliverableIndex) => (
                            <motion.div 
                              key={deliverableIndex} 
                              className="flex items-start space-x-3 p-4 bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded-xl border border-orange-500/20 hover:from-orange-500/20 hover:to-orange-600/20 transition-all duration-300"
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: deliverableIndex * 0.1 }}
                            >
                              <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700 dark:text-gray-300 font-medium">{deliverable}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Enhanced Desktop Timeline */}
        <motion.div 
          className="hidden lg:block relative mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Enhanced Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-2 bg-gradient-to-r from-orange-500 via-purple-500 via-blue-500 via-green-500 to-yellow-500 rounded-full transform -translate-y-1/2 shadow-lg"></div>
          
          {/* Enhanced Process Steps */}
          <div className="relative flex justify-between items-center">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                className="flex flex-col items-center max-w-xs cursor-pointer group"
                onClick={() => handleStepClick(index)}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Enhanced Step Icon */}
                <motion.div 
                  className={`relative w-24 h-24 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center mb-8 shadow-xl transition-all duration-300 ${
                    activeStep === index ? 'ring-4 ring-orange-500/30 scale-110' : ''
                  } group-hover:scale-110 group-hover:shadow-2xl`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div className="text-white">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center text-gray-900 dark:text-white font-bold text-sm border-2 border-gray-200 dark:border-gray-700 shadow-lg">
                    {step.id}
                  </div>
                </motion.div>

                {/* Enhanced Step Content */}
                <div className="text-center p-6 bg-white/70 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl hover:bg-white/90 dark:hover:bg-white/10 transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{step.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">{step.description}</p>
                  <div className="flex items-center justify-center space-x-2 px-3 py-1 bg-orange-500/20 text-orange-600 dark:text-orange-400 text-xs font-medium rounded-full border border-orange-500/30">
                    <Clock className="w-3 h-3" />
                    <span>{step.duration}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Mobile Timeline */}
        <motion.div 
          className="lg:hidden space-y-8 mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              className="flex items-start space-x-6 cursor-pointer group"
              onClick={() => handleStepClick(index)}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Enhanced Mobile Step Icon */}
              <div className="flex-shrink-0">
                <div className={`relative w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center shadow-xl ${
                  activeStep === index ? 'ring-4 ring-orange-500/30 scale-110' : ''
                } group-hover:scale-105 transition-all duration-300`}>
                  <div className="text-white">
                    {step.icon}
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center text-gray-900 dark:text-white font-bold text-xs border-2 border-gray-200 dark:border-gray-700">
                    {step.id}
                  </div>
                </div>
              </div>

              {/* Enhanced Mobile Step Content */}
              <div className="flex-1 p-6 bg-white/70 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl hover:bg-white/90 dark:hover:bg-white/10 transition-all duration-300 group-hover:shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-0">{step.title}</h4>
                  <div className="flex items-center space-x-2 px-3 py-1 bg-orange-500/20 text-orange-600 dark:text-orange-400 text-sm font-medium rounded-full border border-orange-500/30 w-fit">
                    <Clock className="w-4 h-4" />
                    <span>{step.duration}</span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{step.description}</p>
                
                <div className="grid grid-cols-1 gap-3">
                  {step.details.slice(0, 2).map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <CheckCircle className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Bottom CTA - Ready to Start Your Journey */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative max-w-3xl mx-auto">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-xl"></div>
            
            <div className="relative p-8 md:p-12 bg-gradient-to-br from-white/80 to-gray-50/80 dark:from-white/10 dark:to-white/5 backdrop-blur-xl border border-gray-200/50 dark:border-white/20 rounded-3xl shadow-2xl">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Journey?</span>
              </h3>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss your project and create something amazing together.
              </p>
              
              <motion.a
                href="https://cal.com/khushal-sharma-txi5n5"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Calendar className="mr-2 w-5 h-5 relative z-10" />
                <span className="relative z-10">Let's Get Started</span>
                <ArrowRight className="ml-2 w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;