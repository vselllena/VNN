"use client";

import Image from "next/image";
import studio from "./studio.webp";
import { useLanguage } from "../contexts/LanguageContext";

export default function ImageText() {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "Opening Hours",
      subtitle: "Feel free to call and share your inspiration!",
      description: "Mon - Fri: 8am - 5pm",
      callButton: "Get in touch",
      phoneNumber: "+359898385058",
    },
    bg: {
      title: "Работно време",
      subtitle: "Можете да се свържете с нас по всяко време!",
      description: "Понеделник - Петък: 8:00 - 17:00",
      callButton: "Свържи се с нас",
      phoneNumber: "+359898385058",
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
      <div className="w-full lg:w-1/2 mx-auto flex items-center justify-center flex-col text-left">
        <h2 className="mb-4 text-2xl font-bold lg:text-3xl font-serif">
          {t.title}
        </h2>
        <p className="mb-4 text-xl font-sans italic">{t.subtitle}</p>
        <p className="mb-4 mt-5 text-md font-sans lg:text-lg lg:mb-0">
          {t.description}
        </p>
        <a
          href={`tel:${t.phoneNumber}`}
          className="mt-10 inline-block px-6 py-3 text-md font-sans lg:text-lg lg:mb-0 text-white bg-gray-700 rounded-md hover:bg-gray-600 transition duration-300"
        >
          {t.callButton}
        </a>
      </div>
    </div>
  );
}
