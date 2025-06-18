import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  const footerLinks = {
    company: [
      { name: t('nav.about'), href: '#about' },
      { name: 'Nuestro Equipo', href: '#team' },
      { name: 'Carreras', href: '#careers' },
      { name: 'Blog', href: '#blog' }
    ],
    services: [
      { name: 'Desarrollo Web', href: '#web' },
      { name: 'Aplicaciones Móviles', href: '#mobile' },
      { name: 'Inteligencia Artificial', href: '#ai' },
      { name: 'Consultoría', href: '#consulting' }
    ],
    legal: [
      { name: 'Política de Privacidad', href: '#privacy' },
      { name: 'Términos de Servicio', href: '#terms' },
      { name: 'Cookies', href: '#cookies' },
      { name: 'GDPR', href: '#gdpr' }
    ]
  };

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#', color: 'hover:text-blue-500' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', color: 'hover:text-blue-400' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', color: 'hover:text-pink-500' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', color: 'hover:text-blue-600' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">NA</span>
              </div>
              <span className="ml-2 text-xl font-bold">Neo Astrum</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-primary-400" />
                <span className="text-gray-300">{t('contact.info.email')}</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-primary-400" />
                <span className="text-gray-300">{t('contact.info.phone')}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-3 text-primary-400" />
                <span className="text-gray-300">{t('contact.info.address')}</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('footer.links.company')}</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">{t('footer.links.services')}</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('footer.newsletter.title')}</h3>
            <p className="text-gray-300 mb-4">{t('footer.newsletter.description')}</p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('footer.newsletter.placeholder')}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
              >
                <Send className="w-4 h-4 mr-2" />
                {t('footer.newsletter.cta')}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              {t('footer.rights')}
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`text-gray-400 ${social.color} transition-colors duration-200`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;