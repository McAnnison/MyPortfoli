import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Main content container */}
      <div className="w-full max-w-6xl mx-auto flex-1 px-6 md:px-10 space-y-32 pt-12">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <div className="border-t border-muted mt-24">
        <Footer />
      </div>
      <Toaster />
  
    </div>
  );
}
