import Link from "next/link";

export default function CheckoutSuccessPage() {
  return (
    <>
      <section className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Order <span className="text-gold">Confirmed</span></h1>
        </div>
      </section>
      <section className="py-20 text-center max-w-lg mx-auto px-4">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-navy">Thank you for your order!</h2>
        <p className="mt-4 text-gray-600">
          Your payment has been processed successfully. You will receive a confirmation email shortly.
          We will be in touch with delivery details.
        </p>
        <Link href="/" className="mt-8 inline-flex items-center px-8 py-3.5 bg-gold text-navy font-bold rounded-lg hover:bg-gold-light transition-colors">
          Back to Home
        </Link>
      </section>
    </>
  );
}
