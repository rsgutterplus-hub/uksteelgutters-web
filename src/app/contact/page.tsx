import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — UKSteelGutters",
  description: "Get a quote for Bilka steel guttering. Contact UKSteelGutters for pricing and delivery information.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Get a <span className="text-gold">Quote</span>
          </h1>
          <p className="mt-3 text-gray-400 max-w-2xl">
            Contact us for competitive pricing on Bilka steel guttering systems
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-navy mb-2">
                Phone (optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-colors"
                placeholder="Your phone number"
              />
            </div>

            <div>
              <label htmlFor="system" className="block text-sm font-medium text-navy mb-2">
                System Required
              </label>
              <select
                id="system"
                name="system"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-colors"
              >
                <option value="">Select a system...</option>
                <option value="125/90">Half Round 125/90</option>
                <option value="150/100">Half Round 150/100</option>
                <option value="both">Both / Not sure</option>
              </select>
            </div>

            <div>
              <label htmlFor="finish" className="block text-sm font-medium text-navy mb-2">
                Finish Preference
              </label>
              <select
                id="finish"
                name="finish"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-colors"
              >
                <option value="">Select a finish...</option>
                <option value="glossy">Glossy (PE)</option>
                <option value="matt">Matt (MATT PE)</option>
                <option value="magnelis">Magnelis (ZM310)</option>
                <option value="unsure">Not sure</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-colors"
                placeholder="Tell us about your project — roof measurements, colour preference, delivery location, etc."
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-10 py-3.5 bg-gold text-navy font-bold rounded-lg hover:bg-gold-light transition-colors"
            >
              Send Enquiry
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
