import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  icon?: boolean;
  children: React.ReactNode;
  fullWidth?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  icon = false, 
  children, 
  className = '', 
  fullWidth = false,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-heading font-semibold transition-all duration-300 rounded-[10px] px-8 py-3.5 text-base focus:outline-none focus:ring-2 focus:ring-cerons-accent focus:ring-offset-2";
  
  const variants = {
    primary: "bg-cerons-accent text-white hover:bg-cerons-accentHover hover:scale-[1.02] shadow-sm",
    outline: "bg-transparent border-2 border-cerons-dark text-cerons-dark hover:bg-cerons-dark hover:text-white"
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
      {icon && <ArrowRight className="ml-2 w-5 h-5" />}
    </button>
  );
};

export default Button;