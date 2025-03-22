
import React from 'react';
import { Code2, Lightbulb, Database, Server, GitBranch } from 'lucide-react';
import BlurryDivider from '../ui/BlurryDivider';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

const About: React.FC = () => {
  const skills = [
    'Generative AI', 'LLMs', 'Selenium', 'CLI', 'API Development', 
    'Flask', 'Next.js', 'Tailwind CSS', 'SQL', 'Cloud Computing'
  ];
  
  const services = [
    {
      icon: <Code2 size={24} />,
      title: 'AI Development',
      description: 'Building intelligent solutions with LLMs and Generative AI technologies.'
    },
    {
      icon: <Server size={24} />,
      title: 'Backend Development',
      description: 'Creating robust backend systems with focus on scalability and performance.'
    },
    {
      icon: <GitBranch size={24} />,
      title: 'Open Source',
      description: 'Contributing to open source projects with over 67+ repositories on GitHub.'
    }
  ];
  
  return (
    <section id="about" className="py-24 px-6 lg:px-10 bg-card/50 subtle-grid noise-texture">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-3 font-display">
            About me
          </h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold mb-6 tracking-tight">
            Passionate AI & Software Developer
          </h3>
          <p className="text-muted-foreground">
            I'm a passionate AI and software developer with experience in Generative AI, LLMs, and backend development.
            Startup School Fellow at Y Combinator and open-source contributor with 67+ repositories on GitHub.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <Avatar className="w-16 h-16 border-2 border-primary/20 shadow-glow animate-pulse-glow">
                <AvatarImage src="https://avatars.githubusercontent.com/u/92103632" alt="Mehfooj Alam" />
                <AvatarFallback>MA</AvatarFallback>
              </Avatar>
              <h4 className="text-xl font-display font-semibold tracking-tight">
                My Journey
              </h4>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                As a GenAI Developer and Open Source Enthusiast, I've been exploring the frontiers of artificial intelligence
                and its applications. My journey in tech has been driven by a passion for building solutions that make a difference.
              </p>
              <p>
                At Y Combinator's Startup School, I learned lean methodologies, customer acquisition, and startup growth,
                building valuable connections in the startup ecosystem.
              </p>
              <p>
                As a Postman Student Expert, I'm certified in API design, testing, and automation, and have developed
                AI-powered API integrations.
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-display font-semibold mb-6 tracking-tight">
              Skills & Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="bg-secondary border border-border/50 px-3 py-1 rounded-full text-sm hover:bg-primary/10 hover:border-primary/30 cursor-default transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
            
            <div className="mt-8">
              <h4 className="text-xl font-display font-semibold mb-4 tracking-tight">
                Education
              </h4>
              <div className="bg-card border border-border/50 rounded-lg p-4 hover:shadow-glow transition-shadow">
                <h5 className="font-medium">Maharshi Dayanand University</h5>
                <p className="text-sm text-muted-foreground">Bachelor of Technology (BTech) in Computer Science</p>
                <p className="text-xs text-muted-foreground mt-1">July 2023 - July 2027</p>
              </div>
            </div>
          </div>
        </div>
        
        <BlurryDivider className="my-16" />
        
        <div>
          <h4 className="text-xl font-display font-semibold mb-10 text-center tracking-tight">
            What I Do
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-card border border-border/50 rounded-lg p-6 hover:shadow-glow transition-shadow group"
              >
                <div className="w-12 h-12 bg-secondary rounded-md flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  {service.icon}
                </div>
                <h5 className="text-lg font-display font-semibold mb-2 tracking-tight">
                  {service.title}
                </h5>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
