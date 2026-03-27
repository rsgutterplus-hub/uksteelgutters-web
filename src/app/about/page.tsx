import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — UKSteelGutters",
  description: "About UKSteelGutters.co.uk — official UK stockist of Bilka steel guttering systems.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold">
            About <span className="text-gold">UKSteelGutters</span>
          </h1>
          <p className="mt-3 text-gray-400 max-w-2xl">
            Your trusted UK source for premium Bilka steel guttering systems
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-gray-600 leading-relaxed">
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">Official Bilka Stockist</h2>
            <p>
              UKSteelGutters is an official UK stockist of Bilka steel guttering products. We supply
              the complete range of Bilka half round gutter systems in both 125/90mm and 150/100mm
              sizes, along with all associated fittings and accessories.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">Why Steel Gutters?</h2>
            <p>
              Steel guttering offers significant advantages over plastic alternatives. With a lifespan
              measured in decades rather than years, steel gutters maintain their appearance and
              structural integrity through the harshest UK weather conditions. They don&apos;t sag, warp,
              or become brittle with age.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">About Bilka</h2>
            <p>
              Bilka is a leading European manufacturer of steel building products based in Romania.
              Their guttering systems are manufactured from 0.6mm steel and are available with three
              coating options: Glossy PE, Matt PE, and the advanced Magnelis ZM310 coating for
              exceptional corrosion resistance.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">Nationwide Delivery</h2>
            <p>
              We deliver Bilka steel guttering to addresses throughout the UK. Whether you&apos;re a
              homeowner, builder, or roofing contractor, we can supply the products you need with
              competitive pricing and reliable delivery.
            </p>
          </div>

          <div className="pt-6">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3.5 bg-gold text-navy font-bold rounded-lg hover:bg-gold-light transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
