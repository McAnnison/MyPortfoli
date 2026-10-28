@import "tailwindcss";
@import "tw-animate-css";

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

@theme {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-input-background: var(--input-background);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
}

:root {
  --font-size: 16px;
  --background: #060816;
  --foreground: #edf2ff;
  --card: rgba(11, 15, 28, 0.72);
  --card-foreground: #edf2ff;
  --popover: #0d1220;
  --popover-foreground: #edf2ff;
  --primary: #7c6cff;
  --primary-foreground: #ffffff;
  --secondary: #121a2e;
  --secondary-foreground: #dfe6ff;
  --muted: #101827;
  --muted-foreground: #9aa8c0;
  --accent: #34d7ff;
  --accent-foreground: #06131a;
  --destructive: #ff5f7a;
  --destructive-foreground: #ffffff;
  --border: rgba(148, 163, 184, 0.14);
  --input: rgba(15, 23, 42, 0.8);
  --input-background: rgba(15, 23, 42, 0.7);
  --switch-background: #1d2942;
  --font-weight-medium: 500;
  --font-weight-normal: 400;
  --ring: #7c6cff;
  --chart-1: #7c6cff;
  --chart-2: #34d7ff;
  --chart-3: #f59e0b;
  --chart-4: #ec4899;
  --chart-5: #34d399;
  --radius: 1.1rem;
  --sidebar: #0b1120;
  --sidebar-foreground: #edf2ff;
  --sidebar-primary: #7c6cff;
  --sidebar-primary-foreground: #ffffff;
  --sidebar-accent: #121a2e;
  --sidebar-accent-foreground: #edf2ff;
  --sidebar-border: rgba(148, 163, 184, 0.12);
  --sidebar-ring: #7c6cff;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: clamp(2.6rem, 6vw, 5rem);
  --shadow-soft: 0 30px 80px rgba(10, 14, 26, 0.55);
  --shadow-card: 0 16px 40px rgba(5, 9, 18, 0.42);
  --shadow-glow: 0 20px 40px rgba(124, 108, 255, 0.28);
}

html {
  font-size: var(--font-size);
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  margin: 0;
  font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background:
    radial-gradient(circle at top left, rgba(124, 108, 255, 0.24), transparent 27%),
    radial-gradient(circle at top right, rgba(52, 215, 255, 0.18), transparent 24%),
    radial-gradient(circle at bottom center, rgba(52, 211, 153, 0.12), transparent 28%),
    var(--background);
  color: var(--foreground);
  line-height: 1.6;
  min-height: 100vh;
}

@layer base {
  *, *::before, *::after {
    box-sizing: border-box;
    border-color: var(--border);
    outline-color: color-mix(in srgb, var(--ring) 50%, transparent);
  }

  html {
    font-size: var(--font-size);
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif;
    background: var(--background);
    color: var(--foreground);
    line-height: 1.6;
  }

  h1 { font-size: var(--text-2xl); font-weight: 800; margin: 0 0 0.5rem; }
  h2 { font-size: clamp(2rem, 4vw, 3.2rem); font-weight: 800; margin: 0 0 0.5rem; }
  h3 { font-size: clamp(1.08rem, 2vw, 1.4rem); font-weight: 700; margin: 0 0 0.5rem; }
  p { font-size: var(--text-base); margin: 0 0 1rem; color: var(--muted-foreground); }

  a {
    color: inherit;
    text-decoration: none;
    transition: color 160ms ease, opacity 160ms ease, transform 160ms ease;
  }

  .container {
    width: min(1180px, calc(100% - 2rem));
    margin-inline: auto;
    position: relative;
    z-index: 10;
  }

  :focus { outline: none; }
  :focus-visible {
    box-shadow: 0 0 0 4px color-mix(in srgb, var(--ring) 25%, transparent);
    border-radius: 12px;
  }

  .card {
    background: var(--card);
    color: var(--card-foreground);
    border-radius: var(--radius);
    box-shadow: var(--shadow-card);
    padding: 1rem;
  }
}

