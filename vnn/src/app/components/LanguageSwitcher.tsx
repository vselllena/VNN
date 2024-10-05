"use client";

import { useLanguage } from "../contexts/LanguageContext";
import { useEffect } from "react";
import styles from "./LanguageSwitcher.module.css";

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
    <div className={styles.toggleContainer}>
      <input
        type="checkbox"
        id="language-toggle"
        className={styles.toggleInput}
        checked={language === "bg"}
        onChange={toggleLanguage}
      />
      <label htmlFor="language-toggle" className={styles.toggleLabel}>
        <span className={styles.toggleButton}></span>
        <span className={`${styles.toggleText} ${styles.enText}`}>EN</span>
        <span className={`${styles.toggleText} ${styles.bgText}`}>БГ</span>
      </label>
    </div>
  );
}
