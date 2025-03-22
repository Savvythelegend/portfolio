
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
  const [filter, setFilter] = useState<'all' | 'featured'>('all');
  
  const projects: Project[] = [
    {
      id: 'project-1',
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment processing.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      github: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: true
    },
    {
      id: 'project-2',
      title: 'Portfolio Website',
      description: 'A sleek portfolio website showcasing my work and skills. Built with React, TypeScript, and TailwindCSS.',
      tags: ['React', 'TypeScript', 'TailwindCSS'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      github: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: true
    },
    {
      id: 'project-3',
      title: 'Task Management App',
      description: 'A productivity app to help users manage their tasks and projects. Features include task creation, scheduling, reminders, and analytics.',
      tags: ['React', 'Redux', 'Firebase'],
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      github: 'https://github.com',
      featured: false
    },
    {
      id: 'project-4',
      title: 'Weather Dashboard',
      description: 'A weather dashboard displaying current conditions and forecasts for any location. Integrates with multiple weather APIs.',
      tags: ['JavaScript', 'CSS', 'Weather API'],
      image: 'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      liveUrl: 'https://example.com',
      featured: false
    }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.featured);
  
  return (
    <section id="projects" className="py-20 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-3">
            Projects
          </h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Selected work I've crafted
          </h3>
          <p className="text-muted-foreground">
            Here's a collection of my recent projects that showcase my skills and expertise in web development.
            Each project represents a unique challenge and solution.
          </p>
          
          <div className="flex gap-4 mt-8">
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
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
            href="https://github.com" 
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