:where(:not(:has([class*=' text-']), :not(:has([class^='text-'])))) {
  h1 { font-size: var(--text-2xl); font-weight: 800; line-height: 1.02; }
  h2 { font-size: clamp(2rem, 4vw, 3.2rem); font-weight: 800; line-height: 1.08; }
  h3 { font-size: clamp(1.1rem, 2vw, 1.4rem); font-weight: 700; line-height: 1.25; }
  h4 { font-size: var(--text-base); font-weight: 700; line-height: 1.4; }
  p { font-size: var(--text-base); font-weight: 400; line-height: 1.7; }
  label { font-size: var(--text-base); font-weight: 600; line-height: 1.5; }
  button { font-size: var(--text-base); font-weight: 600; line-height: 1.5; }
  input, textarea { font-size: var(--text-base); font-weight: 400; line-height: 1.5; }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

.sr-only {
  position: absolute !important;
  width: 1px; height: 1px;
  padding: 0; margin: -1px; overflow: hidden;
  clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0;
}

.center { display: flex; align-items: center; justify-content: center; }
section[id] { scroll-margin-top: 96px; }

.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  border-bottom: 1px solid rgba(148, 163, 184, 0.08);
  background: rgba(8, 12, 20, 0.7);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: 0 10px 32px rgba(2, 6, 23, 0.14);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 78px;
  gap: 1rem;
}

.brand {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  color: #e2e8ff;
  font-weight: 800;
  letter-spacing: -0.06em;
  font-size: 1.08rem;
}

.brand::before {
  content: "";
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: linear-gradient(135deg, #7c6cff, #34d7ff);
  box-shadow: 0 0 0 7px rgba(124, 108, 255, 0.16);
}

.header-nav {
  display: none;
  align-items: center;
  gap: 0.3rem;
}

.header-link {
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 0.62rem 0.8rem;
  border-radius: 999px;
  font-size: 0.94rem;
  color: #b7c3df;
  font-weight: 600;
  transition: all 180ms ease;
}

.header-link:hover,
.header-link:focus-visible {
  color: #edf2ff;
  background: rgba(124, 108, 255, 0.08);
}

.header-link-active {
  color: #ffffff !important;
  background: rgba(124, 108, 255, 0.1);
  box-shadow: inset 0 0 0 1px rgba(124, 108, 255, 0.16);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.header-mobile-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 14px;
  border: 1px solid rgba(148,163,184,0.16);
  background: rgba(255,255,255,0.04);
  color: #edf2ff;
  transition: all 180ms ease;
  cursor: pointer;
}

.header-mobile-toggle:hover {
  background: rgba(124,108,255,0.08);
  transform: translateY(-1px);
}

.mobile-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.8rem 0.9rem;
  border-radius: 14px;
  background: rgba(15,23,42,0.62);
  border: 1px solid rgba(148,163,184,0.12);
  color: #e2e8ff;
  font-weight: 600;
}

.mobile-link:hover {
  background: rgba(124,108,255,0.08);
  color: #ffffff;
}

@media (min-width: 768px) {
  .header-nav { display: inline-flex; }
  .header-mobile-toggle { display: none; }
  .mobile-menu { display: none; }
}

.hero {
  position: relative;
  overflow: hidden;
  min-height: 92vh;
  padding: 5rem 0 3.5rem;
  background:
    radial-gradient(circle at 15% 20%, rgba(124, 108, 255, 0.2), transparent 23%),
    radial-gradient(circle at 85% 10%, rgba(52, 215, 255, 0.16), transparent 20%),
    linear-gradient(180deg, rgba(8,12,20,0.95) 0%, rgba(11,16,27,1) 100%);
}

.hero-radial {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, rgba(52, 215, 255, 0.09), transparent 60%);
  pointer-events: none;
}

.hero-orbs { position:absolute; inset:0; pointer-events:none; }
.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.5;
}
.orb-blue { width: 20rem; height: 20rem; background: rgba(124,108,255,0.25); }
.orb-purple { width: 20rem; height: 20rem; background: rgba(168,85,247,0.22); }
.orb-cyan { width: 16rem; height: 16rem; background: rgba(52,215,255,0.18); }

.accent-orb {
  position:absolute;
  border-radius: 50%;
  filter: blur(70px);
  opacity: 0.32;
  pointer-events: none;
}
.accent-cyan { width: 22rem; height: 22rem; background: rgba(52, 215, 255, 0.18); top: 8%; left: 12%; }
.accent-fuchsia { width: 24rem; height: 24rem; background: rgba(168, 85, 247, 0.18); right: 8%; bottom: 8%; }

.hero-row {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.8rem;
  width: 100%;
  flex-direction: column;
}

