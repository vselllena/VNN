"use client";

import Image from "next/image";
import studio from "./studio.webp";
import { useLanguage } from "../contexts/LanguageContext";

export default function ImageText() {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "TAILORING AT ITS BEST",
      subtitle: "More than 40 years of Fast & Professional Service",
      description:
        "tailoring.studio is run and operated by Ruby, a master tailor with more than 40 years of continued experience from all types of custom tailoring and alterations. Following many years of distinguished service for various high-end retailers in Portland, Oregon, Ruby decided to finally establish her own business and to help her clients with all their fine custom fitting projects.",
    },
    bg: {
      title: "ШИВАШКО ИЗКУСТВО В НАЙ-ДОБРАТА СИ ФОРМА",
      subtitle: "Повече от 40 години бърза и професионална услуга",
      description:
        "tailoring.studio се управлява от Руби, майстор шивач с повече от 40 години непрекъснат опит във всички видове персонализирано шиене и корекции. След много години отличителна служба за различни луксозни търговци на дребно в Портланд, Орегон, Руби реши най-накрая да създаде собствен бизнес и да помогне на клиентите си с всички техни проекти за фино персонализирано прилягане.",
    },
  };

  const t = translations[language];

  return (
    <div className="flex flex-col items-center justify-between w-full px-10 py-5 mx-auto lg:py-12 lg:px-20 lg:flex-row">
      <div className="w-full pb-4 mb-8 md:mb-0 lg:pb-0">
        <Image
          src={studio}
          alt="Tailoring Studio"
          className="object-cover rounded-lg"
        />
      </div>
      <div className="w-full lg:w-1/2 lg:pl-8">
        <h2 className="mb-4 text-2xl font-bold lg:text-3xl">{t.title}</h2>
        <p className="mb-4 text-xl italic">{t.subtitle}</p>
        <p className="mb-4 text-md lg:text-lg lg:mb-0">{t.description}</p>
      </div>
    </div>
  );
}
