import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/image';
import { LazyMount } from './LazyMount';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from './ui/dialog';
import { SectionReveal } from './section-reveal';

import bigDotImage from '../assets/bigdot.png';
import artisanFinderImage from '../assets/artisan-finder.png';
import costCalculatorImage from '../assets/costcheck.png';
import rolexImage from '../assets/image3.png';

interface Project {
	title: string;
	description: string;
	longDescription?: string;
	image: string;
	tags: string[];
	github: string;
	demo: string;
}

const projects: Project[] = [
	{
		title: 'Big Dot',
		description:
			'A frontend task I worked on with a colleague Kekeli at Revolve DigiCom.',
		longDescription:
			'Big Dot is a landing page project built at Revolve DigiCom. It focuses on clean HTML/CSS/JS and responsive design.',
		image: bigDotImage,
		tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
		github: 'https://github.com/McAnnison/revolve-web',
		demo: 'https://mcannison.github.io/revolve-web/',
	},
	{
		title: 'Cost Calculator',
		description:
			'A modern web application for calculating cleaning service costs with an intuitive interface and comprehensive pricing options.',
		longDescription:
			'This application was a backend-focused task at Revolve DigiCom. It lets users estimate cleaning costs through a Next.js frontend and a Node/Express API.',
		image: costCalculatorImage,
		tags: ['Next.js', 'TypeScript', 'Node.js', 'Express', 'CSS Modules'],
		github: 'https://github.com/McAnnison/cost-check',
		demo: 'https://clening-cost-calculator.vercel.app/',
	},
	{
		title: 'Artisan Finder App',
		description:
			'An Artisan Marketplace & Locator App that connects skilled local artisans with people who need work done.',
		longDescription:
			'Artisan Finder connects masons, carpenters, plumbers, painters, electricians, welders, tilers, and more with clients who need reliable service.',
		image: artisanFinderImage,
		tags: ['Figma', 'React Native', 'Expo', 'Node', 'Express', 'PostgreSQL'],
		github: 'https://github.com/McAnnison/WorkManGH',
		demo: 'https://crave-pulse-81327893.figma.site/',
	},
	{
		title: 'Rolex Modelling Agency',
		description:
			'A registration platform for models and clients to connect, showcasing portfolios and facilitating bookings.',
		longDescription:
			'Rolex Modelling Agency is a full-stack platform for model registration and client booking, with a focus on portfolio presentation and assignment management.',
		image: rolexImage,
		tags: ['Figma', 'React', 'Node', 'Express', 'MySQL'],
		github: 'https://github.com/McAnnison/ground_up-tech',
		demo: 'https://mcannison.github.io/ground_up-tech/',
	},
];

