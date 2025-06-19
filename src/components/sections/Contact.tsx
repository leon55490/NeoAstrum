import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
	const { t } = useTranslation();
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		reason: '',
		message: '',
	});

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log('Form submitted:', formData);
		setFormData({
			name: '',
			email: '',
			reason: '',
			message: '',
		});
	};

	const contactInfo = [
		{
			icon: <Mail className="w-6 h-6" />,
			label: 'Email',
			value: t('contact.info.email'),
			color: 'from-primary-500 to-primary-600',
		},
		{
			icon: <Phone className="w-6 h-6" />,
			label: 'Teléfono',
			value: t('contact.info.phone'),
			color: 'from-secondary-500 to-secondary-600',
		},
	];

	return (
		<section id="contact" className="py-20 bg-white dark:bg-gray-900">
			<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
						{t('contact.title')}
					</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6"></div>
					<p className="text-xl text-gray-600 dark:text-gray-300">
						{t('contact.subtitle')}
					</p>
				</div>

				<div className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-xl p-0 md:p-8 flex flex-col md:flex-row items-stretch">
					{/* Formulario */}
					<div className="flex-1 flex flex-col justify-center p-8">
						<h3 className="flex justify-center text-2xl font-bold text-gray-900 dark:text-white mb-8 md:mb-6 text-center md:text-left">
							¿En qué podemos ayudarte?
						</h3>
						<form onSubmit={handleSubmit} className="space-y-6">
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
								>
									{t('contact.form.name')}
								</label>
								<input
									type="text"
									id="name"
									name="name"
									value={formData.name}
									onChange={handleInputChange}
									required
									className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
								/>
							</div>
							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
								>
									{t('contact.form.email')}
								</label>
								<input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									onChange={handleInputChange}
									required
									className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
								/>
							</div>
							<div>
								<label
									htmlFor="reason"
									className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
								>
									{t('contact.form.reason')}
								</label>
								<select
									id="reason"
									name="reason"
									value={formData.reason}
									onChange={handleInputChange}
									required
									className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
								>
									<option value="">Selecciona una opción</option>
									<option value="web">Desarrollo Web</option>
									<option value="mobile">Aplicación Móvil</option>
									<option value="ai">Inteligencia Artificial</option>
									<option value="consulting">Consultoría</option>
									<option value="other">Otro</option>
								</select>
							</div>
							<div>
								<label
									htmlFor="message"
									className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
								>
									{t('contact.form.message')}
								</label>
								<textarea
									id="message"
									name="message"
									rows={5}
									value={formData.message}
									onChange={handleInputChange}
									required
									className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200 resize-none"
								></textarea>
							</div>
							<button
								type="submit"
								className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
							>
								<Send className="w-5 h-5 mr-2" />
								{t('contact.form.send')}
							</button>
						</form>
					</div>

					{/* Divisor vertical */}
					<div className="hidden md:block w-px bg-gradient-to-b from-primary-400 via-gray-400 to-secondary-400 dark:from-primary-700 dark:via-gray-700 dark:to-secondary-700 mx-0"></div>

					{/* Información de contacto */}
					<div className="flex-1 flex flex-col justify-center p-8">
						<h3 className="flex justify-center text-2xl font-bold text-gray-900 dark:text-white mb-8 md:mb-6 text-center md:text-left invisible md:visible">
							{/* Espacio para simetría, solo visible en desktop */}
							{t('contact.info.title')}
						</h3>
						<div className="space-y-6">
							{contactInfo.map((info, index) => (
								<div
									key={index}
									className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-700 rounded-xl shadow transition-shadow duration-300"
								>
									<div
										className={`p-3 rounded-lg bg-gradient-to-r ${info.color} text-white flex items-center justify-center`}
									>
										{info.icon}
									</div>
									<div>
										<h4 className="font-semibold text-gray-900 dark:text-white mb-1">
											{info.label}
										</h4>
										<p className="text-gray-600 dark:text-gray-300">{info.value}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
