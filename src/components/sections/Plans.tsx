import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Smartphone, Globe, Bot, ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ServiceCardSkeleton } from '../ui/LoadingSkeleton';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useNavigate } from 'react-router-dom';

const Plans: React.FC = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(true);

	// Simular carga de servicios
	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 1000);

		return () => clearTimeout(timer);
	}, []);

	const services = [
		{
			title: 'Desarrollo Móvil',
			description: 'Aplicaciones móviles personalizadas para Android',
			icon: <Smartphone className="w-12 h-12" />,
			features: [
				'Diseño nativo y multiplataforma',
				'Integración con APIs y servicios',
				'Optimización de rendimiento',
				'Publicación en tiendas',
				'Mantenimiento y actualizaciones',
			],
			borderColor: 'border-green-500',
			iconBg: 'bg-green-500',
			buttonBg: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
			service: 'mobile',
		},
		{
			title: 'Desarrollo Web',
			description: 'Sitios web y aplicaciones web modernas y responsivas',
			icon: <Globe className="w-12 h-12" />,
			features: [
				'Diseño responsive y moderno',
				'Optimización SEO avanzada',
				'Panel de administración',
				'Integración con redes sociales',
				'Analytics y reportes',
			],
			borderColor: 'border-blue-500',
			iconBg: 'bg-blue-500',
			buttonBg: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
			service: 'web',
		},
		{
			title: 'Automatización IA',
			description: 'Procesos inteligentes con inteligencia artificial',
			icon: <Bot className="w-12 h-12" />,
			features: [
				'Chatbots inteligentes',
				'Automatización de procesos',
				'Análisis predictivo',
				'Machine Learning personalizado',
				'Integración con sistemas existentes',
			],
			borderColor: 'border-red-500',
			iconBg: 'bg-red-500',
			buttonBg: 'from-red-500 to-red-600 hover:from-red-600 hover:to-red-700',
			service: 'ai',
		},
	];

	const handleServiceClick = (service: string) => {
		navigate(`/servicios/${service}`);
	};

	const ServiceCard = ({ service, index }: { service: any; index: number }) => (
		<div
			className={`relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 h-full border-2 ${service.borderColor}`}
		>
			<div className="p-8">
				{/* Icon */}
				<div className="text-center mb-6">
					<div className={`inline-flex p-4 rounded-xl ${service.iconBg} text-white mb-4`}>
						{service.icon}
					</div>
					<h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
						{service.title}
					</h3>
					<p className="text-lg text-gray-600 dark:text-gray-300">
						{service.description}
					</p>
				</div>

				{/* Features */}
				<ul className="space-y-4 mb-8">
					{service.features.map((feature, featureIndex) => (
						<li key={featureIndex} className="flex items-center">
							<div
								className={`w-2 h-2 rounded-full ${service.iconBg} mr-3 flex-shrink-0`}
							></div>
							<span className="text-gray-700 dark:text-gray-300 text-base">
								{feature}
							</span>
						</li>
					))}
				</ul>

				{/* CTA Button */}
				<button
					onClick={() => handleServiceClick(service.service)}
					className={`w-full py-4 px-6 rounded-xl font-semibold text-white text-lg bg-gradient-to-r ${service.buttonBg} shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group`}
				>
					Ver más detalles
					<ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
				</button>
			</div>
		</div>
	);

	if (isLoading) {
		return (
			<section id="plans" className="py-20 bg-gray-50 dark:bg-gray-800">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
							Nuestros Servicios
						</h2>
						<div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6"></div>
						<p className="text-xl text-gray-600 dark:text-gray-300">
							Soluciones tecnológicas que transforman tu negocio
						</p>
					</div>

					{/* Desktop Loading */}
					<div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
						{[1, 2, 3].map((i) => (
							<ServiceCardSkeleton key={i} />
						))}
					</div>

					{/* Mobile Loading */}
					<div className="md:hidden">
						<ServiceCardSkeleton />
					</div>
				</div>
			</section>
		);
	}

	return (
		<section id="plans" className="py-20 bg-gray-50 dark:bg-gray-800">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
						Nuestros Servicios
					</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6"></div>
					<p className="text-xl text-gray-600 dark:text-gray-300">
						Soluciones tecnológicas que transforman tu negocio
					</p>
				</div>

				{/* Desktop Grid */}
				<div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
					{services.map((service, index) => (
						<ServiceCard key={index} service={service} index={index} />
					))}
				</div>

				{/* Mobile Carousel */}
				<div className="md:hidden">
					<Swiper
						modules={[Navigation, Pagination]}
						spaceBetween={20}
						slidesPerView={1}
						navigation={false}
						pagination={{ clickable: true }}
						className="services-swiper"
						centeredSlides={true}
					>
						{services.map((service, index) => (
							<SwiperSlide key={index}>
								<div className="px-4 py-4">
									<ServiceCard service={service} index={index} />
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>

			<style jsx global>{`
				.services-swiper {
					padding-bottom: 60px !important;
					padding-top: 30px !important;
					overflow: visible !important;
					width: 100% !important;
				}
				.services-swiper .swiper-wrapper {
					align-items: stretch;
					overflow: visible !important;
				}
				.services-swiper .swiper-slide {
					height: auto !important;
					display: flex !important;
					flex-direction: column !important;
					width: 100% !important;
					overflow: visible !important;
				}
				.services-swiper .swiper-pagination {
					bottom: 10px !important;
					position: relative !important;
					margin-top: 20px !important;
				}
				.services-swiper .swiper-pagination-bullet {
					background: #6366f1 !important;
					opacity: 0.5 !important;
					width: 8px !important;
					height: 8px !important;
				}
				.services-swiper .swiper-pagination-bullet-active {
					opacity: 1 !important;
				}
				.services-swiper .swiper-button-next,
				.services-swiper .swiper-button-prev {
					display: none !important;
				}
				@media (max-width: 768px) {
					#plans {
						overflow-x: hidden;
					}
				}
			`}</style>
		</section>
	);
};

export default Plans;
