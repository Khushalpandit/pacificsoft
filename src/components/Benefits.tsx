import React, { useEffect, useRef } from 'react';
import { 
  Target, 
  TrendingUp, 
  Shield, 
  Zap, 
  Users, 
  BarChart3, 
  Rocket, 
  Award, 
  Globe,
  Sparkles
} from 'lucide-react';

interface BenefitCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}

const Benefits: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

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

  const benefits: BenefitCard[] = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Targeted Reach",
      description: "Connect with your ideal audience through precise targeting and advanced analytics to maximize your campaign effectiveness.",
      gradient: "from-[#FF6B2B] to-[#FF8A4A]"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Proven ROI",
      description: "Achieve measurable results with our data-driven approach that consistently delivers superior returns on your advertising investment.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Brand Safety",
      description: "Protect your brand reputation with our comprehensive safety measures and premium publisher network verification.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Real-Time Optimization",
      description: "Leverage AI-powered optimization that automatically adjusts your campaigns in real-time for maximum performance.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Support",
      description: "Get dedicated support from our team of advertising specialists who are committed to your campaign success.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Advanced Analytics",
      description: "Access comprehensive reporting and insights that help you understand your audience and optimize your strategy.",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Fast Implementation",
      description: "Launch your campaigns quickly with our streamlined setup process and intuitive campaign management tools.",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Premium Quality",
      description: "Benefit from our commitment to excellence with high-quality placements and premium publisher partnerships.",
      gradient: "from-amber-500 to-yellow-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Reach",
      description: "Expand your market presence worldwide with our extensive network spanning multiple countries and regions.",
      gradient: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <section id="benefits" ref={sectionRef} className="relative py-20 md:py-32 bg-[#0A0F1C] overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Primary gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1C] via-[#1A1F2E] to-[#0A0F1C]"></div>
        
        {/* Animated mesh background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-[#FF6B2B]/10 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent animate-pulse" style={{ animationDelay: '3s' }}></div>
        </div>
        
        {/* Enhanced grid pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `
            radial-gradient(circle at 3px 3px, rgba(255,107,43,0.4) 1px, transparent 0),
            radial-gradient(circle at 15px 15px, rgba(147,51,234,0.3) 1px, transparent 0),
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '25px 25px, 35px 35px, 50px 50px, 50px 50px'
        }}></div>
      </div>
      
      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-[#FF6B2B] to-[#FF8A4A] rounded-full opacity-15 blur-3xl animate-float"></div>
      <div className="absolute bottom-40 right-20 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-15 blur-2xl animate-float-delayed"></div>
      <div className="absolute top-1/2 right-10 w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full opacity-12 blur-2xl animate-float"></div>
      <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-10 blur-3xl animate-float-delayed"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">
        {/* Enhanced Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#FF6B2B]/20 to-purple-500/20 border border-[#FF6B2B]/30 rounded-full text-[#FF6B2B] text-sm font-medium mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
            Why Choose Us
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 leading-tight">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B2B] via-[#FF8A4A] to-[#FFB366] animate-gradient-x">Brandvertise?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Unlock the full potential of your advertising campaigns with our cutting-edge platform 
            designed to deliver exceptional results for your brand.
          </p>
        </div>

        {/* Enhanced Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="benefit-card group relative p-6 md:p-8 rounded-xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                willChange: 'transform'
              }}
            >
              {/* Animated background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Enhanced glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${benefit.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm rounded-xl`}></div>

              <div className="relative z-10">
                {/* Enhanced Icon */}
                <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300 floating-icon shadow-lg group-hover:shadow-xl`}>
                  <div className="text-white">
                    {benefit.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#FF6B2B] group-hover:to-[#FF8A4A] transition-all duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base group-hover:text-gray-200 transition-colors duration-300">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="text-center mt-16 md:mt-20">
          <button className="group px-8 py-4 bg-gradient-to-r from-[#FF6B2B] to-[#FF8A4A] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#FF6B2B]/25 transition-all duration-300 hover:scale-105 active:scale-95 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF8A4A] to-[#FFB366] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10">Get Started Today</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;