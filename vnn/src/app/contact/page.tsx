"use client";

import { useLanguage } from "../contexts/LanguageContext";
import Form from "../components/Form";
import Header from "../components/Header";

export default function Contact() {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "Contact Us",
      description: "Get in touch with us for any inquiries or appointments.",
    },
    bg: {
      title: "Свържете се с нас",
      description: "Свържете се с нас за всякакви въпроси или запитвания.",
    },
  };

  const t = translations[language];

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">{t.title}</h1>
        <p className="mb-8">{t.description}</p>
        <Form />
        <p className="my-4 text-xs leading-5 text-center text-gray-500">
          &copy; 2024 VNN DESIGN, Inc. All rights reserved.
        </p>
      </div>
    </div>
  );
}
