import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Partners: React.FC = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample partner logos - using placeholder images
  const partners = [
    { name: 'TechCorp', logo: 'https://images.pexels.com/photos/159201/abstract-art-blur-bright-159201.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop' },
    { name: 'InnovateHub', logo: 'https://images.pexels.com/photos/3483098/pexels-photo-3483098.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop' },
    { name: 'DataFlow', logo: 'https://images.pexels.com/photos/2526878/pexels-photo-2526878.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop' },
    { name: 'CloudVision', logo: 'https://images.pexels.com/photos/2833393/pexels-photo-2833393.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop' },
    { name: 'NextGen', logo: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop' },
    { name: 'DigitalPro', logo: 'https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === partners.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [partners.length]);

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

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {partners.concat(partners).map((partner, index) => (
              <div key={index} className="flex-none w-1/3 px-4">
                <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center h-32">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-16 max-w-32 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {partners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentIndex
                  ? 'bg-primary-500'
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-primary-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;