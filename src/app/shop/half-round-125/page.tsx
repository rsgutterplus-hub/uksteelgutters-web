import { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import ColorSwatches from "@/components/ColorSwatches";
import { getProductsBySystem } from "@/data/products";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Half Round 125/90 System — UKSteelGutters",
  description:
    "Bilka 125mm half round steel gutter system with 90mm downpipes. Complete range of gutters, downpipes, brackets and fittings in Glossy, Matt and Magnelis finishes.",
};

export default function HalfRound125Page() {
  const products = getProductsBySystem("125/90");

  return (
    <>
      <section className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-gold">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gold">Half Round 125/90</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold">
            Half Round <span className="text-gold">125/90</span> System
          </h1>
          <p className="mt-3 text-gray-400 max-w-2xl">
            The standard residential Bilka steel gutter system. 125mm half round gutters paired with
            90mm round downpipes — the most popular choice for UK homes.
          </p>
        </div>
      </section>

      <section className="bg-cream py-10 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <ColorSwatches range="Glossy" />
          <ColorSwatches range="Matt" />
          <ColorSwatches range="Magnelis" />
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-navy">All 125/90 Components</h2>
            <span className="text-sm text-gray-500">{products.length} products</span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} systemSlug="half-round-125" />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">About the 125/90 System</h2>
              <div className="prose text-gray-600 text-sm space-y-3">
                <p>The Bilka 125/90 half round system is the standard residential guttering solution, suitable for most UK homes with roof areas up to approximately 80m².</p>
                <p>Manufactured from 0.6mm steel with your choice of Glossy PE, Matt PE or Magnelis ZM310 coatings, this system offers far superior longevity compared to plastic alternatives.</p>
                <p>The complete system includes gutters, downpipes, brackets, angles, stop ends, outlets and all necessary fittings for a professional installation.</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy mb-4">System Specifications</h3>
              <dl className="space-y-3 text-sm">
                {[["Gutter Width","125mm"],["Gutter Profile","Half Round"],["Downpipe Diameter","90mm"],["Material Thickness","0.6mm"],["Material","Bilka Steel"],["Gutter Lengths","2m & 4m"],["Downpipe Lengths","2m & 3m"],["Glossy Colours","10 RAL options"],["Matt Colours","7 RAL options"],["Magnelis","Natural zinc finish"]].map(([label, value]) => (
                  <div key={label} className="flex justify-between border-b border-gray-200 pb-2">
                    <dt className="text-gray-500">{label}</dt>
                    <dd className="font-semibold text-navy">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
