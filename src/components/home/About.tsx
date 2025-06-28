import React from 'react';
import { Code2, Lightbulb, Database, Server, GitBranch } from 'lucide-react';
import BlurryDivider from '../ui/BlurryDivider';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

const About: React.FC = () => {
  const skills = [
    'Python', 'Flask', 'SQL', 'APIs', 'Selenium', 
    'Cloud Basics', 'DevOps (Learning)', 'ML (Learning)', 'AI (Learning)'
  ];
  
  const keyPoints = [
    {
      icon: <Code2 size={24} />,
      title: 'Exploring AI & LLMs',
      description: 'Learning how to build intelligent applications.'
    },
    {
      icon: <Server size={24} />,
      title: 'Working with APIs & Backend Systems',
      description: 'Building scalable and secure solutions.'
    },
    {
      icon: <Database size={24} />,
      title: 'Google Cloud Arcade Facilitator',
      description: 'Expanding my knowledge in cloud computing.'
    },
    {
      icon: <GitBranch size={24} />,
      title: 'Postman Student Expert',
      description: 'Learning API design, testing, and automation.'
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
            Aspiring AI & Backend Developer
          </h3>
          <p className="text-muted-foreground">
            I am a Python developer currently learning Machine Learning, AI, Cloud, and DevOps. 
            I focus on backend development, automation, and API integrations.
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
                Key Areas
              </h4>
            </div>
            <div className="space-y-4 text-muted-foreground">
              {keyPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 flex-shrink-0 text-primary mt-1">
                    {point.icon}
                  </div>
                  <div>
                    <h5 className="font-medium text-foreground">{point.title}</h5>
                    <p className="text-sm text-muted-foreground">{point.description}</p>
                  </div>
                </div>
              ))}
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
          <h4 className="text-xl font-display font-semibold mb-6 tracking-tight">
            My Journey
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-muted-foreground">
              <p className="mb-4">
                I started with Python and backend development, gradually expanding into automation, cloud computing, and AI.
              </p>
              <p>
                At Google Cloud Arcade, I'm learning cloud fundamentals. I also contribute to open-source projects and continuously 
                work on real-world applications to improve my skills.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-card border border-border/50 rounded-lg p-4 hover:shadow-glow transition-shadow">
                <h5 className="text-lg font-medium mb-2">✅ Python Development</h5>
                <p className="text-sm text-muted-foreground">Writing clean and efficient code for applications.</p>
              </div>
              <div className="bg-card border border-border/50 rounded-lg p-4 hover:shadow-glow transition-shadow">
                <h5 className="text-lg font-medium mb-2">✅ Flask & API Development</h5>
                <p className="text-sm text-muted-foreground">Building RESTful APIs and backend services.</p>
              </div>
              <div className="bg-card border border-border/50 rounded-lg p-4 hover:shadow-glow transition-shadow">
                <h5 className="text-lg font-medium mb-2">✅ Database Management</h5>
                <p className="text-sm text-muted-foreground">Working with MySQL and SQL-based databases.</p>
              </div>
              <div className="bg-card border border-border/50 rounded-lg p-4 hover:shadow-glow transition-shadow">
                <h5 className="text-lg font-medium mb-2">✅ AI & ML (Learning)</h5>
                <p className="text-sm text-muted-foreground">Exploring machine learning and AI tools.</p>
              </div>
              <div className="bg-card border border-border/50 rounded-lg p-4 hover:shadow-glow transition-shadow">
                <h5 className="text-lg font-medium mb-2">✅ Cloud & DevOps (Learning)</h5>
                <p className="text-sm text-muted-foreground">Understanding cloud platforms and deployment.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
