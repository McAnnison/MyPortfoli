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
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96] as const
      }
    })
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 15
      }
    },
    hover: {
      rotate: [0, -10, 10, -10, 0],
      scale: 1.1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 bg-slate-900" id="about">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-white mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h2>
          <motion.p 
            className="text-slate-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I'm a passionate full stack developer with 5+ years of experience building
            web applications. I love turning complex problems into simple, beautiful,
            and intuitive solutions.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="bg-slate-800/50 border-slate-700 p-6 hover:bg-slate-800 hover:border-slate-600 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 h-full">
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4"
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                  variants={iconVariants}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </motion.div>
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
