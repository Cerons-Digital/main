import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Lightbulb, PenTool, Search, Rocket, Star } from 'lucide-react';
import { SERVICES, PROJECTS, WHATSAPP_LINK } from '../constants';
import { Project } from '../types';
import Button from '../components/Button';
import BrowserFrame from '../components/BrowserFrame';
import Reveal from '../components/Reveal';

// Re-defining steps locally to add icons for visual enhancement
const PROCESS_WITH_ICONS = [
  {
    number: '01',
    title: 'Understand',
    description: 'We dive deep into your business goals, target audience, and competitors to create a strategy.',
    icon: Lightbulb
  },
  {
    number: '02',
    title: 'Design & Build',
    description: 'We create a modern UI and develop a responsive, fast-loading website tailored to you.',
    icon: PenTool
  },
  {
    number: '03',
    title: 'Review & Refine',
    description: 'We collaborate with you to tweak the details until the experience is pixel-perfect.',
    icon: Search
  },
  {
    number: '04',
    title: 'Launch & Support',
    description: 'We go live and provide ongoing support to keep your business running smoothly.',
    icon: Rocket
  },
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => (
  <Reveal delay={index % 2 === 0 ? 0 : 200} className="h-full">
    <Link to="/work" className="block group relative h-full">
      <div className="relative z-10 transform transition-transform duration-700 ease-out group-hover:-translate-y-2">
        {/* Browser Frame Wrapper with premium shadow */}
        <div className="transition-all duration-500 shadow-xl group-hover:shadow-2xl group-hover:shadow-cerons-accent/10 rounded-xl overflow-hidden bg-white border border-gray-100/50">
           <BrowserFrame 
             image={project.imageUrl} 
             iframeSrc={project.iframeSrc}
             alt={project.title}
             aspectRatio="aspect-[4/3] md:aspect-[16/10]"
             className="shadow-none border-0 group-hover:scale-[1.02] transition-transform duration-700" 
           />
        </div>
        
        {/* Floating Action Button */}
        <div className="absolute -bottom-6 right-8 w-14 h-14 bg-cerons-dark text-white rounded-full flex items-center justify-center shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 z-20 pointer-events-none border-2 border-white">
           <ArrowRight size={24} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500" />
        </div>
      </div>

      <div className="mt-8 px-2">
         <div className="flex items-center gap-4 mb-3">
            <span className="text-cerons-accent text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 bg-green-50 rounded-full border border-green-100/50">
              {project.category}
            </span>
            <div className="h-px bg-gray-100 flex-grow"></div>
         </div>
         <h3 className="font-heading font-bold text-2xl md:text-3xl text-gray-900 group-hover:text-cerons-accent transition-colors duration-300">
           {project.title}
         </h3>
      </div>
    </Link>
  </Reveal>
);

const Home: React.FC = () => {
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Optimization: Stop updating if scrolled far past hero
      if (scrollY > 1200) return;

      requestAnimationFrame(() => {
        if (blob1Ref.current) {
          // Moves down slowly (0.3 speed)
          blob1Ref.current.style.transform = `translate3d(-50%, ${scrollY * 0.3}px, 0)`;
        }
        if (blob2Ref.current) {
          // Moves up slowly (-0.15 speed)
          blob2Ref.current.style.transform = `translate3d(0, ${scrollY * -0.15}px, 0)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col gap-0 overflow-x-hidden bg-white">
      
      {/* SECTION 1: HERO - Premium & Balanced */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden flex flex-col justify-center items-center">
        {/* Background Base */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-50 to-white -z-30"></div>

        {/* Dynamic Grid Pattern with Mask */}
        <div className="absolute inset-0 -z-20 pointer-events-none">
            <div 
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
                backgroundSize: '4rem 4rem',
                maskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, black 40%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, black 40%, transparent 100%)'
              }}
            ></div>
        </div>
        
        {/* Parallax Blobs */}
        <div 
          ref={blob1Ref}
          className="absolute top-[-20%] left-1/2 w-[800px] h-[800px] bg-cerons-accent/5 rounded-full blur-[100px] -z-10 animate-pulse"
          style={{ transform: 'translate3d(-50%, 0, 0)' }} // Initial centered state
        ></div>
        <div 
          ref={blob2Ref}
          className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-50/30 rounded-full blur-[100px] -z-10"
          style={{ transform: 'translate3d(0, 0, 0)' }}
        ></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
              
              {/* Premium Badge */}
              <div className="group relative inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-xl border border-cerons-accent/20 shadow-[0_2px_20px_-4px_rgba(34,197,94,0.2)] text-cerons-dark text-xs font-bold uppercase tracking-widest mb-10 cursor-default hover:scale-105 transition-transform duration-500">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cerons-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cerons-accent"></span>
                </span>
                Available for new projects
              </div>
              
              {/* Heading */}
              <h1 className="font-heading font-bold text-6xl md:text-7xl lg:text-8xl text-gray-900 leading-[1.05] tracking-tight mb-8 max-w-3xl mx-auto">
                Design that <span className="relative inline-block px-2">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-cerons-dark to-cerons-accent">sells</span>
                  {/* Subtle highlight behind "sells" */}
                  <div className="absolute inset-0 bg-cerons-accent/10 -skew-x-6 rounded-lg -z-10"></div>
                </span> <br className="hidden md:block" />
                and builds trust.
              </h1>
              
              {/* Subheading */}
              <p className="text-xl md:text-2xl text-gray-500 leading-relaxed max-w-xl mx-auto font-light mb-12 text-balance">
                We design clean, high-performance websites for businesses that want to look professional, rank higher, and convert visitors into customers.
              </p>
              
              {/* CTA Buttons - Enhanced */}
              <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto justify-center mb-16">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto group">
                  <Button icon variant="primary" className="w-full sm:w-auto text-lg px-10 py-5 rounded-full shadow-[0_10px_30px_-10px_rgba(34,197,94,0.4)] hover:shadow-[0_20px_40px_-10px_rgba(34,197,94,0.5)] border-0 ring-4 ring-cerons-accent/10">Get a Website</Button>
                </a>
                <Link to="/work" className="w-full sm:w-auto">
                  <Button variant="outline" className="w-full sm:w-auto text-lg px-10 py-5 rounded-full bg-white/50 backdrop-blur-sm border-gray-200 text-gray-600 hover:text-cerons-dark hover:border-cerons-dark hover:bg-white transition-all">View Work</Button>
                </Link>
              </div>
              
              {/* Social Proof - Glass Container */}
              <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-4 pr-8 rounded-full bg-white/60 backdrop-blur-md border border-white/60 shadow-lg shadow-gray-100/50 hover:bg-white/80 transition-colors duration-300">
                 <div className="flex -space-x-4 pl-2">
                    {[1,2,3,4].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center overflow-hidden shadow-sm ring-1 ring-black/5">
                           <img src={`https://picsum.photos/100/100?random=${i+10}`} alt="Client" className="w-full h-full object-cover" />
                        </div>
                    ))}
                    <div className="w-10 h-10 rounded-full bg-gray-900 border-2 border-white flex items-center justify-center text-white text-[10px] font-bold ring-1 ring-black/5">
                        50+
                    </div>
                 </div>
                 <div className="flex flex-col items-center sm:items-start">
                    <div className="flex text-yellow-400 text-xs mb-0.5 gap-0.5">
                        {'★★★★★'.split('').map((s,i) => <span key={i}>{s}</span>)}
                    </div>
                    <p className="text-xs font-bold text-gray-900 uppercase tracking-wide">Trusted by Businesses</p>
                 </div>
              </div>

            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 2: SERVICES - Refined Cards */}
      <section className="bg-gray-50/50 py-32 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        <div className="container mx-auto px-4 md:px-6">
          <Reveal>
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <span className="text-cerons-accent font-bold tracking-widest uppercase text-xs mb-2 block">Services</span>
                <h2 className="font-heading font-bold text-4xl md:text-5xl text-gray-900">Expertise tailored<br/>for growth.</h2>
              </div>
              <Link to="/services" className="text-cerons-dark font-semibold hover:text-cerons-accent transition-colors flex items-center gap-2 group">
                See all services <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
              </Link>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {SERVICES.map((service, index) => (
              <Reveal key={service.id} delay={index * 100}>
                <div className="h-full p-8 bg-white rounded-2xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 border border-gray-100 group flex flex-col">
                  <div className="w-14 h-14 bg-cerons-bg rounded-xl flex items-center justify-center mb-6 text-cerons-dark group-hover:bg-cerons-dark group-hover:text-white transition-all duration-300 transform group-hover:rotate-6">
                    <service.icon size={26} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm mb-6 flex-grow">{service.description}</p>
                  <div className="pt-6 border-t border-gray-50">
                     <span className="text-xs font-bold text-gray-400 uppercase tracking-wider group-hover:text-cerons-accent transition-colors flex items-center gap-2">
                        Learn More <ArrowRight size={14} />
                     </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY US - Premium Dark */}
      <section className="container mx-auto px-4 md:px-6 py-20">
        <Reveal>
          <div className="bg-[#0f291e] rounded-[2.5rem] p-8 md:p-20 text-white relative overflow-hidden shadow-2xl isolate">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cerons-accent/20 rounded-full blur-[120px] transform translate-x-1/3 -translate-y-1/3 -z-10"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] transform -translate-x-1/3 translate-y-1/3 -z-10"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                 <div className="flex items-center gap-2 mb-6 text-cerons-accent">
                    <Star size={18} fill="currentColor" />
                    <span className="text-sm font-bold uppercase tracking-widest">Why Choose Us</span>
                 </div>
                <h2 className="font-heading font-bold text-3xl md:text-5xl mb-8 leading-tight">
                  Websites that look expensive,<br/>but cost efficient.
                </h2>
                <p className="text-gray-300 mb-10 text-lg leading-relaxed max-w-md">
                  We bridge the gap between expensive agencies and cheap freelancers. You get agency-quality design and strategy without the bloat.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    <Button variant="primary" className="border-0 shadow-lg shadow-cerons-accent/20">Start Your Project</Button>
                  </a>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Fast Turnaround", desc: "Most sites live in 2 weeks" },
                  { title: "Direct Access", desc: "Talk to developers, not sales" },
                  { title: "Conversion First", desc: "Designed to get leads" },
                  { title: "Mobile Perfect", desc: "Flawless on all devices" },
                  { title: "SEO Foundation", desc: "Rank better on Google" },
                  { title: "No Monthly Fees", desc: "One-time payment structure" }
                ].map((point, i) => (
                  <div key={i} className="flex flex-col p-5 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-colors duration-300">
                    <div className="flex items-center gap-3 mb-2">
                         <div className="w-6 h-6 rounded-full bg-cerons-accent/20 flex items-center justify-center text-cerons-accent">
                            <CheckCircle2 size={14} strokeWidth={3} />
                         </div>
                        <span className="font-bold text-white text-base">{point.title}</span>
                    </div>
                    <p className="text-gray-400 text-xs pl-9">{point.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* SECTION 4: PROCESS - Connected Steps */}
      <section className="container mx-auto px-4 md:px-6 py-24 bg-white relative overflow-hidden">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-cerons-accent font-bold tracking-widest uppercase text-xs mb-3 block">Our Process</span>
            <h2 className="font-heading font-bold text-4xl text-gray-900 mb-4">Simple, transparent, fast.</h2>
            <p className="text-gray-500 text-lg">We stripped away the bureaucracy. Here is how we work.</p>
          </div>
        </Reveal>

        <div className="relative max-w-6xl mx-auto">
           {/* Connecting Line (Desktop) */}
           <div className="hidden lg:block absolute top-[3.5rem] left-[10%] w-[80%] h-0.5 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 -z-10"></div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {PROCESS_WITH_ICONS.map((step, idx) => (
              <Reveal key={idx} delay={idx * 150} className="h-full">
                <div className="relative flex flex-col items-center text-center group h-full">
                  {/* Step Icon Circle */}
                  <div className="w-28 h-28 bg-white border border-gray-100 rounded-full flex items-center justify-center mb-8 shadow-lg shadow-gray-100 group-hover:scale-110 group-hover:border-cerons-accent group-hover:shadow-cerons-accent/20 transition-all duration-500 z-10 relative">
                    <div className="text-gray-400 group-hover:text-cerons-accent transition-colors duration-500">
                        <step.icon size={32} strokeWidth={1.5} />
                    </div>
                    {/* Number Badge */}
                    <div className="absolute -top-2 -right-2 bg-gray-900 text-white text-xs font-bold w-8 h-8 flex items-center justify-center rounded-full border-4 border-white shadow-sm group-hover:bg-cerons-accent transition-colors">
                        {step.number}
                    </div>
                  </div>
                  
                  <div className="px-2">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: WORK - Luxurious Spacing */}
      <section className="bg-gray-50 py-32 relative border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <Reveal>
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
              <div className="max-w-3xl">
                <h2 className="font-heading font-bold text-5xl md:text-6xl text-gray-900 mb-6 leading-none">
                  Selected Work
                </h2>
                <p className="text-gray-500 text-xl leading-relaxed max-w-xl">
                  Digital experiences that leave a lasting impression.
                </p>
              </div>
              <Link to="/work" className="hidden md:inline-flex items-center justify-center px-8 py-4 border border-gray-900 bg-transparent text-gray-900 rounded-full font-bold hover:bg-gray-900 hover:text-white transition-all duration-300 group">
                View All Projects 
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Reveal>

          {/* Staggered Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
            {/* Column 1 */}
            <div className="flex flex-col gap-24">
              {PROJECTS.slice(0, 4).filter((_, i) => i % 2 === 0).map((project, idx) => (
                 <ProjectCard key={project.id} project={project} index={idx * 2} />
              ))}
            </div>

            {/* Column 2 - Offset */}
            <div className="flex flex-col gap-24 md:pt-48">
              {PROJECTS.slice(0, 4).filter((_, i) => i % 2 !== 0).map((project, idx) => (
                 <ProjectCard key={project.id} project={project} index={(idx * 2) + 1} />
              ))}
              
              <div className="md:hidden mt-12 text-center">
                 <Link to="/work" className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white rounded-full font-bold hover:bg-gray-800 transition-all w-full">
                   View All Projects 
                   <ArrowRight className="ml-2 w-5 h-5" />
                 </Link>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: FINAL CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <Reveal>
            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-[3rem] p-10 md:p-24 text-center relative overflow-hidden group hover:border-cerons-accent/20 transition-colors duration-700">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cerons-accent/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:bg-cerons-accent/10 transition-colors duration-700"></div>
              
              <div className="relative z-10">
                <h2 className="font-heading font-bold text-4xl md:text-6xl text-gray-900 mb-8 tracking-tight">
                  Ready to upgrade your<br/>online presence?
                </h2>
                <p className="text-gray-500 text-xl mb-12 max-w-2xl mx-auto font-light">
                  Get a website that looks great, loads fast, and converts visitors into customers.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                     <Button variant="primary" className="text-lg px-12 py-5 shadow-2xl shadow-cerons-accent/20 rounded-full">Start Your Project</Button>
                  </a>
                  <Link to="/contact">
                      <button className="inline-flex items-center justify-center font-heading font-semibold transition-all duration-300 rounded-full px-12 py-5 text-lg text-gray-600 hover:text-cerons-dark hover:bg-gray-50">
                        Contact Us
                      </button>
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
};

export default Home;