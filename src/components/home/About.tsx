
import React from 'react';
import { Code2, Lightbulb, Rocket } from 'lucide-react';
import BlurryDivider from '../ui/BlurryDivider';

const About: React.FC = () => {
  const skills = [
    'React', 'TypeScript', 'Node.js', 'Next.js', 'TailwindCSS',
    'MongoDB', 'PostgreSQL', 'GraphQL', 'REST API', 'AWS',
    'Docker', 'Git', 'CI/CD', 'Figma', 'UI/UX Design'
  ];
  
  const services = [
    {
      icon: <Code2 size={24} />,
      title: 'Development',
      description: 'Building robust, scalable web applications with modern technologies and best practices.'
    },
    {
      icon: <Lightbulb size={24} />,
      title: 'Design',
      description: 'Creating beautiful, intuitive interfaces that provide exceptional user experiences.'
    },
    {
      icon: <Rocket size={24} />,
      title: 'Deployment',
      description: 'Setting up efficient CI/CD pipelines and infrastructure for seamless deployment.'
    }
  ];
  
  return (
    <section id="about" className="py-20 px-6 lg:px-10 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-3">
            About me
          </h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Passionate about building exceptional digital experiences
          </h3>
          <p className="text-muted-foreground">
            I'm a full-stack developer with a passion for creating elegant, efficient solutions to complex problems. 
            With a strong foundation in modern web technologies and a keen eye for design, I bring ideas to life with 
            clean code and intuitive interfaces.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h4 className="text-xl font-display font-semibold mb-6">
              My Journey
            </h4>
            <div className="space-y-4 text-muted-foreground">
              <p>
                With over 5 years of experience in web development, I've had the privilege of working on a diverse range 
                of projects, from small business websites to complex enterprise applications.
              </p>
              <p>
                My approach combines technical expertise with a deep understanding of user needs, ensuring that every 
                project I undertake not only functions flawlessly but also provides an exceptional user experience.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                or sharing my knowledge through blog posts and community engagement.
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-display font-semibold mb-6">
              Skills & Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="bg-background border border-border/50 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <BlurryDivider className="my-16" />
        
        <div>
          <h4 className="text-xl font-display font-semibold mb-10 text-center">
            Services I Offer
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-card border border-border/50 rounded-lg p-6 hover:shadow-soft transition-shadow group"
              >
                <div className="w-12 h-12 bg-secondary rounded-md flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  {service.icon}
                </div>
                <h5 className="text-lg font-display font-semibold mb-2">
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
