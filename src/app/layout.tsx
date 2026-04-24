import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import { QuoteProvider } from "@/context/QuoteContext";
import ChatBot from "@/components/ChatBot";
import "./globals.css";

const BASE = process.env.NEXT_PUBLIC_BASE_URL || "https://uksteelgutters.co.uk";

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "UKSteelGutters",
  url: BASE,
  description: "Official UK stockist of Bilka steel guttering systems. Half round steel gutters in 125/90 and 150/100 systems with 30-year guarantee.",
  email: "quote@uksteelgutters.co.uk",
  areaServed: "GB",
  knowsAbout: ["Steel guttering", "Bilka steel gutters", "Metal rainwater systems", "Half round gutters", "Steel downpipes"],
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "GBP",
    offerCount: "36",
    description: "Bilka steel guttering systems in 125/90 and 150/100",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "UKSteelGutters",
  url: BASE,
  description: "Official UK stockist of Bilka steel guttering systems",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE}/shop/half-round-125?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    template: "%s | UKSteelGutters",
    default: "UKSteelGutters — Official Bilka Steel Guttering Stockist UK",
  },
  description:
    "Official UK stockist of Bilka steel guttering. Half round steel gutters in 125/90 and 150/100 systems. 30-year guarantee. 12 RAL colours. Free delivery over £600. Next day available.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "UKSteelGutters",
    title: "UKSteelGutters — Official Bilka Steel Guttering Stockist",
    description: "Official UK stockist of Bilka steel guttering. 30-year guarantee. Free delivery over £600.",
  },
  twitter: {
    card: "summary",
    title: "UKSteelGutters — Official Bilka Steel Guttering Stockist",
    description: "Official UK stockist of Bilka steel guttering. 30-year guarantee. Free delivery over £600.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <CartProvider>
          <QuoteProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <ChatBot />
          </QuoteProvider>
        </CartProvider>
      </body>
    </html>
  );
}
