import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink, ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import {
	getProjects,
	getNextProjectIndex,
	getPrevProjectIndex,
	getVisibleProjects,
	type Project,
} from '../assets/images/porfolio/portfolioAssets';

const Portfolio: React.FC = () => {
	const { t } = useTranslation();
	const [currentProject, setCurrentProject] = useState(0);
	const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

	// Cargar proyectos desde el archivo de assets
	const projects = useMemo(() => getProjects(t), [t]);

	const nextProject = () => {
		setCurrentProject((prev) => getNextProjectIndex(prev, projects.length));
	};

	const prevProject = () => {
		setCurrentProject((prev) => getPrevProjectIndex(prev, projects.length));
	};

	// Obtener proyectos visibles para desktop
	const visibleProjects = useMemo(
		() => getVisibleProjects(projects, currentProject),
		[projects, currentProject]
	);

	const openFullscreen = (imageUrl: string) => {
		setFullscreenImage(imageUrl);
	};

	const closeFullscreen = () => {
		setFullscreenImage(null);
	};

	return (
		<section id="portfolio" className="py-20 bg-white dark:bg-gray-900">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
						{t('portfolio.title')}
					</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6"></div>
					<p className="text-xl text-gray-600 dark:text-gray-300">
						{t('portfolio.subtitle')}
					</p>
				</div>

				{/* Mobile View - Solo 1 carta */}
				<div className="md:hidden">
					<div className="w-full">
						<div className="group cursor-pointer">
							<div className="relative h-96 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
								<img
									src={projects[currentProject].image}
									alt={projects[currentProject].title}
									className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
								/>
								<div
									className={`absolute inset-0 bg-gradient-to-t ${projects[currentProject].gradient} transition-opacity duration-300`}
								></div>
								<div className="absolute inset-0 flex items-end">
									<div className="p-8 text-white">
										<h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">
											{projects[currentProject].title}
										</h3>
										<p className="text-lg mb-6 opacity-90 group-hover:opacity-100 transition-opacity">
											{projects[currentProject].description}
										</p>
										<div className="flex items-center justify-between">
											<button
												onClick={() => openFullscreen(projects[currentProject].image)}
												className="flex items-center space-x-2 bg-white/25 hover:bg-white/35 backdrop-blur-sm px-6 py-3 rounded-xl transition-all duration-300 border border-white/20 hover:border-white/30"
											>
												<span className="font-medium">Ver imagen completa</span>
												<Maximize2 className="w-4 h-4" />
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Navigation Buttons Mobile */}
					<div className="flex justify-between items-center mt-8">
						<button
							onClick={prevProject}
							className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-700"
						>
							<ChevronLeft className="w-6 h-6 text-gray-900 dark:text-white" />
						</button>

						{/* Indicators */}
						<div className="flex space-x-2">
							{projects.map((_, index) => (
								<button
									key={index}
									onClick={() => setCurrentProject(index)}
									className={`w-3 h-3 rounded-full transition-all duration-300 ${
										index === currentProject
											? 'bg-primary-500 scale-125'
											: 'bg-gray-300 dark:bg-gray-600 hover:bg-primary-300 hover:scale-110'
									}`}
								/>
							))}
						</div>

						<button
							onClick={nextProject}
							className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-700"
						>
							<ChevronRight className="w-6 h-6 text-gray-900 dark:text-white" />
						</button>
					</div>
				</div>

				{/* Desktop View - Solo 2 cartas */}
				<div className="hidden md:block">
					<div className="grid grid-cols-2 gap-8">
						{visibleProjects.map((project, index) => (
							<div key={`${currentProject}-${index}`} className="group cursor-pointer">
								<div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
									<img
										src={project.image}
										alt={project.title}
										className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
									/>
									<div
										className={`absolute inset-0 bg-gradient-to-t ${project.gradient} transition-opacity duration-300`}
									></div>
									<div className="absolute inset-0 flex items-end">
										<div className="p-8 md:p-12 text-white">
											<h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-white transition-colors">
												{project.title}
											</h3>
											<p className="text-lg mb-6 max-w-2xl opacity-90 group-hover:opacity-100 transition-opacity">
												{project.description}
											</p>
											<div className="flex items-center justify-between">
												<button
													onClick={() => openFullscreen(project.image)}
													className="flex items-center space-x-2 bg-white/25 hover:bg-white/35 backdrop-blur-sm px-6 py-3 rounded-xl transition-all duration-300 border border-white/20 hover:border-white/30"
												>
													<span className="font-medium">Ver imagen completa</span>
													<Maximize2 className="w-4 h-4" />
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>

					{/* Navigation Buttons Desktop */}
					<div className="flex justify-between items-center mt-8">
						<button
							onClick={prevProject}
							className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-700"
						>
							<ChevronLeft className="w-6 h-6 text-gray-900 dark:text-white" />
						</button>

						{/* Indicators */}
						<div className="flex space-x-2">
							{projects.map((_, index) => (
								<button
									key={index}
									onClick={() => setCurrentProject(index)}
									className={`w-3 h-3 rounded-full transition-all duration-300 ${
										index === currentProject
											? 'bg-primary-500 scale-125'
											: 'bg-gray-300 dark:bg-gray-600 hover:bg-primary-300 hover:scale-110'
									}`}
								/>
							))}
						</div>

						<button
							onClick={nextProject}
							className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-700"
						>
							<ChevronRight className="w-6 h-6 text-gray-900 dark:text-white" />
						</button>
					</div>
				</div>
			</div>

			{/* Modal de imagen en pantalla completa */}
			{fullscreenImage && (
				<div
					className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 overflow-hidden"
					onClick={closeFullscreen}
				>
					<div className="relative w-full h-full flex items-center justify-center">
						<button
							onClick={closeFullscreen}
							className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-2 rounded-full transition-all duration-300"
						>
							<X className="w-6 h-6 text-white" />
						</button>
						<div className="max-w-[90vw] max-h-[90vh] overflow-auto">
							<img
								src={fullscreenImage}
								alt="Vista completa"
								className="w-full h-auto object-contain rounded-lg"
								onClick={(e) => e.stopPropagation()}
							/>
						</div>
					</div>
				</div>
			)}
		</section>
	);
};

export default Portfolio;
