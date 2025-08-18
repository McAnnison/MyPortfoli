import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer @ TechCorp",
      period: "Jan 2024 – Present",
      achievements: [
        "Built responsive components with React & Tailwind.",
        "Collaborated on Agile teams to deliver features biweekly."
      ]
    },
    {
      title: "Web Intern @ DevHouse",
      period: "Jun 2023 – Dec 2023",
      achievements: [
        "Implemented landing pages in HTML/CSS/JS.",
        "Optimized site load times by 30%."
      ]
    }
  ];

  return (
    <section id="experience" className="px-8 py-16">
      <header className="text-center mb-12">
        <p className="text-blue-600 font-bold mb-2">Work & Internships</p>
        <h2 className="text-3xl font-bold">Experience</h2>
      </header>
      
      <div className="max-w-4xl mx-auto">
        <div className="relative pl-8 border-l-4 border-blue-600">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8 relative">
              <div className="absolute -left-10 top-2 w-4 h-4 bg-blue-600 rounded-full"></div>
              <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
              <span className="text-gray-600 text-sm mb-3 block">{exp.period}</span>
              <ul className="list-disc list-inside space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="text-gray-700">{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;