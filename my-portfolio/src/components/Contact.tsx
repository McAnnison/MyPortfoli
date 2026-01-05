import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner';
import { useState } from 'react';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'mensah.anni@example.com',
    href: 'mailto:mensah.anni@example.com',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'San Francisco, CA',
    href: null,
  },
];

export function Contact() {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully!', {
      description: 'Thank you for reaching out. I\'ll get back to you soon.',
    });
  };

  const contactCardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96] as const
      }
    }),
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 }
    }
  };

  const iconBounceVariants = {
    hover: {
      y: [0, -5, 0],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatDelay: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden" id="contact">
      {/* Background particle effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ top: '20%', left: '10%' }}
        />
        <motion.div
          className="absolute w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ bottom: '20%', right: '10%' }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-white mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Get In Touch
          </motion.h2>
          <motion.p 
            className="text-slate-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Have a project in mind or want to collaborate? Feel free to reach out!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-white mb-6">Contact Information</h3>
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={contactCardVariants}
                >
                  <Card className="bg-slate-800/50 border-slate-700 p-4 hover:border-slate-600 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <motion.div 
                        className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0"
                        whileHover="hover"
                        variants={iconBounceVariants}
                      >
                        <info.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <div>
                        <p className="text-sm text-slate-400">{info.title}</p>
                        {info.href ? (
                          <motion.a
                            href={info.href}
                            className="text-white hover:text-blue-400 transition-colors"
                            whileHover={{ x: 3 }}
                            transition={{ duration: 0.2 }}
                          >
                            {info.value}
                          </motion.a>
                        ) : (
                          <p className="text-white">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <label htmlFor="name" className="block text-sm text-slate-300 mb-2">
                    Name
                  </label>
                  <motion.div
                    animate={{
                      scale: focusedField === 'name' ? 1.02 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="bg-slate-900 border-slate-700 text-white placeholder:text-slate-500 focus:border-blue-500 transition-colors"
                      required
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                    />
                  </motion.div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <label htmlFor="email" className="block text-sm text-slate-300 mb-2">
                    Email
                  </label>
                  <motion.div
                    animate={{
                      scale: focusedField === 'email' ? 1.02 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-slate-900 border-slate-700 text-white placeholder:text-slate-500 focus:border-blue-500 transition-colors"
                      required
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                    />
                  </motion.div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <label htmlFor="subject" className="block text-sm text-slate-300 mb-2">
                    Subject
                  </label>
                  <motion.div
                    animate={{
                      scale: focusedField === 'subject' ? 1.02 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <Input
                      id="subject"
                      placeholder="Project inquiry"
                      className="bg-slate-900 border-slate-700 text-white placeholder:text-slate-500 focus:border-blue-500 transition-colors"
                      required
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                    />
                  </motion.div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <label htmlFor="message" className="block text-sm text-slate-300 mb-2">
                    Message
                  </label>
                  <motion.div
                    animate={{
                      scale: focusedField === 'message' ? 1.02 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project..."
                      rows={5}
                      className="bg-slate-900 border-slate-700 text-white placeholder:text-slate-500 resize-none focus:border-blue-500 transition-colors"
                      required
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                    />
                  </motion.div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg shadow-blue-500/30"
                  >
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
