"use client";

import { useLanguage } from "../contexts/LanguageContext";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function AboutPage() {
  const { language } = useLanguage();

  const translations = {
    en: {
      label: "About Us",
      heroTitle:
        "Crafting bespoke garments with precision, patience, and a timeless sensibility.",
      heroText:
        "VNN DESIGN is a Sofia-based atelier dedicated to haute couture and tailored silhouettes. Each piece is meticulously designed, fitted, and produced in-house, ensuring that every garment carries our signature balance between structure and fluidity. From initial sketch to final stitch, we uphold the same commitment to craft that has defined our studio since its founding.",

      studioTitle: "Studio Philosophy",
      studioText:
        "We believe in thoughtful design that respects both the wearer and the craft. Our process is slow by design: researching textiles, draping, refining patterns, and collaborating closely with clients to capture their ideal form. Sustainability is woven into our practice through limited runs, natural fabrics, and locally sourced production partners.",

      detailsTitle: "Atelier Details",
      founded: "Founded in 1999",
      located: "Located in Sofia, Bulgaria",
      visits: "By-appointment studio visits",
      collections: "Made-to-measure collections",

      processTitle: "Process",
      processText:
       "The work process in our sewing studio often begins with a single sheet of paper — the place where an idea first comes to life. From there, we move on to carefully developing patterns, selecting materials with precision, and conducting a series of fittings that ensure perfect shape and quality. We specialize in producing small to medium-sized batches, where every detail matters. Each step is refined down to the very last stitch, so the final product delivered to the client is professionally crafted, unique, and fully aligned with the project’s vision.",
      servicesTitle: "Services",
      service1: "Concept & Design Development",
      service2: "Pattern Making",
      service3: "Prototyping",
      service4: "Consulting for Brands & Designers",
    },

    bg: {
      label: "За Нас",
      heroTitle:
        "Създаваме уникални облекла с прецизност, търпение и изтънчено усещане за стил.",
      heroText:
        "VNN DESIGN е ателие, посветено на модата и перфектните силуети. Всяка дреха е прецизно проектирана, напасната и изработена на място. От първата скица до последния бод следваме същия стремеж към качество, който определя нашето студио от основаването му.",

      studioTitle: "Философия на Ателието",
      studioText:
        "Вярваме в обмисления дизайн, който уважава както носещия, така и занаята. Нашият процес изследва текстили, драпиране, усъвършенстване на кройки и тясно сътрудничество с клиентите, за да уловим техния идеален силует. Устойчивостта е част от нашата практика чрез ограничени серии и естествени материи.",

      detailsTitle: "Детайли за Ателието",
      founded: "Основано през 1999",
      located: "Намира се в София, България",
      visits: "Посещения с предварително записване",
      collections: "Колекции по индивидуална изработка",

      processTitle: "Процес",
      processText:
        "Процесът на работа във VNN DESIGN започва често от един единствен лист хартия — мястото, където идеята оживява за първи път. Оттам следва внимателно изграждане на кройки, прецизен подбор на материали и серия от проби, които гарантират перфектното прилягане и качество. Специализирани сме в изработката на малки до средни серии, където всеки детайл има значение. Всяка стъпка е изпипана до последния бод, за да достигне до клиента продукт, който е едновременно професионално изработен, уникален и изцяло съобразен с визията на проекта.",

      servicesTitle: "Услуги",
      service1: "Създаване на концепция и дизайн",
      service2: "Конструиране на кройки",
      service3: "Изработка на мостри (проби)",
      service4: "Консултации за брандове и дизайнери",
    },
  };

  const t = translations[language];

  return (
    <main className="min-h-screen bg-[#f7f6f4] text-black">
      <Header />

      <section className="px-6 md:px-16 lg:px-24 py-16 md:py-24 space-y-10">
        <div className="space-y-4 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.5em] text-gray-500">
            {t.label}
          </p>
          <h1 className="text-4xl md:text-6xl font-serif leading-tight">
            {t.heroTitle}
          </h1>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            {t.heroText}
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-3">
          <div className="col-span-2 space-y-6">
            <h2 className="text-2xl font-serif">{t.studioTitle}</h2>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              {t.studioText}
            </p>
          </div>

          <div className="space-y-3 border-t border-gray-200 pt-6">
            <h3 className="text-sm uppercase tracking-[0.3em] text-gray-500">
              {t.detailsTitle}
            </h3>
            <ul className="space-y-2 text-gray-700 text-sm md:text-base">
              <li>{t.founded}</li>
              <li>{t.located}</li>
              <li>{t.visits}</li>
              <li>{t.collections}</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-16 lg:px-24 pb-24">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-2xl font-serif">{t.processTitle}</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              {t.processText}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-serif">{t.servicesTitle}</h3>
            <ul className="list-disc list-inside text-sm md:text-base text-gray-700 space-y-2">
              <li>{t.service1}</li>
              <li>{t.service2}</li>
              <li>{t.service3}</li>
              <li>{t.service4}</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
