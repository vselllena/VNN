import Image from "next/image";
import Header from "./components/Header";

import machineImage from "./machine.jpg";
import studioImage from "./components/studio.webp";
import Footer from "./components/Footer";
import HoverableImageSections from "./components/HoverableImageSections";

export default function Home() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none font-bold fixed inset-x-0 top-1/2 -translate-y-1/2 z-50 flex items-center justify-center mix-blend-difference"
      >
        <span className="text-[clamp(2.5rem,8vw,9rem)] font-serif uppercase tracking-[0.6em] text-white drop-shadow-lg text-center leading-tight transition-opacity duration-500">
          VALENTINA NIKOLOVA
        </span>
      </div>
      <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-[#f7f6f4] text-black">
        <Header />
        <section className="snap-start snap-always min-h-screen flex flex-col">
          <div className="relative flex-1">
            <Image
              src={machineImage}
              alt="Tailoring machine"
              className="w-full h-screen object-cover"
              priority
            />
          </div>
        </section>

        <section className="snap-start snap-always min-h-screen bg-[#f7f6f4] flex items-center">
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
                <div className="overflow-hidden rounded-sm border border-black/5 p-6 shadow-lg">
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

        <section className="snap-start snap-always min-h-screen bg-[#f7f6f4] flex items-center">
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
                <div className="overflow-hidden rounded-sm border border-black/5 bg-[#f7f6f4] p-6 shadow-lg">
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
        <HoverableImageSections />

        <section className="snap-start snap-always min-h-screen flex items-center justify-center">
          <div className="text-center text-5xl font-serif">We believe in thoughtful design that respects both the wearer and the craft.</div>
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
        <Footer />
      </main>
    </>
  );
}
