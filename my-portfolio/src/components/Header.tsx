import { useCallback, useEffect, useMemo, useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from './ui/sheet';
import { ScrollProgress } from './scroll-progress';
import { useActiveSection } from '../hooks/use-active-section';
import { cn } from './ui/utils';

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

	const activeSection = useActiveSection(
		useMemo(() => navItems.map((item) => item.id), [navItems])
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
			<ScrollProgress />
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
								className={cn(
									'header-link',
									activeSection === item.id && 'header-link-active'
								)}
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

						<Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
							<SheetTrigger asChild>
								<button
									type="button"
									className="header-mobile-toggle"
									aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
									aria-expanded={mobileOpen}
								>
									<Menu />
								</button>
							</SheetTrigger>
							<SheetContent side="right" className="mobile-sheet">
								<SheetHeader>
									<SheetTitle className="mobile-sheet-title">Navigation</SheetTitle>
								</SheetHeader>
								<nav className="mt-4 flex flex-col gap-2" aria-label="Mobile">
									{navItems.map((item) => (
										<SheetClose key={item.id} asChild>
											<a
												href={`#${item.id}`}
												className={cn(
													'mobile-link',
													activeSection === item.id && 'header-link-active'
												)}
												onClick={(e) => {
													e.preventDefault();
													scrollToId(item.id);
												}}
											>
												{item.label}
											</a>
										</SheetClose>
									))}
								</nav>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</div>
		</header>
	);
}
