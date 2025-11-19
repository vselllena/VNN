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
    <div className="relative flex items-center justify-start md:justify-center px-5 md:px-10 py-8 md:py-10 text-black bg-white">
      <Link
        href="/"
        className="text-2xl md:text-4xl font-thin font-serif tracking-wide text-center"
      >
        VNN DESIGN
      </Link>
      <div className="absolute right-5 md:right-10 flex flex-row items-center justify-end space-x-2 md:space-x-4 text-sm">
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
