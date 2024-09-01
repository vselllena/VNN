"use client";

import { useLanguage } from "../contexts/LanguageContext";

export function IntroText() {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "VNN DESIGN",
      subtitle: "Your Personal Master Tailor in the heart of Sofia",
    },
    bg: {
      title: "ВНН ДИЗАЙН",
      subtitle: "Вашият личен майстор шивач в сърцето на София",
    },
  };

  const t = translations[language];

  return (
    <div className="flex flex-col items-center justify-center text-white">
      <div className="font-serif text-4xl font-bold text-center">{t.title}</div>
      <span className="font-sans mt-2 text-base text-center">{t.subtitle}</span>
    </div>
  );
}
