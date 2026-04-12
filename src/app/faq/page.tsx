import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Steel Guttering FAQs",
  description: "Answers to frequently asked questions about Bilka steel guttering — SSAB Swedish steel, Z275 zinc coating, Magnelis, sizing, installation, colours, delivery and trade pricing.",
};

const faqs = [
  {
    q: "What steel is used in Bilka guttering?",
    a: "Bilka guttering is made from 0.6mm steel sourced from SSAB, one of the world's leading steel manufacturers headquartered in Sweden. SSAB steel is prized for its consistency, high strength and suitability for demanding coating processes. The steel is 0.6mm thick, which is thicker than many competitor products that use 0.5mm steel.",
  },
  {
    q: "What is Z275 galvanisation?",
    a: "Z275 refers to hot-dip galvanisation with 275 grams of zinc per square metre, applied to both sides of the steel strip. The zinc layer acts as the primary corrosion barrier. If the surface coating is ever scratched or damaged, the zinc beneath provides sacrificial protection, corroding preferentially to protect the steel underneath. Z275 is the galvanisation standard used on Bilka Glossy and Matt guttering.",
  },
  {
    q: "What is Magnelis coating and why is it better than standard zinc?",
    a: "Magnelis (ZM310) is an advanced zinc-aluminium-magnesium alloy coating developed as a superior alternative to standard hot-dip zinc galvanisation. Where standard Z275 zinc provides protection only where the coating is intact, Magnelis actively migrates to protect cut edges and any small areas of damage through a self-healing mechanism. The combination of zinc, aluminium and magnesium creates a denser, more chemically complex protective layer that outperforms standard zinc in corrosive environments. It is the preferred choice for coastal properties, rural locations and anywhere with high atmospheric pollution. It carries a 25-year anti-corrosion guarantee and has a natural silver-grey appearance that does not require a colour coat.",
  },
  {
    q: "What is Prelaq Nova coating?",
    a: "Prelaq Nova is the proprietary polymer coating system applied on top of the zinc galvanisation to give Bilka guttering its colour. It is applied in two layers totalling 2 x 35 microns. Prelaq Nova provides excellent UV resistance, flexibility to resist cracking during installation, and strong adhesion to the zinc substrate beneath. It is available in both gloss and matt formulations depending on the finish selected.",
  },
  {
    q: "What size steel guttering do I need?",
    a: "For most domestic properties, the 125/90mm system (125mm gutter, 90mm downpipe) is sufficient. As a rough guide, each downpipe outlet handles approximately 50m² of roof area. The larger 150/100mm system suits properties with a bigger roof, a steep pitch, or located in a high-rainfall area. If you’re unsure, use our quote service and we’ll calculate the correct system for your project.",
  },
  {
    q: "What is the difference between the 125/90 and 150/100 systems?",
    a: "The numbers refer to the gutter width and downpipe diameter in millimetres. The 125/90 system uses a 125mm half-round gutter with 90mm round downpipes and is suitable for most standard UK homes. The 150/100 system uses a 150mm gutter and 100mm downpipes, providing greater flow capacity for larger properties, commercial buildings or locations with heavy rainfall.",
  },
  {
    q: "How long does Bilka steel guttering last?",
    a: "Bilka steel guttering comes with a 30-year anti-corrosion guarantee on Glossy and Matt finishes, and a 25-year guarantee on Magnelis. In practice, properly maintained steel guttering typically lasts 40 years or more. By comparison, standard plastic guttering has a typical lifespan of 10–20 years.",
  },
  {
    q: "Is steel guttering better than plastic?",
    a: "Steel guttering is significantly more durable. It won’t discolour, crack or become brittle over time, handles temperature extremes better, and adds genuine kerb appeal. The higher upfront cost is offset by a much longer lifespan — you’re unlikely to need to replace it again. For builders, developers or anyone wanting a long-term solution, steel is the better choice.",
  },
  {
    q: "What RAL colours are available for Bilka steel guttering?",
    a: "The Glossy range offers 12 RAL colours including RAL 7016 Anthracite Grey, RAL 9005 Jet Black, RAL 9010 Pure White, RAL 8017 Chocolate Brown, RAL 6020 Chrome Green, RAL 3009 Oxide Red, RAL 7024 Dark Grey, RAL 9006 Light Silver, RAL 6005 Moss Green, RAL 3005 Wine Red, RAL 5010 Royal Blue and RAL 7011 Iron Grey. The Matt range offers 7 of these in a low-sheen finish. Magnelis is available in one natural zinc colour.",
  },
  {
    q: "Can I install steel guttering myself?",
    a: "Yes. Bilka steel guttering is designed for straightforward installation without specialist tools. You’ll need a hacksaw or tin snips for cutting (never an angle grinder, which damages the coating), a drill for bracket fixings, and silicone sealant for corners and stop ends. See our installation guide for step-by-step instructions and official Bilka videos.",
  },
  {
    q: "What bracket spacing is recommended?",
    a: "Fix brackets at 60–90cm centres along the fascia or rafter. End brackets should be placed 10cm from each end of the gutter. Always place a bracket either side of any union joint. The gutter should have a fall (slope) of 2–5mm per linear metre towards the downpipe outlet.",
  },
  {
    q: "How do I cut Bilka steel guttering?",
    a: "Use a hacksaw or manual tin snips. Do not use an angle grinder, circular saw or flex grinder — these generate heat and sparks that damage the protective Prelaq Nova coating and Z275 zinc layer, leading to rust. After cutting, always clean away any metal swarf from inside the gutter, as even small metal filings will rust and cause staining.",
  },
  {
    q: "What is the free delivery threshold?",
    a: "Free delivery applies to all orders of £600 or more (ex-VAT) to UK mainland addresses. Orders below £600 are subject to a standard carriage charge — contact us for a delivery quote. Next day delivery is available on stocked items ordered by noon, Monday to Friday. Scotland: 2 working days.",
  },
  {
    q: "Do you offer trade accounts and discounts?",
    a: "Yes. We offer trade accounts for builders, roofers, guttering specialists, architects, property developers and housing associations. Approved trade customers receive exclusive discount pricing. Apply via our trade account page — applications are reviewed within one working day.",
  },
  {
    q: "What warranty comes with Bilka steel guttering?",
    a: "Bilka Glossy guttering carries a 30-year anti-corrosion guarantee and 15-year colour guarantee. Matt finishes carry a 30-year anti-corrosion guarantee and 20-year colour guarantee. Magnelis carries a 25-year corrosion and colour guarantee. These guarantees apply to correctly installed guttering under normal conditions.",
  },
  {
    q: "What gutter fall (slope) is required for steel guttering?",
    a: "A fall of 2–5mm per linear metre is recommended, running towards the downpipe outlet. This is sufficient for effective drainage without being noticeable from ground level. The Bilka adjustable fascia bracket makes it straightforward to set and fine-tune the correct slope during installation.",
  },
];

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(f => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Frequently Asked <span className="text-gold">Questions</span></h1>
          <p className="mt-2 text-gray-400">Everything you need to know about Bilka steel guttering — from the steel itself to installation and delivery.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="bg-white rounded-xl border border-gray-100 group">
              <summary className="px-6 py-4 cursor-pointer font-semibold text-navy text-sm list-none flex items-center justify-between gap-4">
                {faq.q}
                <svg className="w-4 h-4 flex-shrink-0 text-gold transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
