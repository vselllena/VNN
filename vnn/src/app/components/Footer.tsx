"use client";

import { useLanguage } from "../contexts/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "VNN Design",
      description:
        "Making the world a better place through constructing elegant clothes.",
      contactUs: "Contact us:",
      phone: "Tel: +359 898 385 058",
      email: "Email: valianikolowa@gmail.com",
      instagram: "Instagram: vnndesign",
      address: 'Address: Sofia Center, ul. "Lyuben Karavelov" 29, 1142 Sofia',
      copyright: "&copy; 2024 VNN Design, Inc. All rights reserved.",
    },
    bg: {
      title: "VNN Design",
      description:
        "Правим света по-добро място чрез създаване на елегантни дрехи.",
      contactUs: "Свържете се с нас:",
      phone: "Тел: +359 898 385 058",
      email: "Имейл: valianikolowa@gmail.com",
      instagram: "Инстаграм: vnndesign",
      address: 'Адрес: София Център, ул. "Любен Каравелов" 29, 1142 София',
      copyright: "&copy; 2024 ВНН Дизайн, Inc. Всички права запазени.",
    },
  };

  const t = translations[language];

  return (
    <footer aria-labelledby="footer-heading" className="bg-black">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-[110rem] px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="space-y-8">
            <span className="font-serif text-xl">{t.title}</span>
            <p className="text-sm leading-6 max-w-xs text-gray-300 font-sans">
              {t.description}
            </p>
            <div className="flex space-x-6"></div>
          </div>
          <div className="flex flex-col space-y-4 text-base">
            <span className="font-serif text-xl">{t.contactUs}</span>
            <span>
              Tel:{" "}
              <a
                href="tel:+359898385058"
                className="text-gray-300 hover:underline"
              >
                +359 898 385 058
              </a>
            </span>
            <span>
              Email:{" "}
              <a
                href="mailto:valianikolowa@gmail.com"
                className="text-gray-300 hover:underline"
              >
                valianikolowa@gmail.com
              </a>
            </span>
            <span>
              Instagram:{" "}
              <a
                href="https://www.instagram.com/vnndesign"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:underline"
              >
                vnndesign
              </a>
            </span>
            <span>{t.address}</span>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">
            &copy; 2024 VNN Design, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
