"use client";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

const VAT_RATE = 0.20;

export default function CartPage() {
  const { items, removeItem, updateQty, subtotal, clearCart } = useCart();

  const vat = subtotal * VAT_RATE;
  const total = subtotal + vat;

  async function handleCheckout() {
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items }),
    });
    const data = await res.json();
    if (data.url) window.location.href = data.url;
    else alert(data.error || "Checkout failed. Please try again.");
  }

  if (items.length === 0) {
    return (
      <>
        <section className="bg-navy text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold">Your <span className="text-gold">Cart</span></h1>
          </div>
        </section>
        <section className="py-20 text-center">
          <p className="text-gray-500 text-lg">Your cart is empty.</p>
          <Link href="/shop/half-round-125" className="mt-6 inline-flex items-center px-8 py-3.5 bg-gold text-navy font-bold rounded-lg hover:bg-gold-light transition-colors">
            Browse Products
          </Link>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Your <span className="text-gold">Cart</span></h1>
          <p className="mt-2 text-gray-400">{items.length} item{items.length !== 1 ? "s" : ""}</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Items */}
          <div className="space-y-4 mb-8">
            {items.map(item => (
              <div key={item.cartId} className="bg-white rounded-xl border border-gray-100 p-4 flex gap-4 items-center">
                <img src={item.image} alt={item.name}
                  className="w-20 h-20 object-contain bg-cream rounded-lg p-2 flex-shrink-0"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-navy">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.system} System &bull; {item.colour} &bull; {item.finish}</p>
                  <p className="text-sm text-gold font-semibold mt-1">
                    \u00a3{item.unitPrice.toFixed(2)} {item.unit} (ex-VAT)
                  </p>
                </div>
                {/* Qty */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  <button onClick={() => updateQty(item.cartId, item.quantity - 1)}
                    className="w-8 h-8 rounded border border-gray-200 hover:border-gold text-navy font-bold flex items-center justify-center">\u2212</button>
                  <span className="w-8 text-center font-bold text-navy">{item.quantity}</span>
                  <button onClick={() => updateQty(item.cartId, item.quantity + 1)}
                    className="w-8 h-8 rounded border border-gray-200 hover:border-gold text-navy font-bold flex items-center justify-center">+</button>
                </div>
                {/* Line total */}
                <div className="text-right flex-shrink-0 w-24">
                  <p className="font-bold text-navy">\u00a3{(item.unitPrice * item.quantity).toFixed(2)}</p>
                  <p className="text-xs text-gray-400">ex-VAT</p>
                </div>
                {/* Remove */}
                <button onClick={() => removeItem(item.cartId)}
                  className="text-gray-300 hover:text-red-500 transition-colors flex-shrink-0" title="Remove">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {/* Totals */}
          <div className="bg-cream rounded-xl p-6 max-w-sm ml-auto">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal (ex-VAT)</span>
                <span className="font-semibold text-navy">\u00a3{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">VAT (20%)</span>
                <span className="font-semibold text-navy">\u00a3{vat.toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-200 pt-2 flex justify-between text-base">
                <span className="font-bold text-navy">Total (inc-VAT)</span>
                <span className="font-bold text-gold text-lg">\u00a3{total.toFixed(2)}</span>
              </div>
            </div>
            <button onClick={handleCheckout}
              className="mt-6 w-full py-3.5 bg-gold text-navy font-bold rounded-lg hover:bg-gold-light transition-colors">
              Proceed to Checkout
            </button>
            <button onClick={clearCart}
              className="mt-3 w-full py-2 text-sm text-gray-400 hover:text-gray-600">
              Clear Cart
            </button>
          </div>

          <div className="mt-6">
            <Link href="/shop/half-round-125" className="text-sm text-gray-500 hover:text-navy">\u2190 Continue Shopping</Link>
          </div>
        </div>
      </section>
    </>
  );
}
