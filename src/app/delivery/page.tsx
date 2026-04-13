import Link from "next/link";

export const metadata = {
  title: "Delivery & Returns — UKSteelGutters",
  description: "Free delivery on orders over £600 ex-VAT to UK mainland. Next day delivery on stocked items ordered by noon. Returns policy for Bilka steel guttering.",
};

export default function DeliveryPage() {
  return (
    <>
      <section className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Delivery <span className="text-gold">&amp; Returns</span></h1>
          <p className="mt-2 text-gray-400">Everything you need to know about getting your order and returning it if needed.</p>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-cream py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: "✅", title: "Free Over £600", desc: "UK mainland orders ex-VAT" },
              { icon: "⚡", title: "Next Day", desc: "Order by noon Mon–Fri" },
              { icon: "📦", title: "Pallet Delivery", desc: "Tail lift & pump truck" },
              { icon: "🔄", title: "14-Day Returns", desc: "On stocked items" },
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

          {/* Delivery Charges */}
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
                    <td className="px-5 py-4 text-gray-700">Under £600</td>
                    <td className="px-5 py-4 text-gray-700">
                      Standard carriage charge applies
                      <span className="block text-xs text-gray-400 mt-0.5">Contact us for a delivery quote</span>
                    </td>
                  </tr>
                  <tr className="border-t border-gray-100 bg-green-50">
                    <td className="px-5 py-4 font-semibold text-navy">£600 and over</td>
                    <td className="px-5 py-4 font-bold text-green-700">✓ Free Delivery</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-3">All order values shown exclude VAT. Scotland and remote areas may be subject to surcharge — please contact us before ordering.</p>
          </div>

          {/* Delivery Times */}
          <div>
            <h2 className="text-xl font-bold text-navy mb-3">Delivery Dates &amp; Times</h2>
            <div className="bg-cream rounded-xl p-6 space-y-3 text-sm text-gray-700">
              <p><strong className="text-navy">Next day delivery</strong> is available on all stocked items ordered by noon, Monday to Friday (excluding bank holidays).</p>
              <p><strong className="text-navy">Scotland:</strong> Please allow 2 working days.</p>
              <p><strong className="text-navy">Delivery window:</strong> 8:00am – 5:30pm Monday to Friday. Timed or Saturday deliveries can be arranged at extra charge — please contact us when placing your order.</p>
              <p>If we are unable to meet the next day timeframe we will contact you immediately to advise of any extended lead time.</p>
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
            <h2 className="text-xl font-bold text-navy mb-3">Checking Your Goods on Arrival</h2>
            <div className="text-sm text-gray-700 space-y-3">
              <p>Please check all goods carefully while the delivery driver is still present. If any damage has occurred, <strong>accept the goods</strong> (do not return to sender), clearly note the damage on the driver&apos;s paperwork, and contact us within 48 hours.</p>
              <p>Failure to mark the driver&apos;s paperwork may result in damage claims not being honoured. We cannot accept liability for damage reported after installation.</p>
            </div>
          </div>

          {/* Returns */}
          <div>
            <h2 className="text-xl font-bold text-navy mb-4">Returns Policy</h2>
            <div className="space-y-4 text-sm text-gray-700">

              <div className="bg-white rounded-xl border border-gray-100 p-5">
                <h3 className="font-semibold text-navy mb-2">Stocked items — 14-day return window</h3>
                <p>If you wish to return stocked, unmodified goods, please notify us within <strong>14 days of receipt</strong>. Goods must be returned in their original, undamaged condition and in original packaging.</p>
                <ul className="mt-3 space-y-1.5 text-gray-600">
                  <li className="flex gap-2"><span className="text-gray-400 flex-shrink-0">&#8594;</span>Return carriage is at the customer&apos;s cost</li>
                  <li className="flex gap-2"><span className="text-gray-400 flex-shrink-0">&#8594;</span>A restocking fee may apply</li>
                  <li className="flex gap-2"><span className="text-gray-400 flex-shrink-0">&#8594;</span>Refund issued within 14 days of receiving the goods back</li>
                  <li className="flex gap-2"><span className="text-gray-400 flex-shrink-0">&#8594;</span>Original delivery charges are non-refundable unless goods are faulty</li>
                </ul>
              </div>

              <div className="bg-red-50 rounded-xl border border-red-100 p-5">
                <h3 className="font-semibold text-navy mb-2">Non-returnable items</h3>
                <p className="text-gray-600">The following cannot be returned unless faulty:</p>
                <ul className="mt-2 space-y-1 text-gray-600">
                  <li className="flex gap-2"><span className="text-red-400 flex-shrink-0">✗</span>Goods that have been cut, modified or installed</li>
                  <li className="flex gap-2"><span className="text-red-400 flex-shrink-0">✗</span>Special or non-standard colour orders made to order</li>
                  <li className="flex gap-2"><span className="text-red-400 flex-shrink-0">✗</span>Items returned without prior authorisation</li>
                  <li className="flex gap-2"><span className="text-red-400 flex-shrink-0">✗</span>Goods showing white rust, surface corrosion or any coating damage caused by incorrect storage</li>
                  <li className="flex gap-2"><span className="text-red-400 flex-shrink-0">✗</span>Goods that have been in contact with wet concrete, copper, soil or other corrosive materials</li>
                  <li className="flex gap-2"><span className="text-red-400 flex-shrink-0">✗</span>Goods stored for more than 45 days after delivery</li>
                </ul>
              </div>

              {/* White rust callout */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <h3 className="font-semibold text-navy mb-2">⚠ Storage damage &amp; white rust</h3>
                <p className="text-gray-700 leading-relaxed">
                  Bilka steel guttering has a galvanised zinc coating that requires correct storage to remain in warranted condition. If products are stored in damp, poorly ventilated conditions — or stacked tightly without airflow — a white powdery deposit called white rust (zinc hydroxide) can form on the surface. This is a storage condition, not a manufacturing defect.
                </p>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  We are unable to accept returns of goods where white rust, coating discolouration or physical damage has occurred after delivery as a result of incorrect storage or handling. This includes goods that have been left exposed to rain, stored directly on wet ground, wrapped in non-breathable plastic, or kept beyond the 45-day installation window specified in the Bilka warranty.
                </p>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  To protect your order, please store all steel guttering products indoors or under cover immediately on delivery, raised off the ground on skids, with adequate airflow around all surfaces. Full guidance on correct storage is available on our{" "}
                  <Link href="/installation-guide" className="text-navy font-semibold underline underline-offset-2 hover:text-gold transition-colors">
                    Installation Guide
                  </Link>.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-gray-100 p-5">
                <h3 className="font-semibold text-navy mb-2">Faulty or incorrect goods</h3>
                <p>If you receive goods that are faulty or different from what you ordered, contact us within <strong>48 hours of delivery</strong>. We will arrange collection and replacement or issue a full refund at no cost to you.</p>
              </div>

              <p className="text-xs text-gray-400">Nothing in this returns policy affects your statutory rights as a consumer under the Consumer Rights Act 2015 or the Consumer Contracts Regulations 2013.</p>
            </div>
          </div>

          {/* Handling */}
          <div>
            <h2 className="text-xl font-bold text-navy mb-3">Handling</h2>
            <p className="text-sm text-gray-700">Steel guttering sections can be heavy and awkward. We recommend using two people when handling longer lengths. UKSteelGutters will not be held responsible for injuries caused during self-offloading.</p>
          </div>

          {/* CTA */}
          <div className="bg-navy rounded-xl p-8 text-center text-white">
            <h3 className="text-xl font-bold mb-2">Questions about delivery or returns?</h3>
            <p className="text-gray-400 text-sm mb-6">We&apos;re happy to discuss options for large or complex orders.</p>
            <Link href="/contact" className="inline-flex items-center px-8 py-3.5 bg-gold text-navy font-bold rounded-lg hover:bg-gold-light transition-colors">Contact Us</Link>
          </div>

        </div>
      </section>
    </>
  );
}
