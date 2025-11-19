"use client";

import Image from "next/image";
import studio from "./studio.webp";
import { useLanguage } from "../contexts/LanguageContext";
import machine from "../machine.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TextImage() {
  const { language } = useLanguage();

  const galleryImages = [
    {
      src: studio,
      alt: "Tailoring Studio",
    },
    {
      src: machine,
      alt: "Tailoring Machine",
    },
  ];

  const translations = {
    en: {
      title: "Experience Excellence with VNN Design",
      subtitle: "More than 40 years of Fast & Professional Service",
      description:
        "VNN Design is a boutique tailoring studio that combines finesse, tradition, and quality with more than 30 years of experience. It is focused on two core values: creativity and a designer experience. Our goal is to satisfy even the smallest expectation by crafting each product with care. VNN Design is run and operated by Valentina, a master tailor with more than 40 years of continued experience from all types of custom tailoring.",
    },
    bg: {
      title: "Изживейте съвършенство с VNN Design",
      subtitle: "Богат опит и професионализъм от повече от 30 години",
      description:
        "VNN Design е бутиково шивашко ателие, което съчетава финес, традиция и качество, с повече от 30 години опит. Фокусиран е върху две основни ценности: креативност и дизайнерско изживяване. Нашата цел е да задоволим и най-малкото очакване, като изработваме внимателно всеки продукт. VNN Design се ръководи и управлява от Валентина, майстор шивач с повече от 40 години продължителен опит във всички видове шивашки услуги по поръчка.",
    },
  };

  const t = translations[language];

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-12 w-full px-10 mx-auto mt-4 lg:mt-0 lg:py-12 lg:px-16">
      <div className="w-full lg:w-1/2 lg:pr-8 flex flex-col items-center lg:items-start text-center lg:text-left">
        <h2 className="mb-4 text-2xl font-bold lg:text-3xl font-serif">
          {t.title}
        </h2>
        {/* <p className="mb-4 text-xl italic font-sans">{t.subtitle}</p> */}
        <p className="mb-4 text-sm lg:text-base lg:mb-0 font-sans">
          {t.description}
        </p>
      </div>
      <div className="w-1/2 mb-8 lg:mb-0 flex items-center justify-center">
        <div className="relative w-full max-w-lg overflow-hidden rounded-lg shadow-lg">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={16}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
          >
            {galleryImages.map((image) => (
              <SwiperSlide key={image.alt} className="flex">
                <div className="w-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
