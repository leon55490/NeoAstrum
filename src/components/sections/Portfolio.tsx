import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  const { t } = useTranslation();
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: t('portfolio.projects.ecommerce.title'),
      description: t('portfolio.projects.ecommerce.description'),
      tech: t('portfolio.projects.ecommerce.tech'),
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      gradient: 'from-accent-500 to-accent-600'
    },
    {
      title: t('portfolio.projects.fintech.title'),
      description: t('portfolio.projects.fintech.description'),
      tech: t('portfolio.projects.fintech.tech'),
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      gradient: 'from-primary-500 to-primary-600'
    },
    {
      title: t('portfolio.projects.logistics.title'),
      description: t('portfolio.projects.logistics.description'),
      tech: t('portfolio.projects.logistics.tech'),
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      gradient: 'from-secondary-500 to-secondary-600'
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
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

        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentProject * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={index} className="flex-none w-full">
                  <div className="relative h-96 md:h-[500px]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-80`}></div>
                    <div className="absolute inset-0 flex items-end">
                      <div className="p-8 md:p-12 text-white">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                          {project.title}
                        </h3>
                        <p className="text-lg mb-4 max-w-2xl">
                          {project.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                            {project.tech}
                          </span>
                          <button className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-6 py-3 rounded-xl transition-colors duration-300">
                            <span>{t('portfolio.viewMore')}</span>
                            <ExternalLink className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevProject}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-gray-900 dark:text-white" />
          </button>
          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <ChevronRight className="w-6 h-6 text-gray-900 dark:text-white" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentProject
                    ? 'bg-primary-500'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-primary-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;