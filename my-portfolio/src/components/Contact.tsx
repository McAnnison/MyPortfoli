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
		value: 'mensahanni98@gmail.com',
		href: 'mailto:mensahanni98@gmail.com',
	},
	{
		icon: Phone,
		title: 'Phone',
		value: '+233 206 837 999',
		href: 'tel:+233206837999',
	},
	{
		icon: MapPin,
		title: 'Location',
		value: 'Ashalley Botwe, Accra',
		href: null,
	},
];

export function Contact() {
	const [focusedField, setFocusedField] = useState<string | null>(null);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		toast.success('Message sent successfully!', {
			description: "Thank you for reaching out. I'll get back to you soon.",
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
				ease: [0.43, 0.13, 0.23, 0.96] as const,
			},
		}),
		hover: {
			scale: 1.02,
			transition: { duration: 0.2 },
		},
	};

	const iconBounceVariants = {
		hover: {
			y: [0, -5, 0],
			transition: {
				duration: 0.5,
				repeat: Infinity,
				repeatDelay: 0.5,
			},
		},
	};

	return (
		<section className="contact-section" id="contact">
			<div className="contact-bg" aria-hidden>
				<motion.div
					className="contact-bg-orb contact-bg-orb-blue"
					animate={{
						x: [0, 100, 0],
						y: [0, -50, 0],
					}}
					transition={{
						duration: 20,
						repeat: Infinity,
						ease: 'linear',
					}}
					style={{ top: '20%', left: '10%' }}
				/>
				<motion.div
					className="contact-bg-orb contact-bg-orb-purple"
					animate={{
						x: [0, -100, 0],
						y: [0, 50, 0],
					}}
					transition={{
						duration: 25,
						repeat: Infinity,
						ease: 'linear',
					}}
					style={{ bottom: '20%', right: '10%' }}
				/>
			</div>

			<div className="container contact-inner">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-100px' }}
					transition={{ duration: 0.6 }}
					className="contact-header"
				>
					<motion.h2
						className="contact-title"
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						Get In Touch
					</motion.h2>
					<motion.p
						className="contact-lead"
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						Having a project in mind or want to collaborate? Feel free to
						reach out!
					</motion.p>
				</motion.div>

				<div className="contact-grid">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: '-50px' }}
						transition={{ duration: 0.6 }}
						className="contact-column"
					>
						<h3 className="contact-section-title">Contact Information</h3>
						<div className="contact-info-list">
							{contactInfo.map((info, index) => (
								<motion.div
									key={index}
									custom={index}
									initial="hidden"
									whileInView="visible"
									whileHover="hover"
									viewport={{ once: true, margin: '-50px' }}
									variants={contactCardVariants}
								>
									<Card className="contact-card">
										<div className="contact-card-inner">
											<motion.div
												className="contact-icon"
												whileHover="hover"
												variants={iconBounceVariants}
											>
												<info.icon className="contact-icon-svg" />
											</motion.div>

											<div className="contact-text">
												<p className="contact-info-title">{info.title}</p>
												{info.href ? (
													<motion.a
														href={info.href}
														className="contact-info-link"
														whileHover={{ x: 3 }}
														transition={{ duration: 0.2 }}
													>
														{info.value}
													</motion.a>
												) : (
													<p className="contact-info-value">{info.value}</p>
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
						viewport={{ once: true, margin: '-50px' }}
						transition={{ duration: 0.6 }}
						className="contact-column"
					>
						<Card className="contact-card contact-form-card">
							<form onSubmit={handleSubmit} className="contact-form">
								<motion.div
									initial={{ opacity: 0, y: 10 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: 0.1 }}
									className="form-row"
								>
									<label
										htmlFor="name"
										className="form-label"
									>
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
											className="input-default"
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
									className="form-row"
								>
									<label
										htmlFor="email"
										className="form-label"
									>
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
											className="input-default"
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
									className="form-row"
								>
									<label
										htmlFor="subject"
										className="form-label"
									>
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
											className="input-default"
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
									className="form-row"
								>
									<label
										htmlFor="message"
										className="form-label"
									>
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
											className="input-default textarea-default"
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
									className="form-row"
								>
									<Button
										type="submit"
										className="btn btn-primary btn-block"
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
