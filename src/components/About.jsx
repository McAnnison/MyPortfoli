import React from 'react';
import Card from './Card';
import CardContent from './CardContent';

const About = () => {
  return (
    <section id="about" className="px-8 py-16">
      <header className="text-center mb-12">
        <p className="text-blue-600 font-bold mb-2">Get to know me</p>
        <h2 className="text-3xl font-bold">About Me</h2>
      </header>
      
      <div className="flex flex-wrap items-center gap-8 max-w-6xl mx-auto">
        <img 
          src="/Profile.pic2.png" 
          alt="Mensah portrait" 
          className="w-64 rounded-lg mx-auto"
        />
        
        <div className="flex-1 min-w-80">
          <div className="flex flex-col sm:flex-row gap-6 mb-6">
            <Card className="flex-1 text-center">
              <CardContent>
                <img src="/experience.png" alt="" className="w-10 h-10 mx-auto mb-2" />
                <h3 className="font-bold mb-1">Experience</h3>
                <p className="text-gray-600">1 year Frontend Dev</p>
              </CardContent>
            </Card>
            
            <Card className="flex-1 text-center">
              <CardContent>
                <img src="/education.png" alt="" className="w-10 h-10 mx-auto mb-2" />
                <h3 className="font-bold mb-1">Education</h3>
                <p className="text-gray-600">BSc Information Technology</p>
              </CardContent>
            </Card>
          </div>
          
          <p className="text-gray-700 leading-relaxed">
            I'm fluent in Python, JavaScript, and C++. I enjoy building engaging UI/UX and solving complex problems. 
            I've worked on web apps, APIs, and real-time integration with exciting features…
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;