"use client";
import Link from "next/link";
import { useState } from "react";
import { useQuote } from "@/context/QuoteContext";

export default function QuotePage() {
  const { items, removeItem, updateQty, clearQuote } = useQuote();
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, items }),
      });
      const data = await res.json();
      if (data.ok) {
        setSubmitted(true);
        clearQuote();
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
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
            <h1 className="text-3xl font-bold">Quote <span className="text-gold">Submitted</span></h1>
          </div>
        </section>
        <section className="py-20 text-center max-w-lg mx-auto px-4">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-navy">Thank you — we&apos;ll be in touch!</h2>
          <p className="mt-4 text-gray-600">Your quote request has been received. We&apos;ll review your requirements and get back to you within one working day.</p>
          <Link href="/" className="mt-8 inline-flex items-center px-8 py-3.5 bg-gold text-navy font-bold rounded-lg hover:bg-gold-light transition-colors">Back to Home</Link>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Quote <span className="text-gold">Request</span></h1>
          <p className="mt-2 text-gray-400">Add products to your quote, then submit your details and we&apos;ll get back to you with pricing.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Quote items */}
            <div className="lg:col-span-3">
              <h2 className="text-lg font-bold text-navy mb-4">Your Quote List</h2>
              {items.length === 0 ? (
                <div className="bg-cream rounded-xl p-8 text-center">
                  <p className="text-gray-500">No items in your quote yet.</p>
                  <Link href="/shop/half-round-125" className="mt-4 inline-block text-gold hover:underline font-medium">Browse Products →</Link>
                </div>
              ) : (
                <div className="space-y-3">
                  {items.map(item => (
                    <div key={item.quoteId} className="bg-white rounded-xl border border-gray-100 p-4 flex gap-4 items-center">
                      <img src={item.image} alt={item.name}
                        className="w-16 h-16 object-contain bg-cream rounded-lg p-1 flex-shrink-0"
                        onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-navy text-sm">{item.name}</p>
                        <p className="text-xs text-gray-500">{item.system} • {item.colour} • {item.finish}</p>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <button onClick={() => updateQty(item.quoteId, item.quantity - 1)}
                          className="w-7 h-7 rounded border border-gray-200 hover:border-gold text-navy font-bold text-sm flex items-center justify-center">−</button>
                        <span className="w-6 text-center font-bold text-navy text-sm">{item.quantity}</span>
                        <button onClick={() => updateQty(item.quoteId, item.quantity + 1)}
                          className="w-7 h-7 rounded border border-gray-200 hover:border-gold text-navy font-bold text-sm flex items-center justify-center">+</button>
                      </div>
                      <span className="text-xs text-gray-400 flex-shrink-0">{item.unit}</span>
                      <button onClick={() => removeItem(item.quoteId)}
                        className="text-gray-300 hover:text-red-500 transition-colors flex-shrink-0">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ))}
                  <button onClick={clearQuote} className="text-xs text-gray-400 hover:text-gray-600 mt-2">Clear all</button>
                </div>
              )}
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              <h2 className="text-lg font-bold text-navy mb-4">Your Details</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-navy mb-1">Full Name *</label>
                  <input required name="name" value={form.name} onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-gold" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-1">Company</label>
                  <input name="company" value={form.company} onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-gold" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-1">Email Address *</label>
                  <input required type="email" name="email" value={form.email} onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-gold" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-1">Phone Number</label>
                  <input name="phone" value={form.phone} onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-gold" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-1">Additional Notes</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={3}
                    placeholder="Project details, quantities, special requirements..."
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-gold resize-none" />
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button type="submit" disabled={sending || items.length === 0}
                  className="w-full py-3.5 bg-navy text-white font-bold rounded-lg hover:bg-navy/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                  {sending ? "Sending..." : "Submit Quote Request"}
                </button>
                {items.length === 0 && (
                  <p className="text-xs text-gray-400 text-center">Add at least one product to submit a quote.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
