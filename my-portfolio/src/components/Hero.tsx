import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { Button } from './ui/button';

// Accessible alt text for avatar emoji
const AVATAR_LABEL = 'Developer avatar';

export function Hero() {
  return (
    <section
      aria-label="Intro / Hero"
      className="relative flex items-center justify-center min-h-[92vh] pt-20 pb-24 overflow-hidden"
    >
      {/* Gradient background & subtle grid */}
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.15),transparent_60%)]" />
      <div aria-hidden className="pointer-events-none absolute inset-0 [background:linear-gradient(to_right,#1e293b_0%,transparent_2%,transparent_98%,#1e293b_100%),linear-gradient(to_bottom,#1e293b_0%,transparent_2%,transparent_98%,#1e293b_100%)] bg-[length:24px_24px] opacity-[0.05]" />

      {/* Animated accent orbs */}
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
        {/* Main content container - changed to flex row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text content - left side */}
          <div className="flex-1 text-left">
            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="mb-4 font-bold tracking-tight text-4xl sm:text-5xl md:text-6xl bg-gradient-to-r from-cyan-300 via-indigo-300 to-fuchsia-300 bg-clip-text text-transparent"
            >
              Alex Johnson
            </motion.h1>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="mb-6 text-xl md:text-2xl text-slate-300 font-medium"
            >
              Full Stack Developer
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mb-8 text-lg text-slate-400 max-w-md"
            >
              Building Exceptional Digital Experiences
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="mb-8"
            >
              <Button
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 via-indigo-500 to-fuchsia-500 text-white shadow-lg shadow-cyan-500/25 transition hover:shadow-fuchsia-500/25"
              >
                <span className="relative z-10">View My Work</span>
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-500 transition" />
              </Button>
            </motion.div>

            {/* Social links */}
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
              <SocialLink href="mailto:alex@example.com" label="Email">
                <Mail className="h-6 w-6" />
              </SocialLink>
            </motion.nav>
          </div>

          {/* Avatar - right side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
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
      </div>

      {/* Scroll indicator */}
      <motion.div
        aria-hidden
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="h-7 w-7 text-slate-500" />
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