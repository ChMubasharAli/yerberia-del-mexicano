import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="font-black text-2xl mb-3 capitalize">
              Yerberia del Mexicano
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Celebrating tradition, wellness, and community in Mesa, Arizona
              through authentic products and cultural heritage.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 ">Quick Links</h4>
            <div className="text-sm space-y-2">
              <p>
                <Link
                  href="/"
                  className="text-slate-700 hover:text-yellow-400 transition font-medium"
                >
                  Home
                </Link>
              </p>
              <p>
                <Link
                  href="/about"
                  className="text-slate-700 hover:text-yellow-400 transition font-medium"
                >
                  About Us
                </Link>
              </p>
              <p>
                <Link
                  href="/contact"
                  className="text-slate-700 hover:text-yellow-400 transition font-medium"
                >
                  Contact
                </Link>
              </p>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Visit Us</h4>
            <p className="text-sm text-slate-700 font-medium">(480) 615-2779</p>
            <p className="text-sm text-slate-700 font-medium">
              1241 E Broadway Rd
            </p>
            <p className="text-sm text-slate-700 font-medium">Mesa, AZ 85204</p>
          </div>
        </div>
        <div className="border-t border-slate-700 pt-8 text-center text-sm text-slate-400">
          <p>&copy; 2025 Yerberia del Mexicano. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
