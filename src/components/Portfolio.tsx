import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Filter, Sparkles } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const categories = ['All', 'Web', 'Mobile', 'Enterprise', 'E-commerce'];

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Modern e-commerce solution with advanced features and seamless user experience.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'E-commerce',
      techStack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Corporate Website',
      description: 'Professional corporate website with modern design and optimized performance.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Web',
      techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Mobile Banking App',
      description: 'Secure and intuitive mobile banking application with advanced security features.',
      image: 'https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Mobile',
      techStack: ['React Native', 'Firebase', 'Redux'],
      liveUrl: '#'
    },
    {
      id: 4,
      title: 'Enterprise Dashboard',
      description: 'Comprehensive enterprise dashboard for data visualization and management.',
      image: 'https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Enterprise',
      techStack: ['Vue.js', 'D3.js', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'SaaS Platform',
      description: 'Scalable SaaS platform with multi-tenant architecture and real-time features.',
      image: 'https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Web',
      techStack: ['React', 'Express', 'Socket.io', 'AWS'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Food Delivery App',
      description: 'Complete food delivery solution with real-time tracking and payment integration.',
      image: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Mobile',
      techStack: ['Flutter', 'Firebase', 'Google Maps API'],
      liveUrl: '#'
    }
  ];

  useEffect(() => {
    const filtered = activeFilter === 'All' 
      ? projects 
      : projects.filter(project => project.category === activeFilter);
    setFilteredProjects(filtered);
  }, [activeFilter]);

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
  }, [filteredProjects]);

  return (
    <section id="portfolio" ref={sectionRef} className="relative py-20 md:py-32 bg-white dark:bg-[#0A0F1C] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white dark:from-[#0A0F1C] dark:via-[#1A1F2E] dark:to-[#0A0F1C]"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-[#FF6B2B]/10 animate-pulse"></div>
        </div>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `
            radial-gradient(circle at 2px 2px, rgba(255,107,43,0.3) 1px, transparent 0),
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
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#FF6B2B]/20 to-purple-500/20 border border-[#FF6B2B]/30 rounded-full text-[#FF6B2B] text-sm font-medium mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
            Our Portfolio
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B2B] via-[#FF8A4A] to-[#FFB366] animate-gradient-x">Projects</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our latest work and see how we've helped businesses transform their digital presence.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-[#FF6B2B] to-[#FF8A4A] text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/20 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="service-card group relative rounded-2xl overflow-hidden backdrop-blur-sm border border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 transition-all duration-500 hover:scale-105 bg-white dark:bg-white/5 hover:shadow-xl"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Overlay Links */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 bg-[#FF6B2B]/20 text-[#FF6B2B] text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#FF6B2B] group-hover:to-[#FF8A4A] transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 text-xs rounded border border-gray-200 dark:border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 md:mt-20">
          {/* Stats Integration */}
          <div className="mb-12 p-8 bg-gradient-to-r from-orange-500/10 to-purple-500/10 dark:from-orange-500/20 dark:to-purple-500/20 backdrop-blur-sm border border-orange-500/30 rounded-2xl max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-8 justify-items-center items-center">
              <div className="group">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  150+
                </div>
                <div className="text-gray-600 dark:text-gray-300 text-lg">Happy Clients</div>
              </div>
              <div className="group">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  98%
                </div>
                <div className="text-gray-600 dark:text-gray-300 text-lg">Success Rate</div>
              </div>
              <div className="group">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  200+
                </div>
                <div className="text-gray-600 dark:text-gray-300 text-lg">Projects Delivered</div>
              </div>
            </div>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 mb-6">Ready to start your project?</p>
          <a
            href="https://cal.com/khushal-sharma-txi5n5"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-gradient-to-r from-[#FF6B2B] to-[#FF8A4A] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#FF6B2B]/25 transition-all duration-300 hover:scale-105 relative overflow-hidden inline-flex items-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF8A4A] to-[#FFB366] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10">Let's Discuss Your Project</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;