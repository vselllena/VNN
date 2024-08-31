"use client";

import { useLanguage } from "../contexts/LanguageContext";
import { useEffect } from "react";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      setLanguage(storedLanguage as "en" | "bg");
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "bg" : "en";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  return (
    <button onClick={toggleLanguage}>{language === "en" ? "БГ" : "EN"}</button>
  );
}
