import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, ChevronDown, ArrowRight } from 'lucide-react';
import { WHATSAPP_LINK, EMAIL_ADDRESS, PHONE_NUMBER } from '../constants';
import Button from '../components/Button';
import Reveal from '../components/Reveal';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'New Website',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp Message
    const text = `*New Inquiry from Website*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Service:* ${formData.service}%0A*Details:* ${formData.message}`;
    const whatsappUrl = `https://wa.me/${PHONE_NUMBER.replace('+', '')}?text=${text}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white min-h-screen py-24 md:py-32 relative selection:bg-cerons-accent/20 selection:text-cerons-dark">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #e5e7eb 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <Reveal>
          {/* Floating Card Container */}
          <div className="max-w-6xl mx-auto bg-white rounded-[2.5rem] shadow-2xl shadow-gray-200/50 overflow-hidden flex flex-col md:flex-row min-h-[700px] border border-gray-100 relative">
            
            {/* Left Side: Contact Info (Premium Dark) */}
            <div className="bg-[#0f291e] text-white p-10 md:p-16 md:w-2/5 flex flex-col justify-between relative overflow-hidden isolate">
               {/* Texture & Gradients */}
               <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>
               <div className="absolute -top-[100px] -right-[100px] w-[400px] h-[400px] bg-cerons-accent/20 rounded-full blur-[100px] pointer-events-none"></div>
               <div className="absolute bottom-[-50px] left-[-50px] w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px] pointer-events-none"></div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-cerons-accent text-[10px] font-bold uppercase tracking-[0.2em] mb-8 hover:bg-white/20 transition-colors cursor-default">
                  <span className="w-1.5 h-1.5 rounded-full bg-cerons-accent animate-pulse"></span>
                  Get in Touch
                </div>
                
                <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6 leading-[1.1] tracking-tight">
                  Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-cerons-accent to-green-300">extraordinary.</span>
                </h1>
                <p className="text-gray-400 mb-12 leading-relaxed text-lg font-light">
                  Ready to upgrade your digital presence? Fill out the form or chat with us directly. We respond quickly.
                </p>
                
                <div className="space-y-8">
                  {/* Email */}
                  <div className="flex items-start space-x-5 group">
                    <div className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-2xl group-hover:bg-cerons-accent group-hover:border-cerons-accent group-hover:text-white transition-all duration-300 backdrop-blur-sm shadow-sm">
                      <Mail size={20} className="text-gray-300 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-1 font-bold">Email</p>
                      <a href={`mailto:${EMAIL_ADDRESS}`} className="font-medium text-lg tracking-tight text-white/90 group-hover:text-white transition-colors">{EMAIL_ADDRESS}</a>
                    </div>
                  </div>
                  
                  {/* Phone */}
                  <div className="flex items-start space-x-5 group">
                    <div className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-2xl group-hover:bg-cerons-accent group-hover:border-cerons-accent group-hover:text-white transition-all duration-300 backdrop-blur-sm shadow-sm">
                      <Phone size={20} className="text-gray-300 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-1 font-bold">Phone / WhatsApp</p>
                      <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="font-medium text-lg tracking-tight text-white/90 group-hover:text-white transition-colors">{PHONE_NUMBER}</a>
                    </div>
                  </div>
                  
                  {/* Location */}
                  <div className="flex items-start space-x-5 group">
                     <div className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-2xl group-hover:bg-cerons-accent group-hover:border-cerons-accent group-hover:text-white transition-all duration-300 backdrop-blur-sm shadow-sm">
                      <MapPin size={20} className="text-gray-300 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-1 font-bold">Location</p>
                      <p className="font-medium text-lg tracking-tight text-white/90 group-hover:text-white transition-colors">Colombo, Sri Lanka<br/><span className="text-sm text-gray-500 font-light">Serving clients globally</span></p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 relative z-10">
                 <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="block w-full group">
                   <div className="w-full py-4 rounded-xl border border-white/20 text-white flex items-center justify-center gap-3 transition-all duration-300 hover:bg-white hover:text-cerons-dark font-medium backdrop-blur-sm">
                    <MessageCircle size={20}/> 
                    <span>Chat on WhatsApp</span>
                    <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                   </div>
                 </a>
              </div>
            </div>

            {/* Right Side: Form (Clean Light) */}
            <div className="p-10 md:p-16 md:w-3/5 bg-white relative">
               {/* Mobile Divider */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-100 to-transparent md:hidden"></div>
              
              <form onSubmit={handleSubmit} className="space-y-8 h-full flex flex-col justify-center max-w-lg mx-auto md:mx-0">
                <div className="space-y-2 mb-2">
                    <h3 className="font-heading font-bold text-2xl text-gray-900">Send us a message</h3>
                    <p className="text-gray-500 text-sm">Tell us about your project goals and timeline.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 group">
                    <label htmlFor="name" className="text-xs font-bold text-gray-500 uppercase tracking-wider group-focus-within:text-cerons-dark transition-colors ml-1">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required 
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-cerons-accent focus:ring-4 focus:ring-cerons-accent/10 outline-none transition-all duration-300 placeholder:text-gray-300 text-gray-800 font-medium" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div className="space-y-2 group">
                    <label htmlFor="email" className="text-xs font-bold text-gray-500 uppercase tracking-wider group-focus-within:text-cerons-dark transition-colors ml-1">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      required 
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-cerons-accent focus:ring-4 focus:ring-cerons-accent/10 outline-none transition-all duration-300 placeholder:text-gray-300 text-gray-800 font-medium" 
                      placeholder="john@company.com" 
                    />
                  </div>
                </div>
                
                <div className="space-y-2 group">
                  <label htmlFor="service" className="text-xs font-bold text-gray-500 uppercase tracking-wider group-focus-within:text-cerons-dark transition-colors ml-1">I'm interested in...</label>
                  <div className="relative">
                    <select 
                      id="service" 
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-cerons-accent focus:ring-4 focus:ring-cerons-accent/10 outline-none transition-all duration-300 appearance-none cursor-pointer text-gray-800 font-medium"
                    >
                      <option>New Website</option>
                      <option>Website Redesign</option>
                      <option>Landing Page</option>
                      <option>E-Commerce</option>
                      <option>Other</option>
                    </select>
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400">
                      <ChevronDown size={16} />
                    </div>
                  </div>
                </div>

                <div className="space-y-2 group">
                  <label htmlFor="message" className="text-xs font-bold text-gray-500 uppercase tracking-wider group-focus-within:text-cerons-dark transition-colors ml-1">Project Details</label>
                  <textarea 
                    id="message" 
                    required 
                    rows={4} 
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-cerons-accent focus:ring-4 focus:ring-cerons-accent/10 outline-none transition-all duration-300 resize-none placeholder:text-gray-300 text-gray-800 font-medium" 
                    placeholder="Tell us about your goals, timeline, and budget..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full py-4 rounded-xl font-heading font-bold text-white transition-all duration-300 flex items-center justify-center space-x-2 bg-cerons-accent hover:bg-cerons-accentHover hover:shadow-lg hover:shadow-cerons-accent/30 hover:-translate-y-1 active:scale-[0.98] group"
                >
                  <span>Send Message on WhatsApp</span>
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </button>
                
                <p className="text-center text-xs text-gray-400 mt-4">
                    Typically replies within 2 hours during business hours.
                </p>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Contact;