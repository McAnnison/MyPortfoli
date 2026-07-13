import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Separator } from './ui/seperator';
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from './ui/tooltip';

const socials = [
  { href: 'https://github.com/McAnnison', icon: Github, label: 'GitHub' },
  { href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' },
  { href: 'mailto:mensahanni98@gmail.com', icon: Mail, label: 'Email' },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <Separator className="mb-4" />
        <div className="footer-row">
          <div className="footer-left">
            <span className="footer-copy">© 2025 Mensah Anni. Made with</span>
            <Heart className="icon-heart" aria-hidden />
          </div>

          <div className="footer-socials" role="navigation" aria-label="Social links">
            {socials.map((social) => (
              <Tooltip key={social.label}>
                <TooltipTrigger asChild>
                  <a
                    href={social.href}
                    target={social.label !== 'Email' ? '_blank' : undefined}
                    rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                    className="social-link"
                    aria-label={social.label}
                  >
                    <social.icon className="social-icon" aria-hidden />
                  </a>
                </TooltipTrigger>
                <TooltipContent>{social.label}</TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