@media (min-width: 1024px) {
  .hero-row { flex-direction: row; }
}

.hero-left {
  flex: 1 1 0;
  max-width: 650px;
  position: relative;
  z-index: 2;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.5rem 0.9rem;
  border-radius: 999px;
  background: rgba(124,108,255,0.1);
  color: #dfe6ff;
  border: 1px solid rgba(124,108,255,0.18);
  font-weight: 700;
  letter-spacing: 0.02em;
}

.hero-title {
  margin-top: 1rem;
  font-size: clamp(3.1rem, 8vw, 6.2rem);
  line-height: 0.9;
  letter-spacing: -0.08em;
  color: #f8fbff;
  font-weight: 900;
  text-wrap: balance;
}

.hero-title .cursor {
  display: inline-block;
  margin-left: 0.08em;
  color: #34d7ff;
  animation: blink 1s steps(1) infinite;
}

@keyframes blink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}

.hero-subtitle {
  margin-top: 1.2rem;
  font-size: clamp(1.08rem, 2vw, 1.48rem);
  color: #8fe8ff;
  font-weight: 700;
}

.hero-lead {
  margin-top: 0.75rem;
  max-width: 62ch;
  font-size: 1.02rem;
  color: #aab7d0;
}

.hero-ctas {
  margin-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  padding: 0.85rem 1.5rem;
  border-radius: 999px;
  border: none;
  font-weight: 700;
  cursor: pointer;
  transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease, color 180ms ease;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn-primary {
  color: #ffffff;
  background: linear-gradient(135deg, #7c6cff, #34d7ff);
  box-shadow: var(--shadow-glow);
}

.btn-primary:hover {
  box-shadow: 0 20px 38px rgba(124,108,255,0.4);
}

.btn-outline {
  color: #edf2ff;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(148,163,184,0.18);
}

.social-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.35rem;
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 14px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(148,163,184,0.14);
  color: #dfe6ff;
  transition: all 180ms ease;
}

.social-link:hover {
  color: #34d7ff;
  transform: translateY(-3px);
  box-shadow: 0 18px 28px rgba(52, 215, 255, 0.08);
}

.hero-right {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1 0;
}

.avatar-ring {
  position: relative;
  width: min(80vw, 420px);
  aspect-ratio: 1;
  border-radius: 36% 64% 52% 48% / 40% 40% 60% 60%;
  padding: 10px;
  background: linear-gradient(135deg, rgba(124,108,255,0.92), rgba(52,215,255,0.8), rgba(168,85,247,0.7));
  box-shadow: var(--shadow-soft);
  animation: float 8s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-12px) rotate(2deg); }
}

.avatar {
  width: 100%;
  height: 100%;
  border-radius: 36% 64% 52% 48% / 40% 40% 60% 60%;
  overflow: hidden;
  border: 5px solid rgba(12,15,25,0.8);
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.avatar-emoji {
  font-size: clamp(2.5rem, 7vw, 5rem);
}

.cta-row-sm {
  display: flex;
  justify-content: center;
  gap: 0.9rem;
  margin-top: 1.3rem;
  flex-wrap: wrap;
}

@media (min-width: 1024px) {
  .cta-row-sm { display: none; }
}

.social-row-lg {
  display: none;
  justify-content: center;
  gap: 0.95rem;
  margin-top: 1.5rem;
}

@media (min-width: 1024px) {
  .social-row-lg { display: flex; }
}

.social-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 14px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(148,163,184,0.12);
  color: #dfe6ff;
}

