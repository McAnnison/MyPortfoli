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
      {/* Visual verification block (remove later if not needed) */}
      <div className="fixed bottom-4 right-4 flex gap-2">
        <button className="rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm shadow hover:bg-primary/90 transition">Primary</button>
        <button className="rounded-md bg-secondary text-secondary-foreground px-4 py-2 text-sm shadow hover:bg-secondary/90 transition">Secondary</button>
        <button className="rounded-md bg-accent text-accent-foreground px-4 py-2 text-sm shadow hover:bg-accent/90 transition">Accent</button>
      </div>
    </div>
  );
}
