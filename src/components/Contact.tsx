import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Calendar, Sparkles } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectDescription: '',
    budget: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const budgetRanges = [
    'Under $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000+'
  ];

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ 
        name: '', 
        email: '', 
        phone: '', 
        company: '', 
        projectDescription: '', 
        budget: '' 
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      content: "hello@pacificsoftwares.com",
      description: "Send us an email anytime"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Mon-Fri from 9am to 6pm"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      content: "123 Tech Street, Suite 100",
      description: "San Francisco, CA 94105"
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="relative py-20 md:py-32 bg-gray-50 dark:bg-gradient-to-b dark:from-[#0A0F1C] dark:to-[#1A1F2E] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B2B]/10 via-transparent to-purple-500/10 animate-pulse"></div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-[#FF6B2B] rounded-full opacity-5 blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-purple-500 rounded-full opacity-5 blur-2xl animate-float-delayed"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#FF6B2B]/20 to-purple-500/20 border border-[#FF6B2B]/30 rounded-full text-[#FF6B2B] text-sm font-medium mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B2B] via-[#FF8A4A] to-[#FFB366] animate-gradient-x">Start Your Project?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Let's discuss how Pacific Softwares can help transform your digital presence. 
            Schedule a consultation or send us a message.
          </p>
        </div>

        {/* Quick CTA */}
        <div className="text-center mb-16">
          <a
            href="https://cal.com/khushal-sharma-txi5n5"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#FF6B2B] to-[#FF8A4A] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#FF6B2B]/25 transition-all duration-300 hover:scale-105 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF8A4A] to-[#FFB366] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Calendar className="mr-2 w-5 h-5 relative z-10" />
            <span className="relative z-10">Schedule a 15 min call</span>
          </a>
          <p className="text-gray-500 dark:text-gray-400 mt-4">Or fill out the form below</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Contact Information</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                We're here to help you succeed. Reach out to us through any of the following channels.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#FF6B2B] to-[#FF8A4A] rounded-lg flex-shrink-0">
                    <div className="text-white">
                      {info.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-gray-900 dark:text-white font-semibold mb-1">{info.title}</h4>
                    <p className="text-[#FF6B2B] font-medium mb-1">{info.content}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* GDPR Notice */}
            <div className="p-4 bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 rounded-lg">
              <p className="text-blue-700 dark:text-blue-300 text-sm">
                <strong>Privacy Notice:</strong> We respect your privacy and comply with GDPR regulations. 
                Your information will only be used to respond to your inquiry and will not be shared with third parties.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <div className="p-8 bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Send us a message</h3>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Message Sent!</h4>
                  <p className="text-gray-600 dark:text-gray-300">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-900 dark:text-white font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-white/10 border border-gray-200 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-[#FF6B2B] focus:ring-2 focus:ring-[#FF6B2B]/20 transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-900 dark:text-white font-medium mb-2">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-white/10 border border-gray-200 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-[#FF6B2B] focus:ring-2 focus:ring-[#FF6B2B]/20 transition-all duration-300"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-gray-900 dark:text-white font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-white/10 border border-gray-200 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-[#FF6B2B] focus:ring-2 focus:ring-[#FF6B2B]/20 transition-all duration-300"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-gray-900 dark:text-white font-medium mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-white/10 border border-gray-200 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-[#FF6B2B] focus:ring-2 focus:ring-[#FF6B2B]/20 transition-all duration-300"
                        placeholder="Enter your company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-gray-900 dark:text-white font-medium mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-white/10 border border-gray-200 dark:border-white/20 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-[#FF6B2B] focus:ring-2 focus:ring-[#FF6B2B]/20 transition-all duration-300"
                    >
                      <option value="" className="bg-white dark:bg-[#1A1F2E] text-gray-900 dark:text-white">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range} className="bg-white dark:bg-[#1A1F2E] text-gray-900 dark:text-white">
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="projectDescription" className="block text-gray-900 dark:text-white font-medium mb-2">
                      Project Description *
                    </label>
                    <textarea
                      id="projectDescription"
                      name="projectDescription"
                      value={formData.projectDescription}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-white/10 border border-gray-200 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-[#FF6B2B] focus:ring-2 focus:ring-[#FF6B2B]/20 transition-all duration-300 resize-none"
                      placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-[#FF6B2B] to-[#FF8A4A] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#FF6B2B]/25 transition-all duration-300 hover:scale-105 flex items-center justify-center group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF8A4A] to-[#FFB366] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10">Send Message</span>
                    <Send className="ml-2 w-5 h-5 relative z-10" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;