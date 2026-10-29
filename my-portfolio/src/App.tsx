import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BackToTop } from './components/back-to-top';
import { Toaster } from './components/ui/sonner';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const writingItems = [
  {
    category: 'Guide',
    title: 'Designing production-ready frontend systems',
    summary:
      'A practical playbook for building resilient UI architectures, deployment flows, and maintainable product surfaces.',
    meta: '8 min read',
  },
  {
    category: 'Insight',
    title: 'Quiet interfaces are often the most effective ones',
    summary:
      'On clarity, restraint, and why premium product experiences are built through careful editorial decisions.',
    meta: '5 min read',
  },
  {
    category: 'Media',
    title: 'Engineering stories, product thinking, and visual systems',
    summary:
      'Short-form writing and process notes covering software reliability, system design, and creative implementation.',
    meta: 'Portfolio notes',
  },
];

function WritingSection() {
  return (
    <section id="writing" className="writing-section">
      <div className="container writing-shell">
        <div className="section-header">
          <p className="eyebrow">Writing & media</p>
          <h2 className="section-title">Notes, essays, and technical stories.</h2>
        </div>

        <div className="writing-grid">
          {writingItems.map((item) => (
            <article key={item.title} className="writing-card">
              <div className="writing-meta-row">
                <span className="writing-tag">{item.category}</span>
                <span className="writing-time">{item.meta}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <a href="#contact" className="inline-link">
                Read more <ArrowUpRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="app-shell"
      initial={shouldReduceMotion ? false : { y: 40, opacity: 0 }}
      animate={shouldReduceMotion ? { opacity: 1 } : { y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <Header />

      <main id="main" className="main-shell">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <WritingSection />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
      <Toaster />
    </motion.div>
  );
}
