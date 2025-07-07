import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Search, Sparkles } from 'lucide-react';
import BlurText from './animations/BlurText';
import GradientText from './animations/GradientText';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const FAQ: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredFAQs, setFilteredFAQs] = useState<FAQItem[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: "How long does it take to build a website?",
      answer: "The timeline depends on the complexity of your project. A simple website typically takes 2-4 weeks, while complex e-commerce or enterprise solutions can take 6-12 weeks. We'll provide a detailed timeline during our initial consultation.",
      category: "Timeline"
    },
    {
      id: 2,
      question: "What's included in your web development service?",
      answer: "Our comprehensive service includes custom design, responsive development, content management system, SEO optimization, security implementation, testing, deployment, and 3 months of free support and maintenance.",
      category: "Services"
    },
    {
      id: 3,
      question: "Do you provide ongoing maintenance and support?",
      answer: "Yes! We offer various maintenance packages including security updates, content updates, performance monitoring, backup services, and technical support. We believe in long-term partnerships with our clients.",
      category: "Support"
    },
    {
      id: 4,
      question: "Can you help with SEO and digital marketing?",
      answer: "Absolutely! We provide comprehensive SEO services including on-page optimization, technical SEO, content strategy, and performance monitoring. We can also connect you with our trusted digital marketing partners.",
      category: "SEO"
    },
    {
      id: 5,
      question: "What technologies do you use?",
      answer: "We use modern, industry-standard technologies including React, Next.js, Node.js, TypeScript, Tailwind CSS, and various databases. We choose the best technology stack based on your specific requirements.",
      category: "Technology"
    },
    {
      id: 6,
      question: "Do you work with clients internationally?",
      answer: "Yes, we work with clients worldwide. We have experience working across different time zones and have established processes for remote collaboration, communication, and project management.",
      category: "General"
    },
    {
      id: 7,
      question: "What's your pricing structure?",
      answer: "Our pricing is project-based and depends on the scope, complexity, and timeline. We provide transparent, detailed quotes with no hidden fees. We also offer flexible payment plans to accommodate different budgets.",
      category: "Pricing"
    },
    {
      id: 8,
      question: "Can you redesign my existing website?",
      answer: "Definitely! We specialize in website redesigns and can help modernize your existing site, improve performance, enhance user experience, and ensure mobile responsiveness while preserving your brand identity.",
      category: "Services"
    }
  ];

  useEffect(() => {
    const filtered = faqs.filter(faq =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredFAQs(filtered);
  }, [searchTerm]);

  useEffect(() => {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleFAQ = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section ref={sectionRef} className="relative py-20 md:py-32 bg-gray-50 dark:bg-[#0A0F1C] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white dark:from-[#0A0F1C] dark:via-[#1A1F2E] dark:to-[#0A0F1C]"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B2B]/10 via-transparent to-purple-500/10 animate-pulse"></div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-10 blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-r from-[#FF6B2B] to-[#FF8A4A] rounded-full opacity-10 blur-2xl animate-float-delayed"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-16">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#FF6B2B]/20 to-purple-500/20 border border-[#FF6B2B]/30 rounded-full text-[#FF6B2B] text-sm font-medium mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
            FAQ
          </div>
          <div className="mb-6">
            <BlurText
              text="Frequently Asked Questions"
              className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight"
              delay={100}
              animateBy="words"
            />
          </div>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our services, process, and pricing.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-12">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search FAQs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white dark:bg-white/10 border border-gray-200 dark:border-white/20 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-[#FF6B2B] focus:ring-2 focus:ring-[#FF6B2B]/20 transition-all duration-300"
          />
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-white/5 transition-colors duration-300"
              >
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <span className="inline-block px-2 py-1 bg-[#FF6B2B]/20 text-[#FF6B2B] text-xs font-medium rounded mr-3">
                      {faq.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{faq.question}</h3>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform duration-300 ${
                    activeId === faq.id ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeId === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredFAQs.length === 0 && searchTerm && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">No FAQs found matching your search.</p>
            <button
              onClick={() => setSearchTerm('')}
              className="mt-4 text-[#FF6B2B] hover:text-[#FF8A4A] transition-colors duration-300"
            >
              Clear search
            </button>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-16 md:mt-20 p-8 bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Still have questions?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Can't find the answer you're looking for? We're here to help!
          </p>
          <a
            href="https://cal.com/khushal-sharma-txi5n5"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-gradient-to-r from-[#FF6B2B] to-[#FF8A4A] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#FF6B2B]/25 transition-all duration-300 hover:scale-105 relative overflow-hidden inline-block"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF8A4A] to-[#FFB366] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10">Schedule a Call</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;