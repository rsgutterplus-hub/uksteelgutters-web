import { notFound } from "next/navigation";
import { getProductBySlug, getProductsBySystem } from "@/data/products";
import ProductDetailClient from "@/components/ProductDetailClient";
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://uksteelgutters.co.uk";

export async function generateStaticParams() {
  return getProductsBySystem("125/90").map(p => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug, "125/90");
  if (!product) return {};

  const description = `${product.description}${
    product.price ? ` ${product.price}.` : ""
  } Available in Glossy, Matt and Magnelis finishes. Free UK delivery over £600.`;

  return {
    title: `${product.name} | 125/90 System`,
    description,
    alternates: {
      canonical: `${BASE_URL}/shop/half-round-125/${product.slug}`,
    },
    openGraph: {
      title: `${product.name} | UKSteelGutters`,
      description: product.description,
      images: [{ url: `${BASE_URL}${product.image}` }],
    },
  };
}

export default async function ProductDetailPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const product = getProductBySlug(slug, "125/90");
  if (!product) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `${BASE_URL}${product.image}`,
    brand: { "@type": "Brand", name: "Bilka" },
    offers: {
      "@type": "Offer",
      priceCurrency: "GBP",
      price: product.unitPrice.toFixed(2),
      priceSpecification: {
        "@type": "PriceSpecification",
        price: product.unitPrice.toFixed(2),
        priceCurrency: "GBP",
        unitText: product.unit,
      },
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: "UKSteelGutters" },
    },
    additionalProperty: product.features.map(f => ({
      "@type": "PropertyValue",
      value: f,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section className="bg-navy text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-400">
            <a href="/" className="hover:text-gold">Home</a>
            <span className="mx-2">/</span>
            <a href="/shop/half-round-125" className="hover:text-gold">125/90 System</a>
            <span className="mx-2">/</span>
            <span className="text-gold">{product.name}</span>
          </nav>
        </div>
      </section>
      <ProductDetailClient
        product={product}
        backHref="/shop/half-round-125"
        backLabel="125/90 System"
      />
    </>
  );
}
