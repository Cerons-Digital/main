import React, { useEffect, useRef } from 'react';
import { 
  Monitor, Layout, BarChart, RefreshCw, 
  CheckCircle2, Globe, TrendingUp, Smartphone, 
  Briefcase, Coffee, Plane, Home, Dumbbell, ShieldCheck, ArrowRight, Star
} from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';
import Button from '../components/Button';
import Reveal from '../components/Reveal';

const Services: React.FC = () => {
  const autoScrollRef = useRef<number | null>(null);

  // SEO: Update Meta Data dynamically on mount
  useEffect(() => {
    document.title = "Professional Website Design Services | Cerons Digital";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Premium website design services for businesses in Sri Lanka and globally. We specialize in websites for travel agencies, hotels, restaurants, and service providers that increase sales and trust.");
    }

    // =================================================================================
    // Auto Scroll Logic
    // =================================================================================
    let accumulatedScroll = 0;
    // Speeds: Mobile (0.8) is "slow", Desktop (0.3) is "very slow"
    const speed = window.innerWidth < 768 ? 0.8 : 0.3; 
    let isScrolling = true;

    const scrollLoop = () => {
      if (!isScrolling) return;

      // Stop if reached bottom
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 2) {
        isScrolling = false;
        return;
      }

      accumulatedScroll += speed;
      // Handle sub-pixel scrolling with accumulator
      if (accumulatedScroll >= 1) {
        const pixels = Math.floor(accumulatedScroll);
        window.scrollBy(0, pixels);
        accumulatedScroll -= pixels;
      }
      
      autoScrollRef.current = requestAnimationFrame(scrollLoop);
    };

    const stopScrolling = () => {
      isScrolling = false;
      if (autoScrollRef.current) {
        cancelAnimationFrame(autoScrollRef.current);
        autoScrollRef.current = null;
      }
      // Remove listeners to clean up
      window.removeEventListener('mousemove', stopScrolling);
      window.removeEventListener('touchstart', stopScrolling);
      window.removeEventListener('wheel', stopScrolling);
      window.removeEventListener('keydown', stopScrolling);
      window.removeEventListener('mousedown', stopScrolling);
    };

    // Start auto-scroll after a short delay to allow page transition animations to finish
    const startTimer = setTimeout(() => {
        // Only start if user hasn't already interacted (we assume initial state is true, listeners will flip it)
        if (isScrolling) {
            autoScrollRef.current = requestAnimationFrame(scrollLoop);
        }
    }, 1500);

    // Attach interaction listeners to stop scrolling
    window.addEventListener('mousemove', stopScrolling);
    window.addEventListener('touchstart', stopScrolling);
    window.addEventListener('wheel', stopScrolling);
    window.addEventListener('keydown', stopScrolling);
    window.addEventListener('mousedown', stopScrolling);

    return () => {
      clearTimeout(startTimer);
      stopScrolling();
    };
  }, []);

  return (
    <div className="pb-20 overflow-x-hidden bg-white">
      
      {/* =====================================================================================
          1. HERO SECTION (SEO + CONVERSION)
          Target Keyword: Professional Website Design Services for Businesses
      ===================================================================================== */}
      <section className="bg-cerons-dark text-white pt-32 pb-24 md:pt-48 md:pb-32 relative overflow-hidden">
        {/* --- Background Elements --- */}
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.05]" 
             style={{ 
               backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)', 
               backgroundSize: '50px 50px' 
             }}>
        </div>

        {/* Top Spotlight Gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[600px] bg-cerons-accent/20 rounded-[100%] blur-[120px] -translate-y-1/2 pointer-events-none"></div>

        {/* Floating Abstract Shapes */}
        <div className="absolute top-1/4 right-10 w-24 h-24 border border-white/10 rounded-full opacity-20 animate-bounce-subtle hidden md:block"></div>
        <div className="absolute bottom-1/4 left-10 w-16 h-16 bg-white/5 rounded-lg rotate-12 opacity-20 backdrop-blur-md hidden md:block"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Reveal>
            <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
              
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-cerons-accent text-xs md:text-sm font-semibold uppercase tracking-widest mb-8 hover:bg-white/10 transition-colors cursor-default">
                <span className="w-2 h-2 rounded-full bg-cerons-accent animate-pulse"></span>
                Premium Web Solutions
              </div>

              <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl mb-8 leading-[1.1] tracking-tight">
                Professional Website Design <br className="hidden md:block"/>
                Services for <span className="text-transparent bg-clip-text bg-gradient-to-r from-cerons-accent to-green-300">Businesses</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12 font-light">
                At Cerons Digital, we build high-performance websites designed to sell, build trust, and elevate brand perception. From premium loading experiences to conversion-focused layouts, our websites help travel agencies, hotels, and service businesses in Sri Lanka and abroad appear credible, professional, and ready to grow.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto justify-center">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button variant="primary" icon className="w-full sm:w-auto text-lg px-10 py-4 shadow-xl shadow-cerons-accent/20 hover:shadow-cerons-accent/40 border-0">Get a Website</Button>
                </a>
                <a href="/contact" className="w-full sm:w-auto">
                  <Button variant="outline" className="w-full sm:w-auto text-lg px-10 py-4 border-white/20 text-white hover:bg-white hover:text-cerons-dark backdrop-blur-sm">Free Consultation</Button>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
        
        {/* Bottom Fade Transition */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      </section>

      {/* =====================================================================================
          2. INDUSTRY-FOCUSED SERVICES INTRO
          Purpose: Niche SEO targeting
      ===================================================================================== */}
      <section className="bg-white py-12 border-b border-gray-100 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <Reveal delay={200}>
            <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-10">
              Trusted by Leading Industries
            </p>
            <div className="flex flex-wrap justify-center gap-10 md:gap-20 opacity-90">
              {[
                { icon: Plane, label: "Travel & Tourism" },
                { icon: Coffee, label: "Restaurants & Cafés" },
                { icon: Home, label: "Real Estate" },
                { icon: Briefcase, label: "Visa & Corporate" },
                { icon: Dumbbell, label: "Gyms & Fitness" }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center gap-4 group cursor-default transition-all duration-300 hover:-translate-y-1">
                  <div className="p-4 bg-gray-50 rounded-2xl text-cerons-dark group-hover:bg-cerons-accent group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:shadow-cerons-accent/20">
                    <item.icon size={24} strokeWidth={1.5} />
                  </div>
                  <span className="text-sm font-semibold text-gray-600 group-hover:text-cerons-dark transition-colors">{item.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================================================
          3. CORE SERVICES SECTION (DETAILED FOR SEO)
      ===================================================================================== */}
      <div className="container mx-auto px-4 md:px-6 py-24 space-y-40">
        
        {/* SERVICE 1: BUSINESS WEBSITES */}
        <Reveal>
          <article className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-green-50 rounded-2xl text-cerons-dark mb-8 border border-green-100 shadow-sm">
                <Layout size={28} strokeWidth={1.5} />
              </div>
              <h2 className="font-heading font-bold text-3xl md:text-5xl text-gray-900 mb-8 leading-tight">
                Professional Business Website Design
              </h2>
              <div className="w-20 h-1 bg-cerons-accent mb-8 rounded-full"></div>
              <p className="text-gray-600 text-lg leading-relaxed mb-10 font-light">
                Your website is often the first interaction a potential client has with your business — no matter where they are in the world. A slow, outdated, or poorly structured website can instantly reduce trust, especially when serving international audiences. 
                <br /><br />
                At Cerons Digital, we are a Sri Lanka–based website design agency working primarily with international clients. We design professional business websites that help brands appear credible, established, and reliable across global markets. By focusing on user experience (UX), conversion strategy, and clarity, we ensure visitors quickly understand your value and feel confident engaging with your business.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 bg-gray-50/50 p-6 rounded-2xl border border-gray-100">
                <div>
                  <h3 className="font-heading font-semibold text-cerons-dark mb-4 flex items-center gap-2 text-sm uppercase tracking-wide">
                    <Star size={16} className="text-cerons-accent" fill="currentColor" /> Best For
                  </h3>
                  <ul className="space-y-3 text-gray-600 text-sm">
                    {['Visa & Education Agencies', 'Law Firms & Consultancies', 'Corporate Service Providers'].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-cerons-accent rounded-full flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-cerons-dark mb-4 flex items-center gap-2 text-sm uppercase tracking-wide">
                    <ShieldCheck size={16} className="text-cerons-accent" /> Key Features
                  </h3>
                  <ul className="space-y-3 text-gray-600 text-sm">
                     {['Custom Brand Identity Design', 'Inquiry & Lead Forms', 'Trust Signals & Testimonials'].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={16} className="text-cerons-accent mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button variant="primary" className="shadow-lg shadow-cerons-accent/20">Build Your Business Site</Button>
              </a>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="bg-gray-100 rounded-[2.5rem] p-8 aspect-square md:aspect-[4/3] flex items-center justify-center relative overflow-hidden group shadow-2xl transition-all duration-700 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)]">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-200/50"></div>
                 {/* Abstract representation of a business layout */}
                <div className="relative w-full h-full bg-white rounded-xl shadow-xl transform rotate-2 transition-all duration-700 ease-out group-hover:rotate-0 group-hover:scale-[1.02] flex flex-col overflow-hidden border border-gray-100/50">
                    <div className="h-6 bg-white border-b border-gray-100 flex items-center px-4 gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
                    </div>
                    <div className="p-8 flex-1 flex flex-col gap-6">
                        {/* Fake Header */}
                        <div className="flex justify-between items-center">
                            <div className="w-1/4 h-6 bg-gray-100 rounded-md"></div>
                            <div className="flex gap-2">
                                <div className="w-16 h-6 bg-gray-50 rounded-md"></div>
                                <div className="w-16 h-6 bg-gray-50 rounded-md"></div>
                            </div>
                        </div>
                        {/* Fake Hero */}
                        <div className="w-full h-32 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border border-gray-50"></div>
                        {/* Fake Grid */}
                        <div className="flex gap-4">
                           <div className="flex-1 h-32 bg-cerons-dark/5 rounded-lg border border-gray-50"></div>
                           <div className="flex-1 h-32 bg-cerons-dark/5 rounded-lg border border-gray-50"></div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </article>
        </Reveal>

        {/* SERVICE 2: TRAVEL & HOSPITALITY */}
        <Reveal>
          <article className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
             <div className="order-1">
               <div className="bg-gray-100 rounded-[2.5rem] p-8 aspect-square md:aspect-[4/3] flex items-center justify-center relative overflow-hidden group shadow-2xl transition-all duration-700 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)]">
                 <div className="absolute inset-0 bg-gradient-to-bl from-blue-50/50 to-cerons-accent/5"></div>
                 {/* Abstract representation of a travel/visual layout */}
                 <div className="relative w-[85%] h-[90%] bg-white rounded-2xl shadow-xl transform -rotate-2 transition-all duration-700 ease-out group-hover:rotate-0 group-hover:scale-[1.02] overflow-hidden border border-gray-100/50 flex flex-col">
                     {/* Full height image area suggestion */}
                     <div className="flex-1 bg-gray-100 relative">
                        <div className="absolute inset-0 flex items-center justify-center text-gray-200">
                             <Plane size={48} strokeWidth={1} />
                        </div>
                        {/* Floating Cards inside interface */}
                        <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-sm rounded-xl border border-white/50 shadow-sm flex gap-3">
                             <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                             <div className="flex-1 flex flex-col justify-center gap-2">
                                 <div className="w-3/4 h-3 bg-gray-200 rounded-full"></div>
                                 <div className="w-1/2 h-2 bg-gray-100 rounded-full"></div>
                             </div>
                        </div>
                     </div>
                 </div>
               </div>
             </div>

             <div className="order-2">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-50 rounded-2xl text-blue-600 mb-8 border border-blue-100 shadow-sm">
                <Globe size={28} strokeWidth={1.5} />
              </div>
              <h2 className="font-heading font-bold text-3xl md:text-5xl text-gray-900 mb-8 leading-tight">
                Website Design for Travel Agencies & Hospitality
              </h2>
              <div className="w-20 h-1 bg-cerons-accent mb-8 rounded-full"></div>
              <p className="text-gray-600 text-lg leading-relaxed mb-10 font-light">
                The travel and hospitality industry relies heavily on perception, visuals, and trust — particularly when attracting international travelers. Your website must communicate quality and experience within seconds.
                <br /><br />
                Cerons Digital specializes in website design for travel agencies, hotels, resorts, and restaurants in Sri Lanka serving global audiences. We create visually immersive websites that highlight destinations, services, and experiences while maintaining seamless navigation and intuitive inquiry or booking flows. Our travel-focused SEO structure helps your business appear in searches made by both local and international customers planning their next journey.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 bg-gray-50/50 p-6 rounded-2xl border border-gray-100">
                <div>
                  <h3 className="font-heading font-semibold text-cerons-dark mb-4 flex items-center gap-2 text-sm uppercase tracking-wide">
                    <Star size={16} className="text-cerons-accent" fill="currentColor" /> Best For
                  </h3>
                  <ul className="space-y-3 text-gray-600 text-sm">
                    {['Travel Agencies & Tour Operators', 'Hotels, Villas & Resorts', 'Restaurants & Cafés'].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-cerons-accent rounded-full flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-cerons-dark mb-4 flex items-center gap-2 text-sm uppercase tracking-wide">
                    <ShieldCheck size={16} className="text-cerons-accent" /> Key Features
                  </h3>
                  <ul className="space-y-3 text-gray-600 text-sm">
                    {['Immersive Image Galleries', 'Booking System Integration', 'Multi-Language Support Options'].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={16} className="text-cerons-accent mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button variant="primary" className="shadow-lg shadow-cerons-accent/20">Start Your Project</Button>
              </a>
            </div>
          </article>
        </Reveal>

        {/* SERVICE 3: LANDING PAGES */}
        <Reveal>
          <article className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-purple-50 rounded-2xl text-purple-600 mb-8 border border-purple-100 shadow-sm">
                <BarChart size={28} strokeWidth={1.5} />
              </div>
              <h2 className="font-heading font-bold text-3xl md:text-5xl text-gray-900 mb-8 leading-tight">
                High-Converting Landing Pages
              </h2>
              <div className="w-20 h-1 bg-cerons-accent mb-8 rounded-full"></div>
              <p className="text-gray-600 text-lg leading-relaxed mb-10 font-light">
                Sometimes, you don't need a massive multi-page website—you need a focused, aggressive sales tool designed to do one thing: convert. Our landing page design services are perfect for specific marketing campaigns, product launches, or service promotions. 
                <br /><br />
                We strip away distractions and focus entirely on the user journey. By using persuasive copywriting, clear calls-to-action (CTAs), and psychological triggers, we guide visitors toward a single goal—whether that's filling out a form, making a phone call, or purchasing a product. This service is ideal for businesses running Facebook or Google Ads who want to maximize their return on investment (ROI).
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 bg-gray-50/50 p-6 rounded-2xl border border-gray-100">
                <div>
                  <h3 className="font-heading font-semibold text-cerons-dark mb-4 flex items-center gap-2 text-sm uppercase tracking-wide">
                    <Star size={16} className="text-cerons-accent" fill="currentColor" /> Best For
                  </h3>
                  <ul className="space-y-3 text-gray-600 text-sm">
                    {['Real Estate Project Launches', 'Gym Membership Drives', 'Specific Ad Campaigns'].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-cerons-accent rounded-full flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-cerons-dark mb-4 flex items-center gap-2 text-sm uppercase tracking-wide">
                    <ShieldCheck size={16} className="text-cerons-accent" /> Key Features
                  </h3>
                  <ul className="space-y-3 text-gray-600 text-sm">
                    {['A/B Testing Ready', 'Fast Loading Speed', 'Mobile Optimized Layout'].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={16} className="text-cerons-accent mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button variant="primary" className="shadow-lg shadow-cerons-accent/20">Launch a Campaign</Button>
              </a>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="bg-gray-100 rounded-[2.5rem] p-8 aspect-square md:aspect-[4/3] flex items-center justify-center relative overflow-hidden group shadow-2xl transition-all duration-700 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)]">
                 <div className="absolute inset-0 bg-gradient-to-tr from-white to-gray-200"></div>
                 {/* Abstract representation of a funnel */}
                 <div className="relative w-[70%] h-[80%] bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center gap-6 border border-gray-100/50 p-8 transform rotate-2 transition-transform duration-700 group-hover:rotate-0">
                    <div className="w-20 h-20 rounded-full bg-cerons-accent/10 flex items-center justify-center text-cerons-accent relative">
                        <ArrowRight size={32} className="animate-pulse" />
                        <div className="absolute inset-0 border border-cerons-accent/20 rounded-full animate-ping opacity-20"></div>
                    </div>
                    <div className="w-full space-y-3">
                        <div className="w-3/4 h-3 bg-gray-100 rounded-full mx-auto"></div>
                        <div className="w-1/2 h-3 bg-gray-100 rounded-full mx-auto"></div>
                    </div>
                    <div className="w-2/3 h-10 bg-cerons-accent rounded-lg shadow-lg shadow-cerons-accent/30 mt-4 flex items-center justify-center">
                        <div className="w-1/3 h-2 bg-white/40 rounded-full"></div>
                    </div>
                 </div>
              </div>
            </div>
          </article>
        </Reveal>

        {/* SERVICE 4: REDESIGN */}
        <Reveal>
          <article className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
             <div className="order-1">
               <div className="bg-gray-100 rounded-[2.5rem] p-8 aspect-square md:aspect-[4/3] flex items-center justify-center relative overflow-hidden group shadow-2xl transition-all duration-700 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)]">
                 <div className="absolute inset-0 bg-cerons-dark"></div>
                 <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                 
                 {/* Visual for redesign */}
                 <div className="relative w-full h-full flex items-center justify-center">
                    {/* Before Circle */}
                    <div className="absolute w-32 h-32 border border-white/10 rounded-full -translate-x-12 opacity-50 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-500">
                        <span className="text-white/30 text-xs font-mono">OLD</span>
                    </div>
                    {/* After Circle */}
                    <div className="absolute w-40 h-40 bg-cerons-accent/20 backdrop-blur-md border border-cerons-accent/30 rounded-full translate-x-8 shadow-[0_0_40px_rgba(34,197,94,0.2)] flex items-center justify-center z-10">
                        <RefreshCw size={48} className="text-cerons-accent animate-spin-slow" strokeWidth={1.5} />
                    </div>
                 </div>
               </div>
             </div>

             <div className="order-2">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-50 rounded-2xl text-orange-600 mb-8 border border-orange-100 shadow-sm">
                <RefreshCw size={28} strokeWidth={1.5} />
              </div>
              <h2 className="font-heading font-bold text-3xl md:text-5xl text-gray-900 mb-8 leading-tight">
                Website Redesign & Modernization
              </h2>
              <div className="w-20 h-1 bg-cerons-accent mb-8 rounded-full"></div>
              <p className="text-gray-600 text-lg leading-relaxed mb-10 font-light">
                An outdated website can negatively impact trust, conversions, and search engine visibility — particularly when competing in international markets with high digital standards.
                <br /><br />
                Cerons Digital helps businesses modernize their websites while maintaining brand identity. Based in Sri Lanka and serving clients worldwide, our redesign process begins with a detailed audit to identify performance, usability, and SEO issues. We then rebuild websites using modern technologies such as React and Tailwind CSS to deliver fast-loading, mobile-responsive, and professional digital experiences optimized for global audiences.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 bg-gray-50/50 p-6 rounded-2xl border border-gray-100">
                <div>
                  <h3 className="font-heading font-semibold text-cerons-dark mb-4 flex items-center gap-2 text-sm uppercase tracking-wide">
                    <Star size={16} className="text-cerons-accent" fill="currentColor" /> Best For
                  </h3>
                  <ul className="space-y-3 text-gray-600 text-sm">
                    {['Established Businesses', 'Sites with Low Conversion', 'Rebranding Companies'].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-cerons-accent rounded-full flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-cerons-dark mb-4 flex items-center gap-2 text-sm uppercase tracking-wide">
                    <ShieldCheck size={16} className="text-cerons-accent" /> Key Features
                  </h3>
                  <ul className="space-y-3 text-gray-600 text-sm">
                    {['Performance Speed Boost', 'Modern UI/UX Overhaul', 'SEO Content Migration'].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={16} className="text-cerons-accent mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button variant="primary" className="shadow-lg shadow-cerons-accent/20">Modernize Your Site</Button>
              </a>
            </div>
          </article>
        </Reveal>

      </div>

      {/* =====================================================================================
          4. WHO THIS IS FOR (SEO RANKING SECTION)
      ===================================================================================== */}
      <section className="bg-gray-50 py-24 border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <Reveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-cerons-dark mb-6">
                Who Our Website Design Services Are For
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                We are dedicated to helping serious business owners who understand the value of a professional digital presence. Our services are specifically optimized for:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                  { id: 'LK', title: "Sri Lankan Businesses", desc: "Local companies wanting to compete internationally and capture the growing digital market.", color: "bg-cerons-dark" },
                  { id: 'INT', title: "International Clients", desc: "Service-based companies in Australia, UK, and UAE looking for high-quality, cost-effective design.", color: "bg-cerons-accent" },
                  { id: 'GO', title: "Growth-Focused Brands", desc: "Businesses that want more leads, bookings, and inquiries, not just a static brochure.", color: "bg-gray-800" }
              ].map((card, i) => (
                  <div key={i} className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 flex flex-col items-center text-center group">
                    <div className={`w-16 h-16 ${card.color} text-white rounded-2xl flex items-center justify-center mb-6 font-bold text-xl shadow-lg transform group-hover:rotate-6 transition-transform duration-300`}>{card.id}</div>
                    <h3 className="font-bold text-xl text-gray-900 mb-4 group-hover:text-cerons-accent transition-colors">{card.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
                  </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================================================
          5. TRUST & CREDIBILITY SECTION
      ===================================================================================== */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <Reveal>
             <h2 className="font-heading font-bold text-3xl md:text-4xl text-cerons-dark mb-16 text-center">Why Choose Cerons Digital?</h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                 { icon: Monitor, title: "Clean Professional Design", text: "Aesthetics that reflect your brand's quality." },
                 { icon: TrendingUp, title: "SEO-Optimized Structure", text: "Built from the ground up to rank on Google." },
                 { icon: Smartphone, title: "100% Mobile Responsive", text: "Perfect experience on phones and tablets." },
                 { icon: ShieldCheck, title: "Long-Term Value", text: "Scalable solutions that grow with you." }
               ].map((feature, idx) => (
                 <div key={idx} className="flex flex-col items-center text-center p-8 bg-white border border-gray-100 rounded-2xl hover:border-cerons-accent/30 hover:shadow-lg transition-all duration-300 group">
                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-6 text-cerons-accent group-hover:bg-cerons-accent group-hover:text-white transition-colors duration-300">
                        <feature.icon size={28} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{feature.text}</p>
                 </div>
               ))}
             </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================================================
          6. FINAL HIGH-CONVERSION CTA
      ===================================================================================== */}
      <section className="container mx-auto px-4 md:px-6 pb-24">
        <Reveal>
          <div className="bg-[#0f291e] rounded-[3rem] p-10 md:p-24 text-center relative overflow-hidden shadow-2xl">
            {/* CTA Background Pattern */}
            <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cerons-accent/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-heading font-bold text-3xl md:text-5xl text-white mb-8 leading-tight">
                Get a Website That Builds Trust and Generates Sales
              </h2>
              <p className="text-gray-300 text-lg mb-12 font-light">
                Stop losing customers to competitors with better websites. Let's build a digital presence that reflects the true quality of your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" className="text-lg px-12 py-5 shadow-2xl shadow-cerons-accent/20 border-0 rounded-full w-full sm:w-auto">Start Your Website</Button>
                </a>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                   <Button variant="outline" className="text-lg px-12 py-5 text-white border-white/20 hover:bg-white hover:text-cerons-dark rounded-full w-full sm:w-auto">Chat on WhatsApp</Button>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

    </div>
  );
};

export default Services;