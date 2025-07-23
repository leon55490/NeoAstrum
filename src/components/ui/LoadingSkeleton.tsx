import React from 'react';

// Skeleton para Portfolio
export const PortfolioSkeleton = () => (
	<div className="animate-pulse">
		<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
			{[1, 2].map((i) => (
				<div
					key={i}
					className="h-96 md:h-[500px] bg-gray-300 dark:bg-gray-700 rounded-2xl"
				></div>
			))}
		</div>
		{/* Navigation skeleton */}
		<div className="flex justify-between items-center mt-8">
			<div className="w-12 h-12 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
			<div className="flex space-x-2">
				{[1, 2, 3].map((i) => (
					<div
						key={i}
						className="w-3 h-3 bg-gray-300 dark:bg-gray-700 rounded-full"
					></div>
				))}
			</div>
			<div className="w-12 h-12 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
		</div>
	</div>
);

// Skeleton para About/Services Cards
export const ServiceCardSkeleton = () => (
	<div className="animate-pulse bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl">
		<div className="text-center mb-6">
			<div className="w-16 h-16 bg-gray-300 dark:bg-gray-700 rounded-xl mx-auto mb-4"></div>
			<div className="h-6 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
			<div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mx-auto"></div>
		</div>
		<div className="space-y-4 mb-8">
			{[1, 2, 3, 4].map((i) => (
				<div key={i} className="flex items-center">
					<div className="w-2 h-2 bg-gray-300 dark:bg-gray-700 rounded-full mr-3"></div>
					<div className="h-4 bg-gray-300 dark:bg-gray-700 rounded flex-1"></div>
				</div>
			))}
		</div>
		<div className="h-12 bg-gray-300 dark:bg-gray-700 rounded-xl"></div>
	</div>
);

// Skeleton para About Values
export const AboutValueSkeleton = () => (
	<div className="animate-pulse bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
		<div className="flex flex-col items-center text-center">
			<div className="w-16 h-16 bg-gray-300 dark:bg-gray-700 rounded-xl mb-6"></div>
			<div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
			<div className="space-y-2 w-full">
				<div className="h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
				<div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6 mx-auto"></div>
				<div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-4/6 mx-auto"></div>
			</div>
		</div>
	</div>
);

// Skeleton para Hero Section
export const HeroSkeleton = () => (
	<div className="animate-pulse min-h-screen flex items-center justify-center">
		<div className="text-center max-w-4xl mx-auto px-4">
			<div className="h-16 bg-gray-300 dark:bg-gray-700 rounded mb-6 w-3/4 mx-auto"></div>
			<div className="h-8 bg-gray-300 dark:bg-gray-700 rounded mb-12 w-full mx-auto"></div>
			<div className="flex flex-col sm:flex-row gap-4 justify-center">
				<div className="h-14 bg-gray-300 dark:bg-gray-700 rounded-xl w-48"></div>
				<div className="h-14 bg-gray-300 dark:bg-gray-700 rounded-xl w-48"></div>
			</div>
		</div>
	</div>
);

// Skeleton para Contact Form
export const ContactSkeleton = () => (
	<div className="animate-pulse bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
		<div className="space-y-6">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div className="space-y-2">
					<div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/4"></div>
					<div className="h-12 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
				</div>
				<div className="space-y-2">
					<div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/4"></div>
					<div className="h-12 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
				</div>
			</div>
			<div className="space-y-2">
				<div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/4"></div>
				<div className="h-12 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
			</div>
			<div className="space-y-2">
				<div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/4"></div>
				<div className="h-32 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
			</div>
			<div className="h-12 bg-gray-300 dark:bg-gray-700 rounded-xl"></div>
		</div>
	</div>
);
