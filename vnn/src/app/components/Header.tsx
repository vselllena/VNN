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
    <div className="flex flex-row items-center justify-between px-20 py-10 text-black bg-white">
      <Link href="/" className="text-3xl font-bold">
        VNN DESIGN
      </Link>
      <div className="flex flex-row items-center space-x-4">
        <Link href="/" className="hover:underline">
          {t.home}
        </Link>
        <Link href="/contact" className="hover:underline">
          {t.contact}
        </Link>
        <LanguageSwitcher />
      </div>
    </div>
  );
}
