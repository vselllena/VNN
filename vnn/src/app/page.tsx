import Image from "next/image";
import Header from "./components/Header";

import machineImage from "./machine.jpg";
import { IntroText } from "./components/IntroText";
import TextImage from "./components/TextImage";
import ImageText from "./components/ImageText";
import Form from "./components/Form";
import studioImage from "./components/studio.webp";

export default function Home() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none font-bold fixed inset-x-0 top-1/3 z-50 flex justify-center px-6 md:px-10 mix-blend-difference"
      >
        <span className="text-[clamp(2.5rem,8vw,9rem)] font-serif uppercase tracking-[0.6em] text-white drop-shadow-lg text-center leading-tight transition-opacity duration-500">
          VALENTINA NIKOLOVA
        </span>
      </div>
      <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-white text-black">
        <section className="snap-start snap-always min-h-screen flex flex-col">
        <Header />
        <div className="relative flex-1">
          <Image
            src={machineImage}
            alt="Tailoring machine"
            className="w-full h-screen object-cover"
            priority
          />
        </div>
      </section>

        <section className="snap-start snap-always min-h-screen bg-[#f8f2ea] flex items-center">
        <div className="relative w-full max-w-7xl mx-auto px-8 lg:px-10">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.06fr_0.4fr] items-center">
            <div className="relative">
              <div className="overflow-hidden">
                <Image
                  src={machineImage}
                  alt="Artisan at work"
                  className="w-full h-full object-cover rounded-sm shadow-2xl"
                  priority
                />
              </div>
            </div>
            <div className="relative flex flex-col gap-6">
              <div className="overflow-hidden rounded-sm border border-black/5 bg-white p-6 shadow-lg">
                <Image
                  src={studioImage}
                  alt="Blueprint sketch"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm uppercase tracking-[0.7em] text-gray-500 text-center">
                atelier 1773
              </p>
            </div>
          </div>
        </div>
        </section>

        <section className="snap-start snap-always min-h-screen bg-[#f8f2ea] flex items-center">
        <div className="relative w-full max-w-7xl mx-auto px-8 lg:px-10">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.06fr_2fr] items-center">
            <div className="relative">
              <div className="overflow-hidden">
                <Image
                  src={machineImage}
                  alt="Artisan at work"
                  className="w-full h-full object-cover rounded-sm shadow-2xl"
                  priority
                />
              </div>
            </div>
            <div className="relative flex flex-col gap-6">
              <div className="overflow-hidden rounded-sm border border-black/5 bg-white p-6 shadow-lg">
                <Image
                  src={studioImage}
                  alt="Blueprint sketch"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm uppercase tracking-[0.7em] text-gray-500 text-center">
                atelier 1773
              </p>
            </div>
          </div>
        </div>
        </section>

        {/* <section className="snap-start snap-always min-h-screen flex items-center justify-center bg-white">
        <TextImage />
      </section>

      <section className="snap-start snap-always min-h-screen flex items-center justify-center bg-gray-50">
        <ImageText />
      </section>

      <section className="snap-start snap-always min-h-screen flex items-center justify-center bg-white">
        <Form />
      </section> */}

        <section className="snap-start snap-always h-10 flex items-center justify-center bg-gray-100">
          <p className="text-xs leading-5 text-center text-gray-600">
            &copy; 2024 VNN DESIGN, Inc. All rights reserved.
          </p>
        </section>
      </main>
    </>
  );
}
