import Link from "next/link";

export const metadata = {
  title: "Installation Guide — UKSteelGutters",
  description: "Step-by-step installation guide for Bilka steel guttering systems. Video guides, technical tips and bracket spacing for 125/90 and 150/100 systems.",
};

export default function InstallationGuidePage() {
  return (
    <>
      <section className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Installation <span className="text-gold">Guide</span></h1>
          <p className="mt-2 text-gray-400">Everything you need to install your Bilka steel guttering system correctly, first time.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Video 1 */}
          <div>
            <h2 className="text-xl font-bold text-navy mb-2">Bilka Gutter System Overview</h2>
            <p className="text-sm text-gray-600 mb-4">An introduction to the Bilka rainwater system — components, construction and why it outperforms standard plastic guttering.</p>
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
            <h2 className="text-xl font-bold text-navy mb-2">How to Use the Bilka Adjustable Bracket</h2>
            <p className="text-sm text-gray-600 mb-4">A short guide to fitting the adjustable fascia bracket — how to set the correct slope and fix it securely to the front beam.</p>
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

          {/* Key specs */}
          <div>
            <h2 className="text-xl font-bold text-navy mb-4">Key Installation Specifications</h2>
            <div className="bg-cream rounded-xl p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                {[
                  ["Gutter fall (slope)", "2–5mm per linear metre"],
                  ["Bracket spacing", "60–90cm intervals"],
                  ["End brackets", "10cm from each gutter end"],
                  ["Gutter gap at joints", "2–3mm (thermal expansion)"],
                  ["Downpipe bracket spacing", "Max 2m apart"],
                  ["First downpipe bracket", "150mm below elbow"],
                  ["Recommended saw", "Hacksaw or manual tin snips only"],
                  ["Do not use", "Angle grinder or circular saw"],
                ].map(([label, value]) => (
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
              {[
                {
                  step: 1,
                  title: "Plan your fall",
                  body: "Fix the end brackets first, setting the correct slope of 2–5mm per linear metre towards the downpipe outlet. Run a string line between them to guide the remaining brackets.",
                },
                {
                  step: 2,
                  title: "Fix the brackets",
                  body: "Fix brackets at 60–90cm centres along the fascia or rafter. Place one bracket either side of any joint. Use the adjustable fascia bracket to fine-tune the gutter position and slope.",
                },
                {
                  step: 3,
                  title: "Fit the gutter sections",
                  body: "Starting at the end with a stop end already fitted, hook the back of the gutter into the bracket and press the front edge into the lock. Leave a 2–3mm gap between each section to allow for thermal movement.",
                },
                {
                  step: 4,
                  title: "Install unions and corners",
                  body: "Clip the union onto the back of the gutter so the gasket sits centrally over the joint. Press the front clips closed and bend the locking tabs. Fit corners and stop ends with a bead of silicone sealant in the recessed areas.",
                },
                {
                  step: 5,
                  title: "Fit the running outlet",
                  body: "Mark and cut the outlet hole with a hacksaw or tin snips — do not use an angle grinder or circular saw as this damages the coating. Bend cut edges outward to guide water into the outlet.",
                },
                {
                  step: 6,
                  title: "Install downpipes",
                  body: "Fix a string line along the wall for alignment. Mount the first bracket 150mm below the elbow, then at max 2m intervals, and the last bracket just above the discharge shoe. Secure bracket wedges with a piece of wood after fitting.",
                },
                {
                  step: 7,
                  title: "Fit discharge shoe",
                  body: "Fit the discharge shoe at the base of the downpipe to direct water clear of the wall. If connecting to a below-ground drain, fit a downpipe flange instead.",
                },
                {
                  step: 8,
                  title: "Clean up",
                  body: "Remove all metal swarf and cut debris from inside the gutters. Any steel filings left behind will rust and cause discolouration of the coating surface.",
                },
              ].map(s => (
                <div key={s.step} className="flex gap-5 bg-white rounded-xl border border-gray-100 p-5">
                  <div className="w-9 h-9 bg-navy text-gold rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0">{s.step}</div>
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
            <p>For full technical drawings, flow calculations and product data sheets, visit the official Bilka documentation page or contact us and we&apos;ll send the relevant PDFs directly.</p>
            <div className="flex flex-wrap gap-3 mt-4">
              <a
                href="https://www.bilka.ro/en/documentation-en/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-navy text-white text-xs font-medium rounded-lg hover:bg-opacity-90 transition-colors"
              >
                Bilka Documentation →
              </a>
              <Link href="/contact" className="inline-flex items-center gap-1.5 px-4 py-2 border border-navy text-navy text-xs font-medium rounded-lg hover:bg-cream transition-colors">
                Request PDFs
              </Link>
            </div>
          </div>

          {/* Need help */}
          <div className="bg-navy rounded-xl p-8 text-center text-white">
            <h3 className="text-xl font-bold mb-2">Need help sizing your system?</h3>
            <p className="text-gray-400 text-sm mb-6">Tell us your roof dimensions and we&apos;ll work out exactly what you need.</p>
            <Link href="/quote" className="inline-flex items-center px-8 py-3.5 bg-gold text-navy font-bold rounded-lg hover:bg-gold-light transition-colors">Request a Quote</Link>
          </div>

        </div>
      </section>
    </>
  );
}
