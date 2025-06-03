// src/i18n.ts

export const locales = ['fr', 'en'] as const; // Ajoute d'autres langues ici si nécessaire
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'fr';

export const localeNames: Record<Locale, string> = {
  fr: 'Français',
  en: 'English',
};

// Pour les composants de sélection de langue
export const languageOptions = locales.map((locale) => ({
  value: locale,
  label: localeNames[locale],
}));

