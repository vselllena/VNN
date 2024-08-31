import Image from "next/image";
import Header from "./components/Header";

import machineImage from "./machine.jpg";
import { IntroText } from "./components/IntroText";
import TextImage from "./components/TextImage";
import ImageText from "./components/ImageText";
import Form from "./components/Form";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="relative">
        <Image
          src={machineImage}
          alt="Description of the image"
          className="w-full max-h-[600px] object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <IntroText />
          </div>
        </div>
      </div>
      <TextImage />
      <hr className="block lg:hidden" />
      <ImageText />
      <Form />
      {/* <Location /> */}
      <p className="my-4 text-xs leading-5 text-center text-gray-500">
        &copy; 2024 VNN DESIGN, Inc. All rights reserved.
      </p>
    </div>
  );
}
