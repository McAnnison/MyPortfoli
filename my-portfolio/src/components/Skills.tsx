import { motion } from 'framer-motion';
import { Badge } from './ui/badge';

const skillCategories = [
	{
		category: 'Frontend',
		skills: [
			'React',
			'Next.js',
			'TypeScript',
			'Tailwind CSS',
			'HTML/CSS',
		],
	},
	{
		category: 'Backend',
		skills: [
			'Node.js',
			'Express',
			'REST APIs',
		],
	},
	{
		category: 'Database',
		skills: [
			'PostgreSQL',
			'MongoDB',
			'Redis',
			'Prisma',
			'Supabase',
		],
	},
	{
		category: 'Tools & Others',
		skills: ['Git', 'Figma'],
	},
];

export function Skills() {
	const categoryVariants = {
		hidden: { opacity: 0, x: -30 },
		visible: (i: number) => ({
			opacity: 1,
			x: 0,
			transition: {
				delay: i * 0.15,
				duration: 0.5,
				ease: [0.43, 0.13, 0.23, 0.96] as const,
			},
		}),
	};

	const skillVariants = {
		hidden: { opacity: 0, scale: 0.8, y: 20 },
		visible: (i: number) => ({
			opacity: 1,
			scale: 1,
			y: 0,
			transition: {
				delay: i * 0.05,
				duration: 0.4,
				ease: [0.43, 0.13, 0.23, 0.96] as const,
			},
		}),
		hover: {
			scale: 1.06,
			y: -6,
			transition: { duration: 0.18 },
		},
	};

	return (
		<section className="skills-section" id="skills">
			<div className="skills-container">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-100px' }}
					transition={{ duration: 0.6 }}
					className="skills-header"
				>
					<motion.h2
						className="skills-title"
						initial={{ opacity: 0, scale: 0.96 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						Skills & Technologies
					</motion.h2>

					<motion.p
						className="skills-lead"
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						A comprehensive toolkit for building modern web applications
					</motion.p>
				</motion.div>

				<div className="skills-grid" role="list">
					{skillCategories.map((category, categoryIndex) => (
						<motion.div
							key={categoryIndex}
							custom={categoryIndex}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, margin: '-50px' }}
							variants={categoryVariants}
							className="skills-category"
							role="listitem"
						>
							<motion.h3
								className="skills-category-title"
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ delay: categoryIndex * 0.15 + 0.1 }}
							>
								{category.category}
							</motion.h3>

							<div
								className="skills-badges"
								aria-hidden={false}
							>
								{category.skills.map((skill, skillIndex) => (
									<motion.div
										key={skillIndex}
										custom={skillIndex}
										initial="hidden"
										whileInView="visible"
										whileHover="hover"
										viewport={{ once: true, margin: '-50px' }}
										variants={skillVariants}
										className="skill-badge-wrap"
									>
										<Badge className="skill-badge">{skill}</Badge>
									</motion.div>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
