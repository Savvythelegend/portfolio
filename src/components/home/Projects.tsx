
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';

type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  github?: string;
  liveUrl?: string;
  featured: boolean;
};

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'featured' | 'ai' | 'web'>('all');
  
  const projects: Project[] = [
    {
      id: 'ai-text-summarizer',
      title: 'AI Text Summarizer App',
      description: 'NLP-powered AI summarization tool that condenses long articles and documents into concise summaries.',
      tags: ['AI', 'NLP', 'Python', 'Flask'],
      image: 'https://images.unsplash.com/photo-1655720828018-edd2daec9349?auto=format&fit=crop&w=1000&q=80',
      github: 'https://github.com/Savvythelegend',
      featured: true
    },
    {
      id: 'monkeytype-bot',
      title: 'MonkeyType Bot',
      description: 'Selenium-based bot automation that demonstrates web automation capabilities for typing tests.',
      tags: ['Selenium', 'Python', 'Automation'],
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1000&q=80',
      github: 'https://github.com/Savvythelegend',
      featured: true
    },
    {
      id: 'fcc-data-analysis',
      title: 'FCC Advanced Data Analysis',
      description: 'Python-based data analysis project using scientific libraries to extract meaningful insights from datasets.',
      tags: ['Python', 'Data Analysis', 'Pandas', 'Matplotlib'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
      github: 'https://github.com/Savvythelegend',
      featured: false
    },
    {
      id: 'weather-forecast',
      title: 'Weather Forecast App',
      description: 'Web app integrating OpenWeatherMap API to provide real-time weather information and forecasts.',
      tags: ['JavaScript', 'API', 'Web Development'],
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=1000&q=80',
      github: 'https://github.com/Savvythelegend',
      liveUrl: 'https://savvylegend.tech',
      featured: false
    },
    {
      id: 'jovian-job-app',
      title: 'Jovian Job App',
      description: 'Job finder application built with Flask & Jinja templates to help users discover and apply for opportunities.',
      tags: ['Flask', 'Python', 'Jinja', 'Web'],
      image: 'https://images.unsplash.com/photo-1598257006458-087169a1f08d?auto=format&fit=crop&w=1000&q=80',
      github: 'https://github.com/Savvythelegend',
      featured: true
    },
    {
      id: 'ai-agent',
      title: 'AI Agent',
      description: 'Ongoing development of a personal AI assistant capable of handling various tasks through natural language processing.',
      tags: ['AI', 'LLM', 'Python', 'NLP'],
      image: 'https://images.unsplash.com/photo-1677442135133-4da240386b64?auto=format&fit=crop&w=1000&q=80',
      github: 'https://github.com/Savvythelegend',
      featured: true
    }
  ];
  
  const getFilteredProjects = () => {
    switch(filter) {
      case 'featured':
        return projects.filter(project => project.featured);
      case 'ai':
        return projects.filter(project => project.tags.includes('AI') || project.tags.includes('NLP'));
      case 'web':
        return projects.filter(project => project.tags.includes('Web') || project.tags.includes('Web Development'));
      default:
        return projects;
    }
  };
  
  const filteredProjects = getFilteredProjects();
  
  return (
    <section id="projects" className="py-20 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-3">
            Projects
          </h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">
            My Latest Work
          </h3>
          <p className="text-muted-foreground">
            Here's a collection of my recent projects that showcase my skills in AI, web development, and more.
            Each project represents a unique problem solved with creativity and technical expertise.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-8">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'all' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-secondary text-muted-foreground hover:text-foreground'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('featured')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'featured' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-secondary text-muted-foreground hover:text-foreground'
              }`}
            >
              Featured
            </button>
            <button
              onClick={() => setFilter('ai')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'ai' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-secondary text-muted-foreground hover:text-foreground'
              }`}
            >
              AI Projects
            </button>
            <button
              onClick={() => setFilter('web')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'web' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-secondary text-muted-foreground hover:text-foreground'
              }`}
            >
              Web Development
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group bg-card border border-border/50 rounded-lg overflow-hidden hover:shadow-soft transition-all"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-start p-6">
                  <div className="flex gap-4">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-background transition-colors"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-background transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <Link to={`/projects/${project.id}`}>
                  <h4 className="text-xl font-display font-semibold mb-2 hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                </Link>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-secondary px-2 py-1 rounded-md text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Interested in seeing more of my work?
          </p>
          <a 
            href="https://github.com/Savvythelegend" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-medium link-hover"
          >
            View more on GitHub <Github size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
