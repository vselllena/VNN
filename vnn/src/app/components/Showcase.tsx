"use client";

import { useLanguage } from "../contexts/LanguageContext";

const posts = [
  {
    id: 1,
    title: {
      en: "Tailoring Excellence",
      bg: "Шивашко съвършенство",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
  },
  {
    id: 2,
    title: {
      en: "Custom Fittings",
      bg: "Персонализирани приспособления",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 3,
    title: {
      en: "Elegant Designs",
      bg: "Елегантни дизайни",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
  },
  {
    id: 4,
    title: {
      en: "Professional Service",
      bg: "Професионално обслужване",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

export default function Showcase() {
  const { language } = useLanguage();

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-[120rem] px-6 lg:px-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-serif font-bold tracking-tight text-gray-900 sm:text-4xl">
            {language === "en" ? "Step into Our Atelier" : "Ателието"}
          </h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 lg:grid-cols-2 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none xl:grid-cols-4">
          {posts.map((post) => (
            <article
              key={post.id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <img
                alt={post.title[language]}
                src={post.imageUrl}
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