.scroll-indicator {
  position: absolute;
  left: 50%;
  bottom: 1.2rem;
  transform: translateX(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 999px;
  background: rgba(124,108,255,0.12);
  color: #edf2ff;
  border: 1px solid rgba(124,108,255,0.2);
  box-shadow: 0 10px 22px rgba(124,108,255,0.14);
  cursor: pointer;
}

.about-section,
.skills-section,
.projects-section,
.contact-section {
  position: relative;
  z-index: 1;
}

.about-section {
  padding: 6rem 0;
  background: rgba(10, 14, 24, 0.95);
}

.about-header,
.skills-header,
.projects-header,
.contact-header {
  text-align: center;
  max-width: 760px;
  margin: 0 auto 2.5rem;
}

.about-title,
.skills-title,
.projects-title,
.contact-title {
  margin-bottom: 0.8rem;
  letter-spacing: -0.06em;
  font-weight: 800;
  background: linear-gradient(135deg, #f8fbff, #8fe8ff 30%, #a78bfa 72%, #ffffff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.about-lead,
.skills-lead,
.projects-lead,
.contact-lead {
  font-size: 1.03rem;
  color: #9aa8c0;
  max-width: 60ch;
  margin-inline: auto;
}

.features-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.15rem;
}

@media (min-width: 640px) {
  .features-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

@media (min-width: 1024px) {
  .features-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
}

.feature-card {
  min-height: 100%;
  padding: 1.5rem 1.4rem;
  border: 1px solid rgba(148, 163, 184, 0.12);
  background: rgba(15, 23, 42, 0.7);
  box-shadow: var(--shadow-card);
  transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
}

.feature-card:hover {
  transform: translateY(-8px);
  border-color: rgba(124,108,255,0.25);
  box-shadow: 0 24px 50px rgba(35, 27, 70, 0.36);
}

.feature-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 58px;
  height: 58px;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(124,108,255,0.12), rgba(52,215,255,0.12));
  color: #dfe6ff;
}

.feature-icon-svg { width: 27px; height: 27px; }

.feature-title {
  margin-top: 1rem;
  color: #f8fbff;
  font-size: 1.12rem;
}

.feature-desc {
  margin-top: 0.45rem;
  color: #aab7d0;
}

.skills-section {
  padding: 5.5rem 0;
  background: linear-gradient(180deg, rgba(10,14,24,1) 0%, rgba(8,12,20,1) 100%);
}

.skills-container {
  width: min(1200px, calc(100% - 2rem));
  margin-inline: auto;
}

.skills-tabs-list {
  background: rgba(17, 24, 39, 0.8);
  border: 1px solid rgba(148,163,184,0.12);
  box-shadow: 0 10px 24px rgba(2,6,23,0.2);
  border-radius: 999px;
  padding: 0.3rem;
  overflow-x: auto;
}

.skills-tabs-trigger {
  border-radius: 999px;
  color: #b7c3df;
  font-weight: 600;
  padding: 0.7rem 1rem;
}

.skills-tabs-trigger[data-state='active'] {
  background: linear-gradient(135deg, #7c6cff, #34d7ff);
  color: #ffffff;
  box-shadow: 0 10px 24px rgba(124,108,255,0.3);
}

.skills-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.15rem;
  margin-top: 1.75rem;
}

@media (min-width: 768px) {
  .skills-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

@media (min-width: 1200px) {
  .skills-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
}

.skills-category {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-height: 100%;
  padding: 1.45rem;
  border-radius: 22px;
  border: 1px solid rgba(148,163,184,0.12);
  background: rgba(15, 23, 42, 0.68);
  box-shadow: var(--shadow-card);
  transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
}

.skills-category:hover {
  transform: translateY(-6px);
  border-color: rgba(124,108,255,0.22);
  box-shadow: 0 20px 36px rgba(35, 27, 70, 0.26);
}

.skills-category-title {
  color: #f8fbff;
  font-size: 1.08rem;
}

.skills-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
}

.skill-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 0.5rem 0.75rem;
  background: rgba(124,108,255,0.1);
  color: #dfe6ff;
  border: 1px solid rgba(124,108,255,0.14);
  font-size: 0.82rem;
  font-weight: 700;
}

.projects-section {
  padding: 5.5rem 0;
  background: linear-gradient(180deg, rgba(10,14,24,1) 0%, rgba(6,8,17,1) 100%);
}

.projects-container {
  width: min(1200px, calc(100% - 2rem));
  margin-inline: auto;
}

.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.2rem;
}

@media (min-width: 768px) {
  .projects-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
}

@media (min-width: 1200px) {
  .projects-grid { grid-template-columns: repeat(3, minmax(0,1fr)); }
}

.project-card {
  height: 100%;
  overflow: hidden;
  border: 1px solid rgba(148,163,184,0.12);
  background: rgba(15,23,42,0.7);
  box-shadow: var(--shadow-card);
  transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 22px 48px rgba(124,108,255,0.18);
  border-color: rgba(124,108,255,0.2);
}

.project-media {
  position: relative;
  height: 220px;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(124,108,255,0.14), rgba(52,215,255,0.07));
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 220ms ease;
}

