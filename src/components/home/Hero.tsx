
import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, Download, User } from 'lucide-react';
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
  
  const handleScroll = (e: React.MouseEvent) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80, // Adjust for navbar height
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <section 
      id="home"
      ref={heroRef}
      className="relative h-dynamic-screen flex flex-col justify-center items-center overflow-hidden px-6 lg:px-10 subtle-grid noise-texture"
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
        <p className="text-sm md:text-base uppercase tracking-widest mb-6 text-muted-foreground font-display">
          GenAI Developer | Open Source Enthusiast
        </p>
        
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight md:leading-tight lg:leading-tight mb-6 tracking-tight">
          <span className="block mb-1">Building</span>
          <span className="block">Tomorrow's AI Solutions</span>
        </h1>
        
        <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg animate-fade-in opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
          I'm Mehfooj, a builder of AI systems and automation solutions, weaving intelligence into every line of code. When the world sleeps, my projects come alive.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in opacity-0" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
          <a
            href="#about"
            onClick={handleScroll}
            className="group bg-transparent border border-primary/30 hover:border-primary text-primary rounded-full py-3 px-6 font-medium transition-colors flex items-center gap-2 relative overflow-hidden"
          >
            <User size={16} className="transition-transform" />
            About Me
            <span className="absolute inset-0 bg-primary/10 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
          </a>
          
          <a
            href="/resume.pdf"
            download
            className="group bg-transparent border border-muted/30 text-muted-foreground rounded-full py-3 px-6 font-medium hover:text-primary hover:border-primary/30 transition-colors flex items-center gap-2"
          >
            Resume
            <Download size={16} className="group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-fade-in opacity-0" style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}>
        <a 
          href="#about" 
          onClick={handleScroll}
          className="cursor-pointer bg-card w-10 h-10 rounded-full flex items-center justify-center shadow-glow animate-pulse-glow"
        >
          <ArrowDown size={18} className="text-primary animate-float" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
