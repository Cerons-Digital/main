import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const ScrollIndicator: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Function to check if the page is scrollable and we are at the top
    const checkVisibility = () => {
      const isScrollable = document.documentElement.scrollHeight > window.innerHeight + 50; // 50px buffer
      const isAtTop = window.scrollY < 50;
      setIsVisible(isScrollable && isAtTop);
    };

    // Check on mount and route change after a short delay to allow content to render
    const timer = setTimeout(checkVisibility, 1000);

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(false);
      } else {
        // Only show again if we are at top AND page is scrollable
        // We can skip the scrollable check here for performance as scrolling up implies it was scrollable
        setIsVisible(true); 
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkVisibility);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkVisibility);
    };
  }, [location.pathname]);

  return (
    <div 
      className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center justify-center gap-2 pointer-events-none transition-all duration-700 ease-in-out ${
        isVisible ? 'opacity-80 translate-y-0' : 'opacity-0 -translate-y-4'
      }`}
    >
      <span className="text-[10px] font-semibold tracking-[0.25em] text-gray-400 uppercase font-sans">Scroll</span>
      <div className="bg-white/50 backdrop-blur-sm p-1.5 rounded-full border border-gray-200/50 shadow-sm">
         <ChevronDown className="text-cerons-accent animate-bounce-subtle" size={20} />
      </div>
    </div>
  );
};

export default ScrollIndicator;