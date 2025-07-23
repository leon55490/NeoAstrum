import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Partners from './components/sections/Partners';
import Portfolio from './components/sections/Portfolio';
import Plans from './components/sections/Plans';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import ServiceDetail from './components/sections/ServiceDetail';

// Componente para la página principal con scroll automático
const HomePage = () => {
	const location = useLocation();

	useEffect(() => {
		// Si viene con estado de scroll al contacto
		if (location.state?.scrollToContact) {
			setTimeout(() => {
				const contactSection = document.getElementById('contact');
				if (contactSection) {
					contactSection.scrollIntoView({ behavior: 'smooth' });
				}
			}, 100);
		}
	}, [location.state]);

	return (
		<main>
			<Hero />
			<About />
			<Partners />
			<Portfolio />
			<Plans />
			<Contact />
		</main>
	);
};

function App() {
	return (
		<Router>
			<div className="min-h-screen bg-white dark:bg-gray-900">
				<Header />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/servicios/:serviceId" element={<ServiceDetail />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
