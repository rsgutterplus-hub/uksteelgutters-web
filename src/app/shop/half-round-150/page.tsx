import { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import ColorSwatches from "@/components/ColorSwatches";
import { getProductsBySystem } from "@/data/products";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Half Round 150/100 System — UKSteelGutters",
  description:
    "Bilka 150mm half round steel gutter system with 100mm downpipes. High-capacity guttering for larger properties. Glossy, Matt and Magnelis finishes.",
};

export default function HalfRound150Page() {
  const products = getProductsBySystem("150/100");

  return (
    <>
      <section className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-gold">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gold">Half Round 150/100</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold">
            Half Round <span className="text-gold">150/100</span> System
          </h1>
          <p className="mt-3 text-gray-400 max-w-2xl">
            The high-capacity Bilka steel gutter system. 150mm half round gutters paired with
            100mm round downpipes — for larger properties and higher rainfall areas.
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
            <h2 className="text-2xl font-bold text-navy">All 150/100 Components</h2>
            <span className="text-sm text-gray-500">{products.length} products</span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} systemSlug="half-round-150" />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">About the 150/100 System</h2>
              <div className="prose text-gray-600 text-sm space-y-3">
                <p>The Bilka 150/100 half round system is designed for larger properties and areas with higher rainfall. With a 150mm gutter width and 100mm downpipes, it handles significantly more water volume than the 125/90 system.</p>
                <p>Ideal for properties with roof areas exceeding 80m², commercial buildings, or locations in high-rainfall regions of the UK.</p>
                <p>Like the 125/90 system, it is manufactured from 0.6mm steel with your choice of Glossy PE, Matt PE or Magnelis ZM310 coatings.</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy mb-4">System Specifications</h3>
              <dl className="space-y-3 text-sm">
                {[["Gutter Width","150mm"],["Gutter Profile","Half Round"],["Downpipe Diameter","100mm"],["Material Thickness","0.6mm"],["Material","Bilka Steel"],["Gutter Lengths","2m & 4m"],["Downpipe Lengths","2m & 3m"],["Glossy Colours","10 RAL options"],["Matt Colours","7 RAL options"],["Magnelis","Natural zinc finish"]].map(([label, value]) => (
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
