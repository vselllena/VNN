"use client";

import Image from "next/image";
import studio from "./studio.webp";
import { useLanguage } from "../contexts/LanguageContext";

export default function TextImage() {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "Experience Excellence with VNN Design",
      subtitle: "More than 40 years of Fast & Professional Service",
      description:
        "VNN Design is a boutique tailoring studio that combines finesse, tradition, and quality. It is focused on two core values: creativity and a designer experience. Our goal is to satisfy even the smallest expectation by crafting each product with care. VNN Design is run and operated by Valentina, a master tailor with more than 40 years of continued experience from all types of custom tailoring.",
    },
    bg: {
      title: "Изживейте съвършенство с VNN Design",
      subtitle: "Богат опит и професионализъм от повече от 30 години",
      description:
        "VNN Design е бутиково шивашко ателие, което съчетава финес, традиция и качество. Фокусиран е върху две основни ценности: креативност и дизайнерско изживяване. Нашата цел е да задоволим и най-малкото очакване, като изработваме внимателно всеки продукт. VNN Design се ръководи и управлява от Валентина, майстор шивач с повече от 40 години продължителен опит във всички видове шивашки услуги по поръчка.",
    },
  };

  const t = translations[language];

  return (
    <div className="flex flex-col items-center justify-between w-full px-10 mx-auto mt-4 lg:mt-0 lg:py-12 lg:px-20 lg:flex-row">
      <div className="w-full lg:w-1/2 lg:pr-8">
        <h2 className="mb-4 text-2xl font-bold lg:text-3xl font-serif">
          {t.title}
        </h2>
        <p className="mb-4 text-xl italic font-sans">{t.subtitle}</p>
        <p className="mb-4 text-md lg:text-lg lg:mb-0 font-sans">
          {t.description}
        </p>
      </div>
      <div className="w-full mb-8 lg:mb-0">
        <Image
          src={studio}
          alt="Tailoring Studio"
          className="object-cover rounded-lg"
        />
      </div>
    </div>
  );
}
