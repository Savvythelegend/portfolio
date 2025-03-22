
import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import AnimatedText from '../ui/AnimatedText';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      
      setMousePosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  const handleScroll = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section 
      ref={heroRef}
      className="relative h-dynamic-screen flex flex-col justify-center items-center overflow-hidden px-6 lg:px-10"
    >
      {/* Gradient background effect */}
      <div 
        className="absolute inset-0 opacity-20 bg-gradient-radial from-primary/5 via-transparent to-transparent"
        style={{
          backgroundPosition: `${mousePosition.x * 100}% ${mousePosition.y * 100}%`,
          backgroundSize: '120% 120%',
          transition: 'background-position 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />
      
      <div className="noise" />
      
      <div className="max-w-5xl mx-auto text-center z-10 animate-fade-in">
        <p className="text-sm md:text-base uppercase tracking-widest mb-6 text-muted-foreground">
          Full-Stack Developer
        </p>
        
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight md:leading-tight lg:leading-tight mb-6">
          <AnimatedText 
            text="Crafting Digital Experiences with Precision"
            className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent"
          />
        </h1>
        
        <p className="text-muted-foreground max-w-xl mx-auto text-base md:text-lg animate-fade-in opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
          I design and build applications that are not just functional, but delightful to use. Let's create something amazing together.
        </p>
        
        <div className="mt-10 animate-fade-in opacity-0" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
          <button
            onClick={handleScroll}
            className="bg-foreground text-background rounded-full py-3 px-6 font-medium hover:bg-foreground/90 transition-colors flex items-center gap-2 mx-auto group"
          >
            Discover more
            <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-fade-in opacity-0" style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}>
        <div className="w-6 h-9 border-2 border-foreground/30 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-1 bg-foreground/50 rounded-full animate-[bounce_1.5s_infinite]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
