import Link from "next/link";

export const metadata = {
  title: "Installation Guide — UKSteelGutters",
  description:
    "Step-by-step installation guide for Bilka steel guttering systems. Precise specifications for hook spacing, gutter slope, expansion gaps and downpipe fitting for 125/90 and 150/100 systems.",
};

const steps = [
  {
    step: 1,
    title: "Select the right system size",
    body: "Bilka gutters are available in two sizes: 125mm gutters with 90mm downpipes, and 150mm gutters with 100mm downpipes. For roof areas up to 100m² use the 125/90 system; for areas over 100m² use 150/100. Never mix sizes — 125mm components are not compatible with 100mm downpipe elements.",
  },
  {
    step: 2,
    title: "Plan your drainage layout",
    body: "Prepare a drawing of the full rainwater system before you start. Install at least one downpipe per 8 linear metres of gutter. Downpipes are usually placed at building corners to minimise visual impact. The gutter slope and hook positions are determined by where the downpipes will be.",
  },
  {
    step: 3,
    title: "Mark and number the hooks",
    body: "Lay the required hooks in a line and number them in installation order. Draw a perpendicular slope line across each hook, accounting for a slope of 2–5mm per linear metre towards the outlet. Allow a minimum bending radius of 40mm from the end of each hook when marking.",
  },
  {
    step: 4,
    title: "Bend and install the hooks",
    body: "Bend each hook using hook-bending pliers, following the slope line marked in Step 3. The bending angle depends on your roof pitch — when installed, the hook cradle must sit perfectly horizontal. Fix hooks to every rafter at 600–900mm centres using the factory-drilled holes. At corners, fit one hook on each side.",
  },
  {
    step: 5,
    title: "Fit the corners and size the gutter",
    body: "Install corners before the gutter sections. Position the corner so the rain-shadow end sits in the hook spur, then press the outer edge into the lock. Measure each gutter section and cut to length with a hacksaw only — never use an abrasive blade or circular saw, as this voids the warranty. Leave a 1–2mm expansion gap between each gutter section and any corner or joining element to allow for thermal movement.",
  },
  {
    step: 6,
    title: "Cut the running outlet",
    body: "Lay the gutter loosely in the hooks without fixing it. Mark the position for the running outlet, then mark the cut circle to the downpipe diameter (90mm or 100mm). Cut with a hacksaw or manual snips — not a circular saw. Bend the cut edges outward so water flows cleanly into the outlet.",
  },
  {
    step: 7,
    title: "Install the gutter and running outlet",
    body: "Fit gutter sections by inserting the rain-shadow edge into the hook spur and pressing the front edge into the lock. Install the running outlet by inserting its bent edge into the outer channel of the gutter, pushing the funnel inward to integrate, then bending the safety tabs down onto the gutter to secure.",
  },
  {
    step: 8,
    title: "Fit the gutter stop ends",
    body: "Fit stop ends at both ends of each gutter run using a rubber hammer. This locks the gutter into the channel built into the stop end from the factory and provides a watertight seal without sealant.",
  },
  {
    step: 9,
    title: "Install the joining elements",
    body: "Start the joining element from the back of the gutter so the rubber gasket sits centrally over the joint between two sections. Close the front clamp, then bend the factory-fitted safety tab down to hold it. Fasten with wood screws through the factory-drilled holes for a permanent fix.",
  },
  {
    step: 10,
    title: "Fix the downpipe clamps",
    body: "Mount the first clamp in line with the running outlet on the building facade using wood screws or wall plugs as appropriate for the surface. Position the downpipe in the clamp and drive the safety nibs into the guides using a rubber hammer. Install at least one clamp per 3 metres of downpipe — also add a clamp at any joint between two downpipe sections.",
  },
  {
    step: 11,
    title: "Install elbows, downpipe and discharge elbow",
    body: "If the eaves project beyond the wall face, connect a 60° elbow to the running outlet funnel. Hold a second elbow 30mm from the wall (the depth of the clamp supports) and measure the gap between the two elbows. Add 100mm (50mm per end) for the joining overlap, then cut the intermediate connecting pipe to that length from its crimped end. Size the downpipe the same way, allowing for the discharge elbow to sit 100mm from the ground. Connect all sections in the direction of water flow and secure with clamps.",
  },
  {
    step: 12,
    title: "Fit the gutter flanges",
    body: "Install one gutter flange next to each hook, positioned over the rain-shadow edge of the fascia. Fix to the fascia using flat-head self-tapping screws through the factory holes, then fix to the gutter using self-tapping screws with gaskets (4.8×19mm) through the gutter-side holes. The flange adds rigidity and ensures a clean finish at the roofline.",
  },
];

