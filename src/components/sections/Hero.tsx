import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
	const { t } = useTranslation();

	const scrollToPlans = () => {
		const element = document.querySelector('#plans');
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	const scrollToAbout = () => {
		const element = document.querySelector('#about');
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<section
			id="home"
			className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800"
		>
			{/* Background Elements */}
			<div className="absolute inset-0 opacity-20">
				<div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
				<div
					className="absolute top-1/3 right-1/4 w-72 h-72 bg-secondary-300 rounded-full mix-blend-multiply filter blur-xl animate-float"
					style={{ animationDelay: '2s' }}
				></div>
				<div
					className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-accent-300 rounded-full mix-blend-multiply filter blur-xl animate-float"
					style={{ animationDelay: '4s' }}
				></div>
			</div>

			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<div className="animate-fade-in">
					{/* Main Title */}
					<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
						<span className="block animate-slide-up">{t('hero.title')}</span>
						<span
							className="block bg-gradient-to-r from-primary-600 via-secondary-500 to-accent-500 bg-clip-text text-transparent animate-slide-up"
							style={{ animationDelay: '0.2s' }}
						>
							{t('hero.subtitle')}
						</span>
					</h1>

					{/* Description */}
					<p
						className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up"
						style={{ animationDelay: '0.4s' }}
					>
						{t('hero.description')}
					</p>

					{/* CTA Buttons */}
					<div
						className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up"
						style={{ animationDelay: '0.6s' }}
					>
						<button
							onClick={scrollToPlans}
							className="group bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center"
						>
							{t('hero.cta')}
							<ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
						</button>

						<button
							onClick={scrollToAbout}
							className="group bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-xl font-semibold text-lg border-2 border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-400 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center"
						>
							{t('hero.ctaSecondary')}
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
