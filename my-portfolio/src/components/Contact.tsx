import { motion } from 'framer-motion';
import { Copy, Mail, MapPin, Phone } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner';
import { useState } from 'react';
import { LazyMount } from './LazyMount';

const CONTACT_EMAIL = 'mensahanni98@gmail.com';
const CONTACT_PHONE = '+233 206 837 999';
const CONTACT_PHONE_TEL = '+233206837999';

const contactInfo = [
	{
		icon: Mail,
		title: 'Email',
		value: CONTACT_EMAIL,
		href: `mailto:${CONTACT_EMAIL}`,
	},
	{
		icon: Phone,
		title: 'Phone',
		value: CONTACT_PHONE,
		href: `tel:${CONTACT_PHONE_TEL}`,
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
	const [isSubmitting, setIsSubmitting] = useState(false);

	const [formValues, setFormValues] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const isValidEmail = (value: string) =>
		/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

	const copyEmail = async () => {
		try {
			if (!navigator.clipboard?.writeText) {
				toast.error('Copy not supported in this browser.');
				return;
			}
			await navigator.clipboard.writeText(CONTACT_EMAIL);
			toast.success('Email copied!', { description: CONTACT_EMAIL });
		} catch {
			toast.error('Could not copy email.');
		}
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const name = formValues.name.trim();
		const email = formValues.email.trim();
		const subject = formValues.subject.trim();
		const message = formValues.message.trim();

		if (!name || !email || !subject || !message) {
			toast.error('Please fill in all fields.');
			return;
		}
		if (!isValidEmail(email)) {
			toast.error('Please enter a valid email address.');
			return;
		}

		setIsSubmitting(true);
		try {
			const mailtoSubject = encodeURIComponent(`[Portfolio] ${subject}`);
			const mailtoBody = encodeURIComponent(
				`Hi Mensah,\n\n${message}\n\n— ${name}\nReply to: ${email}`
			);
			window.location.href = `mailto:${CONTACT_EMAIL}?subject=${mailtoSubject}&body=${mailtoBody}`;
			toast.success('Opening your email app…', {
				description: "If nothing opens, use the Email button on the left.",
			});
			setFormValues({ name: '', email: '', subject: '', message: '' });
		} finally {
			setIsSubmitting(false);
		}
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
			<LazyMount
				minHeight={720}
				placeholder={
					<div className="container contact-inner">
						<div className="contact-header">
							<h2 className="contact-title">Get In Touch</h2>
							<p className="contact-lead">Loading contact section…</p>
						</div>
					</div>
				}
			>
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
						<div className="contact-subsection">
							<h3 className="contact-section-title">Contact Information</h3>
							<p className="contact-subtitle">
								Prefer email? Phone? Either works—pick what’s easiest.
							</p>
						</div>

						<div className="contact-actions" aria-label="Quick contact actions">
							<Button asChild className="btn btn-primary">
								<a href={`mailto:${CONTACT_EMAIL}`}>Email me</a>
							</Button>
							<Button asChild variant="outline" className="btn btn-outline">
								<a href={`tel:${CONTACT_PHONE_TEL}`}>Call</a>
							</Button>
							<Button
								type="button"
								variant="outline"
								className="btn btn-outline"
								onClick={copyEmail}
							>
								<Copy className="icon-inline" />
								<span>Copy email</span>
							</Button>
						</div>
						<p className="contact-note">Typical reply time: within 24–48 hours.</p>

						<Card className="contact-card contact-help-card">
							<div className="contact-subsection">
								<h3 className="contact-section-title">What I can help with</h3>
								<p className="contact-subtitle">
									Web apps, APIs, UI polish, performance fixes, and deployments.
								</p>
							</div>
							<ul className="contact-help-list" aria-label="Services">
								<li className="contact-help-item">React / Next.js features</li>
								<li className="contact-help-item">Node.js / Express APIs</li>
								<li className="contact-help-item">Bug fixes & performance</li>
								<li className="contact-help-item">Deployments (Vercel)</li>
							</ul>
						</Card>

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
							<div className="contact-subsection">
								<h3 className="contact-section-title">Send a message</h3>
								<p className="contact-subtitle">
									Share a bit about what you’re building and what you need help with.
								</p>
							</div>

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
											value={formValues.name}
											onChange={(e) =>
												setFormValues((v) => ({ ...v, name: e.target.value }))
											}
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
											value={formValues.email}
											onChange={(e) =>
												setFormValues((v) => ({ ...v, email: e.target.value }))
											}
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
											value={formValues.subject}
											onChange={(e) =>
												setFormValues((v) => ({ ...v, subject: e.target.value }))
											}
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
											value={formValues.message}
											onChange={(e) =>
												setFormValues((v) => ({ ...v, message: e.target.value }))
											}
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
										disabled={isSubmitting}
									>
										{isSubmitting ? 'Preparing email…' : 'Send Message'}
									</Button>
								</motion.div>
							</form>
						</Card>
					</motion.div>
				</div>
				</div>
			</LazyMount>
		</section>
	);
}
