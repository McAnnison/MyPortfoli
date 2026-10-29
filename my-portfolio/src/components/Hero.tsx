import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDownRight, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useEffect, useState } from 'react';

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/McAnnison', icon: Github },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
  { label: 'Email', href: 'mailto:mensahanni98@gmail.com', icon: Mail },
];

export function Hero() {
  const [text, setText] = useState('');
  const fullText = 'Mensah Anni';
  const reduced = useReducedMotion();

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index += 1;
      } else {
        clearInterval(timer);
      }
    }, 90);

    return () => clearInterval(timer);
  }, []);

  const heroMotion = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section className="hero" id="hero">
      <div aria-hidden className="hero-radial" />

      <div className="container hero-shell">
        <motion.div
          className="hero-copy"
          initial={reduced ? false : 'hidden'}
          animate={reduced ? { opacity: 1 } : 'visible'}
          variants={heroMotion}
        >
          <Badge className="status-pill">
            <Sparkles size={14} />
            Available for technical consults / engineering roles
          </Badge>

          <h1 className="hero-headline">
            Building resilient systems, elegant products, and clear technical narratives.
          </h1>

          <p className="hero-desc">
            I design and build product experiences, infrastructure-aware tooling, and developer-facing systems that feel precise, calm, and memorable.
          </p>

          <div className="hero-actions">
            <Button className="primary-btn" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View projects
            </Button>
            <Button variant="outline" className="secondary-btn" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Contact me
            </Button>
          </div>

          <nav className="social-bar" aria-label="Social links">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label !== 'Email' ? '_blank' : undefined}
                  rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
                  aria-label={link.label}
                  className="social-link"
                >
                  <Icon size={16} />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </nav>
        </motion.div>

        <motion.aside
          className="hero-panel"
          initial={reduced ? false : { opacity: 0, scale: 0.9 }}
          animate={reduced ? { opacity: 1 } : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="panel-card">
            <p className="mini-label">Focus</p>
            <div className="stat-stack">
              <div className="stat-item">
                <span>8+</span>
                <p>years building product and platform systems</p>
              </div>
              <div className="stat-item">
                <span>20+</span>
                <p>projects across frontend, tooling, and infrastructure</p>
              </div>
            </div>
            <div className="chip-row">
              {['Linux', 'Kubernetes', 'Next.js', 'Prisma', 'C/Assembly', 'Design systems'].map((tag) => (
                <span key={tag} className="chip">{tag}</span>
              ))}
            </div>
          </div>
        </motion.aside>
      </div>

      <motion.button
        type="button"
        className="scroll-indicator"
        aria-label="Scroll to about section"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ArrowDownRight size={20} />
      </motion.button>
    </section>
  );
}
