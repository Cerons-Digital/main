import React, { useEffect, useState } from 'react';

interface LoaderProps {
  onComplete: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Sequence timing
    const timers = [
      setTimeout(() => setStep(1), 500),  // Fade in text
      setTimeout(() => setStep(2), 1200), // Draw line
      setTimeout(() => setStep(3), 2000), // Show tagline
      setTimeout(() => {
        setStep(4); // Fade out container
        setTimeout(onComplete, 500); // Remove from DOM
      }, 3000) 
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-cerons-bg transition-opacity duration-500 ${
        step === 4 ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="relative">
        <h1 
          className={`font-heading text-4xl md:text-5xl font-bold text-cerons-dark tracking-tight transition-all duration-700 transform ${
            step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Cerons Digital
        </h1>
        
        {/* Animated Line */}
        <div 
          className={`h-1 bg-cerons-accent mt-2 mx-auto rounded-full transition-all duration-700 ease-in-out`}
          style={{ width: step >= 2 ? '100%' : '0%' }}
        />

        <p 
          className={`mt-4 font-sans text-gray-500 font-medium tracking-wide text-sm md:text-base text-center transition-all duration-700 ${
            step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          Designing Digital Experiences
        </p>
      </div>
    </div>
  );
};

export default Loader;