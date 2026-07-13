import { motion, useReducedMotion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, Code2 } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { useEffect, useState } from 'react';

import avatarSrc from '../image.png';

const AVATAR_ALT = 'Portrait photo of Mensah Anni';

export function Hero() {
  const [text, setText] = useState('');
  const fullText = 'Mensah Anni';
  const reduced = useReducedMotion();

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: reduced ? 0 : 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const socialIconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.7 + i * 0.1,
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96] as const,
      },
    }),
    hover: {
      y: -5,
      scale: 1.1,
      transition: { duration: 0.2 },
    },
  };

  return (
    <section aria-label="Intro / Hero" className="hero" id="hero">
      <div aria-hidden className="hero-radial" />

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

      <motion.div
        aria-hidden
        className="accent-orb accent-cyan"
        animate={{ x: [0, 40, 0], y: [0, -60, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
      />
      <motion.div
        aria-hidden
        className="accent-orb accent-fuchsia"
        animate={{ x: [0, -50, 0], y: [0, 70, 0] }}
        transition={{ duration: 22, repeat: Infinity }}
      />

      <div className="container">
        <div className="hero-row">
          <motion.div
            className="hero-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <Badge className="hero-badge">
                <Code2 className="size-4" />
                Full Stack Developer
              </Badge>
            </motion.div>

            <motion.h1 className="hero-title" variants={itemVariants}>
              {text}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="cursor"
              >
                |
              </motion.span>
            </motion.h1>

            <motion.p className="hero-subtitle" variants={itemVariants}>
              Building Exceptional Digital Experiences
            </motion.p>

            <motion.p className="hero-lead" variants={itemVariants}>
              I create clean, performant, and user-friendly web applications
              using modern technologies.
            </motion.p>

            <motion.div className="hero-ctas" variants={itemVariants}>
              <Button
                size="lg"
                className="btn btn-primary"
                onClick={() =>
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                View My Work
              </Button>
            </motion.div>

            <motion.nav
              aria-label="Social links"
              variants={itemVariants}
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
              </SocialLink>
            </motion.nav>
          </motion.div>

          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="hero-right"
          >
            <div className="avatar-ring">
              <Avatar className="avatar">
                <AvatarImage
                  src={avatarSrc}
                  alt={AVATAR_ALT}
                  className="avatar-img"
                />
                <AvatarFallback className="avatar-emoji">MA</AvatarFallback>
              </Avatar>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="cta-row-sm"
        >
          <Button
            className="btn btn-primary"
            size="lg"
            onClick={() =>
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="btn btn-outline"
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Contact Me
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="social-row-lg"
          aria-hidden
        >
          {[
            { href: 'https://github.com/McAnnison', icon: Github, label: 'GitHub' },
            { href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' },
            { href: 'mailto:mensahanni98@gmail.com', icon: Mail, label: 'Email' },
          ].map((social, i) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.label !== 'Email' ? '_blank' : undefined}
              rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
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

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        whileHover={{ scale: 1.15 }}
        onClick={() =>
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
        }
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
