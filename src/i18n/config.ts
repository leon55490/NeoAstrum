import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import es from './locales/es.json';
import en from './locales/en.json';

// Detectar idioma del navegador
const getBrowserLanguage = (): string => {
  const browserLang = navigator.language || navigator.languages[0];

  // Si el idioma del navegador es español (es, es-ES, es-MX, etc.)
  if (browserLang.startsWith('es')) {
    return 'es';
  }

  // Si el idioma del navegador es inglés (en, en-US, en-GB, etc.)
  if (browserLang.startsWith('en')) {
    return 'en';
  }

  // Por defecto español
  return 'es';
};

// Obtener idioma guardado o detectar del navegador
const getInitialLanguage = (): string => {
  const savedLang = localStorage.getItem('i18nextLng');
  return savedLang || getBrowserLanguage();
};

i18n.use(initReactI18next).init({
  resources: {
    es: { translation: es },
    en: { translation: en },
  },
  lng: getInitialLanguage(), // Usar idioma detectado o guardado
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false,
  },
});

// Guardar cambios de idioma en localStorage
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('i18nextLng', lng);
});

export default i18n;