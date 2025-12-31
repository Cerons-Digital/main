import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { NAV_ITEMS, WHATSAPP_LINK, PHONE_NUMBER, INSTAGRAM_LINK, EMAIL_ADDRESS } from '../constants';
import Button from './Button';
import ScrollIndicator from './ScrollIndicator';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change and handle body scroll lock
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen flex flex-col bg-cerons-bg font-sans text-gray-800">
      {/* Header */}
      <header 
        className={`fixed w-full z-50 transition-all duration-500 border-b border-transparent ${
          scrolled && !isMenuOpen 
            ? 'bg-white/80 backdrop-blur-xl shadow-sm py-3 border-gray-100' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <NavLink to="/" className={`relative z-50 group transition-colors duration-500 ${isMenuOpen ? 'text-cerons-dark' : 'text-cerons-dark'}`}>
            <span className="font-heading font-bold text-2xl tracking-tight group-hover:text-cerons-accent transition-colors duration-300">
              Cerons Digital<span className="text-cerons-accent group-hover:text-cerons-dark">.</span>
            </span>
          </NavLink>

          {/* Desktop Nav - Enhanced with Pills and Animation */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-out group ${
                    isActive 
                      ? 'text-cerons-dark font-semibold bg-cerons-accent/10' 
                      : 'text-gray-600 hover:text-cerons-dark hover:bg-gray-100'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10">{item.label}</span>
                    {/* Active State Small Dot Indicator (Optional, fits luxury vibe) */}
                    {isActive && (
                      <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-cerons-accent rounded-full"></span>
                    )}
                  </>
                )}
              </NavLink>
            ))}
            
            {/* Vertical Divider */}
            <div className="w-px h-6 bg-gray-200 mx-3"></div>

            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" className="!px-6 !py-2.5 !text-sm !rounded-full shadow-lg shadow-cerons-accent/20 hover:shadow-cerons-accent/30 hover:-translate-y-0.5 transition-all duration-300 border border-white/20">Let's Talk</Button>
            </a>
          </nav>

          {/* Mobile Menu Button - Fixed layout to stay relative to container but high Z-index */}
          <button 
            className="md:hidden relative z-50 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-black/5 transition-colors focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-5">
              <span 
                className={`absolute left-0 w-full h-0.5 bg-cerons-dark transform transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${
                  isMenuOpen ? 'rotate-45 top-2.5' : 'rotate-0 top-0'
                }`} 
              />
              <span 
                className={`absolute left-0 w-full h-0.5 bg-cerons-dark transform transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${
                  isMenuOpen ? 'opacity-0 translate-x-4' : 'opacity-100 top-2.5'
                }`} 
              />
              <span 
                className={`absolute left-0 w-full h-0.5 bg-cerons-dark transform transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${
                  isMenuOpen ? '-rotate-45 top-2.5' : 'rotate-0 top-5'
                }`} 
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      {/* We use a clip-path transition for the slow reveal effect */}
      <div 
        className="fixed inset-0 z-40 bg-cerons-bg md:hidden flex flex-col"
        style={{
          clipPath: isMenuOpen ? "circle(150% at calc(100% - 2rem) 2rem)" : "circle(0% at calc(100% - 2rem) 2rem)",
          transition: "clip-path 1s cubic-bezier(0.19, 1, 0.22, 1)"
        }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ 
               backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', 
               backgroundSize: '40px 40px' 
             }}>
        </div>

        {/* Decorative Circle Blur */}
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cerons-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="flex-grow flex flex-col justify-center px-8 relative z-10">
          <div className="space-y-6">
            <span className={`block text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-8 transition-all duration-700 delay-100 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Navigation
            </span>
            
            {NAV_ITEMS.map((item, idx) => (
              <div key={item.path} className="overflow-hidden">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `group flex items-center justify-between text-4xl sm:text-5xl font-heading font-bold transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] transform ${
                      isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                    } ${
                      isActive ? 'text-cerons-accent' : 'text-cerons-dark'
                    }`
                  }
                  style={{ transitionDelay: `${150 + (idx * 100)}ms` }}
                >
                  <span className="relative">
                    <span className="text-base font-sans font-medium text-gray-400 absolute -left-8 top-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">0{idx + 1}</span>
                    {item.label}
                  </span>
                  <ArrowUpRight className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-cerons-accent" size={32} />
                </NavLink>
              </div>
            ))}
          </div>

          <div 
            className={`mt-12 pt-12 border-t border-gray-200 transition-all duration-1000 delay-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${
              isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-sm text-gray-500 mb-2">Get in touch</p>
                <a href={`mailto:${EMAIL_ADDRESS}`} className="text-xl font-medium text-cerons-dark block mb-1">{EMAIL_ADDRESS}</a>
                <a href={WHATSAPP_LINK} className="text-xl font-medium text-cerons-dark block">{PHONE_NUMBER}</a>
              </div>
              
              <div className="flex gap-4">
                 <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-cerons-accent hover:text-white transition-colors">
                    <Instagram size={20} />
                 </a>
                 <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-cerons-accent hover:text-white transition-colors">
                    <Linkedin size={20} />
                 </a>
              </div>
            </div>
            
            <div className="mt-8">
               <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="block w-full">
                <Button variant="primary" className="w-full !py-4 text-lg">Start Project</Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow pt-24">
        {children}
      </main>

      <ScrollIndicator />

      {/* Footer */}
      <footer className="bg-[#0f291e] text-white pt-24 pb-12 relative overflow-hidden">
        {/* Enhanced Background Texture */}
        <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }}></div>

        {/* Deep Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f291e] via-transparent to-[#05100c] pointer-events-none"></div>

        {/* Refined Geometric Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ 
               backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', 
               backgroundSize: '30px 30px' 
             }}>
        </div>
        
        {/* Top Border Gradient Line */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        
        {/* Premium Soft Glow Effects */}
        <div className="absolute top-[-200px] right-[-100px] w-[800px] h-[800px] bg-cerons-accent/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute bottom-[-200px] left-[-100px] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-20">
            
            {/* Brand Column */}
            <div className="col-span-1 md:col-span-4 pr-0 md:pr-8">
              <span className="font-heading font-bold text-3xl tracking-tight block mb-6 text-white">
                Cerons Digital<span className="text-cerons-accent">.</span>
              </span>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm font-light">
                Helping modern businesses build trust and convert visitors into customers through premium, high-performance website design.
              </p>
              <div className="flex space-x-4">
                {[
                  { Icon: Instagram, link: INSTAGRAM_LINK }, 
                  { Icon: Linkedin, link: '#' }, 
                  { Icon: Mail, link: `mailto:${EMAIL_ADDRESS}` }
                ].map(({ Icon, link }, idx) => (
                  <a key={idx} href={link} target={link.startsWith('http') ? "_blank" : undefined} rel={link.startsWith('http') ? "noopener noreferrer" : undefined} className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-full hover:bg-cerons-accent hover:border-cerons-accent hover:text-white transition-all duration-300 hover:-translate-y-1 group backdrop-blur-sm">
                    <Icon size={18} className="text-gray-300 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div className="col-span-1 md:col-span-2 md:col-start-6">
              <h4 className="font-heading font-bold text-sm mb-6 text-white uppercase tracking-widest text-cerons-accent/80">Services</h4>
              <ul className="space-y-4 text-sm text-gray-400 font-light">
                {['Web Design', 'Development', 'Landing Pages', 'Redesign'].map((item) => (
                    <li key={item}>
                        <a href="#" className="hover:text-white transition-colors duration-200 flex items-center group">
                           <span className="w-1 h-1 rounded-full bg-cerons-accent mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                           <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                        </a>
                    </li>
                ))}
              </ul>
            </div>

            <div className="col-span-1 md:col-span-2">
              <h4 className="font-heading font-bold text-sm mb-6 text-white uppercase tracking-widest text-cerons-accent/80">Company</h4>
              <ul className="space-y-4 text-sm text-gray-400 font-light">
                 {[
                    { label: 'About Us', path: '/about' },
                    { label: 'Our Work', path: '/work' },
                    { label: 'Contact', path: '/contact' },
                    { label: 'Careers', path: '#' }
                 ].map((link, idx) => (
                    <li key={idx}>
                        {link.path.startsWith('/') ? (
                            <NavLink to={link.path} className="hover:text-white transition-colors duration-200 flex items-center group">
                                <span className="w-1 h-1 rounded-full bg-cerons-accent mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                            </NavLink>
                        ) : (
                             <a href={link.path} className="hover:text-white transition-colors duration-200 flex items-center group">
                                <span className="w-1 h-1 rounded-full bg-cerons-accent mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                            </a>
                        )}
                    </li>
                 ))}
              </ul>
            </div>

            <div className="col-span-1 md:col-span-3">
              <h4 className="font-heading font-bold text-sm mb-6 text-white uppercase tracking-widest text-cerons-accent/80">Get in Touch</h4>
              <div className="space-y-4 text-sm text-gray-400 mb-8 font-light">
                 <p className="flex items-center gap-3 group cursor-default">
                    <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cerons-accent/20 transition-colors border border-white/5 backdrop-blur-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-cerons-accent"></span>
                    </span> 
                    <span className="group-hover:text-white transition-colors">{PHONE_NUMBER}</span>
                 </p>
                 <p className="flex items-center gap-3 group cursor-default">
                    <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cerons-accent/20 transition-colors border border-white/5 backdrop-blur-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-cerons-accent"></span>
                    </span>
                    <span className="group-hover:text-white transition-colors">{EMAIL_ADDRESS}</span>
                 </p>
              </div>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button variant="primary" className="!w-full !py-4 !text-sm shadow-[0_0_20px_rgba(34,197,94,0.15)] hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] border-0 bg-cerons-accent text-white hover:bg-white hover:text-cerons-dark transition-all duration-300">Chat on WhatsApp</Button>
              </a>
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-light">
            <p>&copy; {new Date().getFullYear()} Cerons Digital. All rights reserved.</p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;