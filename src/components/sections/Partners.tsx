import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { partners } from '../assets/images/partners/partnersAssets';

const Partners: React.FC = () => {
	const { t } = useTranslation();
	const sliderRef = useRef<HTMLDivElement>(null);

	// Animación automática tipo carrusel infinito
	useEffect(() => {
		const slider = sliderRef.current;
		if (!slider) return;

		let animationFrame: number;
		let scrollAmount = 0;

		const scrollLogos = () => {
			if (slider.scrollWidth <= slider.clientWidth) return; // No scroll si no hay overflow
			scrollAmount += 1;
			if (scrollAmount >= slider.scrollWidth / 2) {
				scrollAmount = 0;
			}
			slider.scrollLeft = scrollAmount;
			animationFrame = requestAnimationFrame(scrollLogos);
		};

		// Duplicar los logos para efecto infinito
		slider.innerHTML += slider.innerHTML;

		scrollLogos();

		return () => {
			cancelAnimationFrame(animationFrame);
			// Limpieza: restaurar el contenido original
			if (slider && slider.innerHTML) {
				slider.innerHTML = slider.innerHTML.slice(0, slider.innerHTML.length / 2);
			}
		};
	}, []);

	return (
		<section className="py-20 bg-gray-50 dark:bg-gray-800">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
						{t('partners.title')}
					</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6"></div>
					<p className="text-xl text-gray-600 dark:text-gray-300">
						{t('partners.subtitle')}
					</p>
				</div>

				{/* Carrusel automático de logos, sin scroll visible */}
				<div
					ref={sliderRef}
					className="flex items-center gap-16 overflow-hidden w-full"
					style={{
						maskImage:
							'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
					}}
				>
					{partners.map((partner, idx) => (
						<div
							key={partner.name + idx}
							className="flex-shrink-0 flex items-center justify-center h-32 px-10"
						>
							<img
								src={partner.src}
								alt={partner.name}
								className="h-20 md:h-24 lg:h-28 object-contain grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all duration-300"
								style={{ maxWidth: 220 }}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Partners;
