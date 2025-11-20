"use client";

import { useLanguage } from "../contexts/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "VNN DESIGN",
      contactUs: "CONTACT US",
      phone: "Tel: +359 898 385 058",
      email: "Email: valianikolowa@gmail.com",
      instagram: "Instagram: vnndesign",
      address: 'Address: Sofia Center, ul. "Lyuben Karavelov" 29, 1142 Sofia',
      copyright: "&copy; 2024 VNN Design, Inc. All rights reserved.",
    },
    bg: {
      title: "VNN DESIGN",
      contactUs: "СВЪРЖЕТЕ СЕ С НАС",
      phone: "Тел: +359 898 385 058",
      email: "Имейл: valianikolowa@gmail.com",
      instagram: "Инстаграм: vnndesign",
      address: 'Адрес: София Център, ул. "Любен Каравелов" 29, 1142 София',
      copyright: "&copy; 2024 ВНН Дизайн, Inc. Всички права запазени.",
    },
  };

  const t = translations[language];

  return (
    <footer aria-labelledby="footer-heading" className="bg-black text-gray-300">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-[110rem] px-6 sm:pt-24 lg:px-8 lg:pt-20">
        <div className="flex flex-col lg:flex-row space-x-10 justify-between items-center pb-10">
            <span className="text-2xl md:text-5xl uppercase font-thin font-serif tracking-wide text-center">{t.title}</span>
            <div className="flex space-x-6"></div>
          <div className="flex flex-col space-y-4 text-xs">
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
              <a
                href="mailto:valianikolowa@gmail.com"
                className="text-gray-300 hover:underline"
              >
                EMAIL
              </a>
            </span>
            <span>
              <a
                href="https://www.instagram.com/vnndesign"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:underline "
              >
                INSTAGRAM
              </a>
            </span>
            <span>{t.address}</span>
          </div>
        </div>
        <section className="snap-start snap-always py-2 border-t border-white/10 pt-2 flex items-center justify-center">
          <p className="text-xs leading-5 text-center text-gray-300">
            &copy; 2025 VNN DESIGN, Inc. All rights reserved.
          </p>
        </section>
      </div>
    </footer>
  );
}
