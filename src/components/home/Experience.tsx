import React from 'react';
import { Briefcase, Award, Calendar } from 'lucide-react';
import BlurryDivider from '../ui/BlurryDivider';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Google Cloud Arcade Facilitator',
      company: 'Google Cloud',
      period: '2023 - Present',
      description: [
        'Learning cloud fundamentals and platform services.',
        'Helping others understand cloud technologies.',
        'Exploring deployment, scaling, and cloud architecture.'
      ],
      icon: <Briefcase size={20} />
    },
    {
      title: 'Postman Student Expert',
      company: 'Postman',
      period: '2023 - Present',
      description: [
        'Certified in API design, testing, and automation.',
        'Developing API integrations and documentation.',
        'Learning API-first development approaches.'
      ],
      icon: <Award size={20} />
    }
  ];
  
  const certifications = [
    {
      title: 'Python Development',
      issuer: 'Self-Paced Learning',
      date: '2022-Present',
      description: 'Core Python, Flask, automation'
    },
    {
      title: 'Prompt Engineering',
      issuer: 'DeepLearning.AI',
      date: '2023',
      description: 'Advanced techniques for LLM interaction'
    },
    {
      title: 'Google Cloud Basics',
      issuer: 'Google',
      date: '2023',
      description: 'Cloud computing fundamentals'
    },
    {
      title: 'Postman Student Expert Certification',
      issuer: 'Postman',
      date: '2023',
      description: 'API development & testing'
    },
    {
      title: 'Introduction to Large Language Models',
      issuer: 'Google',
      date: '2023',
      description: 'LLM fundamentals'
    },
    {
      title: 'Problem Solving (Basic)',
      issuer: 'HackerRank',
      date: '2022',
      description: 'Algorithmic problem solving'
    }
  ];
  
  return (
    <section id="experience" className="py-24 px-6 lg:px-10 subtle-grid noise-texture">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-3 font-display">
            Journey
          </h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold mb-6 tracking-tight">
            My Learning Path
          </h3>
          <p className="text-muted-foreground">
            A timeline of my professional experiences and learning journey in technology, showcasing the skills
            and knowledge I've acquired along the way.
          </p>
        </div>
        
        <div className="mb-16">
          <div className="relative border-l border-border pl-8 ml-4 space-y-12">
            {experiences.map((experience, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[41px] bg-card p-2 rounded-full border border-border shadow-glow animate-pulse-glow">
                  {experience.icon}
                </div>
                <div className="bg-card border border-border/50 rounded-lg p-6 hover:shadow-glow transition-shadow">
                  <div className="flex justify-between items-start flex-wrap gap-2 mb-3">
                    <div>
                      <h4 className="text-xl font-display font-semibold tracking-tight">{experience.title}</h4>
                      <p className="text-primary/80">{experience.company}</p>
                    </div>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar size={14} className="mr-1" />
                      {experience.period}
                    </div>
                  </div>
                  <ul className="space-y-1 text-muted-foreground">
                    {experience.description.map((item, i) => (
                      <li key={i} className="list-disc list-inside text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <BlurryDivider className="my-16" />
        
        <div>
          <h4 className="text-xl font-display font-semibold mb-10 text-center tracking-tight">
            Certifications & Learning
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="bg-card border border-border/50 rounded-lg p-5 hover:shadow-glow transition-shadow"
              >
                <div className="flex justify-between items-start mb-3">
                  <h5 className="text-lg font-display font-semibold tracking-tight">
                    {cert.title}
                  </h5>
                  <span className="text-xs bg-secondary py-1 px-2 rounded text-muted-foreground">
                    {cert.date}
                  </span>
                </div>
                <p className="text-primary/80 text-sm mb-2">{cert.issuer}</p>
                <p className="text-muted-foreground text-sm">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
