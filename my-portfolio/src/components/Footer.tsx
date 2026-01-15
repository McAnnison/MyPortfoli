import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-row">
          <div className="footer-left">
            <span className="footer-copy">© 2025 Mensah Anni. Made with</span>
            <Heart className="icon-heart" aria-hidden />
          </div>

          <div className="footer-socials" role="navigation" aria-label="Social links">
            <a
              href="https://github.com/McAnnison"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <Github className="social-icon" aria-hidden />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <Linkedin className="social-icon" aria-hidden />
            </a>
            <a
              href="mailto:mensahanni98@gmail.com"
              className="social-link"
            >
              <Mail className="social-icon" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
