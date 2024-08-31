"use client";

import Image from "next/image";
import studio from "./studio.webp";
import { useLanguage } from "../contexts/LanguageContext";

export default function Form() {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "Contact Us",
      fullName: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      subject: "Subject",
      submit: "Submit",
    },
    bg: {
      title: "Свържете се с нас",
      fullName: "Пълно име",
      email: "Имейл адрес",
      phone: "Телефонен номер",
      subject: "Тема",
      submit: "Изпрати",
    },
  };

  const t = translations[language];

  return (
    <div className="flex flex-col items-center justify-between w-full px-20 py-12 mx-auto text-black bg-white lg:flex-row">
      <div className="w-full mb-4 lg:w-1/3 lg:mb-0 lg:ml-32">
        <h2 className="mb-6 text-3xl font-bold">{t.title}</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1">
              {t.fullName}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">
              {t.email}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block mb-1">
              {t.phone}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-1">
              {t.subject}
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white transition duration-300 bg-black rounded-md hover:bg-black-700"
          >
            {t.submit}
          </button>
        </form>
      </div>
      <div className="w-full pt-10 lg:w-1/2 lg:pt-0">
        <Image
          src={studio}
          alt="Tailoring Fitting"
          className="object-cover rounded-lg"
        />
      </div>
    </div>
  );
}
