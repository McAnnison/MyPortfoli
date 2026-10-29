import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Badge } from './ui/badge';
import { Tabs, TabsList, TabsTrigger } from './ui/tabs';
import { SectionReveal } from './section-reveal';

const skillCategories = [
  {
    category: 'Full-stack',
    skills: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Prisma'],
  },
  {
    category: 'DevOps',
    skills: ['Linux', 'CI/CD', 'Docker', 'Vercel', 'Observability'],
  },
  {
    category: 'Systems',
    skills: ['System design', 'Kubernetes', 'Services', 'Automation', 'Security'],
  },
  {
    category: 'Product',
    skills: ['UX strategy', 'Design systems', 'Prototyping', 'Writing', 'Research'],
  },
];

const categories = ['All', ...skillCategories.map((category) => category.category)];

export function Skills() {
  const [activeTab, setActiveTab] = useState('All');
  const reduced = useReducedMotion();

  const filtered = activeTab === 'All' ? skillCategories : skillCategories.filter((category) => category.category === activeTab);

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <SectionReveal className="section-header center-header">
          <p className="eyebrow">Experience & systems architecture</p>
          <motion.h2 className="section-title" initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            Technical depth across product, systems, and delivery.
          </motion.h2>
          <motion.p className="section-copy" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}>
            I build resilient platforms, clean interfaces, and operational workflows that keep teams moving without sacrificing clarity.
          </motion.p>
        </SectionReveal>

        <div className="tab-wrap">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="skills-tabs-list">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category} className="skills-tabs-trigger">
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="skills-grid"
            role="list"
            initial={reduced ? { opacity: 1 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {filtered.map((category) => (
              <motion.div key={category.category} className="skills-category" role="listitem" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
                <h3 className="skills-category-title">{category.category}</h3>
                <div className="skills-badges">
                  {category.skills.map((skill) => (
                    <Badge key={skill} className="skill-badge">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
