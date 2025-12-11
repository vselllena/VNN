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
      subject: "Message",
      submit: "Submit",
    },
    bg: {
      title: "Свържете се с нас",
      fullName: "Пълно име",
      email: "Имейл адрес",
      phone: "Телефонен номер",
      subject: "Съобщение",
      submit: "Изпрати",
    },
  };

  const t = translations[language];

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    try {
      const response = await fetch("https://formspree.io/f/mdknbreo", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        alert("Form submitted successfully!");
      } else {
        alert("There was a problem submitting the form.");
      }
    } catch (error) {
      alert("Error: " + (error as Error).message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-between w-full px-5 md:px-20 py-12 mx-auto text-black bg-white lg:flex-row">
      <div className="w-full pt-10 lg:w-1/2 lg:pt-0">
        <Image
          src={studio}
          alt="Tailoring Fitting"
          className="object-cover rounded-lg"
        />
      </div>

      <div className="w-full mb-4 lg:w-1/3 lg:mb-0 lg:ml-32">
        <h2 className="mb-16 text-6xl text-left font-thin font-serif">{t.title}</h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 font-serif tracking-wide"
        >
          <div>
            <label htmlFor="name" className="block mb-1">
              {t.fullName}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:ring-0 focus:border-black"
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
              className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:ring-0 focus:border-black"
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
              className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:ring-0 focus:border-black"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-1">
              {t.subject}
            </label>
            <textarea
              id="subject"
              name="subject"
              className="w-full px-3 py-2 border rounded-md h-24 border-gray-300 resize-none focus:outline-none focus:ring-0 focus:border-black"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-mono text-sm tracking-wide text-white transition duration-300 bg-black hover:bg-black-700 rounded-md"
          >
            {t.submit}
          </button>
        </form>
      </div>
    </div>
  );
}
