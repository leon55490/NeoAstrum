import img1 from './img1.jpeg';
import img2 from './img2.jpeg';
import img3 from './img3.jpeg';

export interface Project {
	title: string;
	description: string;
	image: string;
	gradient: string;
	category: string;
}

export const getProjects = (t: (key: string) => string): Project[] => [
	{
		title: t('portfolio.projects.ecommerce.title'),
		description: t('portfolio.projects.ecommerce.description'),
		image: img1,
		gradient: 'from-primary-600/90 to-primary-800/90',
		category: 'ecommerce',
	},
	{
		title: t('portfolio.projects.fintech.title'),
		description: t('portfolio.projects.fintech.description'),
		image: img2,
		gradient: 'from-secondary-600/90 to-secondary-800/90',
		category: 'finance',
	},
	{
		title: t('portfolio.projects.logistics.title'),
		description: t('portfolio.projects.logistics.description'),
		image: img3,
		gradient: 'from-gray-700/90 to-gray-900/90',
		category: 'logistics',
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
