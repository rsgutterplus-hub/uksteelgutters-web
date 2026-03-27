import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "UKSteelGutters — Premium Bilka Steel Guttering",
  description:
    "Official UK stockist of Bilka steel guttering systems. Half round steel gutters in 125/90 and 150/100 systems. Glossy, Matt and Magnelis finishes. Nationwide delivery.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
