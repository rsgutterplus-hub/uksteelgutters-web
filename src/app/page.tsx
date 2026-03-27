import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
          <div className="max-w-3xl">
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">
              Official UK Bilka Stockist
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Premium Steel
              <br />
              <span className="text-gold">Guttering Systems</span>
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-2xl">
              Bilka half round steel gutters built to last. Superior corrosion resistance,
              Scandinavian engineering, and a wide range of colours to complement any property.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/shop/half-round-125"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-gold text-navy font-bold rounded-lg hover:bg-gold-light transition-colors"
              >
                Shop 125/90 System
              </Link>
              <Link
                href="/shop/half-round-150"
                className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-white/30 text-white font-bold rounded-lg hover:border-gold hover:text-gold transition-colors"
              >
                Shop 150/100 System
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Bilka */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-navy">Why Choose Bilka Steel Gutters?</h2>
            <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
              European-manufactured steel rainwater systems trusted across the UK
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Superior Durability",
                desc: "0.6mm Bilka steel with advanced coatings provides decades of maintenance-free performance, far outlasting plastic alternatives.",
                icon: "🛡️",
              },
              {
                title: "Three Finish Ranges",
                desc: "Choose from Glossy PE, Matt PE, or Magnelis ZM310 finishes. Over 15 RAL colours available to match any property style.",
                icon: "🎨",
              },
              {
                title: "Two System Sizes",
                desc: "125/90mm for standard residential or 150/100mm for larger properties and high-rainfall areas. Complete system components available.",
                icon: "📐",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-8 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <span className="text-3xl">{item.icon}</span>
                <h3 className="mt-4 text-lg font-bold text-navy">{item.title}</h3>
                <p className="mt-2 text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Systems overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-navy">Our Gutter Systems</h2>
            <p className="mt-3 text-gray-500">Complete half round steel guttering systems by Bilka</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                system: "Half Round 125/90",
                desc: "The standard residential system. 125mm gutter with 90mm downpipes — ideal for most UK homes.",
                href: "/shop/half-round-125",
                features: ["125mm half round gutter", "90mm round downpipe", "Full range of fittings", "All colour options"],
              },
              {
                system: "Half Round 150/100",
                desc: "The high-capacity system. 150mm gutter with 100mm downpipes — for larger roofs and higher rainfall.",
                href: "/shop/half-round-150",
                features: ["150mm half round gutter", "100mm round downpipe", "Full range of fittings", "All colour options"],
              },
            ].map((sys) => (
              <Link
                key={sys.system}
                href={sys.href}
                className="group relative bg-navy rounded-xl p-10 text-white overflow-hidden hover:bg-navy-light transition-colors"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -translate-y-8 translate-x-8" />
                <h3 className="text-2xl font-bold group-hover:text-gold transition-colors">
                  {sys.system}
                </h3>
                <p className="mt-3 text-gray-400 text-sm leading-relaxed">{sys.desc}</p>
                <ul className="mt-6 space-y-2">
                  {sys.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 inline-flex items-center gap-2 text-gold text-sm font-semibold">
                  Browse products
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Finishes */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-navy">Available Finishes</h2>
            <p className="mt-3 text-gray-500">Three coating ranges to suit every application</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Glossy Range",
                coating: "Polyester (PE) coating",
                desc: "High-gloss finish with excellent UV resistance. The most popular choice for residential properties. 10 RAL colours available.",
                colors: 10,
              },
              {
                name: "Matt Range",
                coating: "Matt Polyester (MATT PE) coating",
                desc: "Elegant low-sheen finish that reduces glare and complements modern architecture. Premium matt appearance.",
                colors: 7,
              },
              {
                name: "Magnelis Range",
                coating: "Magnelis ZM310 coating",
                desc: "Advanced zinc-aluminium-magnesium alloy coating. Exceptional corrosion resistance — ideal for coastal and rural environments.",
                colors: 1,
              },
            ].map((finish) => (
              <div
                key={finish.name}
                className="bg-white rounded-xl p-8 border border-gray-100 text-center"
              >
                <h3 className="text-xl font-bold text-navy">{finish.name}</h3>
                <p className="text-gold text-sm font-medium mt-1">{finish.coating}</p>
                <p className="mt-4 text-gray-500 text-sm leading-relaxed">{finish.desc}</p>
                <p className="mt-4 text-navy font-semibold">
                  {finish.colors} colour{finish.colors > 1 ? "s" : ""} available
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold">Ready to Order?</h2>
          <p className="mt-4 text-gray-400">
            Get in touch for a competitive quote on Bilka steel guttering. We deliver nationwide across the UK.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-gold text-navy font-bold rounded-lg hover:bg-gold-light transition-colors"
            >
              Get a Quote
            </Link>
            <Link
              href="/delivery"
              className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-white/30 text-white font-bold rounded-lg hover:border-gold hover:text-gold transition-colors"
            >
              Delivery Info
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
