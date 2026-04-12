"use client";
import { notFound } from "next/navigation";
import Link from "next/link";
import { useState, use } from "react";
import { colorOptions, getProductBySlug } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useQuote } from "@/context/QuoteContext";

function getColourImage(baseImage: string, ralCode: string, finish: string): string {
  const filename = baseImage.split("/").pop() || "";
  const base = filename
    .replace(/-\d{4}-(glossy|matt)\.(jpg|png)$/, "")
    .replace(/-magnelis\.(jpg|png)$/, "");
  if (!base || base === filename) return baseImage;
  if (finish === "Magnelis") return `/images/products/${base}-magnelis.jpg`;
  return `/images/products/${base}-${ralCode}-${finish.toLowerCase()}.jpg`;
}

function getRalCode(name: string): string {
  return (name.match(/\b(\d{4})\b/) || ["", ""])[1];
}

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const product = getProductBySlug(slug, "125/90")!;
  if (!product) notFound();

  const { addItem: addToCart } = useCart();
  const { addItem: addToQuote } = useQuote();
  const [activeView, setActiveView] = useState<"photo" | "drawing">("photo");
  const [selectedFinish, setSelectedFinish] = useState<"Glossy" | "Matt" | "Magnelis">("Glossy");
  const [selectedColour, setSelectedColour] = useState(colorOptions.Glossy[3]);
  const [quantity, setQuantity] = useState(1);
  const [cartAdded, setCartAdded] = useState(false);
  const [quoteAdded, setQuoteAdded] = useState(false);

  const colours = colorOptions[selectedFinish] || [];
  const ralCode = getRalCode(selectedColour.name);
  const displayImage = activeView === "photo"
    ? getColourImage(product.image, ralCode, selectedFinish)
    : product.image;

  function handleFinishChange(finish: "Glossy" | "Matt" | "Magnelis") {
    setSelectedFinish(finish);
    setSelectedColour(colorOptions[finish][0]);
  }

  function buildItem() {
    return {
      productId: product.id,
      name: product.name,
      system: product.system,
      colour: selectedColour.name,
      finish: selectedFinish,
      image: getColourImage(product.image, ralCode, selectedFinish),
      unitPrice: product.unitPrice,
      unit: product.unit,
      quantity,
    };
  }

  function handleAddToCart() {
    addToCart({ cartId: `${product.id}-${selectedFinish}-${ralCode || "mag"}-${Date.now()}`, ...buildItem() });
    setCartAdded(true);
    setTimeout(() => setCartAdded(false), 2500);
  }

  function handleAddToQuote() {
    addToQuote({ quoteId: `${product.id}-${selectedFinish}-${ralCode || "mag"}-${Date.now()}`, ...buildItem() });
    setQuoteAdded(true);
    setTimeout(() => setQuoteAdded(false), 2500);
  }

  return (
    <>
      <section className="bg-navy text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-400">
            <Link href="/" className="hover:text-gold">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/shop/half-round-125" className="hover:text-gold">125/90 System</Link>
            <span className="mx-2">/</span>
            <span className="text-gold">{product.name}</span>
          </nav>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              {product.drawing && (
                <div className="flex gap-2 mb-4">
                  {(["photo", "drawing"] as const).map(v => (
                    <button key={v} onClick={() => setActiveView(v)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        activeView === v ? "bg-navy text-white" : "bg-gray-100 text-navy hover:bg-gray-200"
                      }`}>
                      {v === "photo" ? "Product Photo" : "Technical Drawing"}
                    </button>
                  ))}
                </div>
              )}
              <div className="bg-cream rounded-xl flex items-center justify-center" style={{ minHeight: 380 }}>
                {activeView === "photo" ? (
                  <img src={displayImage} alt={product.name}
                    className="max-w-full max-h-96 object-contain p-8"
                    onError={(e) => { (e.target as HTMLImageElement).src = product.image; }} />
                ) : (
                  <iframe src={product.drawing} className="w-full rounded-xl" style={{ height: 420 }}
                    title={`${product.name} technical drawing`} />
                )}
              </div>
            </div>

            <div>
              <span className="text-sm text-gold font-semibold uppercase tracking-wider">125/90 System — {product.category}</span>
              <h1 className="text-3xl font-bold text-navy mt-2">{product.name}</h1>
              {product.unitPrice > 0 && (
                <p className="text-2xl font-bold text-gold mt-3">
                  £{product.unitPrice.toFixed(2)}
                  <span className="text-sm font-normal text-gray-500 ml-2">{product.unit} (ex-VAT)</span>
                </p>
              )}
              <p className="mt-4 text-gray-600 leading-relaxed text-sm">{product.description}</p>
              <ul className="mt-4 space-y-1">
                {product.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />{f}
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <p className="text-sm font-semibold text-navy mb-2">Select Finish</p>
                <div className="flex gap-2">
                  {(["Glossy", "Matt", "Magnelis"] as const).map(f => (
                    <button key={f} onClick={() => handleFinishChange(f)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium border-2 transition-colors ${
                        selectedFinish === f ? "border-gold bg-gold/10 text-navy" : "border-gray-200 text-gray-600 hover:border-gold"
                      }`}>{f}</button>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <p className="text-sm font-semibold text-navy mb-2">
                  Select Colour
                  {selectedColour && <span className="font-normal text-gray-500 ml-2">— {selectedColour.name}</span>}
                </p>
                <div className="flex flex-wrap gap-2">
                  {colours.map(c => (
                    <button key={c.name} title={c.name} onClick={() => setSelectedColour(c)}
                      className={`w-9 h-9 rounded-full border-4 transition-all ${
                        selectedColour.name === c.name ? "border-gold scale-110" : "border-gray-200 hover:border-gold"
                      }`}
                      style={{ backgroundColor: c.hex }} />
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <p className="text-sm font-semibold text-navy mb-2">Quantity ({product.unit})</p>
                <div className="flex items-center gap-3">
                  <button onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="w-10 h-10 rounded-lg border-2 border-gray-200 hover:border-gold text-navy font-bold text-lg flex items-center justify-center">−</button>
                  <span className="text-xl font-bold text-navy w-8 text-center">{quantity}</span>
                  <button onClick={() => setQuantity(q => q + 1)}
                    className="w-10 h-10 rounded-lg border-2 border-gray-200 hover:border-gold text-navy font-bold text-lg flex items-center justify-center">+</button>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <button onClick={handleAddToCart}
                    className={`px-8 py-3.5 font-bold rounded-lg transition-colors ${
                      cartAdded ? "bg-green-600 text-white" : "bg-gold text-navy hover:bg-gold-light"
                    }`}>
                    {cartAdded ? "✓ Added" : "Add to Cart"}
                  </button>
                  <Link href="/cart" className="text-sm text-navy hover:text-gold underline">View Cart</Link>
                </div>
                <div className="flex items-center gap-3">
                  <button onClick={handleAddToQuote}
                    className={`px-8 py-3.5 font-bold rounded-lg border-2 transition-colors ${
                      quoteAdded ? "border-blue-500 bg-blue-50 text-blue-700" : "border-navy text-navy hover:border-gold hover:text-gold"
                    }`}>
                    {quoteAdded ? "✓ Added to Quote" : "Add to Quote"}
                  </button>
                  <Link href="/quote" className="text-sm text-navy hover:text-gold underline">View Quote</Link>
                </div>
              </div>
              <p className="mt-2 text-xs text-gray-400">Prices shown ex-VAT. 20% VAT added at checkout.</p>
              <div className="mt-6">
                <Link href="/shop/half-round-125" className="text-sm text-gray-500 hover:text-navy">← Back to 125/90 System</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