.project-card:hover .project-image {
  transform: scale(1.06);
}

.project-media-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(7,11,18,0.14), rgba(124,108,255,0.08));
}

.project-body {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1.4rem;
}

.project-title { color: #f8fbff; }
.project-desc { color: #aab7d0; font-size: 0.95rem; }

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
}

.project-tag {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  background: rgba(124,108,255,0.1);
  border: 1px solid rgba(124,108,255,0.14);
  color: #dfe6ff;
  font-size: 0.75rem;
  font-weight: 700;
}

.project-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin-top: 0.35rem;
}

.contact-section {
  padding: 5.5rem 0 6rem;
  background: linear-gradient(180deg, rgba(8,12,20,0.98) 0%, rgba(7,10,18,1) 100%);
}

.contact-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.contact-bg-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(75px);
  opacity: 0.24;
}

.contact-bg-orb-blue { width: 22rem; height: 22rem; background: rgba(124,108,255,0.2); left: 6%; top: 20%; }
.contact-bg-orb-purple { width: 26rem; height: 26rem; background: rgba(168,85,247,0.18); right: 8%; bottom: 12%; }

.contact-inner {
  width: min(1200px, calc(100% - 2rem));
  margin-inline: auto;
  position: relative;
  z-index: 2;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.2rem;
}

@media (min-width: 920px) {
  .contact-grid { grid-template-columns: 1fr 1fr; }
}

.contact-column {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-card {
  padding: 1.4rem;
  border-radius: 24px;
  border: 1px solid rgba(148,163,184,0.12);
  background: rgba(15,23,42,0.72);
  box-shadow: var(--shadow-card);
}

.contact-subsection {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.contact-section-title {
  color: #f8fbff;
  font-size: 1.08rem;
}

.contact-subtitle {
  color: #aab7d0;
  font-size: 0.95rem;
}

.contact-actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.contact-note {
  color: #8ea0bd;
  font-size: 0.88rem;
}

.contact-info-list {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.contact-card-inner {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}

.contact-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(124,108,255,0.12), rgba(52,215,255,0.12));
  color: #dfe6ff;
}

.contact-icon-svg { width: 21px; height: 21px; }

.contact-text {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.contact-info-title {
  color: #f8fbff;
  font-weight: 700;
  margin: 0;
}

.contact-info-link,
.contact-info-value {
  color: #dfe6ff;
  font-weight: 600;
  margin: 0;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-row {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-label {
  color: #f8fbff;
  font-weight: 700;
}

.input-default,
.textarea-default {
  width: 100%;
  border: 1px solid rgba(148,163,184,0.14);
  border-radius: 16px;
  padding: 0.8rem 0.9rem;
  background: rgba(10, 14, 24, 0.7);
  color: #edf2ff;
}

.input-default:focus,
.textarea-default:focus {
  border-color: rgba(124,108,255,0.6);
  box-shadow: 0 0 0 4px rgba(124,108,255,0.08);
}

.textarea-default {
  resize: vertical;
  min-height: 140px;
}

.site-footer {
  border-top: 1px solid rgba(148,163,184,0.12);
  background: rgba(6,8,17,0.9);
}

.footer-inner {
  width: min(1200px, calc(100% - 2rem));
  margin-inline: auto;
  padding: 1.25rem 0 2rem;
}

.footer-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
  flex-wrap: wrap;
}

.footer-left {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  color: #aab7d0;
}

.footer-copy { color: #aab7d0; }

.icon-heart {
  width: 15px;
  height: 15px;
  color: #ff5f7a;
}

.footer-socials {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.dialog-project {
  border-radius: 24px !important;
  border: 1px solid rgba(148,163,184,0.12) !important;
  background: rgba(11, 15, 28, 0.94) !important;
}

.dialog-project-image {
  width: 100%;
  height: 220px;
  border-radius: 16px;
  object-fit: cover;
}

.dialog-project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

@media (max-width: 767px) {
  .hero { padding-top: 3.8rem; }
  .header-inner { min-height: 72px; }
  .brand { font-size: 1rem; }
  .project-actions { flex-direction: column; align-items: stretch; }
  .project-actions > * { width: 100%; }
  .btn { width: 100%; }
  .contact-actions { flex-direction: column; align-items: stretch; }
}

@media (prefers-reduced-motion: reduce) {
  .avatar-ring { animation: none; }
}










































































































































