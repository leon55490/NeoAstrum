import React from 'react';
import { useTranslation } from 'react-i18next';
import { Check, Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Plans: React.FC = () => {
	const { t } = useTranslation();

	const plans = [
		{
			name: t('plans.basic.name'),
			price: t('plans.basic.price'),
			period: t('plans.basic.period'),
			description: t('plans.basic.description'),
			features: t('plans.basic.features', { returnObjects: true }) as string[],
			cta: t('plans.basic.cta'),
			popular: false,
			gradient: 'from-gray-500 to-gray-600',
		},
		{
			name: t('plans.medium.name'),
			price: t('plans.medium.price'),
			period: t('plans.medium.period'),
			description: t('plans.medium.description'),
			features: t('plans.medium.features', { returnObjects: true }) as string[],
			cta: t('plans.medium.cta'),
			popular: true,
			gradient: 'from-primary-500 to-secondary-500',
		},
		{
			name: t('plans.advanced.name'),
			price: t('plans.advanced.price'),
			period: t('plans.advanced.period'),
			description: t('plans.advanced.description'),
			features: t('plans.advanced.features', { returnObjects: true }) as string[],
			cta: t('plans.advanced.cta'),
			popular: false,
			gradient: 'from-accent-500 to-accent-600',
		},
	];

	const PlanCard = ({ plan, index }: { plan: any; index: number }) => (
		<div
			className={`relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 h-full ${
				plan.popular ? 'ring-4 ring-primary-500 scale-105' : ''
			}`}
		>
			{plan.popular && (
				<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
					<div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center">
						<Star className="w-4 h-4 mr-1" />
						Popular
					</div>
				</div>
			)}

			<div className="p-8">
				<div className="text-center mb-8">
					<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
						{plan.name}
					</h3>
					<div className="flex items-baseline justify-center">
						<span className="text-4xl font-bold text-gray-900 dark:text-white">
							{plan.price}
						</span>
						<span className="text-gray-600 dark:text-gray-400 ml-1">{plan.period}</span>
					</div>
					<p className="text-gray-600 dark:text-gray-300 mt-4">{plan.description}</p>
				</div>

				<ul className="space-y-4 mb-8">
					{plan.features.map((feature, featureIndex) => (
						<li key={featureIndex} className="flex items-start">
							<Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
							<span className="text-gray-700 dark:text-gray-300">{feature}</span>
						</li>
					))}
				</ul>

				<button
					className={`w-full py-4 px-6 rounded-xl font-semibold text-white bg-gradient-to-r ${plan.gradient} hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300`}
				>
					{plan.cta}
				</button>
			</div>
		</div>
	);

	return (
		<section id="plans" className="py-20 bg-gray-50 dark:bg-gray-800">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
						{t('plans.title')}
					</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6"></div>
					<p className="text-xl text-gray-600 dark:text-gray-300">
						{t('plans.subtitle')}
					</p>
				</div>

				{/* Desktop Grid */}
				<div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
					{plans.map((plan, index) => (
						<PlanCard key={index} plan={plan} index={index} />
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
						className="plans-swiper"
						centeredSlides={true}
					>
						{plans.map((plan, index) => (
							<SwiperSlide key={index}>
								<div className="px-4 py-4">
									<PlanCard plan={plan} index={index} />
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>

			<style jsx global>{`
				.plans-swiper {
					padding-bottom: 60px !important;
					padding-top: 30px !important;
					overflow: visible !important;
					width: 100% !important;
				}
				.plans-swiper .swiper-wrapper {
					align-items: stretch;
					overflow: visible !important;
				}
				.plans-swiper .swiper-slide {
					height: auto !important;
					display: flex !important;
					flex-direction: column !important;
					width: 100% !important;
					overflow: visible !important;
				}
				.plans-swiper .swiper-pagination {
					bottom: 10px !important;
					position: relative !important;
					margin-top: 20px !important;
				}
				.plans-swiper .swiper-pagination-bullet {
					background: #6366f1 !important;
					opacity: 0.5 !important;
					width: 8px !important;
					height: 8px !important;
				}
				.plans-swiper .swiper-pagination-bullet-active {
					opacity: 1 !important;
				}
				/* Ocultar navegación en mobile */
				.plans-swiper .swiper-button-next,
				.plans-swiper .swiper-button-prev {
					display: none !important;
				}
				/* Contenedor de la sección para evitar scroll horizontal */
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
