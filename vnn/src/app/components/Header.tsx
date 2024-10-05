"use client";

import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../contexts/LanguageContext";

export default function Header() {
  const { language } = useLanguage();

  const translations = {
    en: {
      home: "Home",
      contact: "Contact",
    },
    bg: {
      home: "Начало",
      contact: "Контакти",
    },
  };

  const t = translations[language];

  return (
    <div className="flex flex-row items-center justify-between px-5 md:px-20 py-8 md:py-10 text-black bg-white">
      <Link href="/" className="text-2xl md:text-3xl font-bold font-serif">
        VNN DESIGN
      </Link>
      <div className="flex flex-row items-center space-x-2 md:space-x-4 text-sm md:text-base">
        <Link href="/" className="hover:underline font-sans">
          {t.home}
        </Link>
        <Link href="/contact" className="hover:underline font-sans">
          {t.contact}
        </Link>
        <LanguageSwitcher />
      </div>
    </div>
  );
}
