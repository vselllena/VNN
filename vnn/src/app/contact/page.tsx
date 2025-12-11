"use client";

import { useLanguage } from "../contexts/LanguageContext";
import Form from "../components/Form";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
    
        <Form />
        <Footer />
 
    </div>
  );
}