export function Projects() {
	const [selected, setSelected] = useState<Project | null>(null);

	const cardVariants = {
		hidden: { opacity: 0, y: 50, rotateX: -15 },
		visible: (i: number) => ({
			opacity: 1,
			y: 0,
			rotateX: 0,
			transition: {
				delay: i * 0.2,
				duration: 0.6,
				ease: [0.43, 0.13, 0.23, 0.96] as const,
			},
		}),
	};

	return (
		<section className="projects-section" id="projects">
			<LazyMount
				minHeight={520}
				placeholder={
					<div className="projects-container">
						<div className="projects-header">
							<h2 className="projects-title">Featured Projects</h2>
							<p className="projects-lead">Loading projects…</p>
						</div>
					</div>
				}
			>
				<div className="projects-container">
					<SectionReveal className="projects-header">
						<motion.h2
							className="projects-title"
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
						>
							Featured Projects
						</motion.h2>
						<motion.p
							className="projects-lead"
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.2 }}
						>
							A selection of projects that showcase my skills and experience
						</motion.p>
					</SectionReveal>

					<div className="projects-grid">
						{projects.map((project, index) => (
							<motion.div
								key={index}
								custom={index}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, margin: '-100px' }}
								variants={cardVariants}
								whileHover={{
									y: -10,
									transition: { duration: 0.3 },
								}}
							>
								<Card className="project-card">
									<div className="project-media">
										<motion.div
											whileHover={{ scale: 1.06 }}
											transition={{ duration: 0.4 }}
										>
											<ImageWithFallback
												src={project.image}
												alt={project.title}
												className="project-image"
											/>
										</motion.div>
										<div className="project-media-overlay" />
									</div>

									<div className="project-body">
										<motion.h3
											className="project-title"
											initial={{ opacity: 0 }}
											whileInView={{ opacity: 1 }}
											viewport={{ once: true }}
											transition={{ delay: index * 0.2 + 0.3 }}
										>
											{project.title}
										</motion.h3>

										<motion.p
											className="project-desc"
											initial={{ opacity: 0 }}
											whileInView={{ opacity: 1 }}
											viewport={{ once: true }}
											transition={{ delay: index * 0.2 + 0.4 }}
										>
											{project.description}
										</motion.p>

										<motion.div
											className="project-tags"
											initial={{ opacity: 0, y: 10 }}
											whileInView={{ opacity: 1, y: 0 }}
											viewport={{ once: true }}
											transition={{ delay: index * 0.2 + 0.5 }}
										>
											{project.tags.slice(0, 3).map((tag, tagIndex) => (
												<Badge key={tagIndex} className="project-tag">
													{tag}
												</Badge>
											))}
											{project.tags.length > 3 && (
												<Badge className="project-tag">+{project.tags.length - 3}</Badge>
											)}
										</motion.div>

										<motion.div
											className="project-actions"
											initial={{ opacity: 0, y: 10 }}
											whileInView={{ opacity: 1, y: 0 }}
											viewport={{ once: true }}
											transition={{ delay: index * 0.2 + 0.6 }}
										>
											<div className="project-action">
												<Button
													variant="outline"
													size="sm"
													className="btn btn-outline"
													asChild
												>
													<a
														href={project.github}
														target="_blank"
														rel="noopener noreferrer"
													>
														<Github className="icon-inline" />
														<span>Code</span>
													</a>
												</Button>
											</div>

											<div className="project-action">
												<Button
													size="sm"
													className="btn btn-primary"
													onClick={() => setSelected(project)}
												>
													<Eye className="icon-inline" />
													<span>Details</span>
												</Button>
											</div>
										</motion.div>
									</div>
								</Card>
							</motion.div>
						))}
					</div>
				</div>

				<Dialog
					open={selected !== null}
					onOpenChange={(open) => {
						if (!open) setSelected(null);
					}}
				>
					<DialogContent className="dialog-project">
						{selected && (
							<>
								<DialogHeader>
									<DialogTitle>{selected.title}</DialogTitle>
									<DialogDescription>{selected.description}</DialogDescription>
								</DialogHeader>

								<ImageWithFallback
									src={selected.image}
									alt={selected.title}
									className="dialog-project-image"
								/>

								<p className="text-muted-foreground text-sm leading-relaxed">
									{selected.longDescription || selected.description}
								</p>

								<div className="dialog-project-tags">
									{selected.tags.map((tag, i) => (
										<Badge key={i} className="project-tag">
											{tag}
										</Badge>
									))}
								</div>

								<DialogFooter className="gap-2">
									<Button
										variant="outline"
										size="sm"
										className="btn btn-outline"
										asChild
									>
										<a
											href={selected.github}
											target="_blank"
											rel="noopener noreferrer"
										>
											<Github className="icon-inline" />
											<span>View Code</span>
										</a>
									</Button>
									<Button size="sm" className="btn btn-primary" asChild>
										<a
											href={selected.demo}
											target="_blank"
											rel="noopener noreferrer"
										>
											<ExternalLink className="icon-inline" />
											<span>Live Demo</span>
										</a>
									</Button>
								</DialogFooter>
							</>
						)}
					</DialogContent>
				</Dialog>
			</LazyMount>
		</section>
	);
}
