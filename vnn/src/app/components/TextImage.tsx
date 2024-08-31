import Image from "next/image";
import studio from "./studio.webp";

export default function TextImage() {
  return (
    <div className="flex flex-col items-center justify-between w-full px-10 mx-auto mt-4 lg:mt-0 lg:py-12 lg:px-20 lg:flex-row">
      <div className="w-full lg:w-1/2 lg:pr-8">
        <h2 className="mb-4 text-2xl font-bold lg:text-3xl">
          TAILORING AT ITS BEST
        </h2>
        <p className="mb-4 text-xl italic">
          More than 40 years of Fast & Professional Service
        </p>
        <p className="mb-4 text-md lg:text-lg lg:mb-0">
          tailoring.studio is run and operated by Ruby, a master tailor with
          more than 40 years of continued experience from all types of custom
          tailoring and alterations. Following many years of distinguished
          service for various high-end retailers in Portland, Oregon, Ruby
          decided to finally establish her own business and to help her clients
          with all their fine custom fitting projects.
        </p>
      </div>
      <div className="w-full mb-8 lg:mb-0">
        <Image
          src={studio}
          alt="Tailoring Studio"
          className="object-cover rounded-lg"
        />
      </div>
    </div>
  );
}
