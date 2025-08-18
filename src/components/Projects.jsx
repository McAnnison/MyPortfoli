import React from 'react';
import Card from './Card';
import CardContent from './CardContent';
import Button from './Button';

const Projects = () => {
  const projects = [
    {
      title: "ChatConnect",
      description: "A real-time chat app using Socket.io and Node.js.",
      link: "#"
    },
    {
      title: "TaskTracker",
      description: "A task management React app with drag-and-drop.",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="px-8 py-16">
      <header className="text-center mb-12">
        <p className="text-blue-600 font-bold mb-2">What I've Built</p>
        <h2 className="text-3xl font-bold">Projects</h2>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <Card 
            key={index} 
            className="hover:-translate-y-2 transition-transform duration-300"
          >
            <CardContent>
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <Button 
                as="a" 
                href={project.link}
                variant="small"
                size="sm"
              >
                View Code
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;