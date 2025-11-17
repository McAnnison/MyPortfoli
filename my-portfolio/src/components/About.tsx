import { motion } from 'framer-motion';
import { Code2, Database, Globe, Zap } from 'lucide-react';
import { Card } from '../components/ui/card';

const features = [
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'Expert in React, Next.js, and modern CSS frameworks for creating responsive interfaces.',
  },
  {
    icon: Database,
    title: 'Backend Development',
    description: 'Proficient in Node.js, Express, and database management with SQL and NoSQL.',
  },
  {
    icon: Globe,
    title: 'Full Stack Solutions',
    description: 'End-to-end application development with seamless frontend-backend integration.',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Focused on building fast, scalable applications with best practices.',
  },
];

export function About() {
  return (
    <section className="py-20 bg-slate-900" id="about">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4">About Me</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            I'm a passionate full stack developer with 5+ years of experience building
            web applications. I love turning complex problems into simple, beautiful,
            and intuitive solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-slate-800/50 border-slate-700 p-6 hover:bg-slate-800 transition-colors h-full">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
