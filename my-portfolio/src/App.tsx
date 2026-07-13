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

export default function App() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="min-h-screen flex flex-col bg-background text-foreground"
      initial={shouldReduceMotion ? false : { y: 40, opacity: 0 }}
      animate={shouldReduceMotion ? { opacity: 1 } : { y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <Header />

      <main id="main" className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
      <Toaster />
    </motion.div>
  );
}
