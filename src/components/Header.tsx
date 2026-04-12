"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useQuote } from "@/context/QuoteContext";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount: cartCount } = useCart();
  const { itemCount: quoteCount } = useQuote();

  return (
    <header className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gold rounded-sm flex items-center justify-center font-bold text-navy text-lg">UK</div>
            <div>
              <span className="text-xl font-bold tracking-tight">UK<span className="text-gold">Steel</span>Gutters</span>
              <span className="hidden sm:block text-xs text-gray-400 tracking-wider uppercase">Official Bilka Stockist</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="hover:text-gold transition-colors text-sm font-medium">Home</Link>
            <div className="relative group">
              <button className="hover:text-gold transition-colors text-sm font-medium flex items-center gap-1">
                Shop
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-4 space-y-1">
                  <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-2">Half Round Systems</p>
                  <Link href="/shop/half-round-125" className="block px-3 py-2 text-navy hover:bg-cream rounded-md text-sm font-medium">125/90 System</Link>
                  <Link href="/shop/half-round-150" className="block px-3 py-2 text-navy hover:bg-cream rounded-md text-sm font-medium">150/100 System</Link>
                </div>
              </div>
            </div>
            <Link href="/installation-guide" className="hover:text-gold transition-colors text-sm font-medium">Installation</Link>
            <Link href="/trade-account" className="hover:text-gold transition-colors text-sm font-medium">Trade</Link>
            <Link href="/delivery" className="hover:text-gold transition-colors text-sm font-medium">Delivery</Link>
            <Link href="/contact" className="hover:text-gold transition-colors text-sm font-medium">Contact</Link>

            {/* Quote icon */}
            <Link href="/quote" className="relative hover:text-gold transition-colors" title="Quote Basket">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              {quoteCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">{quoteCount}</span>
              )}
            </Link>

            {/* Cart icon */}
            <Link href="/cart" className="relative hover:text-gold transition-colors" title="Cart">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold text-navy text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">{cartCount}</span>
              )}
            </Link>
          </nav>

          {/* Mobile icons + hamburger */}
          <div className="md:hidden flex items-center gap-4">
            <Link href="/quote" className="relative" title="Quote">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              {quoteCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">{quoteCount}</span>
              )}
            </Link>
            <Link href="/cart" className="relative">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold text-navy text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">{cartCount}</span>
              )}
            </Link>
            <button className="text-white" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="md:hidden pb-6 space-y-2">
            <Link href="/" className="block py-2 hover:text-gold" onClick={() => setMobileOpen(false)}>Home</Link>
            <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold pt-2">Shop</p>
            <Link href="/shop/half-round-125" className="block py-2 pl-4 hover:text-gold" onClick={() => setMobileOpen(false)}>Half Round 125/90</Link>
            <Link href="/shop/half-round-150" className="block py-2 pl-4 hover:text-gold" onClick={() => setMobileOpen(false)}>Half Round 150/100</Link>
            <Link href="/installation-guide" className="block py-2 hover:text-gold" onClick={() => setMobileOpen(false)}>Installation Guide</Link>
            <Link href="/trade-account" className="block py-2 hover:text-gold" onClick={() => setMobileOpen(false)}>Trade Account</Link>
            <Link href="/delivery" className="block py-2 hover:text-gold" onClick={() => setMobileOpen(false)}>Delivery &amp; Returns</Link>
            <Link href="/contact" className="block py-2 hover:text-gold" onClick={() => setMobileOpen(false)}>Contact</Link>
            <Link href="/quote" className="block py-2 hover:text-gold" onClick={() => setMobileOpen(false)}>Quote Basket</Link>
          </nav>
        )}
      </div>
    </header>
  );
}
