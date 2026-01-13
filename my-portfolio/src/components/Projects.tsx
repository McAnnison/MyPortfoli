import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/image';

const projects = [
	{
		title: 'Big Dot',
		description:
			'A frontend task I worked on with a colleague Kekeli at Revolve DigiCom.',
		image:
			'https://images.unsplash.com/photo-1727407209320-1fa6ae60ee05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZ3xlbnwxfHx8fDE3NjI3MDgzMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
		tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
		github: 'https://github.com/McAnnison/revolve-web',
		demo: 'https://mcannison.github.io/revolve-web/',
	},
	{
		title: 'Cost Calculator',
		description:
			'This is also another task I received at Revolve DigiCom to test my knowledge in backend development. A modern web application for calculating cleaning service costs with an intuitive interface and comprehensive pricing options.',
		image:
			'https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzYyNjc0MDMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
		tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Recharts'],
		github: 'https://github.com/McAnnison/cost-check',
		demo: 'https://clening-cost-calculator-9up5g1suv-mcannisons-projects.vercel.app/',
	},
	{
		title: 'Artisan Finder App',
		description:
			'An Artisan Marketplace & Locator App that connects skilled local artisans (masons, carpenters, plumbers, painters, electricians, welders, tilers, etc.) with people who need work done, fast and reliably.',
		image:
			'https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYyNjk0ODE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
		tags: ['Express', 'GraphQL', 'Redis', 'AWS'],
		github: 'https://github.com/McAnnison/WorkManGH',
		demo: 'https://crave-pulse-81327893.figma.site/',
	},

];

export function Projects() {
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
			<div className="projects-container">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-100px' }}
					transition={{ duration: 0.6 }}
					className="projects-header"
				>
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
				</motion.div>

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
										{project.tags.map((tag, tagIndex) => (
											<Badge key={tagIndex} className="project-tag">
												{tag}
											</Badge>
										))}
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
												asChild
											>
												<a
													href={project.demo}
													target="_blank"
													rel="noopener noreferrer"
												>
													<ExternalLink className="icon-inline" />
													<span>Demo</span>
												</a>
											</Button>
										</div>
									</motion.div>
								</div>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
