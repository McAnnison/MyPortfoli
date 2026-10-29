import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { useState } from 'react';

interface Project {
  title: string;
  type: string;
  year: string;
  summary: string;
  tags: string[];
  github: string;
  demo: string;
}

const projects: Project[] = [
  {
    title: 'Observability Platform',
    type: 'Platform design',
    year: '2024',
    summary: 'Designed a visual layer for deployment health, release insights, and service reliability across internal platforms.',
    tags: ['Next.js', 'Prisma', 'Kubernetes', 'Monitoring'],
    github: 'https://github.com/McAnnison',
    demo: '#',
  },
  {
    title: 'Artisan Finder',
    type: 'Product experience',
    year: '2023',
    summary: 'Built a marketplace and local discovery platform connecting skilled service providers with customers in need of trusted tradespeople.',
    tags: ['React Native', 'Expo', 'Node', 'PostgreSQL'],
    github: 'https://github.com/McAnnison/WorkManGH',
    demo: '#',
  },
  {
    title: 'Cost Calculator',
    type: 'Workflow tooling',
    year: '2022',
    summary: 'Created a pricing and operations dashboard that simplifies quote generation, cost analysis, and service planning.',
    tags: ['TypeScript', 'Next.js', 'Node', 'UI systems'],
    github: 'https://github.com/McAnnison/cost-check',
    demo: '#',
  },
  {
    title: 'Big Dot',
    type: 'Landing experience',
    year: '2021',
    summary: 'Crafted a responsive, conversion-focused landing page with clean hierarchy and editorial polish for digital marketing.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    github: 'https://github.com/McAnnison/revolve-web',
    demo: '#',
  },
];

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="section-header align-left">
          <p className="eyebrow">Selected work</p>
          <h2 className="section-title">Systems thinking, product clarity, and build velocity.</h2>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className={`project-card ${index % 2 === 1 ? 'offset-card' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <div className="project-topline">
                <span>{project.type}</span>
                <span>{project.year}</span>
              </div>

              <h3>{project.title}</h3>
              <p>{project.summary}</p>

              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>

              <div className="project-actions">
                <a href={project.github} target="_blank" rel="noreferrer" className="inline-link subtle-link">
                  <Github size={15} />
                  Repo
                </a>
                <button type="button" className="inline-link subtle-link" onClick={() => setSelected(project)}>
                  <Eye size={15} />
                  Details
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {selected && (
        <div className="modal-backdrop" onClick={() => setSelected(null)}>
          <div className="project-modal" onClick={(event) => event.stopPropagation()}>
            <div className="modal-header">
              <div>
                <p className="mini-label">{selected.type}</p>
                <h3>{selected.title}</h3>
              </div>
              <button type="button" className="close-button" onClick={() => setSelected(null)} aria-label="Close details">
                ×
              </button>
            </div>
            <p>{selected.summary}</p>
            <div className="tag-row">
              {selected.tags.map((tag) => (
                <span key={tag} className="project-tag">{tag}</span>
              ))}
            </div>
            <div className="project-actions">
              <a href={selected.github} target="_blank" rel="noreferrer" className="primary-btn small-btn">
                <Github size={14} />
                View code
              </a>
              <a href={selected.demo} target="_blank" rel="noreferrer" className="secondary-btn small-btn">
                <ExternalLink size={14} />
                Live demo
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
