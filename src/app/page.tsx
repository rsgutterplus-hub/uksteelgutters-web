import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Steel Guttering UK — Official Bilka Stockist",
  description:
    "Buy Bilka half round steel guttering online. Made from SSAB Swedish steel with Z275 hot-dip galvanisation. 125/90 and 150/100 systems in 12 RAL colours. 30-year guarantee. Free UK delivery over £600.",
};

function CoatingDiagram() {
  const layers = [
    { label: "Prelaq Nova colour coat", spec: "35 µm", color: "#C6A037", textColor: "#1B2A3B", h: 28 },
    { label: "Primer", spec: "", color: "#8B7355", textColor: "#fff", h: 14 },
    { label: "Zinc galvanisation (Z275)", spec: "275 g/m²", color: "#9EAAB4", textColor: "#1B2A3B", h: 30 },
    { label: "SSAB Swedish steel", spec: "0.6 mm", color: "#1B2A3B", textColor: "#C6A037", h: 72 },
    { label: "Zinc galvanisation (Z275)", spec: "275 g/m²", color: "#9EAAB4", textColor: "#1B2A3B", h: 30 },
    { label: "Primer", spec: "", color: "#8B7355", textColor: "#fff", h: 14 },
    { label: "Reverse coat", spec: "", color: "#6B8C9E", textColor: "#fff", h: 18 },
  ];

  let y = 0;
  const totalH = layers.reduce((s, l) => s + l.h, 0);

  return (
    <svg viewBox={`0 0 520 ${totalH + 16}`} xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg mx-auto">
      {layers.map((layer, i) => {
        const rect = (
          <g key={i}>
            <rect x="0" y={y + 8} width="520" height={layer.h} fill={layer.color} />
            <text
              x="16"
              y={y + 8 + layer.h / 2}
              dominantBaseline="middle"
              fill={layer.textColor}
              fontSize={layer.h >= 28 ? "11" : "9"}
              fontFamily="system-ui, sans-serif"
              fontWeight={layer.label.includes("SSAB") ? "700" : "500"}
            >
              {layer.label}
            </text>
            {layer.spec && (
              <text
                x="504"
                y={y + 8 + layer.h / 2}
                dominantBaseline="middle"
                textAnchor="end"
                fill={layer.textColor}
                fontSize="10"
                fontFamily="system-ui, sans-serif"
                fontWeight="600"
              >
                {layer.spec}
              </text>
            )}
          </g>
        );
        y += layer.h;
        return rect;
      })}
    </svg>
  );
}

