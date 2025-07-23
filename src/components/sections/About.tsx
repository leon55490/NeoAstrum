import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Lightbulb, Zap, UsersRound } from 'lucide-react';
import { AboutValueSkeleton } from '../ui/LoadingSkeleton';

const About: React.FC = () => {
	const { t } = useTranslation();
	const [isLoading, setIsLoading] = useState(true);

	// Simular carga
	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 800);

		return () => clearTimeout(timer);
	}, []);

	const values = [
		{
			icon: <Lightbulb className="w-12 h-12" color="#16adaf" />,
			title: t('about.values.innovation.title'),
			description: t('about.values.innovation.description'),
		},
		{
			icon: <Zap className="w-12 h-12" color="#226fe0" />,
			title: t('about.values.agility.title'),
			description: t('about.values.agility.description'),
		},
		{
			icon: <UsersRound className="w-12 h-12" color="#16adaf" />,
			title: t('about.values.collaboration.title'),
			description: t('about.values.collaboration.description'),
		},
	];

	if (isLoading) {
		return (
			<section id="about" className="py-20 bg-white dark:bg-gray-900">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
							{t('about.title')}
						</h2>
						<div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6"></div>
						<div className="animate-pulse">
							<div className="h-6 bg-gray-300 dark:bg-gray-700 rounded mx-auto w-64 mb-8"></div>
							<div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mx-auto w-3/4"></div>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{[1, 2, 3].map((i) => (
							<AboutValueSkeleton key={i} />
						))}
					</div>
				</div>
			</section>
		);
	}

	return (
		<section id="about" className="py-20 bg-white dark:bg-gray-900">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
						{t('about.title')}
					</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6"></div>
					<p className="text-xl text-primary-600 dark:text-primary-400 font-semibold mb-8">
						{t('about.subtitle')}
					</p>
					<p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
						{t('about.description')}
					</p>
				</div>

				<div className="grid  grid-cols-1 md:grid-cols-3 gap-8">
					{values.map((value, index) => (
						<div
							key={index}
							className="group flex items-center flex-col bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-blue-400"
						>
							<div
								className={`inline-flex  p-4 rounded-xl bg-gradient-to-r  text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
							>
								{value.icon}
							</div>
							<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
								{value.title}
							</h3>
							<p className="text-gray-600 text-center dark:text-gray-300 leading-relaxed">
								{value.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default About;
