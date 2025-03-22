
import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github size={18} />, href: 'https://github.com', label: 'GitHub' },
    { icon: <Linkedin size={18} />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <Twitter size={18} />, href: 'https://twitter.com', label: 'Twitter' },
    { icon: <Mail size={18} />, href: 'mailto:contact@example.com', label: 'Email' }
  ];

  const scrollToSection = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-card border-t border-border/50 py-12 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <h3 className="text-xl font-display font-medium">SavvyLegend</h3>
            <p className="text-muted-foreground text-sm max-w-xs">
              Crafting digital experiences with precision and passion.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">Navigation</h4>
            <div className="flex flex-col space-y-2">
              <a href="#home" onClick={(e) => scrollToSection('home', e)} className="text-sm text-muted-foreground hover:text-foreground transition">Home</a>
              <a href="#about" onClick={(e) => scrollToSection('about', e)} className="text-sm text-muted-foreground hover:text-foreground transition">About</a>
              <a href="#projects" onClick={(e) => scrollToSection('projects', e)} className="text-sm text-muted-foreground hover:text-foreground transition">Projects</a>
              <a href="#contact" onClick={(e) => scrollToSection('contact', e)} className="text-sm text-muted-foreground hover:text-foreground transition">Contact</a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-secondary/80 transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-border/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              &copy; {currentYear} SavvyLegend. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="/privacy" className="hover:text-foreground transition">Privacy</a>
              <a href="/terms" className="hover:text-foreground transition">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