const specRows = [
  ["Use", "Exterior", "Exterior", "—"],
  ["Surface coating thickness", "35 µm / 35 µm", "40 µm / 40 µm", "ISO 2808"],
  ["Thickness tolerance", "± 6 µm", "± 6 µm", "EN 10169-1"],
  ["Gloss level (GU)", "40", "< 5", "EN 13523-2"],
  ["Min. internal bend radius", "0.5 × t", "0.5 × t", "EN 13523-7"],
  ["Min. formation temperature", "−15 °C", "−15 °C", "—"],
  ["Scratch resistance", "35 N", "30 N", "EN 13523-5"],
  ["Stain resistance", "Very good", "Very good", "—"],
  ["Max. working temperature", "+100 °C", "+100 °C", "—"],
  ["UV category", "RUV3", "RUV4", "prEN 10169-2"],
  ["Corrosion resistance", "RC5", "RC5", "prEN 10169-2"],
  ["Zinc coating (both sides)", "275 g/m²", "275 g/m²", "—"],
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-90" />
        {/* Gutter image — bottom right */}
        <div className="absolute bottom-0 right-0 w-[600px] h-[650px] sm:w-[800px] sm:h-[866px] lg:w-[1000px] lg:h-[1084px] pointer-events-none">
          <img
            src="/images/unnamed%20(4).jpg"
            alt="Bilka steel gutter and downpipe system"
            className="w-full h-full object-contain object-right-bottom"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
          <div className="max-w-3xl">
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">Official UK Bilka Stockist</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Premium Steel
              <br />
              <span className="text-gold">Guttering Systems</span>
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-2xl">
              Bilka half round steel gutters built on SSAB Swedish steel with Z275 hot-dip galvanisation. 30-year anti-corrosion guarantee, a wide range of RAL colours, and nationwide delivery.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/shop/half-round-125" className="inline-flex items-center justify-center px-8 py-3.5 bg-gold text-navy font-bold rounded-lg hover:bg-gold-light transition-colors">Shop 125/90 System</Link>
              <Link href="/shop/half-round-150" className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-white/30 text-white font-bold rounded-lg hover:border-gold hover:text-gold transition-colors">Shop 150/100 System</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Bilka */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-navy">Why Choose Bilka Steel Gutters?</h2>
            <p className="mt-3 text-gray-500 max-w-2xl mx-auto">European-manufactured steel rainwater systems built on world-class Swedish steel</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "30-Year Guarantee", desc: "30-year anti-corrosion guarantee on Glossy and Matt finishes. Bilka 0.6mm SSAB Swedish steel with multilayer coatings far outlasts plastic alternatives.", icon: "🛡️" },
              { title: "Three Finish Ranges", desc: "Choose from Glossy PE, Matt PE, or Magnelis ZM310 finishes. 12 Glossy colours, 7 Matt colours, and natural Magnelis available.", icon: "🎨" },
              { title: "Two System Sizes", desc: "125/90mm for standard residential or 150/100mm for larger properties and high-rainfall areas. Complete system components in all colours.", icon: "📐" },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-8 border border-gray-100 hover:shadow-md transition-shadow">
                <span className="text-3xl">{item.icon}</span>
                <h3 className="mt-4 text-lg font-bold text-navy">{item.title}</h3>
                <p className="mt-2 text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Steel — SSAB + coating diagram */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">The Steel</p>
              <h2 className="text-3xl font-bold mb-6">Built on SSAB Swedish Steel</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Every Bilka gutter system starts with 0.6mm steel from SSAB — one of the world&apos;s leading steel manufacturers, headquartered in Sweden. SSAB steel is renowned for its consistency, strength and suitability for demanding coating processes.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                The steel receives a Z275 hot-dip galvanisation — 275 grams of zinc per square metre applied to both sides — before the Prelaq Nova polymer colour coating is applied on top. Five protective layers in total give Bilka guttering its exceptional longevity and corrosion resistance.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Steel thickness", value: "0.6 mm" },
                  { label: "Zinc both sides", value: "Z275" },
                  { label: "Colour coat", value: "Prelaq Nova" },
                  { label: "Corrosion class", value: "RC5" },
                ].map(s => (
                  <div key={s.label} className="bg-white/5 rounded-lg px-4 py-3 border border-white/10">
                    <p className="text-xs text-gray-400">{s.label}</p>
                    <p className="text-base font-bold text-gold mt-0.5">{s.value}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Coating layer diagram */}
            <div>
              <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-4 text-center">Five-layer coating cross-section</p>
              <div className="rounded-xl overflow-hidden border border-white/10">
                <CoatingDiagram />
              </div>
              <p className="text-xs text-gray-500 text-center mt-3">Not to scale. Coating layers exaggerated for clarity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical spec table */}
      <section className="py-16 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">Coating Specification</p>
            <h2 className="text-2xl font-bold text-navy">Technical Characteristics</h2>
            <p className="mt-2 text-gray-500 text-sm">Bilka Prelaq Nova polyester coating — Glossy and Matt finishes</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="text-left px-5 py-3 font-semibold">Parameter</th>
                  <th className="text-left px-5 py-3 font-semibold">Glossy</th>
                  <th className="text-left px-5 py-3 font-semibold">Matt</th>
                  <th className="text-left px-5 py-3 font-semibold text-gray-400">Standard</th>
                </tr>
              </thead>
              <tbody>
                {specRows.map(([param, glossy, matt, std], i) => (
                  <tr key={param} className={`border-t border-gray-100 ${i % 2 === 0 ? "" : "bg-cream"}`}>
                    <td className="px-5 py-3 text-gray-700 font-medium">{param}</td>
                    <td className="px-5 py-3 text-navy font-semibold">{glossy}</td>
                    <td className="px-5 py-3 text-navy font-semibold">{matt}</td>
                    <td className="px-5 py-3 text-gray-400 text-xs">{std}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3 text-center">Source: Bilka technical data. Zinc coating Z275 = 275 g/m² applied to both sides of the steel strip.</p>
        </div>
      </section>

      {/* Magnelis explained */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Advanced Coating</p>
              <h2 className="text-3xl font-bold text-navy mb-6">What is Magnelis ZM310?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Magnelis is an advanced zinc-aluminium-magnesium alloy coating (ZM310) developed as a step up from standard hot-dip galvanisation. Where standard Z275 zinc coating relies on zinc alone, Magnelis combines zinc with aluminium and magnesium to create a more complex protective layer.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                The key advantage is <strong className="text-navy">self-healing at cut edges</strong>. When steel is cut during installation, standard zinc-coated steel leaves the cut edge exposed. Magnelis actively migrates to protect those edges, dramatically reducing the risk of rust initiation at cut points.
              </p>
              <p className="text-gray-600 leading-relaxed">
                It is the preferred choice for coastal properties, rural environments and anywhere with high atmospheric corrosion. It carries a 25-year anti-corrosion guarantee and requires no colour coat — its natural silver-grey appearance weathers consistently over time.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-cream rounded-xl p-6">
                <h3 className="font-bold text-navy mb-4 text-sm uppercase tracking-wider">Magnelis vs Standard Zinc</h3>
                <div className="space-y-3">
                  {[
                    ["Coating type", "ZM310 Zn+Al+Mg alloy", "Z275 pure zinc"],
                    ["Cut edge protection", "Self-healing", "None"],
                    ["Best for", "Coastal / rural", "Standard environments"],
                    ["Appearance", "Natural silver-grey", "Colour-coated"],
                    ["Guarantee", "25 years", "30 years"],
                  ].map(([label, mag, zinc]) => (
                    <div key={label} className="grid grid-cols-3 text-xs gap-2">
                      <span className="text-gray-500 font-medium">{label}</span>
                      <span className="text-navy font-semibold">{mag}</span>
                      <span className="text-gray-500">{zinc}</span>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-3 text-xs gap-2 mt-2 pt-2 border-t border-gray-200">
                  <span />
                  <span className="text-gold font-semibold">Magnelis</span>
                  <span className="text-gray-400">Standard zinc</span>
                </div>
              </div>
              <Link href="/faq" className="block bg-navy/5 rounded-xl p-4 text-sm text-navy font-medium hover:bg-navy/10 transition-colors">
                Read more in our FAQ →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Systems */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-navy">Our Gutter Systems</h2>
            <p className="mt-3 text-gray-500">Complete half round steel guttering systems by Bilka</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { system: "Half Round 125/90", desc: "The standard residential system. 125mm gutter with 90mm downpipes — ideal for most UK homes.", href: "/shop/half-round-125", features: ["125mm half round gutter — from £50.00/4m", "90mm round downpipe — from £32.40/3m", "Full range of fittings", "All colour options"] },
              { system: "Half Round 150/100", desc: "The high-capacity system. 150mm gutter with 100mm downpipes — for larger roofs and higher rainfall.", href: "/shop/half-round-150", features: ["150mm half round gutter — from £63.20/4m", "100mm round downpipe — from £39.60/3m", "Full range of fittings", "All colour options"] },
            ].map((sys) => (
              <Link key={sys.system} href={sys.href} className="group relative bg-navy rounded-xl p-10 text-white overflow-hidden hover:bg-navy-light transition-colors">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -translate-y-8 translate-x-8" />
                <h3 className="text-2xl font-bold group-hover:text-gold transition-colors">{sys.system}</h3>
                <p className="mt-3 text-gray-400 text-sm leading-relaxed">{sys.desc}</p>
                <ul className="mt-6 space-y-2">
                  {sys.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full" />{f}
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-navy">Available Finishes</h2>
            <p className="mt-3 text-gray-500">Three coating ranges to suit every application</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Glossy Range", coating: "Z275 + Prelaq Nova PE", desc: "SSAB steel with Z275 zinc galvanisation and high-gloss Prelaq Nova polyester coating. 12 RAL colours. 30-year anti-corrosion, 15-year colour guarantee.", colours: "12" },
              { name: "Matt Range", coating: "Z275 + Prelaq Nova Matt PE", desc: "SSAB steel with Z275 zinc galvanisation and low-sheen Prelaq Nova matt polyester coating. 7 RAL colours. 30-year anti-corrosion, 20-year colour guarantee.", colours: "7" },
              { name: "Magnelis Range", coating: "ZM310 Zn+Al+Mg alloy", desc: "SSAB steel with advanced ZM310 zinc-aluminium-magnesium alloy coating. Self-healing at cut edges. Outstanding corrosion resistance. 25-year guarantee.", colours: "1" },
            ].map((finish) => (
              <div key={finish.name} className="bg-white rounded-xl p-8 border border-gray-100 text-center">
                <h3 className="text-xl font-bold text-navy">{finish.name}</h3>
                <p className="text-gold text-sm font-medium mt-1">{finish.coating}</p>
                <p className="mt-4 text-gray-500 text-sm leading-relaxed">{finish.desc}</p>
                <p className="mt-4 text-navy font-semibold">{finish.colours} colour{finish.colours !== "1" ? "s" : ""} available</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold">Ready to Order?</h2>
          <p className="mt-4 text-gray-400">Get in touch for a competitive quote on Bilka steel guttering. We deliver nationwide across the UK.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="inline-flex items-center justify-center px-8 py-3.5 bg-gold text-navy font-bold rounded-lg hover:bg-gold-light transition-colors">Request a Quote</Link>
            <Link href="/faq" className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-white/30 text-white font-bold rounded-lg hover:border-gold hover:text-gold transition-colors">FAQs</Link>
          </div>
        </div>
      </section>
    </>
  );
}
