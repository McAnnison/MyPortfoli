import { motion } from 'framer-motion';
import { Code2, Database, Globe, Zap } from 'lucide-react';
import { Card } from '../components/ui/card';

const features = [
	{
		icon: Code2,
		title: 'Frontend Development',
		description:
			'Expert in React, Next.js, and modern CSS frameworks for creating responsive interfaces.',
	},
	{
		icon: Database,
		title: 'Backend Development',
		description:
			'Proficient in Node.js, Express, and database management with SQL and NoSQL.',
	},
	{
		icon: Globe,
		title: 'Full Stack Solutions',
		description:
			'End-to-end application development with seamless frontend-backend integration.',
	},
	{
		icon: Zap,
		title: 'Performance Optimization',
		description:
			'Focused on building fast, scalable applications with best practices.',
	},
];

export function About() {
	const cardVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: (i: number) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: i * 0.15,
				duration: 0.6,
				ease: [0.43, 0.13, 0.23, 0.96] as const,
			},
		}),
	};

	const iconVariants = {
		hidden: { scale: 0, rotate: -180 },
		visible: {
			scale: 1,
			rotate: 0,
			transition: {
				type: 'spring' as const,
				stiffness: 200,
				damping: 15,
			},
		},
		hover: {
			rotate: [0, -10, 10, -10, 0],
			scale: 1.1,
			transition: { duration: 0.5 },
		},
	};

	return (
		<section className="about-section" id="about">
			<div className="container">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-100px' }}
					transition={{ duration: 0.6 }}
					className="about-header"
				>
					<motion.h2
						className="about-title"
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						About Me
					</motion.h2>
					<motion.p
						className="about-lead"
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						I'm a passionate full stack developer with 5+ years of experience
						building web applications. I love turning complex problems into
						simple, beautiful, and intuitive solutions.
					</motion.p>
				</motion.div>

				<div className="features-grid" role="list">
					{features.map((feature, index) => (
						<motion.div
							key={index}
							custom={index}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, margin: '-50px' }}
							variants={cardVariants}
							whileHover={{
								y: -10,
								transition: { duration: 0.3 },
							}}
							role="listitem"
						>
							<Card className="feature-card">
								<motion.div
									className="feature-icon"
									initial="hidden"
									whileInView="visible"
									whileHover="hover"
									viewport={{ once: true }}
									variants={iconVariants}
								>
									<feature.icon className="feature-icon-svg" />
								</motion.div>
								<h3 className="feature-title">{feature.title}</h3>
								<p className="feature-desc">{feature.description}</p>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
