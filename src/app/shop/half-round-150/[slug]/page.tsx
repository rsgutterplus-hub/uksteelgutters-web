import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ColorSwatches from "@/components/ColorSwatches";
import { getProductBySlug, getProductsBySystem } from "@/data/products";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getProductsBySystem("150/100").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug, "150/100");
  if (!product) return {};
  return {
    title: `${product.name} — 150/100 System — UKSteelGutters`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug, "150/100");
  if (!product) notFound();

  return (
    <>
      <section className="bg-navy text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-400">
            <Link href="/" className="hover:text-gold">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/shop/half-round-150" className="hover:text-gold">150/100 System</Link>
            <span className="mx-2">/</span>
            <span className="text-gold">{product.name}</span>
          </nav>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image */}
            <div className="bg-cream rounded-xl p-8 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="max-w-full max-h-96 object-contain"
              />
            </div>

            {/* Details */}
            <div>
              <span className="text-sm text-gold font-semibold uppercase tracking-wider">
                150/100 System — {product.category}
              </span>
              <h1 className="text-3xl font-bold text-navy mt-2">{product.name}</h1>
              {product.price && (
                <p className="text-2xl font-bold text-gold mt-4">{product.price}</p>
              )}
              <p className="mt-6 text-gray-600 leading-relaxed">{product.description}</p>

              {/* Features */}
              <div className="mt-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">
                  Features
                </h3>
                <ul className="space-y-2">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Colours */}
              <div className="mt-8 space-y-4">
                <ColorSwatches range="Glossy" />
                <ColorSwatches range="Matt" />
                <ColorSwatches range="Magnelis" />
              </div>

              {/* CTA */}
              <div className="mt-10 flex gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3.5 bg-gold text-navy font-bold rounded-lg hover:bg-gold-light transition-colors"
                >
                  Request a Quote
                </Link>
                <Link
                  href="/shop/half-round-150"
                  className="inline-flex items-center px-6 py-3.5 border-2 border-gray-200 text-navy font-medium rounded-lg hover:border-gold transition-colors"
                >
                  Back to 150/100
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
