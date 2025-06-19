import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Sun, Moon, Monitor, Globe } from 'lucide-react';
import { useTheme, Theme } from '../../hooks/useTheme';

const Header: React.FC = () => {
	const { t, i18n } = useTranslation();
	const { theme, setTheme } = useTheme();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);

	const navigation = [
		{ name: t('nav.home'), href: '#home' },
		{ name: t('nav.about'), href: '#about' },
		{ name: t('nav.portfolio'), href: '#portfolio' },
		{ name: t('nav.plans'), href: '#plans' },
		{ name: t('nav.contact'), href: '#contact' },
	];

	const themeOptions: { value: Theme; icon: React.ReactNode; label: string }[] = [
		{ value: 'light', icon: <Sun className="w-4 h-4" />, label: 'Light' },
		{ value: 'dark', icon: <Moon className="w-4 h-4" />, label: 'Dark' },
		{ value: 'system', icon: <Monitor className="w-4 h-4" />, label: 'System' },
	];

	const toggleLanguage = () => {
		const newLang = i18n.language === 'es' ? 'en' : 'es';
		i18n.changeLanguage(newLang);
	};

	const scrollToSection = (href: string) => {
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
		setIsMenuOpen(false);
	};

	return (
		<header className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-none">
			<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					{/* Logo */}
					<div className="flex items-center">
						<div className="flex-shrink-0 flex items-center">
							<div className="w-10 h-8 flex items-center justify-center">
								<img
									src="./../../../public/favicon.png" // Replace with your logo path
									alt="Neo Astrum Logo"
									className="w-10 h-10"
								/>
							</div>
							<span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
								Neo Astrum
							</span>
						</div>
					</div>

					{/* Desktop Navigation */}
					<div className="hidden mx:block">
						<div className="ml-10 flex items-baseline space-x-4">
							{navigation.map((item) => (
								<button
									key={item.name}
									onClick={() => scrollToSection(item.href)}
									className="text-gray-700 sm:text-sm md:text-lg dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 rounded-md font-medium transition-colors duration-200"
								>
									{item.name}
								</button>
							))}
						</div>
					</div>

					{/* Theme Toggle & Language Toggle */}
					<div className="hidden mx:flex items-center space-x-4">
						{/* Language Toggle */}
						<button
							onClick={toggleLanguage}
							className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
						>
							<Globe className="w-5 h-5" />
						</button>

						{/* Theme Toggle */}
						<div className="relative">
							<button
								onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
								className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
							>
								{theme === 'light' && <Sun className="w-5 h-5" />}
								{theme === 'dark' && <Moon className="w-5 h-5" />}
								{theme === 'system' && <Monitor className="w-5 h-5" />}
							</button>

							{isThemeMenuOpen && (
								<div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
									<div className="py-1">
										{themeOptions.map((option) => (
											<button
												key={option.value}
												onClick={() => {
													setTheme(option.value);
													setIsThemeMenuOpen(false);
												}}
												className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-2"
											>
												{option.icon}
												<span>{option.label}</span>
											</button>
										))}
									</div>
								</div>
							)}
						</div>
					</div>

					{/* Mobile menu button */}
					<div className="mx:hidden">
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
						>
							{isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
						</button>
					</div>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<div className="mx:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
							{navigation.map((item) => (
								<button
									key={item.name}
									onClick={() => scrollToSection(item.href)}
									className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
								>
									{item.name}
								</button>
							))}
							<div className="flex items-center space-x-4 px-3 py-2">
								<button
									onClick={toggleLanguage}
									className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
								>
									<Globe className="w-5 h-5" />
								</button>
								<button
									onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
									className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
								>
									{theme === 'dark' ? (
										<Sun className="w-5 h-5" />
									) : (
										<Moon className="w-5 h-5" />
									)}
								</button>
							</div>
						</div>
					</div>
				)}
			</nav>
		</header>
	);
};

export default Header;
