import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Stats Component for placement elsewhere
const StatsSection: React.FC = () => {
  const stats = [
    { value: '150+', label: 'Happy Clients' },
    { value: '98%', label: 'Success Rate' },
    { value: '200+', label: 'Projects' }
  ];

  return (
    <section className="relative py-16 bg-gradient-to-r from-[#FF6B2B] to-[#FF8A4A] overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="group">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-white/90 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

function App() {
  return (
    <div className="min-h-screen transition-colors duration-300">
      <Header />
      <Hero />
      <StatsSection />
      <Portfolio />
      <Services />
      <Process />
      <Contact />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;