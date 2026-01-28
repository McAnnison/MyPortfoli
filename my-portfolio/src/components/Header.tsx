import { useCallback, useEffect, useMemo, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

type NavItem = {
	id: string;
	label: string;
};

export function Header() {
	const [mobileOpen, setMobileOpen] = useState(false);

	const navItems = useMemo<NavItem[]>(
		() => [
			{ id: 'about', label: 'About' },
			{ id: 'skills', label: 'Skills' },
			{ id: 'projects', label: 'Projects' },
			{ id: 'contact', label: 'Get in Touch' },
		],
		[]
	);

	const scrollToId = useCallback((id: string) => {
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
		setMobileOpen(false);
	}, []);

	useEffect(() => {
		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') setMobileOpen(false);
		};
		window.addEventListener('keydown', onKeyDown);
		return () => window.removeEventListener('keydown', onKeyDown);
	}, []);

	return (
		<header className="site-header" aria-label="Site header">
			<a className="skip-link" href="#main">
				Skip to content
			</a>

			<div className="container">
				<div className="header-inner">
					<a
						href="#"
						className="brand"
						onClick={(e) => {
							e.preventDefault();
							window.scrollTo({ top: 0, behavior: 'smooth' });
							setMobileOpen(false);
						}}
					>
						Mensah Anni
					</a>

					<nav className="header-nav" aria-label="Primary">
						{navItems.map((item) => (
							<a
								key={item.id}
								href={`#${item.id}`}
								className="header-link"
								onClick={(e) => {
									e.preventDefault();
									scrollToId(item.id);
								}}
							>
								{item.label}
							</a>
						))}
					</nav>

					<div className="header-actions">
						<Button
							asChild
							variant="outline"
							className="hidden md:inline-flex"
						>
							<a href="/cv.pdf" download="Mensah-Kwame-Anni-CV.pdf">
								Download CV
							</a>
						</Button>

						<Button
							asChild
							className="hidden md:inline-flex"
						>
							<a
								href="#contact"
								onClick={(e) => {
									e.preventDefault();
									scrollToId('contact');
								}}
							>
								Contact
							</a>
						</Button>

						<button
							type="button"
							className="header-mobile-toggle"
							aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
							aria-expanded={mobileOpen}
							onClick={() => setMobileOpen((v) => !v)}
						>
							{mobileOpen ? <X /> : <Menu />}
						</button>
					</div>
				</div>

				{mobileOpen ? (
					<nav className="mobile-menu" aria-label="Mobile">
						{navItems.map((item) => (
							<a
								key={item.id}
								href={`#${item.id}`}
								className="mobile-link"
								onClick={(e) => {
									e.preventDefault();
									scrollToId(item.id);
								}}
							>
								{item.label}
							</a>
						))}
					</nav>
				) : null}
			</div>
		</header>
	);
}
