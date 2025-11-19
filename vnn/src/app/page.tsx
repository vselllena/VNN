import Image from "next/image";
import Header from "./components/Header";

import machineImage from "./machine.jpg";
import { IntroText } from "./components/IntroText";
import TextImage from "./components/TextImage";
import ImageText from "./components/ImageText";
import Form from "./components/Form";

export default function Home() {
  return (
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

      <section className="snap-start snap-always min-h-screen flex items-center justify-center bg-white">
        <TextImage />
      </section>

      <section className="snap-start snap-always min-h-screen flex items-center justify-center bg-gray-50">
        <ImageText />
      </section>

      <section className="snap-start snap-always min-h-screen flex items-center justify-center bg-white">
        <Form />
      </section>

      <section className="snap-start snap-always h-10 flex items-center justify-center bg-gray-100">
        <p className="text-xs leading-5 text-center text-gray-600">
          &copy; 2024 VNN DESIGN, Inc. All rights reserved.
        </p>
      </section>
    </main>
  );
}
