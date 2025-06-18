import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Partners from './components/sections/Partners';
import Portfolio from './components/sections/Portfolio';
import Plans from './components/sections/Plans';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Partners />
        <Portfolio />
        <Plans />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;