import React from 'react';
import Button from './Button';

const Hero = () => {
  return (
    <section id="profile" className="flex flex-wrap items-center justify-center px-8 py-16 bg-white">
      <div className="w-64 h-64 mb-8 md:mb-0 md:mr-8">
        <img 
          src="/Profile.pic1.png" 
          alt="Mensah Anni profile" 
          className="w-full h-full object-cover rounded-full animate-pulse"
        />
      </div>
      
      <div className="max-w-lg text-center md:text-left">
        <p className="text-lg mb-2">Hello, I'm</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Mensah Anni</h1>
        <p className="text-xl text-gray-600 mb-6">Fullstack Developer</p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Button 
            as="a" 
            href="./assets/resume-example.pdf" 
            target="_blank"
            variant="primary"
          >
            Download CV
          </Button>
          <Button 
            as="a" 
            href="#contact"
            variant="secondary"
          >
            Contact Info
          </Button>
        </div>
        
        <div className="flex justify-center md:justify-start gap-4">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img 
              src="/linkedin.png" 
              alt="LinkedIn" 
              className="w-10 h-10 hover:scale-110 transition-transform duration-300"
            />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <img 
              src="/github.png" 
              alt="GitHub" 
              className="w-10 h-10 hover:scale-110 transition-transform duration-300"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;