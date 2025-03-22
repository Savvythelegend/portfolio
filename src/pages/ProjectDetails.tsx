
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BlurryDivider from '@/components/ui/BlurryDivider';

type ProjectDetails = {
  id: string;
  title: string;
  description: string;
  challenge: string;
  solution: string;
  result: string;
  tags: string[];
  image: string;
  gallery?: string[];
  technologies: string[];
  github?: string;
  liveUrl?: string;
};

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Sample project data (in a real app, this would come from an API)
  const projectsData: Record<string, ProjectDetails> = {
    'project-1': {
      id: 'project-1',
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment processing.',
      challenge: 'The client needed a scalable e-commerce solution that could handle thousands of products while providing a seamless user experience. They also required complex filtering, search functionality, and secure payment processing.',
      solution: 'I designed and built a full-stack application using React for the frontend, Node.js for the backend, and MongoDB for the database. The application was structured with a microservices architecture to ensure scalability and maintainability.',
      result: 'The platform has successfully processed over 10,000 orders since launch, with a 35% increase in conversion rate compared to the client\'s previous solution. User engagement metrics have improved significantly, with average session duration increasing by 42%.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1557821580-14c9a83bb04c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
      ],
      technologies: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'AWS S3', 'Stripe API', 'JWT', 'Tailwind CSS'],
      github: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    'project-2': {
      id: 'project-2',
      title: 'Portfolio Website',
      description: 'A sleek portfolio website showcasing my work and skills. Built with React, TypeScript, and TailwindCSS.',
      challenge: 'I needed a personal portfolio that would stand out in a crowded field, effectively showcase my work, and reflect my design sensibilities while maintaining excellent performance.',
      solution: 'I created a minimalist yet engaging website using React and TypeScript, with Tailwind CSS for styling. The site features smooth animations, responsive design, and optimized performance.',
      result: 'The portfolio has received positive feedback from clients and recruiters, resulting in new project opportunities and collaborations. It achieves a perfect 100/100 score on Google PageSpeed Insights.',
      tags: ['React', 'TypeScript', 'TailwindCSS'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
      ],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite', 'Netlify'],
      github: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    'project-3': {
      id: 'project-3',
      title: 'Task Management App',
      description: 'A productivity app to help users manage their tasks and projects. Features include task creation, scheduling, reminders, and analytics.',
      challenge: 'The challenge was to create an intuitive task management solution that would help users increase productivity without adding complexity to their workflow.',
      solution: 'I built a React application with Redux for state management and Firebase for backend services. The UI was designed with a focus on simplicity and ease of use, with drag-and-drop functionality and keyboard shortcuts.',
      result: 'The app has been adopted by several teams and individual users, with feedback highlighting its intuitive interface and helpful features. Users report an average 20% increase in task completion rates.',
      tags: ['React', 'Redux', 'Firebase'],
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
      ],
      technologies: ['React', 'Redux', 'Firebase', 'Material-UI', 'Chart.js', 'PWA'],
      github: 'https://github.com'
    },
    'project-4': {
      id: 'project-4',
      title: 'Weather Dashboard',
      description: 'A weather dashboard displaying current conditions and forecasts for any location. Integrates with multiple weather APIs.',
      challenge: 'The challenge was to create a reliable weather application that provided accurate data while maintaining a clean and intuitive interface.',
      solution: 'I built a vanilla JavaScript application that integrates with multiple weather APIs for redundancy and accuracy. The UI was designed to present complex weather data in an easily digestible format.',
      result: 'The dashboard is used daily by hundreds of users who appreciate its accuracy and clean design. It has a 4.8/5 rating from users and has been featured in several web development showcases.',
      tags: ['JavaScript', 'CSS', 'Weather API'],
      image: 'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
      ],
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'OpenWeather API', 'WeatherAPI', 'LocalStorage'],
      liveUrl: 'https://example.com'
    }
  };
  
  const project = id ? projectsData[id] : null;
  
  if (!project) {
    // If project not found, redirect to projects section
    useEffect(() => {
      navigate('/#projects');
    }, [navigate]);
    return null;
  }
  
  return (
    <>
      <Navbar />
      
      <main className="pt-24 pb-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <Link 
              to="/#projects" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft size={16} />
              Back to projects
            </Link>
            
            <h1 className="text-3xl md:text-5xl font-display font-bold mb-4">
              {project.title}
            </h1>
            
            <p className="text-muted-foreground max-w-3xl">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="bg-secondary px-3 py-1 rounded-full text-sm text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex gap-4 mt-8">
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-md hover:bg-secondary transition-colors"
                >
                  <Github size={16} />
                  View Code
                </a>
              )}
              
              {project.liveUrl && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}
            </div>
          </div>
          
          <div className="mt-12">
            {project.gallery && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.gallery.map((image, index) => (
                  <div 
                    key={index} 
                    className={`rounded-lg overflow-hidden ${index === 0 && project.gallery!.length > 1 ? 'md:col-span-2' : ''}`}
                  >
                    <img 
                      src={image} 
                      alt={`${project.title} - screenshot ${index + 1}`}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                ))}
              </div>
            )}
            
            <BlurryDivider className="my-16" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-display font-semibold mb-8">
                  Project Overview
                </h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">The Challenge</h3>
                    <p className="text-muted-foreground">{project.challenge}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3">The Solution</h3>
                    <p className="text-muted-foreground">{project.solution}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3">The Result</h3>
                    <p className="text-muted-foreground">{project.result}</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-6">Technologies Used</h3>
                <ul className="space-y-2">
                  {project.technologies.map((tech, index) => (
                    <li 
                      key={index}
                      className="flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-muted-foreground">{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <BlurryDivider className="my-16" />
          
          <div className="text-center">
            <h3 className="text-xl font-display font-semibold mb-4">
              Ready to collaborate?
            </h3>
            <p className="text-muted-foreground mb-8">
              Let's work together to bring your ideas to life.
            </p>
            <Link 
              to="/#contact" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default ProjectDetails;
