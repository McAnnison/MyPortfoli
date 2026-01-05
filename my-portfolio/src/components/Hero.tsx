import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';

// Accessible alt text for avatar emoji
const AVATAR_LABEL = 'Developer avatar';

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
      className="relative flex items-center justify-center min-h-[92vh] pt-20 pb-24 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800"
    >
      {/* Subtle radial gradient */}
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08),transparent_60%)]" />

      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ x: [0, 100, 0], y: [0, -100, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{ top: '10%', left: '6%' }}
          aria-hidden
        />
        <motion.div
          className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ x: [0, -100, 0], y: [0, 100, 0], scale: [1, 1.25, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          style={{ bottom: '8%', right: '8%' }}
          aria-hidden
        />
        <motion.div
          className="absolute w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          style={{ top: '50%', left: '50%' }}
          aria-hidden
        />
      </div>

      {/* Accent orbs */}
      <motion.div
        aria-hidden
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-cyan-500/15 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, -60, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-32 -right-32 w-[30rem] h-[30rem] rounded-full bg-fuchsia-500/15 blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, 70, 0] }}
        transition={{ duration: 22, repeat: Infinity }}
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left: Text content */}
          <div className="flex-1 text-left">
            <motion.h1
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="mb-4 font-bold tracking-tight text-4xl sm:text-5xl md:text-6xl bg-gradient-to-r from-cyan-300 via-indigo-300 to-fuchsia-300 bg-clip-text text-transparent"
            >
              {text}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block"
              >
                |
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="mb-6 text-xl md:text-2xl text-slate-300 font-medium"
            >
              Full Stack Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mb-8 text-lg text-slate-400 max-w-md"
            >
              Building Exceptional Digital Experiences
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="mb-8"
            >
              <Button
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 via-indigo-500 to-fuchsia-500 text-white shadow-lg shadow-cyan-500/25 transition hover:shadow-fuchsia-500/25"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="relative z-10">View My Work</span>
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-500 transition" />
              </Button>
            </motion.div>

            <motion.nav
              aria-label="Social links"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="flex gap-6"
            >
              <SocialLink href="https://github.com" label="GitHub">
                <Github className="h-6 w-6" />
              </SocialLink>
              <SocialLink href="https://linkedin.com" label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </SocialLink>
              <SocialLink href="mailto:mensah.anni@example.com" label="Email">
                <Mail className="h-6 w-6" />
              </SocialLink>
            </motion.nav>
          </div>

          {/* Right: Avatar */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full p-[4px] bg-gradient-to-br from-cyan-400 via-indigo-500 to-fuchsia-500 shadow-2xl shadow-cyan-500/30">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-950">
                <span role="img" aria-label={AVATAR_LABEL} className="text-8xl lg:text-9xl">
                  👨‍💻
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Compact CTA row for smaller screens */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex gap-4 justify-center lg:hidden"
        >
          <Button
            className="bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-500/30"
            size="lg"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-slate-600 text-white hover:bg-slate-800"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Me
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="hidden lg:flex gap-6 justify-center mt-8"
        >
          {[
            { href: "https://github.com", icon: Github, label: "GitHub" },
            { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
            { href: "mailto:mensah.anni@example.com", icon: Mail, label: "Email" }
          ].map((social, i) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.label !== "Email" ? "_blank" : undefined}
              rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
              className="text-slate-400 hover:text-white transition-colors"
              custom={i}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              variants={socialIconVariants}
              aria-label={social.label}
            >
              <social.icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        whileHover={{ scale: 1.15 }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ArrowDown className="h-7 w-7 text-slate-400" />
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
      className="text-slate-400 transition-colors hover:text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 rounded p-2 hover:bg-slate-800/50"
    >
      {children}
    </a>
  );
}