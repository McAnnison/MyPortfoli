import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, Download } from 'lucide-react';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';


import avatarSrc from '../image.png';

const AVATAR_ALT = 'Portrait photo of Mensah Anni';
const CV_HREF = '/cv.pdf';
const CV_DOWNLOAD_NAME = 'Mensah-Kwame-Anni-CV.pdf';

export function Hero() {
  const [text, setText] = useState('');
  const fullText = 'Mensah Anni';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, [fullText]);

  const socialIconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.7 + i * 0.1,
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96] as const
      }
    }),
    hover: {
      y: -5,
      scale: 1.1,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section
      aria-label="Intro / Hero"
      className="hero"
    >
      {/* Subtle radial gradient */}
      <div aria-hidden className="hero-radial" />

      {/* Animated background orbs */}
      <div className="hero-orbs" aria-hidden>
        <motion.div
          className="orb orb-blue"
          animate={{ x: [0, 100, 0], y: [0, -100, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{ top: '10%', left: '6%' }}
        />
        <motion.div
          className="orb orb-purple"
          animate={{ x: [0, -100, 0], y: [0, 100, 0], scale: [1, 1.25, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          style={{ bottom: '8%', right: '8%' }}
        />
        <motion.div
          className="orb orb-cyan"
          animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          style={{ top: '50%', left: '50%' }}
        />
      </div>

      {/* Accent orbs */}
      <motion.div aria-hidden className="accent-orb accent-cyan" animate={{ x: [0, 40, 0], y: [0, -60, 0] }} transition={{ duration: 18, repeat: Infinity }} />
      <motion.div aria-hidden className="accent-orb accent-fuchsia" animate={{ x: [0, -50, 0], y: [0, 70, 0] }} transition={{ duration: 22, repeat: Infinity }} />

      <div className="container">
        <div className="hero-row">
          {/* Left: Text content */}
          <div className="hero-left">
            <motion.h1
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="hero-title"
            >
              {text}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="cursor"
              >
                |
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="hero-subtitle"
            >
              Full Stack Developer but still learning...
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="hero-lead"
            >
              Building Exceptional Digital Experiences
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="hero-ctas"
            >
              <Button
                size="lg"
                className="btn btn-primary"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="btn btn-outline"
              >
                <a href={CV_HREF} download={CV_DOWNLOAD_NAME} aria-label="Download CV">
                  <Download />
                  <span>Download CV</span>
                </a>
              </Button>
            </motion.div>

            <motion.nav
              aria-label="Social links"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="social-links"
            >
              <SocialLink href="https://github.com/McAnnison" label="GitHub">
                <Github />
              </SocialLink>
              <SocialLink href="https://linkedin.com" label="LinkedIn">
                <Linkedin />
              </SocialLink>
              <SocialLink href="mailto:mensahanni98@gmail.com" label="Email">
                <Mail />
              </SocialLink>            </motion.nav>
          </div>

          {/* Right: Avatar */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="hero-right"
          >
            <div className="avatar-ring">
              <div className="avatar">
                <img
                  className="avatar-img"
                  src={avatarSrc}
                  alt={AVATAR_ALT}
                  decoding="async"
                  fetchPriority="high"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Compact CTA row for smaller screens */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="cta-row-sm">
          <Button className="btn btn-primary" size="lg" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            View My Work
          </Button>
          <Button variant="outline" size="lg" className="btn btn-outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Contact Me
          </Button>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="social-row-lg" aria-hidden>
            {[ { href: "https://github.com/McAnnison", icon: Github, label: "GitHub" }, { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" }, { href: "mailto:mensahanni98@gmail.com", icon: Mail, label: "Email" } ].map((social, i) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.label !== "Email" ? "_blank" : undefined}
              rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
              className="social-icon"
              custom={i}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              variants={socialIconVariants}
              aria-label={social.label}
            >
              <social.icon />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        whileHover={{ scale: 1.15 }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ArrowDown />
      </motion.div>
    </section>
  );
}

interface SocialLinkProps {
  href: string;
  label: string;
  children: React.ReactNode;
}

function SocialLink({ href, label, children }: SocialLinkProps) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="social-link"
    >
      {children}
    </a>
  );
}