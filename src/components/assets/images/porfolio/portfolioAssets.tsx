// Import images (agrega tus imágenes locales aquí si las tienes)
// import ecommerceImg from './ecommerce-project.jpg';
// import fintechImg from './fintech-project.jpg';
// import logisticsImg from './logistics-project.jpg';

export interface Project {
	title: string;
	description: string;
	tech: string;
	image: string;
	gradient: string;
	category: string;
	client: string;
	year: string;
	status: 'completed' | 'in-progress' | 'pending';
}

export const getProjects = (t: (key: string) => string): Project[] => [
	{
		title: t('portfolio.projects.ecommerce.title'),
		description: t('portfolio.projects.ecommerce.description'),
		tech: t('portfolio.projects.ecommerce.tech'),
		image:
			'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
		// image: ecommerceImg, // Usa esto cuando tengas imágenes locales
		gradient: 'from-primary-600/90 to-primary-800/90',
		category: 'ecommerce',
		client: 'TechStore S.A.',
		year: '2024',
		status: 'completed',
	},
	{
		title: t('portfolio.projects.fintech.title'),
		description: t('portfolio.projects.fintech.description'),
		tech: t('portfolio.projects.fintech.tech'),
		image:
			'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
		// image: fintechImg, // Usa esto cuando tengas imágenes locales
		gradient: 'from-secondary-600/90 to-secondary-800/90',
		category: 'finance',
		client: 'Fintech Innovations',
		year: '2023',
		status: 'in-progress',
	},
	{
		title: t('portfolio.projects.logistics.title'),
		description: t('portfolio.projects.logistics.description'),
		tech: t('portfolio.projects.logistics.tech'),
		image:
			'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
		// image: logisticsImg, // Usa esto cuando tengas imágenes locales
		gradient: 'from-gray-700/90 to-gray-900/90',
		category: 'logistics',
		client: 'LogiTrack',
		year: '2022',
		status: 'completed',
	},
];

// Función helper para navegación
export const getNextProjectIndex = (
	currentIndex: number,
	totalProjects: number
): number => {
	return (currentIndex + 1) % totalProjects;
};

export const getPrevProjectIndex = (
	currentIndex: number,
	totalProjects: number
): number => {
	return (currentIndex - 1 + totalProjects) % totalProjects;
};

// Función para obtener proyectos visibles (para desktop)
export const getVisibleProjects = (
	projects: Project[],
	currentIndex: number,
	count: number = 2
): Project[] => {
	const visibleProjects = [];
	for (let i = 0; i < count; i++) {
		const index = (currentIndex + i) % projects.length;
		visibleProjects.push(projects[index]);
	}
	return visibleProjects;
};
