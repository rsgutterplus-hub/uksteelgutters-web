"use client";
import { useState } from "react";
import Link from "next/link";

export default function TradeAccountPage() {
  const [form, setForm] = useState({
    name: "", company: "", tradeType: "", email: "", phone: "",
    address: "", vatNumber: "", newsletter: true, message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value, type } = e.target;
    setForm(f => ({ ...f, [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      const res = await fetch("/api/trade-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.ok) setSubmitted(true);
      else setError(data.error || "Something went wrong. Please try again.");
    } catch {
      setError("Network error. Please try again.");
    }
    setSending(false);
  }

  if (submitted) {
    return (
      <>
        <section className="bg-navy text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold">Trade <span className="text-gold">Account</span></h1>
          </div>
        </section>
        <section className="py-20 text-center max-w-lg mx-auto px-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-navy">Application Received!</h2>
          <p className="mt-4 text-gray-600">Thank you for applying for a trade account. We&apos;ll review your application and be in touch within one working day with your trade pricing and account details.</p>
          <Link href="/" className="mt-8 inline-flex items-center px-8 py-3.5 bg-gold text-navy font-bold rounded-lg hover:bg-gold-light transition-colors">Back to Home</Link>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Trade <span className="text-gold">Account</span></h1>
          <p className="mt-2 text-gray-400">Register for exclusive trade pricing, priority support and industry updates.</p>
        </div>
      </section>

      {/* Benefits banner */}
      <section className="bg-cream py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: "💰", title: "Trade Pricing", desc: "Exclusive discounts on all products" },
              { icon: "⚡", title: "Priority Service", desc: "Dedicated account manager" },
              { icon: "📦", title: "Bulk Orders", desc: "Preferential rates on volume" },
              { icon: "📧", title: "Early Access", desc: "New products & offers first" },
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

      {/* Form */}
      <section className="py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-navy mb-6">Apply for a Trade Account</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-navy mb-1">Full Name *</label>
                <input required name="name" value={form.name} onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-gold" />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-1">Company Name *</label>
                <input required name="company" value={form.company} onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-gold" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-navy mb-1">Trade Type *</label>
              <select required name="tradeType" value={form.tradeType} onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-gold bg-white">
                <option value="">Select your trade...</option>
                <option>Builder / Main Contractor</option>
                <option>Roofer</option>
                <option>Guttering Specialist</option>
                <option>Plumber</option>
                <option>Architect / Designer</option>
                <option>Property Developer</option>
                <option>Housing Association / Local Authority</option>
                <option>Other Trade</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-navy mb-1">Email Address *</label>
                <input required type="email" name="email" value={form.email} onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-gold" />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-1">Phone Number *</label>
                <input required name="phone" value={form.phone} onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-gold" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-navy mb-1">Business Address</label>
              <input name="address" value={form.address} onChange={handleChange}
                placeholder="Address, Town, Postcode"
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-gold" />
            </div>

            <div>
              <label className="block text-sm font-medium text-navy mb-1">VAT Number (if applicable)</label>
              <input name="vatNumber" value={form.vatNumber} onChange={handleChange}
                placeholder="GB123456789"
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-gold" />
            </div>

            <div>
              <label className="block text-sm font-medium text-navy mb-1">Anything else we should know?</label>
              <textarea name="message" value={form.message} onChange={handleChange} rows={3}
                placeholder="Typical order sizes, project types, specific requirements..."
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-gold resize-none" />
            </div>

            <div className="flex items-start gap-3">
              <input type="checkbox" id="newsletter" name="newsletter"
                checked={form.newsletter} onChange={handleChange}
                className="mt-0.5 w-4 h-4 accent-gold" />
              <label htmlFor="newsletter" className="text-sm text-gray-600">
                Sign me up for the UKSteelGutters trade newsletter — new products, offers, and industry news.
              </label>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button type="submit" disabled={sending}
              className="w-full py-3.5 bg-gold text-navy font-bold rounded-lg hover:bg-gold-light transition-colors disabled:opacity-50">
              {sending ? "Submitting..." : "Apply for Trade Account"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
