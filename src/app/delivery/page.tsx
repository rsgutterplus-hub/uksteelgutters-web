import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Delivery Information — UKSteelGutters",
  description: "Delivery information for Bilka steel guttering. Nationwide UK delivery available.",
};

export default function DeliveryPage() {
  return (
    <>
      <section className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Delivery <span className="text-gold">Information</span>
          </h1>
          <p className="mt-3 text-gray-400 max-w-2xl">
            Nationwide UK delivery for all Bilka steel guttering products
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Standard Delivery",
                  time: "5–7 working days",
                  desc: "Delivered to your door on a standard pallet service. Suitable for most residential orders.",
                },
                {
                  title: "Express Delivery",
                  time: "2–3 working days",
                  desc: "Priority dispatch for urgent projects. Subject to stock availability.",
                },
                {
                  title: "Collection",
                  time: "By arrangement",
                  desc: "Collect from our warehouse. Contact us to arrange a collection time.",
                },
              ].map((option) => (
                <div key={option.title} className="bg-cream rounded-xl p-6 border border-gray-100">
                  <h3 className="text-lg font-bold text-navy">{option.title}</h3>
                  <p className="text-gold font-semibold text-sm mt-1">{option.time}</p>
                  <p className="text-gray-500 text-sm mt-3">{option.desc}</p>
                </div>
              ))}
            </div>

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">Packaging & Handling</h2>
                <p>
                  All steel guttering products are carefully packaged to prevent damage during transit.
                  Gutters are supplied in protective packaging with end caps to prevent deformation.
                  Longer lengths (4m gutters, 3m downpipes) require appropriate vehicle access for delivery.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">Delivery Areas</h2>
                <p>
                  We deliver to all mainland UK addresses. Deliveries to Scottish Highlands, Northern
                  Ireland, and offshore islands may incur additional charges — please contact us for
                  a quote.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-4">Lead Times</h2>
                <p>
                  Stock colours are typically dispatched within 2–3 working days. Non-stock RAL colours
                  may require 2–3 weeks for manufacturing. Contact us for current availability on your
                  chosen colour.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3.5 bg-gold text-navy font-bold rounded-lg hover:bg-gold-light transition-colors"
              >
                Get a Delivery Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
