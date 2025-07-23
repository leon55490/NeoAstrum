import React from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { Smartphone, Globe, Bot, Check, Star } from 'lucide-react';

const ServiceDetail: React.FC = () => {
	const { serviceId } = useParams<{ serviceId: string }>();
	const navigate = useNavigate();

	const servicesData = {
		mobile: {
			title: 'Desarrollo de Aplicaciones Móviles',
			description:
				'Creamos aplicaciones móviles nativas y multiplataforma que destacan en las tiendas de aplicaciones',
			icon: <Smartphone className="w-16 h-16" />,
			heroGradient: 'from-green-400 to-green-600',
			borderColor: 'border-green-500',
			buttonColor: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
			features: [
				'Desarrollo nativo para iOS y Android',
				'Apps multiplataforma con React Native',
				'Diseño UI/UX optimizado para móviles',
				'Integración con APIs y servicios web',
				'Push notifications y geolocalización',
				'Optimización de rendimiento',
				'Publicación en App Store y Google Play',
				'Mantenimiento y actualizaciones',
			],
			plans: [
				{
					name: 'App Básica',
					price: '$1,500',
					description: 'Perfecta para emprendedores',
					features: [
						'Aplicación nativa simple',
						'Hasta 5 pantallas',
						'Diseño responsivo',
						'Funcionalidades básicas',
						'1 mes de soporte',
					],
				},
				{
					name: 'App Profesional',
					price: '$3,500',
					description: 'Ideal para empresas',
					popular: true,
					features: [
						'Aplicación completa',
						'Hasta 15 pantallas',
						'Integración con APIs',
						'Push notifications',
						'Analytics básicos',
						'3 meses de soporte',
					],
				},
				{
					name: 'App Enterprise',
					price: '$6,500',
					description: 'Para grandes proyectos',
					features: [
						'Aplicación empresarial',
						'Pantallas ilimitadas',
						'Integraciones avanzadas',
						'Dashboard administrativo',
						'Analytics avanzados',
						'6 meses de soporte',
					],
				},
			],
		},
		web: {
			title: 'Desarrollo de Sitios Web',
			description:
				'Construimos sitios web modernos, rápidos y optimizados para motores de búsqueda',
			icon: <Globe className="w-16 h-16" />,
			heroGradient: 'from-blue-400 to-blue-600',
			borderColor: 'border-blue-500',
			buttonColor: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
			features: [
				'Sitios web responsivos y modernos',
				'Desarrollo con React y Next.js',
				'Optimización SEO avanzada',
				'Panel de administración CMS',
				'Integración con redes sociales',
				'Analytics y métricas detalladas',
				'Hosting y dominio incluido',
				'Mantenimiento continuo',
			],
			plans: [
				{
					name: 'Web Básica',
					price: '$800',
					description: 'Perfect para pequeños negocios',
					features: [
						'Landing page profesional',
						'Hasta 5 páginas',
						'Diseño responsivo',
						'SEO básico',
						'Formulario de contacto',
					],
				},
				{
					name: 'Web Profesional',
					price: '$1,800',
					description: 'Ideal para empresas',
					popular: true,
					features: [
						'Sitio web completo',
						'Hasta 15 páginas',
						'Panel de administración',
						'SEO avanzado',
						'Blog integrado',
						'Analytics incluido',
					],
				},
				{
					name: 'Web Enterprise',
					price: '$3,500',
					description: 'Para grandes organizaciones',
					features: [
						'Aplicación web completa',
						'Páginas ilimitadas',
						'E-commerce incluido',
						'Múltiples idiomas',
						'Integraciones avanzadas',
						'Soporte prioritario',
					],
				},
			],
		},
		ai: {
			title: 'Automatización con Inteligencia Artificial',
			description:
				'Implementamos soluciones de IA para automatizar procesos y mejorar la eficiencia',
			icon: <Bot className="w-16 h-16" />,
			heroGradient: 'from-red-400 to-red-600',
			borderColor: 'border-red-500',
			buttonColor: 'from-red-500 to-red-600 hover:from-red-600 hover:to-red-700',
			features: [
				'Chatbots inteligentes personalizados',
				'Automatización de procesos (RPA)',
				'Análisis predictivo de datos',
				'Machine Learning personalizado',
				'Procesamiento de lenguaje natural',
				'Integración con sistemas existentes',
				'Dashboards de IA y métricas',
				'Capacitación y soporte técnico',
			],
			plans: [
				{
					name: 'IA Básica',
					price: '$2,200',
					description: 'Automatización simple',
					features: [
						'Chatbot básico',
						'Hasta 3 procesos automatizados',
						'Integración simple',
						'Dashboard básico',
						'2 meses de soporte',
					],
				},
				{
					name: 'IA Profesional',
					price: '$4,800',
					description: 'Solución completa',
					popular: true,
					features: [
						'Chatbot avanzado con NLP',
						'Hasta 10 procesos automatizados',
						'Machine Learning básico',
						'Analytics predictivos',
						'4 meses de soporte',
					],
				},
				{
					name: 'IA Enterprise',
					price: '$8,500',
					description: 'Transformación digital completa',
					features: [
						'Suite completa de IA',
						'Procesos ilimitados',
						'ML avanzado personalizado',
						'Integración empresarial',
						'12 meses de soporte',
					],
				},
			],
		},
	};

	// Si el servicio no existe, redirigir
	if (!serviceId || !servicesData[serviceId as keyof typeof servicesData]) {
		return <Navigate to="/" replace />;
	}

	const service = servicesData[serviceId as keyof typeof servicesData];

	// Función para manejar clic en plan específico
	const handlePlanClick = (plan: any) => {
		navigate('/', {
			state: {
				scrollToContact: true,
				planInfo: {
					serviceType: serviceId, // Agregamos el ID del servicio
					service: service.title,
					plan: plan.name,
					price: plan.price,
					message: `Hola, estoy interesado en el plan ${plan.name} de ${service.title} por ${plan.price}. Me gustaría obtener más información y una cotización personalizada.`,
				},
			},
		});
	};

	// Función para contacto general (botón principal)
	const handleContactClick = () => {
		navigate('/', {
			state: {
				scrollToContact: true,
				planInfo: {
					serviceType: serviceId, // Agregamos el ID del servicio
					service: service.title,
					message: `Hola, estoy interesado en ${service.title}. Me gustaría obtener más información y una cotización personalizada.`,
				},
			},
		});
	};

	// Función para ir al inicio de la página
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="min-h-screen bg-white dark:bg-gray-900">
			{/* Hero Section */}
			<section
				className={`relative py-32 bg-gradient-to-br ${service.heroGradient} text-white overflow-hidden`}
			>
				<div className="absolute inset-0 bg-black/20"></div>
				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<div className="inline-flex p-6 bg-white/20 rounded-2xl mb-8">
							{service.icon}
						</div>
						<h1 className="text-4xl md:text-6xl font-bold mb-6">{service.title}</h1>
						<p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
							{service.description}
						</p>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-20 bg-gray-50 dark:bg-gray-800">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
							¿Qué incluye nuestro servicio?
						</h2>
						<div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto"></div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{service.features.map((feature, index) => (
							<div
								key={index}
								className="flex items-start p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
							>
								<div className="flex-shrink-0">
									<Check
										className={`w-6 h-6 text-${
											serviceId === 'mobile'
												? 'green'
												: serviceId === 'web'
												? 'blue'
												: 'red'
										}-500`}
									/>
								</div>
								<p className="ml-4 text-gray-700 dark:text-gray-300">{feature}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Pricing Section */}
			<section className="py-20 bg-white dark:bg-gray-900">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
							Planes y Precios
						</h2>
						<div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6"></div>
						<p className="text-xl text-gray-600 dark:text-gray-300">
							Elige el plan que mejor se adapte a tus necesidades
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{service.plans.map((plan, index) => (
							<div
								key={index}
								className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-2 ${
									plan.popular
										? service.borderColor
										: 'border-gray-200 dark:border-gray-700'
								}`}
							>
								{plan.popular && (
									<div
										className={`absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r ${service.buttonColor} text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center`}
									>
										<Star className="w-4 h-4 mr-1" />
										Más Popular
									</div>
								)}

								<div className="p-8">
									<div className="text-center mb-8">
										<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
											{plan.name}
										</h3>
										<p className="text-gray-600 dark:text-gray-300 mb-4">
											{plan.description}
										</p>
										<div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
											{plan.price}
										</div>
										<p className="text-gray-500 dark:text-gray-400">Pago único</p>
									</div>

									<ul className="space-y-4 mb-8">
										{plan.features.map((feature, featureIndex) => (
											<li key={featureIndex} className="flex items-center">
												<Check
													className={`w-5 h-5 text-${
														serviceId === 'mobile'
															? 'green'
															: serviceId === 'web'
															? 'blue'
															: 'red'
													}-500 mr-3 flex-shrink-0`}
												/>
												<span className="text-gray-700 dark:text-gray-300">
													{feature}
												</span>
											</li>
										))}
									</ul>

									{/* BOTÓN ACTUALIZADO */}
									<button
										onClick={() => handlePlanClick(plan)}
										className={`w-full py-4 px-6 rounded-xl font-semibold text-white bg-gradient-to-r ${service.buttonColor} shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300`}
									>
										Solicitar Cotización
									</button>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className={`py-20 bg-gradient-to-r ${service.heroGradient} text-white`}>
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="text-3xl md:text-4xl font-bold mb-6">
						¿Listo para comenzar tu proyecto?
					</h2>
					<p className="text-xl mb-8 opacity-90">
						Contáctanos y obtén una cotización personalizada sin compromiso
					</p>
					<button
						onClick={handleContactClick}
						className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
					>
						Contactar Ahora
					</button>
				</div>
			</section>
		</div>
	);
};

export default ServiceDetail;
