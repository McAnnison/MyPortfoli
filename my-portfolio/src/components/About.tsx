import { motion } from 'framer-motion';
import { Code2, Database, Globe, Zap } from 'lucide-react';
import { Card } from '../components/ui/card';
import { SectionReveal } from './section-reveal';

const features = [
  {
    icon: Code2,
    title: 'Frontend systems',
    description: 'Modern React, TypeScript, and design-system thinking for polished, performant product surfaces.',
  },
  {
    icon: Database,
    title: 'Infrastructure',
    description: 'Linux, CI/CD, deployment automation, and resilient operational workflows for production-grade systems.',
  },
  {
    icon: Globe,
    title: 'Product delivery',
    description: 'From idea to go-live, I connect product strategy, engineering execution, and user clarity.',
  },
  {
    icon: Zap,
    title: 'System performance',
    description: 'Focused on fast interfaces, reliable architecture, and thoughtful product choices that scale.',
  },
];

export function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <SectionReveal className="section-header center-header">
          <p className="eyebrow">About</p>
          <motion.h2 className="section-title" initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            Thoughtful engineering with a strong product lens.
          </motion.h2>
          <motion.p className="section-copy" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}>
            I work at the intersection of software engineering, product thinking, and interface design—turning technical complexity into clean, valuable experiences.
          </motion.p>
        </SectionReveal>

        <div className="features-grid" role="list">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              role="listitem"
            >
              <Card className="feature-card">
                <div className="feature-icon">
                  <feature.icon className="feature-icon-svg" />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
