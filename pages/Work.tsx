import React from 'react';
import { ArrowUpRight, Monitor } from 'lucide-react';
import { PROJECTS, WHATSAPP_LINK } from '../constants';
import BrowserFrame from '../components/BrowserFrame';
import Button from '../components/Button';
import Reveal from '../components/Reveal';

const Work: React.FC = () => {
  return (
    <div className="pb-20 bg-white">
      
      {/* =====================================================================================
          1. HERO SECTION
      ===================================================================================== */}
      <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-cerons-bg">
        {/* Background Pattern */}
         <div className="absolute inset-0 opacity-[0.03]" 
             style={{ 
               backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', 
               backgroundSize: '40px 40px' 
             }}>
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cerons-accent/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Reveal>
            <div className="max-w-4xl">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm text-cerons-dark text-xs font-semibold uppercase tracking-widest mb-6">
                <Monitor size={14} />
                Selected Projects
              </div>
              <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl text-gray-900 mb-8 leading-tight tracking-tight">
                Digital experiences <br className="hidden md:block" />
                <span className="text-gray-400">that deliver results.</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl leading-relaxed font-light">
                A curated selection of our recent work. We build websites that combine aesthetic precision with high-performance conversion strategies to help businesses grow.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      {/* =====================================================================================
          2. PROJECTS GRID
      ===================================================================================== */}
      <div className="container mx-auto px-4 md:px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {PROJECTS.map((project, idx) => (
            <Reveal key={project.id} delay={idx * 100}>
              <a href={project.iframeSrc} target="_blank" rel="noopener noreferrer" className="group block h-full cursor-pointer">
                {/* Image/Frame Container */}
                <div className="relative mb-8">
                   <div className="transform transition-all duration-700 ease-out group-hover:-translate-y-3 group-hover:shadow-2xl group-hover:shadow-cerons-accent/10 rounded-xl bg-white">
                      <BrowserFrame 
                        image={project.imageUrl} 
                        iframeSrc={project.iframeSrc}
                        alt={project.title} 
                        className="shadow-md transition-shadow duration-500 border-0"
                        aspectRatio="aspect-[4/3] md:aspect-[16/10]"
                      />
                   </div>
                   
                   {/* Floating Open Button (visible on hover) */}
                   <div className="absolute -bottom-6 right-6 w-16 h-16 bg-cerons-dark text-white rounded-full flex items-center justify-center shadow-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out z-20 border-4 border-white">
                      <ArrowUpRight size={28} />
                   </div>
                </div>

                {/* Project Details */}
                <div className="pl-1">
                  <div className="flex items-center justify-between mb-3">
                     <span className="inline-block px-3 py-1 rounded-full bg-gray-50 border border-gray-100 text-cerons-dark text-xs font-bold uppercase tracking-wider group-hover:bg-cerons-accent group-hover:text-white group-hover:border-cerons-accent transition-all duration-300">
                        {project.category}
                     </span>
                     <span className="text-gray-300 font-heading font-bold text-sm group-hover:text-cerons-dark transition-colors">
                        0{idx + 1}
                     </span>
                  </div>
                  <h3 className="font-heading font-bold text-2xl md:text-3xl text-gray-900 group-hover:text-cerons-dark transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {/* =====================================================================================
            3. FINAL CTA
        ===================================================================================== */}
        <Reveal>
          <div className="mt-32 relative rounded-[3rem] bg-[#0f291e] overflow-hidden p-12 md:p-24 text-center shadow-2xl">
              {/* Background FX */}
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cerons-accent/20 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3"></div>
              
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="font-heading font-bold text-3xl md:text-5xl text-white mb-6 leading-tight">
                  Have a project in mind?
                </h2>
                <p className="mb-10 text-gray-300 text-lg font-light leading-relaxed">
                  Let's collaborate to build a digital presence that stands out from the competition and drives real growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                   <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    <Button variant="primary" className="px-12 py-5 shadow-xl shadow-cerons-accent/20 border-0 rounded-full w-full sm:w-auto text-lg">
                      Start Your Project
                    </Button>
                  </a>
                </div>
              </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Work;