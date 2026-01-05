import { motion } from 'framer-motion';
import { Badge } from './ui/badge';

const skillCategories = [
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'HTML/CSS'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'Python', 'Django', 'REST APIs', 'GraphQL'],
  },
  {
    category: 'Database',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Prisma', 'Supabase'],
  },
  {
    category: 'Tools & Others',
    skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Jest', 'Figma'],
  },
];

export function Skills() {
  const categoryVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96] as const
      }
    })
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.4,
        ease: [0.43, 0.13, 0.23, 0.96] as const
      }
    }),
    hover: {
      scale: 1.1,
      y: -5,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section className="py-20 bg-slate-950" id="skills">
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
            Skills & Technologies
          </motion.h2>
          <motion.p 
            className="text-slate-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A comprehensive toolkit for building modern web applications
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              custom={categoryIndex}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={categoryVariants}
            >
              <motion.h3 
                className="text-white mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.15 + 0.1 }}
              >
                {category.category}
              </motion.h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    custom={skillIndex}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={skillVariants}
                  >
                    <Badge
                      variant="secondary"
                      className="bg-slate-800 text-slate-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white border border-slate-700 hover:border-transparent transition-all duration-300 cursor-pointer"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
