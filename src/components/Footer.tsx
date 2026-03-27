import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-gold rounded-sm flex items-center justify-center font-bold text-navy text-sm">
                UK
              </div>
              <span className="text-white font-bold">
                UK<span className="text-gold">Steel</span>Gutters
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Official UK stockist of Bilka steel guttering systems. Premium quality steel rainwater
              goods delivered nationwide.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/shop/half-round-125" className="hover:text-gold transition-colors">
                  Half Round 125/90
                </Link>
              </li>
              <li>
                <Link href="/shop/half-round-150" className="hover:text-gold transition-colors">
                  Half Round 150/100
                </Link>
              </li>
            </ul>
          </div>

          {/* Finishes */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Finishes</h3>
            <ul className="space-y-2 text-sm">
              <li>Glossy Range (PE coating)</li>
              <li>Matt Range (MATT PE coating)</li>
              <li>Magnelis Range (ZM310)</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="hover:text-gold transition-colors">
                  Get a Quote
                </Link>
              </li>
              <li>
                <Link href="/delivery" className="hover:text-gold transition-colors">
                  Delivery Information
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} UKSteelGutters.co.uk. All rights reserved.
          </p>
          <p className="text-xs">
            Official Bilka steel guttering stockist &bull; Nationwide UK delivery
          </p>
        </div>
      </div>
    </footer>
  );
}
