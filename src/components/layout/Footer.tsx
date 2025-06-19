import React from 'react';
import { useTranslation } from 'react-i18next';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
	const { t } = useTranslation();

	const socialLinks = [
		{ icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
		{ icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
		{ icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
		{ icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
	];

	return (
		<footer className="bg-gray-900 text-white">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 md:gap-0 relative">
					{/* Brand & Slogan */}
					<div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
						<div className="flex items-center space-x-2 mb-2">
							<img src="/logo.png" alt="Neo Astrum Logo" className="w-14 h-14" />
							<span className="text-2xl font-bold tracking-tight">Neo Astrum</span>
						</div>
						<p className="text-gray-400 text-base">Tu espacio digital, sin límites.</p>
					</div>

					{/* Divisor vertical en desktop */}
					<div className="hidden md:block w-px h-32 bg-gradient-to-b from-primary-500/30 via-gray-500/20 to-secondary-500/30 mx-12"></div>

					{/* Social & Legal */}
					<div className="flex-1 flex flex-col items-center md:items-end text-center md:text-right space-y-4">
						<h3 className="text-lg font-semibold mb-2">Síguenos</h3>
						<div className="flex space-x-3 mb-2">
							<a
								href="#"
								aria-label="Facebook"
								className="rounded-full bg-gray-800 p-2 hover:bg-primary-500 transition-colors"
							>
								<Facebook className="w-5 h-5" />
							</a>
							<a
								href="#"
								aria-label="Twitter"
								className="rounded-full bg-gray-800 p-2 hover:bg-primary-500 transition-colors"
							>
								<Twitter className="w-5 h-5" />
							</a>
							<a
								href="#"
								aria-label="Instagram"
								className="rounded-full bg-gray-800 p-2 hover:bg-primary-500 transition-colors"
							>
								<Instagram className="w-5 h-5" />
							</a>
							<a
								href="#"
								aria-label="LinkedIn"
								className="rounded-full bg-gray-800 p-2 hover:bg-primary-500 transition-colors"
							>
								<Linkedin className="w-5 h-5" />
							</a>
						</div>
						<div className="space-y-1">
							<a
								href="#privacy"
								className="block hover:text-primary-400 transition-colors"
							>
								Política de Privacidad
							</a>
							<a href="#terms" className="block hover:text-primary-400 transition-colors">
								Términos de Servicio
							</a>
						</div>
					</div>
				</div>
				<div className="border-t border-gray-800 mt-12 pt-8 text-center">
					<p className="text-gray-500 text-sm">
						© 2025 Neo Astrum. Todos los derechos reservados.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
