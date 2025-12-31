import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, Zap, Smartphone, TrendingUp, 
  Plane, Coffee, Dumbbell, Home, Briefcase, 
  Globe, MessageCircle, Layers, Hourglass, Gem, Layout, Users, ArrowUpRight
} from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';
import Button from '../components/Button';
import Reveal from '../components/Reveal';

const About: React.FC = () => {
  // SEO: Update Meta Data dynamically on mount
  useEffect(() => {
    document.title = "About Cerons Digital | Premium Website Design Agency";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Cerons Digital is a premium design agency specializing in high-trust websites and sophisticated loading experiences for businesses in Sri Lanka and globally.");
    }
  }, []);

  return (
    <div className="pb-20 overflow-x-hidden bg-white selection:bg-cerons-accent/20 selection:text-cerons-dark">
      
      {/* =====================================================================================
          1. HERO SECTION
          Goal: Position Cerons Digital as a partner for growth and trust.
      ===================================================================================== */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
         {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" 
             style={{ 
               backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', 
               backgroundSize: '60px 60px' 
             }}>
        </div>
        
        {/* Soft atmospheric glows */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-b from-cerons-accent/5 to-transparent rounded-full blur-[120px] -z-10 opacity-60"></div>
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-t from-blue-500/5 to-transparent rounded-full blur-[120px] -z-10 opacity-60"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
            <Reveal>
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-100 shadow-sm text-cerons-dark text-[11px] font-bold uppercase tracking-[0.2em] mb-8 animate-fade-in">
                    <Users size={14} className="text-cerons-accent" />
                    Who We Are
                </div>
                <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl text-gray-900 mb-8 tracking-tight leading-[1.1] text-balance">
                  About Cerons Digital
                </h1>
                <p className="text-xl md:text-2xl text-gray-500 leading-relaxed mb-12 mx-auto max-w-3xl font-light text-balance">
                  <strong className="font-medium text-gray-900">Your website is your first impression — make it count.</strong>
                  <br /><br className="hidden md:block" />
                  <span className="text-lg md:text-xl">
                  At Cerons Digital, we design websites that communicate trust and professionalism from the moment they load. By focusing on perception, performance, and detail, we help businesses in Sri Lanka and abroad present themselves as credible, established, and ready to convert visitors into clients.
                  </span>
                </p>
                <div className="flex justify-center">
                  <Link to="/services">
                    <Button variant="outline" className="border-gray-200 text-gray-600 hover:border-cerons-dark hover:text-cerons-dark hover:bg-gray-50 px-10 py-4 rounded-full transition-all duration-300">View Our Services</Button>
                  </Link>
                </div>
              </div>
            </Reveal>
        </div>
      </section>

      {/* =====================================================================================
          2. MISSION SECTION
          Goal: Focus on long-term value and ROI.
      ===================================================================================== */}
      <section className="py-24 border-t border-gray-100 bg-gray-50/30 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        
        <div className="container mx-auto px-4 md:px-6">
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 items-center">
              <div className="md:col-span-5 relative order-2 md:order-1">
                {/* Enhanced Visual Container */}
                <div className="aspect-square bg-white rounded-[2rem] shadow-2xl shadow-gray-200/50 relative border border-white flex items-center justify-center overflow-hidden group hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] transition-all duration-700">
                   {/* Background gradient within card */}
                   <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 opacity-80"></div>
                   
                   {/* Grid texture inside */}
                   <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                   
                   <div className="relative z-10 p-10 rounded-full bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-50 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 ease-out">
                        <Layers size={56} className="text-cerons-dark opacity-90" strokeWidth={1.5} />
                   </div>
                   
                   {/* Decorative floating elements */}
                   <div className="absolute top-12 right-12 w-24 h-24 bg-cerons-accent/5 rounded-full blur-2xl animate-pulse"></div>
                   <div className="absolute bottom-12 left-12 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl"></div>
                   
                   {/* Floating badge */}
                   <div className="absolute bottom-8 right-8 bg-white/80 backdrop-blur-md px-4 py-2 rounded-lg border border-white shadow-sm text-xs font-semibold text-gray-500 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                      Purpose Driven
                   </div>
                </div>
              </div>
              
              <div className="md:col-span-7 order-1 md:order-2">
                <span className="text-cerons-accent font-bold tracking-[0.2em] uppercase text-xs mb-6 block flex items-center gap-2">
                    <span className="w-8 h-px bg-cerons-accent"></span> Our Purpose
                </span>
                <h2 className="font-heading font-bold text-3xl md:text-5xl text-gray-900 mb-8 leading-tight">Our Mission</h2>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
                  <p>
                    At Cerons Digital, our mission is simple: to help businesses make a strong, professional first impression online. We believe the moment a website loads is often the moment trust is either built or lost.
                  </p>
                  <p>
                    We don’t see a website as just pages and visuals. We see it as a tool that should clearly communicate who you are, what you do, and why someone should choose you. Every decision we make — from layout and typography to loading experience and structure — is focused on clarity, trust, and ease of use. By removing distractions and focusing on what truly matters, we design websites that support your reputation and help turn visitors into real enquiries.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================================================
          3. SPECIALTY SECTION (DARK)
          Goal: Highlight the niche focus on loading experiences.
      ===================================================================================== */}
      <section className="bg-[#0f291e] text-white py-32 relative overflow-hidden isolate">
         {/* Texture */}
         <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>
         
         {/* Deep Glows */}
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-cerons-accent/5 rounded-full blur-[150px] translate-x-1/2 -translate-y-1/2 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/3 -z-10"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-cerons-accent text-[11px] font-bold uppercase tracking-[0.2em] mb-8">
                  <Gem size={12} />
                  Our Specialty
                </div>
                <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-8 leading-[1.1]">
                  Designed to Impress From the First Second
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light border-l border-white/10 pl-6">
                  In high-stakes industries like luxury travel, real estate, and professional services, the user's judgment begins before the homepage even finishes rendering. A jarring or clunky load time signals neglect; a smooth, orchestrated entry signals mastery.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed font-light">
                  At Cerons Digital, we specialize in premium loading and intro experiences. These are not animations for the sake of decoration. They are calculated psychological cues that signal stability, attention to detail, and high quality. By controlling the introduction, we increase perceived brand value instantly.
                </p>
              </div>
              
              <div className="relative">
                 {/* Visual Metaphor for "Smooth Loading" */}
                 <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-10 md:p-14 shadow-2xl relative overflow-hidden group hover:bg-white/10 transition-colors duration-700">
                    {/* Inner sheen */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>

                    {/* Loader UI Mockup */}
                    <div className="flex items-center justify-between mb-16 opacity-30">
                        <div className="h-1.5 w-1/3 bg-white/80 rounded-full"></div>
                        <div className="flex gap-2">
                           <div className="h-1.5 w-8 bg-white/80 rounded-full"></div>
                           <div className="h-1.5 w-4 bg-white/80 rounded-full"></div>
                        </div>
                    </div>
                    
                    <div className="flex flex-col items-center justify-center py-8 relative">
                         {/* Glowing ring behind hourglass */}
                        <div className="absolute w-32 h-32 bg-cerons-accent/10 rounded-full blur-2xl animate-pulse"></div>
                        
                        <div className="relative z-10 mb-8 p-6 rounded-full bg-white/5 border border-white/10 shadow-[0_0_30px_rgba(34,197,94,0.15)] backdrop-blur-md group-hover:scale-110 transition-transform duration-500">
                           <Hourglass size={48} className="text-cerons-accent drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]" strokeWidth={1.5} />
                        </div>
                        
                        <p className="text-white font-heading font-bold text-2xl mb-2 tracking-tight">Orchestrated Entry</p>
                        <p className="text-gray-400 text-center text-sm max-w-[200px] font-light leading-relaxed">Wait times transformed into brand building moments.</p>
                    </div>
                    
                    <div className="mt-16 relative">
                        <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                           <div className="h-full bg-gradient-to-r from-transparent via-cerons-accent to-cerons-accent w-2/3 shadow-[0_0_20px_rgba(34,197,94,0.8)] animate-draw-line origin-left rounded-full"></div>
                        </div>
                        <span className="absolute right-0 -top-6 text-xs text-cerons-accent font-mono animate-pulse">100%</span>
                    </div>
                 </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================================================
          4. WHO WE WORK WITH
          Goal: Targeted industry credibility.
      ===================================================================================== */}
      <section className="container mx-auto px-4 md:px-6 py-24 bg-white">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-cerons-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Industries</span>
            <h2 className="font-heading font-bold text-4xl text-gray-900 mb-6">Who We Work With</h2>
            <p className="text-gray-500 text-lg font-light">
              We partner with industries where reputation, presentation, and trust are the currency of success.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            { 
              icon: Plane, 
              title: "Travel & Tourism", 
              desc: "Agencies and tour operators requiring high-trust visuals to drive international bookings." 
            },
            { 
              icon: Coffee, 
              title: "Hospitality", 
              desc: "Hotels, resorts, and restaurants where the digital ambiance must match the physical one." 
            },
            { 
              icon: Briefcase, 
              title: "Visa & Education", 
              desc: "Agencies dealing with complex processes that require authority and clarity." 
            },
            { 
              icon: Home, 
              title: "Real Estate", 
              desc: "Companies needing to present high-ticket properties with elegance and speed." 
            },
            { 
              icon: Dumbbell, 
              title: "Fitness & Wellness", 
              desc: "Gyms and wellness brands that need to inspire action and commitment." 
            },
            { 
              icon: Globe, 
              title: "Professional Services", 
              desc: "Consultants and firms that need to demonstrate expertise immediately." 
            },
          ].map((industry, idx) => (
            <Reveal key={idx} delay={idx * 100}>
              <div className="p-10 bg-white border border-gray-100 rounded-2xl hover:border-cerons-accent/30 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.05)] transition-all duration-500 h-full group flex flex-col items-start cursor-default relative overflow-hidden">
                <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <ArrowUpRight size={20} className="text-gray-300" />
                </div>
                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 text-gray-400 group-hover:bg-cerons-dark group-hover:text-white transition-all duration-300 shadow-sm group-hover:rotate-3">
                  <industry.icon size={26} strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-bold text-xl text-gray-900 mb-3 group-hover:text-cerons-dark transition-colors">{industry.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{industry.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* =====================================================================================
          5. WHY CHOOSE CERONS DIGITAL
          Goal: Highlight technical and strategic advantages.
      ===================================================================================== */}
      <section className="bg-gray-50/50 py-32 border-y border-gray-100 relative">
          <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #e5e7eb 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <Reveal>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                <div className="lg:col-span-5 lg:sticky lg:top-32">
                   <div className="inline-flex items-center gap-2 mb-6 text-cerons-accent">
                        <ShieldCheck size={16} fill="currentColor" className="opacity-20" />
                        <span className="text-[11px] font-bold uppercase tracking-[0.2em]">The Advantage</span>
                    </div>
                   <h2 className="font-heading font-bold text-4xl md:text-5xl text-gray-900 mb-8 leading-tight">Why Choose<br/>Cerons Digital</h2>
                   <p className="text-gray-600 text-lg leading-relaxed mb-10 font-light">
                     In a crowded market, nuance matters. We bring a level of polish and technical consideration that generic templates simply cannot match. We build for the long term.
                   </p>
                   <Link to="/contact">
                     <Button variant="primary" className="shadow-lg shadow-cerons-accent/20 rounded-full px-8">Start a Conversation</Button>
                   </Link>
                </div>

                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
                   {[
                     {
                       icon: Hourglass,
                       title: "First Impression Specialists",
                       text: "We craft loading sequences that signal premium quality instantly."
                     },
                     {
                       icon: Layout,
                       title: "Clean, Modern Layouts",
                       text: "Uncluttered designs that focus on your content and conversion goals."
                     },
                     {
                       icon: TrendingUp,
                       title: "SEO-Ready Structure",
                       text: "Built on semantic code to help you rank better on search engines."
                     },
                     {
                       icon: Smartphone,
                       title: "Mobile-First Performance",
                       text: "Optimized for speed and usability on all devices, ensuring no lead is lost."
                     }
                   ].map((item, i) => (
                     <div key={i} className="flex flex-col gap-6 p-8 rounded-2xl bg-white border border-gray-100 hover:border-gray-200 hover:shadow-lg hover:shadow-gray-100 transition-all duration-300 group">
                        <div className="w-12 h-12 rounded-full bg-cerons-bg border border-cerons-accent/10 text-cerons-dark flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                          <item.icon size={22} strokeWidth={1.5} />
                        </div>
                        <div>
                          <h3 className="font-heading font-bold text-lg text-gray-900 mb-3">{item.title}</h3>
                          <p className="text-gray-500 text-sm leading-relaxed font-light">{item.text}</p>
                        </div>
                     </div>
                   ))}
                </div>
              </div>
            </Reveal>
          </div>
      </section>

      {/* =====================================================================================
          6. HOW WE WORK
          Goal: Simple, transparent process.
      ===================================================================================== */}
      <section className="bg-white py-32">
        <div className="container mx-auto px-4 md:px-6">
          <Reveal>
            <div className="max-w-2xl mx-auto text-center mb-24">
                 <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-4">How We Work</h2>
                 <p className="text-gray-500">Transparent, efficient, and results-driven.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {/* Connecting line for desktop */}
              <div className="hidden md:block absolute top-[60px] left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent"></div>

              {[
                { step: "01", title: "Understand", text: "We analyze your brand's unique value and your audience's expectations." },
                { step: "02", title: "Perception", text: "We design the visual language and trust signals needed to convert." },
                { step: "03", title: "Build", text: "We develop using modern, high-performance code for speed and SEO." },
                { step: "04", title: "Launch", text: "We deploy your site with a focus on long-term stability and growth." }
              ].map((phase, idx) => (
                <div key={idx} className="relative group p-8 rounded-3xl transition-all duration-500 hover:bg-gray-50">
                   {/* Mobile Line */}
                   <div className="absolute top-0 left-8 w-px h-full bg-gray-100 group-hover:bg-cerons-accent/30 transition-colors duration-300 md:hidden"></div>
                   
                   <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
                      <div className="text-6xl font-heading font-bold text-gray-100 mb-6 group-hover:text-cerons-accent/10 transition-colors duration-300 transform group-hover:-translate-y-2">{phase.step}</div>
                      <h3 className="font-heading font-bold text-xl text-gray-900 mb-4">{phase.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed font-light">{phase.text}</p>
                   </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================================================
          7. TRUST & AUTHORITY SECTION
          Goal: Reassure international and local clients.
      ===================================================================================== */}
      <section className="container mx-auto px-4 md:px-6 pb-24 pt-12">
        <Reveal>
          <div className="max-w-4xl mx-auto text-center bg-gray-50/80 rounded-[2.5rem] p-12 md:p-20 border border-gray-100 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-cerons-accent/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>

            <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-8 bg-white rounded-full flex items-center justify-center shadow-sm text-cerons-accent">
                    <ShieldCheck size={32} strokeWidth={1.5} />
                </div>
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-6">
                Built for Trust. Designed for Growth.
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8 font-light max-w-2xl mx-auto">
                Reliability is our cornerstone. We understand that trusting an agency with your digital presence is a significant decision. We prioritize clear communication, transparent pricing, and international design standards. Whether you are a local business in Colombo or an international client, we deliver a website that converts trust into action.
                </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* =====================================================================================
          8. FINAL CTA
          Goal: Drive action.
      ===================================================================================== */}
      <section className="container mx-auto px-4 md:px-6 pb-24">
        <Reveal>
          <div className="bg-[#0f291e] text-white rounded-[3rem] p-10 md:p-20 text-center shadow-2xl relative overflow-hidden isolate group">
             {/* Background texture */}
             <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cerons-accent/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-cerons-accent/20 transition-colors duration-700"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="font-heading font-bold text-3xl md:text-5xl mb-8 leading-tight">
                Let’s Build a Website That Represents Your Business
              </h2>
              <p className="text-gray-300 text-lg md:text-xl mb-12 font-light">
                Stop settling for average. Upgrade to a website that works as hard as you do.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <Link to="/contact">
                  <Button variant="primary" className="w-full sm:w-auto px-12 py-5 text-lg bg-cerons-accent hover:bg-white hover:text-cerons-dark border border-transparent rounded-full shadow-lg shadow-cerons-accent/20">Start Your Project</Button>
                </Link>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full sm:w-auto px-12 py-5 text-lg border-white/20 text-white hover:bg-white hover:text-cerons-dark rounded-full">
                    <MessageCircle className="mr-2" size={20}/> Chat on WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

    </div>
  );
};

export default About;