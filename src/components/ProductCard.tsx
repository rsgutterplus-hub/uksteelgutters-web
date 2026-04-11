import Link from "next/link";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  systemSlug: string;
}

export default function ProductCard({ product, systemSlug }: ProductCardProps) {
  return (
    <Link
      href={`/shop/${systemSlug}/${product.slug}`}
      className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-gold/30 transition-all duration-300 flex flex-col h-full"
    >
      {/* Image — exactly half the card */}
      <div className="relative overflow-hidden bg-cream" style={{ paddingBottom: '50%', position: 'relative' }}>
        <div className="absolute inset-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          <div className="absolute top-3 right-3">
            <span className="bg-navy text-white text-xs px-2.5 py-1 rounded-full font-medium">
              {product.category}
            </span>
          </div>
        </div>
      </div>

      {/* Text — exactly half the card */}
      <div className="p-4 flex flex-col justify-between flex-1">
        <div>
          <h3 className="font-semibold text-navy group-hover:text-gold transition-colors text-sm leading-snug">
            {product.name}
          </h3>
          <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>
        {product.price && (
          <p className="mt-3 text-gold font-bold text-base">{product.price}</p>
        )}
      </div>
    </Link>
  );
}
