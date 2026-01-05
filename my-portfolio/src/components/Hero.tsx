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
<<<<<<< HEAD
    <section
      aria-label="Intro / Hero"
      className="relative flex items-center justify-center min-h-[92vh] pt-20 pb-24 overflow-hidden"
    >
      {/* Gradient background & subtle grid */}
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.15),transparent_60%)]" />
      <div aria-hidden className="pointer-events-none absolute inset-0 [background:linear-gradient(to_right,#1e293b_0%,transparent_2%,transparent_98%,#1e293b_100%),linear-gradient(to_bottom,#1e293b_0%,transparent_2%,transparent_98%,#1e293b_100%)] bg-[length:24px_24px] opacity-[0.05]" />
=======
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ top: '10%', left: '10%' }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ bottom: '10%', right: '10%' }}
        />
        <motion.div
          className="absolute w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ top: '50%', left: '50%' }}
        />
      </div>
>>>>>>> 7094ad605ebfe84d80b719fafb6daf0d24a2e68f

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
<<<<<<< HEAD
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
=======
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              delay: 0.2, 
              type: "spring", 
              stiffness: 200,
              damping: 15
            }}
            className="mb-6"
          >
            <motion.div 
              className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <motion.span 
                  className="text-6xl"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                >
                  👨‍💻
                </motion.span>
>>>>>>> 7094ad605ebfe84d80b719fafb6daf0d24a2e68f
              </div>
            </motion.div>
          </motion.div>
<<<<<<< HEAD
        </div>
=======

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white mb-4 min-h-[3rem]"
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-slate-300 mb-8"
          >
            Full Stack Developer | Building Exceptional Digital Experiences
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4 justify-center mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg shadow-blue-500/30"
                size="lg"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="border-slate-600 text-white hover:bg-slate-800"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex gap-6 justify-center"
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
        </motion.div>
>>>>>>> 7094ad605ebfe84d80b719fafb6daf0d24a2e68f
      </div>

      {/* Scroll indicator */}
      <motion.div
<<<<<<< HEAD
        aria-hidden
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
=======
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        animate={{ 
          y: [0, 15, 0],
        }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        whileHover={{ scale: 1.2 }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
>>>>>>> 7094ad605ebfe84d80b719fafb6daf0d24a2e68f
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