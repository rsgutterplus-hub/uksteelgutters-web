import Link from "next/link";

export const metadata = {
  title: "Delivery Information \u2014 UKSteelGutters",
  description: "Free delivery on orders over \u00a3600 ex-VAT to UK mainland. Next day delivery on stocked items ordered by noon.",
};

export default function DeliveryPage() {
  return (
    <>
      <section className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Delivery <span className="text-gold">Information</span></h1>
          <p className="mt-2 text-gray-400">Fast, reliable delivery of Bilka steel guttering across the UK.</p>
        </div>
      </section>

      {/* Key delivery highlights */}
      <section className="bg-cream py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: "\ud83d\ude9a", title: "Next Day Delivery", desc: "Order by noon, delivered next working day" },
              { icon: "\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f", title: "UK Mainland", desc: "Scotland 2 working days" },
              { icon: "\u2705", title: "Free Over \u00a3600", desc: "Free delivery on orders over \u00a3600 ex-VAT" },
              { icon: "\ud83d\udce6", title: "Pallet Delivery", desc: "Tail lift & pump truck offload" },
            ].map(b => (
              <div key={b.title} className="bg-white rounded-xl p-5 shadow-sm">
                <div className="text-3xl mb-2">{b.icon}</div>
                <p className="font-bold text-navy text-sm">{b.title}</p>
                <p className="text-xs text-gray-500 mt-1">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          {/* Charges */}
          <div>
            <h2 className="text-xl font-bold text-navy mb-4">Delivery Charges</h2>
            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-cream">
                  <tr>
                    <th className="text-left px-5 py-3 font-semibold text-navy">Order Value (ex-VAT)</th>
                    <th className="text-left px-5 py-3 font-semibold text-navy">UK Mainland</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-100">
                    <td className="px-5 py-4 text-gray-700">Under \u00a3600</td>
                    <td className="px-5 py-4 text-gray-700">
                      Standard carriage charge applies
                      <span className="block text-xs text-gray-400 mt-0.5">Contact us for a delivery quote</span>
                    </td>
                  </tr>
                  <tr className="border-t border-gray-100 bg-green-50">
                    <td className="px-5 py-4 font-semibold text-navy">\u00a3600 and over</td>
                    <td className="px-5 py-4 font-bold text-green-700">\u2713 Free Delivery</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-3">* All order values shown exclude VAT. Scotland and remote areas may be subject to surcharge — please contact us before ordering.</p>
          </div>

          {/* Dates & Times */}
          <div>
            <h2 className="text-xl font-bold text-navy mb-3">Delivery Dates &amp; Times</h2>
            <div className="bg-cream rounded-xl p-6 space-y-3 text-sm text-gray-700">
              <p><strong className="text-navy">Next day delivery</strong> is available on all stocked items ordered by noon, Monday to Friday (excluding bank holidays).</p>
              <p><strong className="text-navy">Scotland:</strong> Please allow 2 working days.</p>
              <p><strong className="text-navy">Delivery window:</strong> 8:00am \u2013 5:30pm Monday to Friday. Timed or Saturday deliveries can be arranged at extra charge \u2014 please contact us when placing your order.</p>
              <p>If we are unable to meet the next day timeframe for any reason, we will contact you immediately to advise of any extended lead time.</p>
            </div>
          </div>

          {/* Palletised goods */}
          <div>
            <h2 className="text-xl font-bold text-navy mb-3">Palletised Goods</h2>
            <div className="text-sm text-gray-700 space-y-3">
              <p>All palletised orders are delivered on large vehicles equipped with a tail lift and pump truck. The driver will offload and deliver as close to the property as possible, provided there is a hard standing surface. <strong>Drivers will not hand off-load palletised goods.</strong></p>
              <p>Please ensure clear access is available on the day of delivery. If access may be an issue, advise us when placing your order. A failed delivery due to access restrictions may result in additional re-delivery charges.</p>
            </div>
          </div>

          {/* Checking goods */}
          <div>
            <h2 className="text-xl font-bold text-navy mb-3">Checking Your Goods</h2>
            <div className="text-sm text-gray-700 space-y-3">
              <p>Please check all goods carefully while the delivery driver is still present. If any damage has occurred, <strong>accept the goods</strong> (do not return to sender), clearly note the damage on the driver&apos;s paperwork, and contact us as soon as possible.</p>
              <p>Failure to mark the driver&apos;s paperwork may result in damage claims not being honoured.</p>
            </div>
          </div>

          {/* Handling */}
          <div>
            <h2 className="text-xl font-bold text-navy mb-3">Handling</h2>
            <p className="text-sm text-gray-700">Steel guttering sections can be heavy and awkward. We recommend using two people when handling longer lengths. UKSteelGutters will not be held responsible for injuries caused during self-offloading.</p>
          </div>

          {/* CTA */}
          <div className="bg-navy rounded-xl p-8 text-center text-white">
            <h3 className="text-xl font-bold mb-2">Questions about delivery?</h3>
            <p className="text-gray-400 text-sm mb-6">We&apos;re happy to discuss delivery options for large or complex orders.</p>
            <Link href="/contact"
              className="inline-flex items-center px-8 py-3.5 bg-gold text-navy font-bold rounded-lg hover:bg-gold-light transition-colors">
              Contact Us
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
