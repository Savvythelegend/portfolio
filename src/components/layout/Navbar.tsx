
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Clock, Home, User, Briefcase, Code, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState(new Date());
  const [activeSection, setActiveSection] = useState('');

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Determine active section based on scroll position
      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset to trigger slightly before reaching section
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    window.addEventListener('scroll', handleScroll);
    // Initial check for active section
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  const scrollToSection = (sectionId: string, event: React.MouseEvent) => {
    event.preventDefault();
    closeMenu();
    
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Adjust offset to account for navbar height
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { name: 'Home', path: 'home', icon: <Home size={16} /> },
    { name: 'About', path: 'about', icon: <User size={16} /> },
    { name: 'Journey', path: 'experience', icon: <Briefcase size={16} /> },
    { name: 'Work', path: 'projects', icon: <Code size={16} /> },
    { name: 'Contact', path: 'contact', icon: <MessageSquare size={16} /> },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-10",
        scrolled ? "py-3 glass shadow-glow" : "py-5 bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <a 
          href="#home" 
          className="text-xl md:text-2xl font-display font-bold relative z-10 tracking-tight"
          onClick={(e) => scrollToSection('home', e)}
        >
          <span className="text-primary">Mehfooj.</span>
        </a>

        {/* Real-time Clock */}
        <div className="hidden md:flex items-center text-muted-foreground text-sm absolute left-1/2 -translate-x-1/2">
          <Clock size={14} className="mr-2" />
          {time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.path}`}
              onClick={(e) => scrollToSection(link.path, e)}
              className={cn(
                "text-sm font-medium transition-all group flex items-center gap-2",
                activeSection === link.path 
                  ? "text-primary" 
                  : "text-muted-foreground hover:text-primary"
              )}
            >
              <span className={cn(
                "transition-colors duration-300 group-hover:text-primary",
                activeSection === link.path ? "text-primary" : "text-muted-foreground"
              )}>
                {link.icon}
              </span>
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-foreground z-10"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 bg-background/80 backdrop-blur-lg transition-all duration-300 z-0 md:hidden",
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
          onClick={closeMenu}
        />
        <div
          className={cn(
            "fixed top-0 right-0 bottom-0 w-3/4 bg-card z-0 p-8 flex flex-col transform transition-transform duration-300 ease-in-out md:hidden shadow-glow",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="h-16" /> {/* Spacer for the logo */}
          <div className="flex flex-col gap-6 mt-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.path}`}
                className={cn(
                  "text-lg font-medium py-2 border-b border-border/50 transition-all flex items-center gap-3",
                  activeSection === link.path 
                    ? "text-primary" 
                    : "text-muted-foreground"
                )}
                onClick={(e) => scrollToSection(link.path, e)}
              >
                <span className={cn(
                  "transition-colors duration-300",
                  activeSection === link.path ? "text-primary" : "text-muted-foreground"
                )}>
                  {link.icon}
                </span>
                {link.name}
              </span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
