import React from 'react';

interface BrowserFrameProps {
  image?: string;
  iframeSrc?: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
}

const BrowserFrame: React.FC<BrowserFrameProps> = ({ image, iframeSrc, alt, className = '', aspectRatio = 'aspect-[4/3]' }) => {
  return (
    <div className={`rounded-xl overflow-hidden shadow-xl bg-white border border-gray-100 ${className}`}>
      {/* Browser Bar */}
      <div className="bg-gray-50 border-b border-gray-100 px-4 py-3 flex items-center space-x-2">
        <div className="w-3 h-3 rounded-full bg-red-400"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
        <div className="w-3 h-3 rounded-full bg-green-400"></div>
        {/* Fake URL bar */}
        <div className="ml-4 flex-1 h-6 bg-white border border-gray-200 rounded-md flex items-center px-3 overflow-hidden">
          <span className="text-xs text-gray-400 truncate w-full">
            {iframeSrc || "https://cerons.digital"}
          </span>
        </div>
      </div>
      {/* Content */}
      <div className={`relative ${aspectRatio} w-full overflow-hidden group bg-white`}>
        {iframeSrc ? (
          <div className="w-[300%] h-[300%] origin-top-left transform scale-[0.3333]">
             <iframe 
              src={iframeSrc} 
              title={alt}
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        ) : (
          <>
            <img 
              src={image} 
              alt={alt} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay for interaction hint on images */}
            <div className="absolute inset-0 bg-cerons-dark/0 group-hover:bg-cerons-dark/10 transition-colors duration-300"></div>
          </>
        )}
      </div>
    </div>
  );
};

export default BrowserFrame;