const specs = [
  ["System for roof up to 100m²", "125mm gutter / 90mm downpipe"],
  ["System for roof over 100m²", "150mm gutter / 100mm downpipe"],
  ["Gutter slope", "2–5mm per linear metre"],
  ["Hook spacing", "600–900mm (one per rafter)"],
  ["Expansion gap at joints", "1–2mm between sections"],
  ["Min. hook bending radius", "40mm from hook end"],
  ["Downpipes per run", "At least 1 per 8 linear metres"],
  ["Downpipe clamp spacing", "Max 3m; also at every joint"],
  ["Discharge elbow height", "100mm above ground level"],
  ["Cutting tool", "Hacksaw or manual tin snips only"],
  ["Do NOT use", "Angle grinder, circular saw or flex"],
  ["Minimum install temperature", "−15°C (machine bend) / +5°C (manual bend)"],
];

export default function InstallationGuidePage() {
  return (
    <>
      <section className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">
            Installation <span className="text-gold">Guide</span>
          </h1>
          <p className="mt-2 text-gray-400">
            Complete step-by-step instructions from the official Bilka installation manual — with precise measurements for a professional result.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Video 1 */}
          <div>
            <h2 className="text-xl font-bold text-navy mb-2">Bilka Gutter System Overview</h2>
            <p className="text-sm text-gray-600 mb-4">
              An introduction to the Bilka rainwater system — components, construction and why it outperforms standard plastic guttering.
            </p>
            <div className="rounded-xl overflow-hidden bg-black" style={{ aspectRatio: "16/9" }}>
              <iframe
                src="https://www.youtube.com/embed/g26hqrduwX0"
                title="BILKA Gutter System"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Video 2 */}
          <div>
            <h2 className="text-xl font-bold text-navy mb-2">Fitting the Bilka Adjustable Bracket</h2>
            <p className="text-sm text-gray-600 mb-4">
              How to set the correct slope and fix the adjustable fascia bracket securely to the front beam.
            </p>
            <div className="rounded-xl overflow-hidden bg-black" style={{ aspectRatio: "16/9" }}>
              <iframe
                src="https://www.youtube.com/embed/gbUnHnTEDXI"
                title="How to Use the Bilka Adjustable Hook"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Safety note */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-sm text-amber-900">
            <p className="font-semibold mb-1">⚠ Before you start</p>
            <p>
              Gutter installation involves working at height. Always use fixed ropes, helmets and gloves. Wear soft-soled shoes on the roof and step only on areas supported by roof laths. Remove all metal swarf from the gutter surface with a soft brush during installation — steel filings left on the coating will rust.
            </p>
          </div>

          {/* Key specs */}
          <div>
            <h2 className="text-xl font-bold text-navy mb-4">Key Installation Specifications</h2>
            <div className="bg-cream rounded-xl p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                {specs.map(([label, value]) => (
                  <div key={label} className="flex gap-3">
                    <span className="w-2 h-2 bg-gold rounded-full flex-shrink-0 mt-1.5" />
                    <div>
                      <p className="font-semibold text-navy">{label}</p>
                      <p className="text-gray-600">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Step by step */}
          <div>
            <h2 className="text-xl font-bold text-navy mb-6">Step-by-Step Installation</h2>
            <div className="space-y-4">
              {steps.map((s) => (
                <div key={s.step} className="flex gap-5 bg-white rounded-xl border border-gray-100 p-5">
                  <div className="w-9 h-9 bg-navy text-gold rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {s.step}
                  </div>
                  <div>
                    <p className="font-semibold text-navy mb-1">{s.title}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bilka docs link */}
          <div className="bg-cream rounded-xl p-6 text-sm text-gray-700">
            <p className="font-semibold text-navy mb-2">Official Bilka technical documentation</p>
            <p>
              For full technical drawings, flow calculations and product data sheets, visit the official Bilka documentation page or contact us and we&apos;ll send the relevant PDFs directly.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              <a
                href="https://www.bilka.ro/en/documentation-en/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-navy text-white text-xs font-medium rounded-lg hover:bg-opacity-90 transition-colors"
              >
                Bilka Documentation →
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 border border-navy text-navy text-xs font-medium rounded-lg hover:bg-cream transition-colors"
              >
                Request PDFs
              </Link>
            </div>
          </div>

          {/* Need help */}
          <div className="bg-navy rounded-xl p-8 text-center text-white">
            <h3 className="text-xl font-bold mb-2">Need help sizing your system?</h3>
            <p className="text-gray-400 text-sm mb-6">
              Tell us your roof dimensions and we&apos;ll work out exactly what you need.
            </p>
            <Link
              href="/quote"
              className="inline-flex items-center px-8 py-3.5 bg-gold text-navy font-bold rounded-lg hover:bg-gold-light transition-colors"
            >
              Request a Quote
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
