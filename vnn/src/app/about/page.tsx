import Footer from "../components/Footer";
import Header from "../components/Header";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f7f6f4] text-black">
      <Header />
      <section className="px-6 md:px-16 lg:px-24 py-16 md:py-24 space-y-10">
        <div className="space-y-4 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.5em] text-gray-500">
            About Us
          </p>
          <h1 className="text-4xl md:text-6xl font-serif leading-tight">
            Crafting bespoke garments with precision, patience, and a timeless
            sensibility.
          </h1>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            VNN DESIGN is a Sofia-based atelier dedicated to haute couture and
            tailored silhouettes. Each piece is meticulously designed, fitted,
            and produced in-house, ensuring that every garment carries our
            signature balance between structure and fluidity. From initial
            sketch to final stitch, we uphold the same commitment to craft that
            has defined our studio since its founding.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-3">
          <div className="col-span-2 space-y-6">
            <h2 className="text-2xl font-serif">Studio Philosophy</h2>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              We believe in thoughtful design that respects both the wearer and
              the craft. Our process is slow by design: researching textiles,
              draping, refining patterns, and collaborating closely with clients
              to capture their ideal form. Sustainability is woven into our
              practice through limited runs, natural fabrics, and locally sourced
              production partners.
            </p>
          </div>
          <div className="space-y-3 border-t border-gray-200 pt-6">
            <h3 className="text-sm uppercase tracking-[0.3em] text-gray-500">
              Atelier Details
            </h3>
            <ul className="space-y-2 text-gray-700 text-sm md:text-base">
              <li>Founded in 2018</li>
              <li>Located in Sofia, Bulgaria</li>
              <li>By-appointment studio visits</li>
              <li>Made-to-measure collections</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-16 lg:px-24 pb-24">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-2xl font-serif">Process</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              Consultations begin with understanding personal references and how
              each piece should live in the wardrobe. Afterwards, we develop
              sketches, prototype in muslin, and iterate through fittings until
              every seam aligns with the client’s vision.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-serif">Services</h3>
            <ul className="list-disc list-inside text-sm md:text-base text-gray-700 space-y-2">
              <li>Bespoke eveningwear & tailoring</li>
              <li>Editorial and bridal commissions</li>
              <li>Wardrobe refinement consultations</li>
              <li>Textile sourcing and development</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

